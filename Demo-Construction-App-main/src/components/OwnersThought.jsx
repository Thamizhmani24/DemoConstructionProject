import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Client1 from "../assets/OwnersThoughtImage/Client1.png";
import Client2 from "../assets/OwnersThoughtImage/Client2.png";
import Client3 from "../assets/OwnersThoughtImage/Client2.png";

export default function OwnersThought() {
  return (
    <section className="bg-gray-100 py-16">

      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl  font-bold text-gray-900">
          What <span className="text-yellow-600">Our Home Owners Say</span> 
        </h2>

        <div className="w-64 h-0.5 bg-yellow-400 mx-auto my-4"></div>

      </div>


      <div className="px-6 md:px-20">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="pb-10"
        >

          <SwiperSlide>
            <div className="bg-white rounded-lg border shadow-md overflow-hidden">
              <img src={Client1} alt="Client testimonial" className="w-full h-64 object-cover" />
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="bg-white rounded-lg border shadow-md overflow-hidden">
              <img src={Client2} alt="Client testimonial" className="w-full h-64 object-cover" />
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="bg-white rounded-lg border shadow-md overflow-hidden">
              <img src={Client3} alt="Client testimonial" className="w-full h-64 object-cover" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
