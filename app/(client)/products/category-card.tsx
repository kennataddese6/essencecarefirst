"use client"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { FaFilter } from "react-icons/fa"
const CategoryCard = ({
  categories,
}: {
  categories: {
    id: number
    name: string
    description: string
    createdAt: Date
  }[]
}) => {
  const pathname = usePathname()
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)

  const createQuery = (query: string) => {
    const params = new URLSearchParams(searchParams)
    const existingModels = params.getAll("category")

    if (query && !existingModels.includes(query)) {
      params.append("category", query)
    }

    replace(`${pathname}?${params.toString()}`)
  }

  const deleteQuery = (query: string) => {
    const params = new URLSearchParams(searchParams)
    const existingModels = params.getAll("category")
    const newModels = existingModels.filter((model) => model !== query)
    params.delete("category")
    newModels.forEach((model) => params.append("category", model))

    replace(`${pathname}?${params.toString()}`)
  }
  return (
    <>
      <Sheet>
        <SheetTrigger className="px-8 py-2 border-2 border-gray-300 rounded-lg m-4 md:hidden">
          Filter <FaFilter className="inline" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
              {categories.length
                ? categories.map((category, index) => (
                    <h1
                      key={index}
                      className="text-black text-start py-4 flex justify-between mt-4"
                    >
                      {category.name}
                      <span>
                        <input
                          type="checkbox"
                          onChange={(e) => {
                            e.target.checked
                              ? createQuery(category.name)
                              : deleteQuery(category.name)
                          }}
                        />
                      </span>
                    </h1>
                  ))
                : "No categores available!"}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <div className="border-2 border-grey-200 rounded-lg md:w-3/12 p-8 hidden md:block">
        {categories.length ? (
          categories.map((category, index) => (
            <div key={index} className="py-4 hidden md:block">
              {" "}
              <input
                type="checkbox"
                onChange={(e) => {
                  e.target.checked
                    ? createQuery(category.name)
                    : deleteQuery(category.name)
                }}
              />
              <span className="font-bold mx-2">{category.name} </span>
            </div>
          ))
        ) : (
          <div className="text-center">No categores available!</div>
        )}
      </div>
    </>
  )
}

export default CategoryCard
