"use client"
import Image from "next/image"
import { useState } from "react"
import { CiMenuFries } from "react-icons/ci"
import { MdClose } from "react-icons/md"
export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false)
  return (
    <nav
      className={`md:flex bg-white fixed z-50 w-full md:justify-between items-center md:px-20 px-4 py-1 md:h-auto   ${
        showMobileNav ? " h-screen animate-fadein" : ""
      }`}
    >
      <div className="text-black  text-xl md:text-2xl font-bold mb-5 md:mb-0 flex justify-between items-center">
        <Image
          src={"/logo.png"}
          alt="Logo image"
          width={90}
          height={90}
          className="size-14 md:size-20"
        />
        <span
          className={`md:hidden ${!showMobileNav && "hidden"}`}
          onClick={() => setShowMobileNav(false)}
        >
          <MdClose fontSize={20} className="text-[#17323D]" />
        </span>
        <span
          className={`md:hidden ${showMobileNav && "hidden"}`}
          onClick={() => setShowMobileNav(true)}
        >
          <CiMenuFries fontSize={20} className="text-[#17323D]" />
        </span>
      </div>
      <ul
        className={`text-black md:flex gap-20 text-base ${
          showMobileNav ? "" : "hidden"
        }`}
      >
        <li className="text-[#17323D] font-extrabold text py-4 md:py-0 border-t-2 border-b-2 border-neutral-100 md:border-none cursor-pointer">
          Home
        </li>
        <li className="text-neutral-600 py-4 md:py-0  border-b-2 border-neutral-100 md:border-none cursor-pointer">
          Shop
        </li>
        <li className="text-neutral-600 py-4 md:py-0  border-b-2 border-neutral-100 md:border-none cursor-pointer">
          About
        </li>
        <li className="text-neutral-600 py-4 md:py-0  border-b-2 border-neutral-100 md:border-none cursor-pointer">
          Contact
        </li>
        <li className="text-neutral-600 py-4 md:py-0  border-b-2 border-neutral-100 md:border-none cursor-pointer">
          Sign In
        </li>
      </ul>
    </nav>
  )
}
