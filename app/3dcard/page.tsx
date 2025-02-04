"use client"

import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/3d-card-rotation"
import Image from "next/image"
import Link from "next/link"

export default function ThreeDCardDemo() {
  return (
    <div className="bg-black w-full h-full">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            The Wonder of nature
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            The water sweeping through the mountains is really cool
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={"/image.png"}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="/3dcard/rotation"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try with rotation →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  )
}
