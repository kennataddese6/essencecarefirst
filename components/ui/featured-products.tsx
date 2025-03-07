import { prisma } from "@/app/lib/prisma"
import Featured from "./featured"

const FeaturedProducts = async () => {
  const products = await prisma.product.findMany({
    where: { category: "Featured" },
  })
  return <Featured products={products} />
}

export default FeaturedProducts
