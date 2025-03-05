"use server"

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
