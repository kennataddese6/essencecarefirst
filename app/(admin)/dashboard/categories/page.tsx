import { deleteCategory } from "@/app/action/action"
import Link from "next/link"
import { FaTrashAlt } from "react-icons/fa"

import { pool } from "@/app/db"
export const dynamic = "force-dynamic"

export default async function Page() {
  const client = await pool.connect()
  const categoriesRes = await client.query('SELECT * FROM "Category"') // Use quotes if table name has uppercase letters
  const categories = categoriesRes.rows

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
            <th className="border border-gray-300 px-4 py-2"> Remove</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category: any, index: any) => (
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
              <td className="border border-gray-300 px-4 py-2">
                <form action={deleteCategory}>
                  <input
                    defaultValue={category.id}
                    name="categoryid"
                    className="hidden"
                    type="number"
                  ></input>
                  <button type="submit">
                    <FaTrashAlt />
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
