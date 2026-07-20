import React from "react";
import ACC from "../assets/TrustedPartnersImage/acc.png";
import Godrej from "../assets/TrustedPartnersImage/godrej.png";
import UltraTech from "../assets/TrustedPartnersImage/ultratech.png";
import Ramco from "../assets/TrustedPartnersImage/ramco.png";
import AsianPaints from "../assets/TrustedPartnersImage/asianpaints.png";
import JSW from "../assets/TrustedPartnersImage/jsw.png";

const TrustedPartners = () => {
  const partners = [
    { name: "ACC", logo: ACC },
    { name: "Godrej", logo: Godrej },
    { name: "UltraTech", logo: UltraTech },
    { name: "Ramco", logo: Ramco },
    { name: "Asian Paints", logo: AsianPaints },
    { name: "JSW", logo: JSW },
  ];

  return (
    <section className="bg-white py-12 px-6 md:px-16 text-center">
      <h2 className="text-2xl md:text-3xl  font-bold text-gray-900">
        Trusted Partners
      </h2>

        <div className="w-64 h-0.5 bg-yellow-400 mx-auto my-4"></div>

      <p className="text-lg text-gray-700 mb-8">
        Each store partner of ours has been vetted for their quality, pricing,
        and trust. We have long-standing relationships with home fitting &
        raw material suppliers across Chennai.
      </p>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center mx-12">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-transform w-48 h-28"
            >
            <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain"
            />
            </div>

        ))}
      </div>
    </section>
  );
};

export default TrustedPartners;
