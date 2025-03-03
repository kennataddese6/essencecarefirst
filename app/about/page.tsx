import Image from "next/image"

const About = () => {
  return (
    <div className="mt-32 mx-20 flex">
      <div className="w-1/2 p-4">
        <h1 className="text-3xl font-semibold text-[#447ce4]">About us</h1>
        <p className="mt-4 pr-12">
          We are a dedicated team inspired to provide the best medical health
          care in ethiopia. We strive for excellence and are going to keep up
          with the best techonologies out there. We are a dedicated team
          inspired to provide the best medical health care in ethiopia. We
          strive for excellence and are going to keep up with the best
          techonologies out there inspired to provide the best medical health
          care in ethiopia. We strive for excellence and are going to keep up
          with the best techonologies out there
        </p>
      </div>
      <div className="md:w-1/2">
        <Image
          src="/about.jpg"
          alt={"About Image"}
          width={500}
          height={500}
          className="w-full"
        />
      </div>
    </div>
  )
}

export default About
