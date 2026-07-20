import React from "react";
import { FaDraftingCompass, FaHome, FaEye, FaTools } from "react-icons/fa";
import ServiceCards from "../cards/ServiceCards";

const Services=()=>{

  const services = [
    {
      icon: FaDraftingCompass,
      title: "Architects",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of scrambled it to make a type specimen book.",
      buttonText: "GET A QUOTE",
    },
    {
      icon: FaHome,
      title: "Constructions",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of scrambled it to make a type specimen book.",
      buttonText: "GET A QUOTE",
    },
    {
      icon: FaEye,
      title: "Interiors",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of scrambled it to make a type specimen book.",
      buttonText: "GET A QUOTE",
    },
    {
      icon: FaTools,
      title: "Renovations",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of scrambled it to make a type specimen book.",
      buttonText: "GET A QUOTE",
    },
  ];



  return(
    <section className="mt-12 mx-12">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold">From Soil to Ceiling – We’ve Got It All</h2>
        
        <div className="w-32 h-0.5 bg-yellow-400 mx-auto my-4"></div>

        <p className="text-gray-600 mt-2 text-l md:text-xl">
          Chennai’s Top Construction Professionals.
          <br></br> 
          We are a team of licensed & reputed architects, contractors, interior designers & renovators
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {services.map((service, index) => (
          <ServiceCards key={index} {...service} />
        ))}
      </div>

    </section>
  )
}

export default Services;