"use client"

import { Checkbox } from "@/components/ui/checkbox"
import ProductCard from "../ui/products-card"

const Products = () => {
  const products = [
    {
      title: "MRI Scanner",
      description: "Our products are high quality and durable",
      image: "/product1.png",
    },
    {
      title: "MRI Scanner",
      description: "Our products are high quality and durable",
      image: "/product2.png",
    },
    {
      title: "MRI Scanner",
      description: "Our products are high quality and durable",
      image: "/product3.png",
    },
    {
      title: "MRI Scanner",
      description: "Our products are high quality and durable",
      image: "/product4.png",
    },
  ]
  const categories = [
    { name: "Diagnostic " },
    { name: "Therapeutic" },
    { name: "Surgical" },
    { name: "Monitoring" },
    { name: "Assistive" },
  ]
  return (
    <div className="mt-32  md:mx-20 flex flex-wrap justify-center md:justify-between items-start">
      <div className="border-2 border-grey-200 rounded-lg md:w-3/12 p-8">
        {categories.length ? (
          categories.map((category, index) => (
            <div key={index} className="py-4">
              {" "}
              <Checkbox />
              <span className="font-bold mx-2">{category.name} </span>
            </div>
          ))
        ) : (
          <div className="text-center">No categores available!</div>
        )}
      </div>
      <div className=" md:w-8/12 flex flex-wrap gap-2 ">
        <div className="container mx-auto  px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                id={`${index}`}
                name={`${product.title}`}
                price={500}
                {...product}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
