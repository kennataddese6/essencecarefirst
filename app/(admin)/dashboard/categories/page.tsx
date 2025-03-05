import Link from "next/link"

export default function Page() {
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
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">
              Alfreds Futterkiste
            </td>
            <td className="border border-gray-300 px-4 py-2">Maria Anders</td>
            <td className="border border-gray-300 px-4 py-2">Germany</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">
              Centro comercial Moctezuma
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Francisco Chang
            </td>
            <td className="border border-gray-300 px-4 py-2">Mexico</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">Ernst Handel</td>
            <td className="border border-gray-300 px-4 py-2">Roland Mendel</td>
            <td className="border border-gray-300 px-4 py-2">Austria</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">Island Trading</td>
            <td className="border border-gray-300 px-4 py-2">Helen Bennett</td>
            <td className="border border-gray-300 px-4 py-2">UK</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">
              Laughing Bacchus Winecellars
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Yoshi Tannamuri
            </td>
            <td className="border border-gray-300 px-4 py-2">Canada</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">
              Magazzini Alimentari Riuniti
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Giovanni Rovelli
            </td>
            <td className="border border-gray-300 px-4 py-2">Italy</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
