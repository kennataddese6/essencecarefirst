import { deleteUser } from "@/app/action/action"
import { pool } from "@/app/db"
import Link from "next/link"
import { FaTrashAlt } from "react-icons/fa"

export const dynamic = "force-dynamic"

export default async function Page() {
  const client = await pool.connect()
  const usersRes = await client.query('SELECT * FROM "User"')
  const users = usersRes.rows

  return (
    <div className="mx-8 w-full mt-16">
      <Link href={"/dashboard/users/create"}>
        <button className="py-2 px-6 bg-black text-white rounded-lg my-6 block ml-auto shadow-sm shadow-neutral-400">
          Create
        </button>
      </Link>
      <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr className="bg-neutral-400">
            <th className="border border-gray-300 px-4 py-2"> User ID</th>
            <th className="border border-gray-300 px-4 py-2">User Name</th>
            <th className="border border-gray-300 px-4 py-2">User Passowrd</th>
            <th className="border border-gray-300 px-4 py-2"> Remove</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any, index: any) => (
            <tr className="hover:bg-gray-50" key={index}>
              <td className="border border-gray-300 px-4 py-2">{user.id}</td>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>

              <td className="border border-gray-300 px-4 py-2">
                <form action={deleteUser}>
                  <input
                    defaultValue={user.id}
                    name="userId"
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
