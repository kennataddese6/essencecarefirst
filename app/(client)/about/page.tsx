import Image from "next/image"

const About = () => {
  return (
    <div className="mt-16 md:mt-32 md:mx-20 flex flex-wrap">
      <div className="md:w-1/2 p-4">
        <h1 className="text-3xl font-semibold text-[#447ce4] text-center md:text-start">
          About us
        </h1>
        <p className="mt-4  mx-1 md:mx-0 md:pr-12 text-center md:text-start">
          We are a dedicated team committed to delivering the best medical
          healthcare in Ethiopia. Our mission is to enhance community well-being
          through exceptional care, advanced technology, and a patient-centered
          approach. We aim for excellence in service and continuous growth in
          skills and knowledge. Staying ahead in medical innovation is at our
          core, ensuring effective diagnostics, treatments, and patient care.
          Our passionate professionals strive to provide world-class healthcare
          for every patient, building a healthier future grounded in trust,
          compassion, and excellence.
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
