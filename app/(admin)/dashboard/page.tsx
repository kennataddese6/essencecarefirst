import { prisma } from "@/app/lib/prisma"

const Page = async () => {
  const users = await prisma.user.findMany()
  const products = await prisma.product.findMany()
  const categories = await prisma.category.findMany()
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
