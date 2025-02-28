"use client"
import { inter } from "@/lib/font"
import { motion } from "motion/react"
import { AiOutlineMedicineBox } from "react-icons/ai"
import { FaUserDoctor } from "react-icons/fa6"
import { GiHealthPotion } from "react-icons/gi"
const Benefits = () => {
  return (
    <div className="mt-16">
      <h1 className="text-center text-3xl md:text-4xl text-[#17323D] font-semibold">
        Why choose us
      </h1>
      <p className="text-center text-[#5B5B5B] text-md mx-2 md:text-xl my-3 md:w-1/2 block md:mx-auto">
        We provide the best choices for you. Adjust it to your health needs and
        make sure you get them whenever you need them.
      </p>
      <div className=" flex md:px-20 justify-center md:justify-between flex-wrap  mt-12 mb-24">
        <motion.div
          className="p-8"
          initial={{ translateY: 50, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", delay: 0.4 }}
        >
          <GiHealthPotion
            fontSize={72}
            className="text-[#17323D] block mx-auto"
          />
          <h2 className={`text-center text-lg ${inter.className} font-medium`}>
            Assure quality
          </h2>
          <p className="text-[#5B5B5B] text-center">
            Our Products are very high quality <br /> and durable
          </p>
        </motion.div>
        <motion.div
          className="p-8"
          initial={{ translateY: 50, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", delay: 0.6 }}
        >
          <FaUserDoctor
            fontSize={72}
            className="text-[#17323D] block mx-auto"
          />
          <h2 className={`text-center text-lg ${inter.className} font-medium`}>
            Assure quality
          </h2>
          <p className="text-[#5B5B5B] text-center">
            Our Products are very high quality <br /> and durable
          </p>
        </motion.div>
        <motion.div
          className="p-8"
          initial={{ translateY: 50, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", delay: 0.7 }}
        >
          <AiOutlineMedicineBox
            fontSize={72}
            className="text-[#17323D] block mx-auto"
          />
          <h2 className={`text-center text-lg ${inter.className} font-medium`}>
            Assure quality
          </h2>
          <p className="text-[#5B5B5B] text-center">
            Our Products are very high quality <br /> and durable
          </p>
        </motion.div>
        <motion.div
          className="p-8"
          initial={{ translateY: 50, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 1.2, type: "spring", delay: 0.8 }}
        >
          <AiOutlineMedicineBox
            fontSize={72}
            className="text-[#17323D] block mx-auto"
          />
          <h2 className={`text-center text-lg ${inter.className} font-medium`}>
            Assure quality
          </h2>
          <p className="text-[#5B5B5B] text-center">
            Our Products are very high quality <br /> and durable
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Benefits
