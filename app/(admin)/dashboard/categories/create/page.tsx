"use client"
import { createCategory } from "@/app/action/action"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { useActionState, useEffect } from "react"
import { toast } from "sonner"

const Page = () => {
  const router = useRouter()
  const initialState = {
    success: false,
    error: false,
    errorMessage: "",
  }
  const [state, formAction, isPending] = useActionState(
    createCategory,
    initialState,
  )
  useEffect(() => {
    if (state.success) {
      router.push("/dashboard/categories")
      toast.success("created")
    } else if (state.error) {
      toast.error(state.errorMessage)
    }
  }, [state])
  return (
    <div className="w-full h-screen  flex items-center">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4  md:p-8 shadow-input bg-white ">
        <h2 className="font-bold text-3xl text-neutral-800  text-center">
          Add Categories
        </h2>
        <form className="my-8" action={formAction}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Category Name</Label>
            <Input
              id="name"
              placeholder="Enter Category Name"
              type="text"
              required
              name="name"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Category Description</Label>
            <Input
              id="name"
              placeholder="Enter Category Description"
              type="text"
              name="description"
              required
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black  to-neutral-600 block  w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] "
            type="submit"
          >
            {isPending ? "Adding Category " : "Add Category "}
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Page
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
