"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "../lib/prisma"

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
