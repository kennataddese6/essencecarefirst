"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import emailjs from "@emailjs/browser"
import Link from "next/link"
import { useRef } from "react"
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import { toast } from "sonner"
export default function Page() {
  const form: any = useRef(null)
  const sendEmail = (formData: FormData) => {
    try {
      emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_KEY || "",
        process.env.NEXT_PUBLIC_TEMPLATEID || "",
        {
          user_name: formData.get("user_name"),
          user_email: formData.get("user_email"),
          message: formData.get("message"),
          email: process.env.NEXT_PUBLIC_EMAIL,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_KEY,
        },
      )
      form.current?.reset()
      toast.success("Sucess")
    } catch (error: any) {
      toast.error("error")
    }
  }
  return (
    <>
      <div className="mx-auto  rounded-xl border border-slate-300 bg-white py-8 text-black shadow-md lg:my-5 lg:w-3/4 lg:px-5">
        <h1 className="text-center text-2xl text-blue-500">Get in Touch</h1>
        <div className="absolute top-1/3 hidden lg:block">
          <Link
            href={"https://www.youtube.com/channel/UCfWZU2kY-CN21Ycc0aX4L9Q"}
          >
            <FaYoutube
              className="mx-4 my-8 cursor-pointer"
              fontSize={26}
              color="red"
            />
          </Link>
          <Link href={"https://web.facebook.com/125coding/"}>
            <FaFacebook
              className="mx-4 my-8 cursor-pointer"
              fontSize={22}
              color="blue"
            />
          </Link>
          <Link href={"https://www.instagram.com/125coding/"}>
            <FaInstagram
              className="mx-4 my-8 cursor-pointer"
              fontSize={22}
              color="orange"
            />
          </Link>
          <Link
            href={
              "https://api.whatsapp.com/send/?phone=447791179663&text&type=phone_number&app_absent=0"
            }
          >
            <FaWhatsapp
              className="mx-4 my-8 cursor-pointer"
              fontSize={22}
              color="green"
            />
          </Link>
        </div>
        <div className="mx-12 mt-5 flex flex-wrap justify-between lg:p-5">
          <form className="w-full lg:w-1/2 lg:px-4" action={sendEmail}>
            <h1 className="text-center text-xl lg:text-start">
              Leave us a Message
            </h1>
            <LabelInputContainer className="mb-4 mt-5">
              <Label htmlFor="first-name">Full Name</Label>
              <Input
                id="first-name"
                placeholder="Enter name here"
                type="text"
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter email here"
                type="email"
                required
              />
            </LabelInputContainer>
            <textarea
              className="mt-5 h-32 w-full border border-slate-400 p-3 focus:outline-blue-500"
              placeholder="Message"
              name="message"
              required
            ></textarea>
            <button
              className="mt-4 w-full bg-blue-500 p-2 text-white"
              // onClick={() => toast.success('Success', { duration: 10000 })}
              type="submit"
            >
              Send
            </button>
          </form>
          <div className="w-full px-4 lg:w-1/2">
            <div className="mt-8 p-2">
              <FaMapMarkerAlt color="grey" className="mr-3 inline" />
              125 Ravensthorpe Road, Dewsbury, West Yorkshire, WF12 9EG
            </div>
            <div className="p-2">
              <FaPhone color="grey" className="mr-3 inline" />
              +44 (0) 7791 179 663
            </div>
            <div className="p-2">
              <IoIosMail color="grey" className="mr-3 inline" fontSize={22} />
              info@125coding.co.uk
            </div>
            <div className="flex justify-around p-2 lg:hidden">
              <FaYoutube
                className="mr-3 inline cursor-pointer"
                fontSize={26}
                color="red"
              />
              <FaFacebook
                className="mr-3 inline cursor-pointer"
                fontSize={22}
                color="blue"
              />
              <FaInstagram
                className="mr-3 inline cursor-pointer"
                fontSize={22}
                color="orange"
              />
              <FaTwitter
                className="mr-3 inline cursor-pointer"
                fontSize={22}
                color="dodgerblue"
              />
            </div>
            <iframe
              className="mt-3 w-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1323.6731460079986!2d-1.6567640472979175!3d53.67454890454261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bdf7c5e36c42b%3A0xc1100677bb039c26!2s125%20Ravensthorpe%20Rd%2C%20Dewsbury%20WF12%209EG%2C%20UK!5e0!3m2!1sen!2set!4v1735883699360!5m2!1sen!2set"
              width="300"
              height="200"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  )
}
