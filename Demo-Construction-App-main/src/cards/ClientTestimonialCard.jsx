import { Star } from "lucide-react";

const ClientTestimonialCard = ({ image, name, review, rating = 5 }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center w-80 h-96 mx-4 transition-transform duration-500">

      <div className="flex justify-center mb-4 text-yellow-500">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            size={18}
            fill="currentColor"
            className="text-yellow-500"
          />
        ))}
      </div>


      <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-yellow-400">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>


      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-gray-600 mt-2 text-sm italic">"{review}"</p>


      <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm hover:bg-yellow-600">
        Read More
      </button>
    </div>
  );
};

export default ClientTestimonialCard;
