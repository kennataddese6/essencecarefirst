import { pool } from "@/app/db"
import ProductCard from "@/app/ui/products-card"
import CategoryCard from "./category-card"

export const dynamic = "force-dynamic"

const Products = async (props: {
  searchParams: Promise<{
    category?: string | string[]
  }>
}) => {
  const searchParams = await props.searchParams

  const categoriesToFilter: string[] = Array.isArray(searchParams.category)
    ? searchParams.category
    : searchParams.category
    ? [searchParams.category]
    : []

  const client = await pool.connect()
  const categoriesRes = await client.query('SELECT * FROM "Category"') // Use quotes if table name has uppercase letters
  const categories = categoriesRes.rows

  let query = 'SELECT * FROM "Product"'
  let values: any[] = []

  if (categoriesToFilter.length > 0) {
    query += " WHERE category = ANY($1)"
    values.push(categoriesToFilter)
  }

  const productsRes = await client.query(query, values)
  const products = productsRes.rows

  return (
    <div className="mt-20 md:mt-32  md:mx-20 md:flex flex-wrap justify-center md:justify-between items-start">
      <CategoryCard categories={categories} />
      <div className=" md:w-8/12 flex flex-wrap gap-2 ">
        <div className="container mx-auto  px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {products.length ? (
              products.map((product: any, index: any) => (
                <ProductCard
                  key={index}
                  {...product}
                  image={`http://localhost:3000/image/${product.id}`}
                />
              ))
            ) : (
              <h1 className="text-center">No Products to show</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
