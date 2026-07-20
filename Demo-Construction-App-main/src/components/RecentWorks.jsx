import React from "react";
import image1 from "../assets/RecentWorkImage/RecentWork1.png";
import image2 from "../assets/RecentWorkImage/RecentWork2.png";
import image3 from "../assets/RecentWorkImage/RecentWork3.png";
import image4 from "../assets/RecentWorkImage/RecentWork4.png";
import image5 from "../assets/RecentWorkImage/RecentWork5.png";
import image6 from "../assets/RecentWorkImage/RecentWork6.png";

const RecentWorks = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <section className="mt-12">

      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Our Recent Works
        </h2>

        <div className="w-32 h-0.5 bg-yellow-400 mx-auto my-4"></div>

        <p className="text-gray-600 max-w-2xl mx-auto text-l md:text-xl">
          Experience the essence of thoughtful construction in Chennai—our
          work speaks volumes about who we are and what we build.
        </p>
      </div>


      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {images.map((src, index) => {

          const roundedClass =
            index >= 3 ? "rounded-b-full" : "rounded-t-full";

          return (
            <div
              key={index}
              className={`w-60 h-60 overflow-hidden ${roundedClass} shadow-md bg-white hover:shadow-xl transition-shadow`}
            >
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecentWorks;
