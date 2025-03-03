import Image from "next/image"
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6"
import { IoIosMail } from "react-icons/io"
import { MdLocationOn } from "react-icons/md"
const Footer = () => {
  return (
    <footer className="bg-[#8ac1e0] flex flex-wrap md:justify-between py-12 mt-24 px-20 ">
      <div>
        <Image src={"/logo.png"} alt="Logo" width={100} height={100} />
        <span className="px-4 text-[#17323d]">
          Providing the best medical equipments in Ethiopia
        </span>
      </div>
      <div className="min-w-52">
        <h1 className="text-xl text-[#17323d] font-semibold">Important</h1>
        <div className="mt-6 flex flex-col gap-y-4 text-[#17323d]">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Shop</p>
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Sign In</p>
        </div>
      </div>
      <div className="min-w-52">
        <h1 className="text-xl text-[#17323d] font-bold">Contact</h1>
        <div className="mt-6 flex flex-col gap-y-8">
          <p className="text-[#17323d]">
            <FaPhone className="inline mx-1" />
            +251989985333
          </p>
          <p className="text-[#17323d]">
            <FaPhone className="inline mx-1" />
            +251989985333
          </p>
          <p className="text-[#17323d]">
            <IoIosMail className="inline mx-1 text-xl" />
            essence@gmail.com
          </p>
          <p className="text-[#17323d]">
            <MdLocationOn className="inline mx-1 text-xl" />
            Bole, A.A Ethiopia
          </p>
        </div>
      </div>
      <div className="min-w-52">
        <h1 className="text-xl text-[#17323d] font-bold">Follow us</h1>
        <div className="mt-6">
          <FaFacebook className="inline text-xl text-[#17323d] hover:text-blue-700 cursor-pointer" />
          <FaInstagram className="inline text-xl mx-6 text-[#17323d] hover:text-orange-700 cursor-pointer" />
          <FaYoutube className="inline text-2xl text-[#17323d] hover:text-red-600 cursor-pointer" />
          <FaTwitter className="inline mx-6  text-xl text-[#17323d] hover:text-blue-500 cursor-pointer" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
