import { pool } from "@/app/db"
import Featured from "./featured"

export const dynamic = "force-dynamic"

const FeaturedProducts = async () => {
  const client = await pool.connect()
  try {
    const productsRes = await client.query(
      'SELECT * FROM "Product" WHERE category = $1',
      ["Featured"],
    )
    const products = productsRes.rows

    return <Featured products={products} />
  } finally {
    client.release()
  }
}

export default FeaturedProducts
