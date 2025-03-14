"use client"
import { motion } from "motion/react"
import Link from "next/link"
import { GoArrowUpRight } from "react-icons/go"
const Lead = () => {
  return (
    <div className=" bg-[url(/leads-image.jpg)] h-5/6 bg-no-repeat bg-cover mt-24 flex items-center">
      <div className="md:w-2/5 mx-4 md:mx-20">
        <motion.h1
          className="text-4xl  text-[#17323D] font-semibold text-center md:text-start"
          initial={{ translateY: 50, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 0.7, delay: 0.1 }}
        >
          Leading health care Providers
        </motion.h1>
        <motion.p
          className="my-4 text-center md:text-start "
          initial={{ translateY: 50, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 0.7, delay: 0.3 }}
        >
          We provide the best choices for you. Adjust it to your health needs
          and make sure you get them whenever you need them.
        </motion.p>
        <Link href="/products" className="no-underline">
          <motion.button
            initial={{ translateY: 50, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.7, delay: 0.5 }}
            className="py-2 px-8 border-2 border-[#17323D] text-[#17323D] font-semibold block mx-auto md:inline hover:bg-[#17323d] hover:text-white hover:shadow-md hover:shadow-[#17323d]"
          >
            View Products <GoArrowUpRight className="inline" />
          </motion.button>
        </Link>
      </div>
    </div>
  )
}

export default Lead
