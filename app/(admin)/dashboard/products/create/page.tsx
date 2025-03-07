import { prisma } from "@/app/lib/prisma"
import { CreateProductForm } from "./product-create-form"

const Page = async () => {
  const categories = await prisma.category.findMany()
  return <CreateProductForm categores={categories} />
}

export default Page
