"use server"
import { saveImage } from "@/lib/save-file"
import bcrypt from "bcryptjs"
import fs from "fs"
import jwt from "jsonwebtoken"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import path from "path"
import { prisma } from "../lib/prisma"

export const login = async (prevState: any, formData: FormData) => {
  const email = formData.get("email") as string
  const user = await prisma.user.findUnique({ where: { email: email } })
  if (user) {
    const password = formData.get("password") as string
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (isPasswordValid) {
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET as string,
        { expiresIn: "1h" },
      )
      const cookieStore = await cookies()
      cookieStore.set("aji", token)
      return { success: true, error: false, errorMessage: "" }
    } else {
      return {
        success: false,
        error: true,
        errorMessage: "Invalid credentials",
      }
    }
  } else {
    return { success: false, error: true, errorMessage: "Invalid credentials" }
  }
}
export const createUser = async (prevState: any, formData: FormData) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(
    formData.get("password") as string,
    salt,
  )
  try {
    await prisma.user.create({
      data: {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        password: hashedPassword,
      },
    })
    return { success: true, error: false, errorMessage: "" }
  } catch (error: any) {
    if (error.code == "P2002") {
      return {
        success: false,
        error: true,
        errorMessage: "Error. User already added",
      }
    }
    console.log(error.message)
    return { success: false, error: true, errorMessage: error.message }
  }
}
export const createCategory = async (prevState: any, formData: FormData) => {
  try {
    await prisma.category.create({
      data: {
        name: formData.get("name") as string,
        description: formData.get("description") as string,
      },
    })
    return { success: true, error: false, errorMessage: "" }
  } catch (error: any) {
    if (error.code == "P2002") {
      return {
        success: false,
        error: true,
        errorMessage: "Error. Category already added",
      }
    }
    return { success: false, error: true, errorMessage: error.message }
  }
}
export const createProduct = async (prevState: any, formData: FormData) => {
  console.log("1")
  try {
    const newProduct = await prisma.product.create({
      data: {
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        price: Number(formData.get("price") as string),
        category: formData.get("category") as string,
      },
    })
    console.log("2")
    await saveImage(formData, newProduct.id.toString())
    console.log("3")
    return { success: true, error: false, errorMessage: "" }
  } catch (error: any) {
    if (error.code == "P2002") {
      return {
        success: false,
        error: true,
        errorMessage: "Error. Product already added",
      }
    }
    return { success: false, error: true, errorMessage: error.message }
  }
}

export const deleteCategory = async (formData: FormData) => {
  const categoryIdString = formData.get("categoryid") as string | null
  if (categoryIdString !== null) {
    const categoryId = parseInt(categoryIdString, 10)
    if (!isNaN(categoryId)) {
      const categories = await prisma.category.delete({
        where: { id: categoryId },
      })
      console.log(categories)
      revalidatePath("/dashboard/categories")
    } else {
      console.error("Invalid category ID. Could not convert to a number.")
    }
  } else {
    console.error("Category ID is null.")
  }
}
export const deleteProduct = async (formData: FormData) => {
  const productIdString = formData.get("productId") as string | null
  if (productIdString !== null) {
    const productId = parseInt(productIdString, 10)
    if (!isNaN(productId)) {
      const categories = await prisma.product.delete({
        where: { id: productId },
      })
      console.log("__dirname:", __dirname)
      const filePath = path.join(
        process.cwd(),
        "storage/images",
        `${productId}.WebP`,
      )
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath)
        console.log("File deleted successfully.")
      } else {
        console.log("File does not exist.")
      }

      revalidatePath("/dashboard/products")
    } else {
      console.error("Invalid category ID. Could not convert to a number.")
    }
  } else {
    console.error("Category ID is null.")
  }
}
export const deleteUser = async (formData: FormData) => {
  const userIdString = formData.get("userId") as string | null
  if (userIdString !== null) {
    const userId = parseInt(userIdString, 10)
    if (!isNaN(userId)) {
      const categories = await prisma.user.delete({
        where: { id: userId },
      })
      revalidatePath("/dashboard/users")
    } else {
      console.error("Invalid category ID. Could not convert to a number.")
    }
  } else {
    console.error("Category ID is null.")
  }
}
