import { prisma } from "@/app/lib/prisma"
import ProductUI from "./product-ui"

const page = async () => {
  const id = 19
  const product = await prisma.product.findUnique({ where: { id: id } })
  console.log(product)
  return <ProductUI product={product} />
}

export default page
