"use client"
import { inter } from "@/lib/font"
import { motion } from "motion/react"
import { AiOutlineMedicineBox } from "react-icons/ai"
import { BsShieldCheck } from "react-icons/bs"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:mx-20 mt-12 mb-24">
        <motion.div
          className="p-8"
          initial={{ translateY: 50, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", delay: 0.8 }}
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
          transition={{ duration: 0.4, type: "spring", delay: 0.4 }}
        >
          <FaUserDoctor
            fontSize={72}
            className="text-[#17323D] block mx-auto"
          />
          <h2 className={`text-center text-lg ${inter.className} font-medium`}>
            Expert design
          </h2>
          <p className="text-[#5B5B5B] text-center">
            Designed with precision just for your needs.
          </p>
        </motion.div>
        <motion.div
          className="p-8"
          initial={{ translateY: 50, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.4, type: "spring", delay: 0.4 }}
        >
          <AiOutlineMedicineBox
            fontSize={72}
            className="text-[#17323D] block mx-auto"
          />
          <h2 className={`text-center text-lg ${inter.className} font-medium`}>
            Trusted materials
          </h2>
          <p className="text-[#5B5B5B] text-center">
            Premium quality you can always rely on
          </p>
        </motion.div>
        <motion.div
          className="p-8"
          initial={{ translateY: 50, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", delay: 0.8 }}
        >
          <BsShieldCheck
            fontSize={72}
            className="text-[#17323D] block mx-auto"
          />
          <h2 className={`text-center text-lg ${inter.className} font-medium`}>
            Long lasting
          </h2>
          <p className="text-[#5B5B5B] text-center">
            Engineered for excellence, built to last.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Benefits
