import { prisma } from "@/app/lib/prisma"
import Link from "next/link"

export default async function Page() {
  const categories = await prisma.category.findMany()
  return (
    <div className="mx-8 w-full mt-16">
      <Link href={"/dashboard/categories/create"}>
        <button className="py-2 px-6 bg-black text-white rounded-lg my-6 block ml-auto shadow-sm shadow-neutral-400">
          Create
        </button>
      </Link>
      <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr className="bg-neutral-400">
            <th className="border border-gray-300 px-4 py-2">Category Name</th>
            <th className="border border-gray-300 px-4 py-2">
              Category Description
            </th>
            <th className="border border-gray-300 px-4 py-2"> Category ID</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr className="hover:bg-gray-50" key={index}>
              <td className="border border-gray-300 px-4 py-2">
                {category.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {category.description}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {category.id}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
