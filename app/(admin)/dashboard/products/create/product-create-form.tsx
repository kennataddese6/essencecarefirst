"use client"
import { createProduct } from "@/app/action/action"
import { Input, Select } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useActionState, useEffect } from "react"
import { FaArrowLeft } from "react-icons/fa"
import { toast } from "sonner"
export const CreateProductForm = ({
  categores,
}: {
  categores: {
    id: number
    name: string
    description: string
    createdAt: Date
  }[]
}) => {
  const router = useRouter()
  const initialState = {
    success: false,
    error: false,
    errorMessage: "",
  }
  const [state, formAction, isPending] = useActionState(
    createProduct,
    initialState,
  )
  useEffect(() => {
    if (state.success) {
      router.push("/dashboard/products")
      toast.success("created")
    } else if (state.error) {
      toast.error(state.errorMessage)
    }
  }, [state])
  return (
    <div className="w-full h-screen  flex items-center">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4  md:p-8 shadow-input bg-white ">
        <h2 className="font-bold text-3xl text-neutral-800  text-center">
          Add product
        </h2>
        <form className="my-8" action={formAction}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              placeholder="Enter Product Name"
              type="text"
              name="name"
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Product Category</Label>
            {/*       <Input
              id="name"
              placeholder="Enter Product Name"
              type="text"
              required
              name="category"
            /> */}
            <Select name="category" required>
              <option value={""}>Select Category</option>
              {categores.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </Select>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="desc">Product Description</Label>
            <Input
              id="desc"
              placeholder="Enter Product Description"
              type="text"
              required
              name="description"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="price">Product Price</Label>
            <Input
              id="price"
              placeholder="Enter Product Description"
              type="number"
              required
              name="price"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="price">Product Image</Label>
            <Input id="price" type="file" required name="image" />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black  to-neutral-600 block  w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] "
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Adding Products..." : "Add Product "}
            <BottomGradient />
          </button>
        </form>
        <Link href={"/dashboard/products"} className="text-blacck">
          <FaArrowLeft className="inline mx-2" />
          back
        </Link>
      </div>
    </div>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  )
}
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  )
}
