"use server"

import { pool } from "@/app/db"
import { saveImage } from "@/lib/save-file"
import bcrypt from "bcryptjs"
import { v2 as cloudinaryV2 } from "cloudinary"
import jwt from "jsonwebtoken"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const logout = async () => {
  const cookieStore = await cookies()
  cookieStore.delete("aji")
  redirect("/signin")
}

export const login = async (prevState: any, formData: FormData) => {
  let client

  try {
    client = await pool.connect()

    const email = formData.get("email") as string
    const password = formData.get("password") as string

    if (!email || !password) {
      return {
        success: false,
        error: true,
        errorMessage: "Email and password are required",
      }
    }

    const userRes = await client.query(
      'SELECT * FROM "User" WHERE email = $1',
      [email],
    )
    const user = userRes.rows[0]

    if (!user) {
      return {
        success: false,
        error: true,
        errorMessage: "Invalid credentials",
      }
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return {
        success: false,
        error: true,
        errorMessage: "Invalid credentials",
      }
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" },
    )

    const cookieStore = await cookies()
    cookieStore.set("aji", token)

    return { success: true, error: false, errorMessage: "" }
  } catch (err) {
    console.error("Login error:", err) // 👈 Now also catches pool.connect() failures
    return {
      success: false,
      error: true,
      errorMessage: "Something went wrong. Please try again.",
    }
  } finally {
    if (client) {
      client.release()
    }
  }
}

export const createUser = async (prevState: any, formData: FormData) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(
    formData.get("password") as string,
    salt,
  )
  const client = await pool.connect()

  try {
    await client.query(
      'INSERT INTO "User" (name, email, password) VALUES ($1, $2, $3)',
      [formData.get("name"), formData.get("email"), hashedPassword],
    )
    return { success: true, error: false, errorMessage: "" }
  } catch (error: any) {
    if (error.code == "23505") {
      return {
        success: false,
        error: true,
        errorMessage: "Error. User already added",
      }
    }
    return { success: false, error: true, errorMessage: error.message }
  } finally {
    client.release()
  }
}

export const createCategory = async (prevState: any, formData: FormData) => {
  const client = await pool.connect()

  try {
    await client.query(
      'INSERT INTO "Category" (name, description) VALUES ($1, $2)',
      [formData.get("name"), formData.get("description")],
    )
    return { success: true, error: false, errorMessage: "" }
  } catch (error: any) {
    if (error.code == "23505") {
      return {
        success: false,
        error: true,
        errorMessage: "Error. Category already added",
      }
    }
    return { success: false, error: true, errorMessage: error.message }
  } finally {
    client.release()
  }
}

export const createProduct = async (prevState: any, formData: FormData) => {
  const client = await pool.connect()

  try {
    const productRes = await client.query(
      'INSERT INTO "Product" (name, description, price, category) VALUES ($1, $2, $3, $4) RETURNING id',
      [
        formData.get("name"),
        formData.get("description"),
        Number(formData.get("price")),
        formData.get("category"),
      ],
    )

    const productId = productRes.rows[0].id
    await saveImage(formData, productId.toString())

    return { success: true, error: false, errorMessage: "" }
  } catch (error: any) {
    if (error.code == "23505") {
      return {
        success: false,
        error: true,
        errorMessage: "Error. Product already added",
      }
    }
    return { success: false, error: true, errorMessage: error.message }
  } finally {
    client.release()
  }
}
export const deleteCategory = async (formData: FormData) => {
  const categoryId = parseInt(formData.get("categoryid") as string, 10)
  if (isNaN(categoryId)) return

  const client = await pool.connect()

  try {
    await client.query('DELETE FROM "Category" WHERE id = $1', [categoryId])
    revalidatePath("/dashboard/categories")
  } finally {
    client.release()
  }
}

export const deleteProduct = async (formData: FormData) => {
  const productId = parseInt(formData.get("productId") as string, 10)
  if (isNaN(productId)) return

  const client = await pool.connect()

  try {
    await client.query('DELETE FROM "Product" WHERE id = $1', [productId])

    const publicId = productId.toString()
    await cloudinaryV2.uploader.destroy(publicId)

    revalidatePath("/dashboard/products")
  } finally {
    client.release()
  }
}

export const deleteUser = async (formData: FormData) => {
  const userId = parseInt(formData.get("userId") as string, 10)
  if (isNaN(userId)) return

  const client = await pool.connect()

  try {
    await client.query('DELETE FROM "User" WHERE id = $1', [userId])
    revalidatePath("/dashboard/users")
  } finally {
    client.release()
  }
}
