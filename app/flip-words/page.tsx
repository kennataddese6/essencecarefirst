import { FlipWords } from "@/components/ui/flip-words"

export default function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"]

  return (
    <div className="bg-black h-full">
      <div className="h-[40rem] flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Build
          <FlipWords words={words} /> <br />
          websites with Aceternity UI
        </div>
      </div>
    </div>
  )
}
