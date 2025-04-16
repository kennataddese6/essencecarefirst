"use client"
import { motion } from "framer-motion"
export default function Location() {
  return (
    <div className="flex flex-wrap-reverse my-5 mx-4 md:mx-20 mt-24">
      <div className="w-full lg:w-1/2 rounded-3xl">
        <motion.h2
          className="text-center mt-12 md:mt-0 md:text-start text-3xl md:text-4xl text-[#17323D] font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          Where we reside
        </motion.h2>
        <p className="text-center md:text-start text-[#5B5B5B] text-md mx-2 md:text-xl my-3 ">
          {" "}
          You can find us in Bole Bulbula around Mariam Mazoria in Addis Ababa,
          Ethiopia
        </p>
      </div>
      <div className="w-full lg:w-1/2 rounded-3xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.2302892245193!2d38.78707612477984!3d8.950915241107333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b831ada269b0b%3A0x6eaf862dc8b1e110!2zQm9sZSBCdWxidWxhIE1hcnlhbSBNYXpvcnlhIHwg4Ymm4YiMIOGJoeGIjeGJoeGIiyDhiJvhiK3hi6vhiJ0g4Yib4Yue4Yit4Yur!5e0!3m2!1sen!2set!4v1744784784077!5m2!1sen!2set"
          height="450"
          allowFullScreen
          loading="lazy"
          className="w-full rounded-3xl shadow-xl shadow-neutral-400"
        ></iframe>
      </div>
    </div>
  )
}
