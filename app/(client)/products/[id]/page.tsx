import { prisma } from "@/app/lib/prisma"
import ProductUI from "./product-ui"

const page = async ({ params }: any) => {
  const param = await params
  const product = await prisma.product.findUnique({
    where: { id: Number(param.id) },
  })
  return <ProductUI product={product} />
}

export default page
