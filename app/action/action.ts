"use server"

import { prisma } from "../lib/prisma"

export const createCategory = async (prevState: any, formData: FormData) => {
  try {
    await prisma.category.create({
      data: {
        name: formData.get("name") as string,
        description: "Great Product",
      },
    })
    return { success: true, error: false }
  } catch (error: any) {
    console.log(error.message)
    return { success: false, error: true }
  }
}
