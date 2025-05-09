"use client" // Error boundaries must be Client Components
import { MdErrorOutline } from "react-icons/md"
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <MdErrorOutline className="block mx-auto" fontSize={102} />
      <h1 className="text-center">Oops!</h1>
      <p className="text-center">
        {error.name + ": " + error.message + " " + error.cause}
      </p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="bg-black text-white block mx-auto py-2 px-4 rounded-lg shadow-md shadow-neutral-500"
      >
        Try again
      </button>
    </div>
  )
}
