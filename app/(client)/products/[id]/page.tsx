"use client"
import { Lens } from "@/components/ui/lens"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Page = () => {
  const [hovering, setHovering] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  return (
    <div className="mt-20 md:mt-32  md:mx-20   grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="bg-green-400">
        {/* <Rays /> */}
        <div className="relative z-10">
          <Lens
            hovering={hovering}
            setHovering={setHovering}
            setHoveredIndex={setHoveredIndex}
            index={0}
          >
            <Image
              src={"/product1.png"}
              alt="image"
              width={500}
              height={500}
              className="h-96 w-full"
            />
          </Lens>
        </div>
      </div>
      <div>
        <motion.div
          animate={{
            filter: hoveredIndex ? "blur(2px)" : "blur(0px)",
          }}
          className="py-4 relative z-20"
        >
          <h2 className="text-black text-7xl text-left font-bold mb-2">
            MRI Scanner
          </h2>
          <div className="bg-[#1c3242] text-white inline py-2 px-3 rounded-full">
            ETB 2500
          </div>
          <p className="text-neutral-800 text-left  mt-4">
            This is a very great MRI Scanner and it is really cool to have in
            you house or bed room and is very convient. order it to quickely be
            part of it
          </p>
          <Link href={"/products"}>
            <button className="bg-black text-white my-3 py-3 rounded-full w-full">
              View other products
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Page
