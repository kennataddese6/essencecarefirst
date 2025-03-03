"use client"
import { Lens } from "@/components/ui/lens"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const Featured = () => {
  const [hovering0, setHovering0] = useState(false)
  const [hovering1, setHovering1] = useState(false)
  const [hovering2, setHovering2] = useState(false)
  const [hovering3, setHovering3] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const products = [
    {
      title: "MRI Scanner",
      description: "Our products are high quality and durable",
      image: "/product1.png",
    },
    {
      title: "MRI Scanner",
      description: "Our products are high quality and durable",
      image: "/product2.png",
    },
    {
      title: "MRI Scanner",
      description: "Our products are high quality and durable",
      image: "/product3.png",
    },
    {
      title: "MRI Scanner",
      description: "Our products are high quality and durable",
      image: "/product4.png",
    },
  ]
  return (
    <div className="mt-12">
      <h1 className="text-center text-3xl md:text-4xl text-[#17323D] font-semibold">
        Featured Products
      </h1>
      <div className="flex justify-center flex-wrap md:flex-nowrap gap-8 md:justify-between  mx-20 mt-12">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, translateY: 40 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              delay: 0.1 + index / 3,
              duration: 0.9,
              type: "spring",
            }}
            className="w-full relative rounded-3xl overflow-hidden min-w-80 max-w-md mx-auto bg-gradient-to-r from-[#17323D] to-[#0b181e] p-8 "
          >
            {/* <Rays /> */}
            <Beams />
            <div className="relative z-10">
              <Lens
                hovering={
                  index == 0
                    ? hovering0
                    : index == 1
                    ? hovering1
                    : index == 2
                    ? hovering2
                    : index == 3
                    ? hovering3
                    : hovering3
                }
                setHovering={
                  index == 0
                    ? setHovering0
                    : index == 1
                    ? setHovering1
                    : index == 2
                    ? setHovering2
                    : index == 3
                    ? setHovering3
                    : setHovering0
                }
                setHoveredIndex={setHoveredIndex}
                index={index}
              >
                <Image
                  src={product.image}
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-2xl h-48"
                />
              </Lens>
              <motion.div
                animate={{
                  filter: hoveredIndex == index ? "blur(2px)" : "blur(0px)",
                }}
                className="py-4 relative z-20"
              >
                <h2 className="text-white text-2xl text-left font-bold">
                  {product.title}
                </h2>
                <p className="text-neutral-200 text-left  mt-4">
                  {product.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Featured

const Beams = () => {
  return (
    <svg
      width="380"
      height="315"
      viewBox="0 0 380 315"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
    >
      <g filter="url(#filter0_f_120_7473)">
        <circle cx="34" cy="52" r="114" fill="#99c7d6" />
      </g>
      <g filter="url(#filter1_f_120_7473)">
        <circle cx="332" cy="24" r="102" fill="#87b8c6" />
      </g>
      <g filter="url(#filter2_f_120_7473)">
        <circle cx="191" cy="53" r="102" fill="#d8f4fb" />
      </g>
      <defs>
        <filter
          id="filter0_f_120_7473"
          x="-192"
          y="-174"
          width="452"
          height="452"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="56"
            result="effect1_foregroundBlur_120_7473"
          />
        </filter>
        <filter
          id="filter1_f_120_7473"
          x="70"
          y="-238"
          width="524"
          height="524"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="80"
            result="effect1_foregroundBlur_120_7473"
          />
        </filter>
        <filter
          id="filter2_f_120_7473"
          x="-71"
          y="-209"
          width="524"
          height="524"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="80"
            result="effect1_foregroundBlur_120_7473"
          />
        </filter>
      </defs>
    </svg>
  )
}
