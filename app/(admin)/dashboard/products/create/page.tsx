import { pool } from "@/app/db"
import { CreateProductForm } from "./product-create-form"

export const dynamic = "force-dynamic"

const Page = async () => {
  const client = await pool.connect()
  const categoriesRes = await client.query('SELECT * FROM "Category"')
  const categories = categoriesRes.rows
  return <CreateProductForm categores={categories} />
}

export default Page
