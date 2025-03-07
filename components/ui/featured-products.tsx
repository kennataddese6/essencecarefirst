import { prisma } from "@/app/lib/prisma"
import { notFound } from "next/navigation"
import Featured from "./featured"

const FeaturedProducts = async () => {
  const products = await prisma.product.findMany({
    where: { category: "Featured" },
  })
  if (!products) {
    notFound()
  }
  return <Featured products={products} />
}

export default FeaturedProducts
