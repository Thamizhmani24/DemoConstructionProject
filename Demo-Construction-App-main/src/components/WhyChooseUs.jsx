import React from "react";
import WhyChooseUsCard from "../cards/WhyChooseUsCard";
import pipelineImg from "../assets/2.jpg";
import roadImg from "../assets/2.jpg";
import industrialImg from "../assets/2.jpg";
import energyImg from "../assets/2.jpg";
import metallurgyImg from "../assets/2.jpg";

const WhyChooseUs = () => {
  const features = [
    {
      img: pipelineImg,
      title: "Pipeline Repair",
      desc: "Lorem ipsum dolor sit amet, et omnis soleat mollis vel."
    },
    {
      img: roadImg,
      title: "Road Construction",
      desc: "Lorem ipsum dolor sit amet, et omnis soleat mollis vel."
    },
    {
      img: industrialImg,
      title: "Industrial Maintenance",
      desc: "Lorem ipsum dolor sit amet, et omnis soleat mollis vel."
    },
    {
      img: energyImg,
      title: "Alternative Energy",
      desc: "Lorem ipsum dolor sit amet, et omnis soleat mollis vel."
    },
    {
      img: metallurgyImg,
      title: "Metallurgy",
      desc: "Lorem ipsum dolor sit amet, et omnis soleat mollis vel."
    }
  ];

  return (
    <section className="text-center mt-12 mx-12 bg-white">
      <h2 className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto mb-10 leading-relaxed">
        Why Choose <span className="text-black">ABC Construction</span> of mind, trust,
        and transparent house construction services.
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center gap-12">
        {features.map((feature, idx) => (
          <WhyChooseUsCard
            key={idx}
            img={feature.img}
            title={feature.title}
            desc={feature.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
