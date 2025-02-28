const Lead = () => {
  return (
    <div className=" bg-[url(/leads-image.jpg)] h-5/6 bg-no-repeat bg-cover mt-12 flex items-center">
      <div className="md:w-1/3 mx-4 md:mx-20">
        <h1 className="text-4xl  text-[#17323D] font-semibold text-center md:text-start">
          Leading health care Providers
        </h1>
        <p className="my-4 text-center md:text-start ">
          We provide the best choices for you. Adjust it to your health needs
          and make sure you get them whenever you need them.
        </p>
        <button className="py-2 px-8 border-2 border-[#17323D] text-[#17323D] font-semibold block mx-auto md:inline">
          View Products
        </button>
      </div>
    </div>
  )
}

export default Lead
