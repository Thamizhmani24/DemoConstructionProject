import React from "react";
import { FaDraftingCompass, FaHome, FaEye, FaTools } from "react-icons/fa";
import ServiceCards from "../cards/ServiceCards";

const Services = () => {
  const services = [
    {
      icon: FaDraftingCompass,
      title: "Architects",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      buttonText: "GET A QUOTE",
    },
    {
      icon: FaHome,
      title: "Constructions",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      buttonText: "GET A QUOTE",
    },
    {
      icon: FaEye,
      title: "Interiors",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      buttonText: "GET A QUOTE",
    },
    {
      icon: FaTools,
      title: "Renovations",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      buttonText: "GET A QUOTE",
    },
  ];

  return (
    <section className="section-padding bg-light" id="our-work">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">From Soil to Ceiling – We’ve Got It All</h2>
          <p className="section-subtitle">
            Chennai’s Top Construction Professionals.<br/>
            We are a team of licensed & reputed architects, contractors, interior designers & renovators.
          </p>
        </div>

        <div className="grid-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {services.map((service, index) => (
            <ServiceCards key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;