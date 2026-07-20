import { useState } from "react";

const AvailableServicesCard = ({ img, title, desc, id }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-64 h-80 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >

        <div className="absolute inset-0 bg-white rounded-xl shadow-md  overflow-hidden backface-hidden flex flex-col">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover  "
          />
          <div className="bg-yellow-500 h-16 text-white text-sm font-semibold text-center py-2 ">
            {id}. {title}
          </div>
        </div>


        <div className="absolute inset-0 bg-yellow-400 rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center rotate-y-180 backface-hidden">
          
          <p className="text-white text-m leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default AvailableServicesCard;
