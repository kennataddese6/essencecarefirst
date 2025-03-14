"use client"
import { motion } from "motion/react"
import Image from "next/image"
const Misson = () => {
  return (
    <div className="mt-16">
      <h1 className="text-center text-3xl md:text-4xl text-[#17323D] font-semibold">
        Our Mission
      </h1>
      <div className="mt-16 flex flex-wrap gap-12 md:gap-0 md:mx-20 px-4">
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ rotateZ: -75, translateX: "-95%" }}
          whileInView={{ rotateZ: 0, translateX: "0%" }}
          transition={{ duration: 1.5, delay: 0.1 }}
        >
          <Image
            src={"/mission.jpeg"}
            alt="Mission Image"
            width={1200}
            height={600}
            className="block mx-auto  w-full bg-cover rounded-3xl shadow-2xl shadow-neutral-600"
          />
        </motion.div>
        <div className="md:w-1/2 flex items-center md:pl-12 md:pr-20">
          <div>
            <h1 className="text-center md:text-start text-3xl md:text-4xl text-[#17323D] font-semibold">
              Your health is more important to us
            </h1>
            <p className="text-center md:text-start text-[#5B5B5B] text-md mx-2 md:text-xl my-3 ">
              We are dedicated to enhancing healthcare by providing top-tier
              medical equipment from around the globe.Our commitment to
              excellence ensures that healthcare providers have access to the
              latest reliable tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Misson
