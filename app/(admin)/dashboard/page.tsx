import { pool } from "@/app/db"
const Page = async () => {
  const client = await pool.connect()
  const [usersRes, productsRes, categoriesRes] = await Promise.all([
    client.query('SELECT * FROM "User"'),
    client.query('SELECT * FROM "Product"'),
    client.query('SELECT * FROM "Category"'),
  ])

  const users = usersRes.rows
  const products = productsRes.rows
  const categories = categoriesRes.rows

  return (
    <div className="flex items-start gap-4 flex-wrap m-12">
      <div className="bg-black text-white py-8 px-16 rounded-xl shadow-lg shadow-neutral-700">
        <h1 className="text-2xl font-bold">{users.length}</h1>
        <p>Users</p>
      </div>
      <div className="bg-black text-white py-8 px-16 rounded-xl shadow-lg shadow-neutral-700">
        <h1 className="text-2xl font-bold">{products.length}</h1>
        <p>Products</p>
      </div>
      <div className="bg-black text-white py-8 px-16 rounded-xl shadow-lg shadow-neutral-700">
        <h1 className="text-2xl font-bold">{categories.length}</h1>
        <p>Categories</p>
      </div>
    </div>
  )
}

export default Page
