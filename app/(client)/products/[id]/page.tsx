import { prisma } from "@/app/lib/prisma"
import ProductUI from "./product-ui"

export async function generateMetadata({ params }: any) {
  const productId = Number(params.id)
  const product = await prisma.product.findUnique({
    where: { id: productId },
  })
  if (product) {
    return {
      title: `${product.name} - Essence care first`,
      description: `${product.description.slice(0, 160)}...`,
    }
  }
}

const page = async ({ params }: any) => {
  const param = await params
  const product = await prisma.product.findUnique({
    where: { id: Number(param.id) },
  })
  return <ProductUI product={product} />
}

export default page
