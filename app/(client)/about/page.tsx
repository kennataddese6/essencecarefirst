import Image from "next/image"

const About = () => {
  return (
    <div className="mt-16 md:mt-32 md:mx-20 flex flex-wrap">
      <div className="md:w-1/2 p-4">
        <h1 className="text-3xl font-semibold text-[#447ce4] text-center md:text-start">
          About us
        </h1>
        <p className="mt-4 mx-1 md:mx-0 md:pr-12 text-center md:text-start">
          We are a dedicated team inspired to provide the best medical
          healthcare in Ethiopia. Our mission is to enhance the well-being of
          our community through exceptional care, cutting-edge technologies, and
          a patient-centered approach. We strive for excellence in every aspect
          of our work, from the quality of service we provide to the continuous
          improvement of our skills and knowledge. At the heart of our vision is
          a commitment to staying ahead of medical advancements. We understand
          the importance of incorporating the latest technologies and innovative
          treatments to offer the most effective healthcare solutions. Whether
          its in diagnostics, treatment options, or patient care, we aim to lead
          by example, ensuring that each individual receives the highest
          standard of care. Our team consists of passionate professionals who
          are dedicated to improving the healthcare landscape in Ethiopia. We
          believe that every patient deserves access to world-class medical
          services, and we are here to make that a reality. Together, we work
          towards a healthier future, fostering trust, compassion, and
          excellence every step of the way.
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
