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
    setShowNav(position > 725)
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollPosition)
    return () => window.removeEventListener("scroll", scrollPosition)
  }, [])

  useEffect(() => {
    setShowMobileNav(false)
  }, [pathname])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 z-50 w-full md:flex md:justify-between items-center md:px-20 px-4 py-1 md:h-auto transition-colors duration-300 ${
        showMobileNav ? "h-screen animate-fadein bg-[#bee2ee]" : ""
      } ${
        pathname !== "/" || showNav
          ? "bg-white/40 backdrop-blur-xl animate-fadein"
          : ""
      }`}
    >
      <div className="flex justify-between items-center text-black text-xl md:text-2xl font-bold mb-5 md:mb-0">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Company Logo - Website Name"
            width={90}
            height={90}
            className="size-14 md:size-20"
          />
        </Link>

        <div className="md:hidden">
          {showMobileNav ? (
            <button
              aria-label="Close mobile menu"
              onClick={() => setShowMobileNav(false)}
            >
              <MdClose fontSize={24} className="text-[#17323D]" />
            </button>
          ) : (
            <button
              aria-label="Open mobile menu"
              onClick={() => setShowMobileNav(true)}
            >
              <CiMenuFries fontSize={24} className="text-[#17323D]" />
            </button>
          )}
        </div>
      </div>

      <ul
        className={`text-black md:flex gap-20 text-base ${
          showMobileNav ? "block" : "hidden md:block"
        }`}
      >
        {navItems.map((item) => (
          <li key={item.href} className="py-4 md:py-0 cursor-pointer">
            <Link
              href={item.href}
              className={`text-[#17323D] no-underline ${
                pathname === item.href ||
                (item.href === "/products" && pathname.includes("/products"))
                  ? "font-extrabold animate-fadein"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
