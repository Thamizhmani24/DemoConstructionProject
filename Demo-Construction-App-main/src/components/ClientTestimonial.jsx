import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ClientTestimonialCard from "../cards/ClientTestimonialCard";
import ClientImage from "../assets/ClientTestimonialImage/Client.png";

const testimonials = [
  {
    id: 1,
    name: "Rahul",
    image: ClientImage,
    review:
      "Excellent service from start to finish. The team was professional, transparent, and delivered my dream home on time!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya",
    image: ClientImage,
    review:
      "Buildhood made my dream home a reality. Superb service, timely delivery, and attention to detail was impressive!",
    rating: 5,
  },
  {
    id: 3,
    name: "Arjun",
    image: ClientImage,
    review:
      "Very reliable and professional team. They kept me updated throughout the construction journey!",
    rating: 5,
  },
];

export default function ClientTestimonial() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold text-yellow-400 mb-2">
        Client <span className="text-yellow-600">Testimonials</span>
      </h2>

      <div className="w-64 h-0.5 bg-yellow-400 mx-auto my-4"></div>

      <p className="text-lg text-gray-700 mb-8">
        Top-Rated by Satisfied Clients on Google Reviews
      </p>

      <div className="relative flex items-center justify-center mx-12">

        <button
          onClick={prev}
          className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 "
        >
          <ChevronLeft size={42} className="text-yellow-600" />
        </button>


        <ClientTestimonialCard
          key={testimonials[current].id}
          image={testimonials[current].image}
          name={testimonials[current].name}
          review={testimonials[current].review}
          rating={testimonials[current].rating}
        />


        <button
          onClick={next}
          className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronRight size={42} className="text-yellow-600" />
        </button>
      </div>

    </section>
  );
}
