"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { CiMenuFries } from "react-icons/ci"
import { MdClose } from "react-icons/md"
export default function Navbar() {
  const pathname = usePathname()
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [showNav, setShowNav] = useState(false)
  function scrollPosition() {
    const position = document.documentElement.scrollTop
    if (position > 725) {
      setShowNav(true)
    } else {
      setShowNav(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollPosition()
    })
  }, [])

  useEffect(() => {
    setShowMobileNav(false)
  }, [pathname])
  return (
    <nav
      className={`md:flex fixed top-0 z-50 w-full md:justify-between items-center md:px-20 px-4 py-1 md:h-auto    ${
        showMobileNav ? "h-screen animate-fadein bg-[#bee2ee]" : ""
      } ${pathname !== "/" && "bg-white/40 backdrop-blur-xl"} ${
        showNav ? "bg-white/40 backdrop-blur-xl animate-fadein" : ""
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
        <Link href={"/"} className="no-underline">
          <li
            className={`text-[#17323D]   py-4 md:py-0   md:border-none cursor-pointer ${
              pathname === "/" && "font-extrabold animate-fadein"
            }`}
          >
            Home
          </li>
        </Link>
        <Link href={"/products"} className="no-underline">
          <li
            className={`text-[#17323D]   py-4 md:py-0   md:border-none cursor-pointer ${
              pathname === "/products" && "font-extrabold animate-fadein"
            }`}
          >
            Products
          </li>
        </Link>
        <Link href={"/about"} className="no-underline">
          <li
            className={`text-[#17323D]   py-4 md:py-0   md:border-none cursor-pointer ${
              pathname === "/about" && "font-extrabold animate-fadein"
            }`}
          >
            About
          </li>
        </Link>
        <Link href={"/contact"} className="no-underline">
          <li
            className={`text-[#17323D]   py-4 md:py-0   md:border-none cursor-pointer ${
              pathname === "/contact" && "font-extrabold animate-fadein"
            }`}
          >
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  )
}
