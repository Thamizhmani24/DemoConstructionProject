import React, { useState } from "react";
import { Link } from "react-router-dom";



const ServiceCard = ({ icon: Icon, title, description, message, buttonText }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-72 h-80 perspective cursor-pointer" onClick={() => setFlipped(!flipped)}>
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d gap-16 ${flipped ? "rotate-y-180" : ""}`} >

        <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center bg-gray-200 rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 mb-4">
            <Icon className="text-2xl text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-center">{description}</p>
        </div>


        <div className="absolute w-full h-full rotate-y-180 backface-hidden flex flex-col items-center justify-center bg-yellow-500 text-gray-900 rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-lg font-bold mb-4 text-white">{title}</h3>
          <p className="mb-6 text-white text-center">{message}</p>
          

          <Link to="/QuoteForm">
            <button className="px-4 py-2 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-400 transition">{buttonText}</button>
          </Link>
          
          
        </div>

      </div>
    </div>
    
  );
};

export default ServiceCard;
