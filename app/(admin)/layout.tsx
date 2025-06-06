"use client"
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar"
import SidebarLinks from "@/components/ui/sidebar-links"
import { cn } from "@/lib/utils"
import { IconArrowLeft } from "@tabler/icons-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { logout } from "../action/action"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const Logo = () => {
    return (
      <Link
        href="#"
        className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
      >
        <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-medium text-black dark:text-white whitespace-pre"
        >
          Essence Admin
        </motion.span>
      </Link>
    )
  }
  const LogoIcon = () => {
    return (
      <Link
        href="#"
        className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
      >
        <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      </Link>
    )
  }
  function SidebarDemo({ children }: { children: React.ReactNode }) {
    const links = SidebarLinks()
    const [open, setOpen] = useState(false)
    return (
      <div className="bg-black w-full h-full">
        <div
          className={cn(
            "rounded-md flex flex-col md:flex-row bg-gray-100  w-screen flex-1  mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
            "h-screen", // for your use case, use `h-screen` instead of `h-[60vh]`
          )}
        >
          <Sidebar open={open} setOpen={setOpen}>
            <SidebarBody className="justify-between gap-10">
              <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {open ? <Logo /> : <LogoIcon />}
                <div className="mt-8 flex flex-col gap-2">
                  {links.map((link, idx) => (
                    <SidebarLink key={idx} link={link} />
                  ))}
                </div>
              </div>
              <IconArrowLeft
                className="text-white inline cursor-pointer"
                onClick={() => logout()}
              />
              <div>
                <SidebarLink
                  link={{
                    label: "Admin",
                    href: "#",
                    icon: (
                      <Image
                        src={"/image.png"}
                        className="h-7 w-7 flex-shrink-0 rounded-full"
                        width={50}
                        height={50}
                        alt="Avatar"
                      />
                    ),
                  }}
                />
              </div>
            </SidebarBody>
          </Sidebar>
          {children}
        </div>
      </div>
    )
  }
  return (
    <>
      <SidebarDemo children={children} />
    </>
  )
}
