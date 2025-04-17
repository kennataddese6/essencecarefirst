import { inter } from "@/lib/font"
import Link from "next/link"
import { GoArrowUpRight } from "react-icons/go"
import { TextGenerateEffect } from "./text-generate-effect"
const words = [
  {
    text: "Empowering",
  },
  {
    text: "health",
  },
  {
    text: "care",
  },
  {
    text: "with",
  },
  {
    text: "quality",
  },
]
export default function Hero() {
  return (
    <div className=" h-screen flex flex-wrap items-center px-4 md:px-20  bg-[url(/lovely-hero.jpeg)] bg-cover md:bg-auto   bg-no-repeat rounded-b-3xl">
      <div className=" md:w-1/2 w-full mt-8 md:mt-0 ">
        <h1 className="font-semibold text-center md:text-start text-3xl md:text-5xl md:pr-16 text-[#17323D] my-3">
          {/* <TypewriterEffect words={words} /> */}
          <TextGenerateEffect words={"Empowering health care with quality"} />
          {/* Empowering health care with quality */}
        </h1>
        <p className={`${inter.className} md:pr-24 text-center md:text-start`}>
          We are dedicated to enhancing healthcare by providing top-tier
          medicine and medical equipment from around the globe to Ethiopia.
        </p>
        <Link href="/products" className="no-underline">
          <button className="px-8 py-2 my-3 bg-[#17323D] text-white rounded-sm block mx-auto md:mx-0 ">
            Shop Now <GoArrowUpRight className="inline" />
          </button>
        </Link>
      </div>
      <div className="w-full md:w-1/2"></div>
    </div>
  )
}
