import { pool } from "@/app/db"
import { notFound } from "next/navigation"
import ProductUI from "./product-ui"
export async function generateMetadata({ params }: any) {
  const client = await pool.connect()
  const productRes = await client.query(
    'SELECT * FROM "Product" WHERE id = $1',
    [Number(params.id)],
  )
  const product = productRes.rows[0]
  if (product) {
    return {
      title: `${product.name} - Essence care first`,
      description: `${product.description.slice(0, 160)}...`,
    }
  }
}

const page = async ({ params }: any) => {
  const param = await params
  const client = await pool.connect()
  const productRes = await client.query(
    'SELECT * FROM "Product" WHERE id = $1',
    [Number(param.id)],
  )
  const product = productRes.rows[0]
  if (!product) {
    notFound()
  }
  return <ProductUI product={product} />
}

export default page
