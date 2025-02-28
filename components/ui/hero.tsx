import { inter } from "@/lib/font"
import Image from "next/image"
import { TypewriterEffect } from "./typewriter-effect"
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
    <div className=" h-screen flex flex-wrap items-center px-4 md:px-20 ">
      <div className=" md:w-1/2 w-full mt-8 md:mt-0 ">
        <h1 className="font-semibold text-center md:text-start text-3xl md:text-5xl md:pr-16 text-[#17323D] my-3">
          <TypewriterEffect words={words} />
        </h1>
        <p className={`${inter.className} md:pr-24 text-center md:text-start`}>
          We are dedicated to enhancing healthcare by providing top-tier medical
          equipment from around the globe to Ethiopia.
        </p>
        <button className="px-8 py-2 my-3 bg-[#17323D] text-white rounded-sm block mx-auto md:mx-0">
          Shop Now
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src={"/heroImage.png"}
          alt="Hero Image"
          width={400}
          height={400}
          className="w-full"
        />
      </div>
    </div>
  )
}
