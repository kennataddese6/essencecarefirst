import Image from "next/image"
import Link from "next/link"
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
    <footer className="bg-white flex flex-wrap gap-12 md:gap-0 md:justify-between py-12 mt-24 px-8 md:px-20 ">
      <div>
        <Image src={"/logo.png"} alt="Logo" width={100} height={100} />
        <span className="md:px-4 text-[#17323d]">
          Providing the best medical equipments in Ethiopia
        </span>
      </div>
      <div className="min-w-52 ">
        <h1 className="text-xl text-[#17323d] font-semibold">Important</h1>
        <div className="mt-6 flex flex-col gap-y-8 text-[#17323d]">
          <Link href={"/"} className="no-underline">
            <p className="cursor-pointer">Home</p>
          </Link>
          <Link href={"/products"} className="no-underline">
            <p className="cursor-pointer">Shop</p>
          </Link>
          <Link href={"/about"} className="no-underline">
            <p className="cursor-pointer">About</p>
          </Link>
          <Link href={"/signin"} className="no-underline">
            <p className="cursor-pointer">Sign In</p>
          </Link>
        </div>
      </div>
      <div className="min-w-52">
        <h1 className="text-xl text-[#17323d] font-bold">Contact</h1>
        <div className="mt-6 flex flex-col gap-y-8">
          <p className="text-[#17323d]">
            <FaPhone className="inline mx-1" />
            +251984242526
          </p>
          <p className="text-[#17323d]">
            <FaPhone className="inline mx-1" />
            +251985242526
          </p>
          <p className="text-[#17323d]">
            <IoIosMail className="inline mx-1 text-xl" />
            essencetradingplc@gmail.com
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
