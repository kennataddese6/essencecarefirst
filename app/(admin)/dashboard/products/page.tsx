import { deleteProduct } from "@/app/action/action"
import Image from "next/image"
import Link from "next/link"
import { FaTrashAlt } from "react-icons/fa"

export const dynamic = "force-dynamic"

import { pool } from "@/app/db"
export default async function Page() {
  const client = await pool.connect()
  const productRes = await client.query('SELECT * FROM "Product"')
  const products = productRes.rows

  return (
    <div className="mx-8 w-full mt-16 h-5/6 overflow-y-scroll">
      <Link href={"/dashboard/products/create"}>
        <button className="py-2 px-6 bg-black text-white rounded-lg my-6 block ml-auto shadow-sm shadow-neutral-400">
          Create
        </button>
      </Link>
      <table className="table-auto border-collapse border border-gray-300 w-full text-left ">
        <thead>
          <tr className="bg-neutral-400">
            <th className="border border-gray-300 px-4 py-2"> Product ID</th>
            <th className="border border-gray-300 px-4 py-2">Product Name</th>
            <th className="border border-gray-300 px-4 py-2">
              Product Description
            </th>
            <th className="border border-gray-300 px-4 py-2">
              {" "}
              Product Category
            </th>
            <th className="border border-gray-300 px-4 py-2"> Product Price</th>
            <th className="border border-gray-300 px-4 py-2"> Product Image</th>
            <th className="border border-gray-300 px-4 py-2"> Remove</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: any, index: any) => (
            <tr className="hover:bg-gray-50" key={index}>
              <td className="border border-gray-300 px-4 py-2">{product.id}</td>

              <td className="border border-gray-300 px-4 py-2">
                {product.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.description}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.category}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.price} ETB
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/image/${product.id}`}
                  width={50}
                  height={50}
                  alt={product.name}
                  className="border-2 border-neutral-300 rounded-md"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <form action={deleteProduct}>
                  <input
                    defaultValue={product.id}
                    name="productId"
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
