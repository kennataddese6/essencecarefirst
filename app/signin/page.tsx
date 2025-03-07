"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useActionState, useEffect } from "react"
import { FaArrowLeft } from "react-icons/fa"
import { toast } from "sonner"
import { login } from "../action/action"

export default function SignupFormDemo() {
  const router = useRouter()
  const initialState = {
    success: false,
    error: false,
    errorMessage: "",
  }
  const [state, formAction, isPending] = useActionState(login, initialState)
  useEffect(() => {
    if (state.success) {
      router.push("/dashboard")
    } else if (state.error) {
      toast.error(state.errorMessage)
    }
  }, [state])
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div className="w-full h-screen  flex items-center">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4  md:p-8 shadow-input bg-white ">
        <h2 className="font-bold text-3xl text-neutral-800  text-center">
          Welcome to admin
        </h2>
        <form className="my-8" action={formAction}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="Enter email or user Id"
              name="email"
              type="email"
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
              required
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black  to-neutral-600 block  w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] "
            type="submit"
          >
            Sign In &rarr;
            <BottomGradient />
          </button>
        </form>
        <Link href={"/"} className="text-blacck">
          <FaArrowLeft className="inline mx-2" />
          Home
        </Link>
      </div>
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
