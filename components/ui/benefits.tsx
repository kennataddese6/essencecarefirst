import { inter } from "@/lib/font"
import { AiOutlineMedicineBox } from "react-icons/ai"
import { FaUserDoctor } from "react-icons/fa6"
import { GiHealthPotion } from "react-icons/gi"
const Benefits = () => {
  return (
    <div className="mt-16">
      <h1 className="text-center text-4xl text-[#17323D] font-semibold">
        Why choose us
      </h1>
      <p className="text-center text-[#5B5B5B] text-xl my-3">
        We provide the best choices for you. Adjust it to your health needs{" "}
        <br /> and make sure you get them whenever you need them.
      </p>
      <div className=" flex md:px-20 justify-center md:justify-between flex-wrap  my-6">
        <div className="p-8 bg-[#F4F4F4]">
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
        </div>
        <div className=" p-8 bg-[#F4F4F4]">
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
        </div>
        <div className=" p-8 bg-[#F4F4F4]">
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
        </div>
        <div className=" p-8 bg-[#F4F4F4]">
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
        </div>
      </div>
    </div>
  )
}

export default Benefits
