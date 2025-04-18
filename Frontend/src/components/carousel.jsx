// src/components/ImageCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FoodImg from "../assets/images/landingPage/Food.png"
import partyImg from "../assets/images/landingPage/custom-event.png"
import DemandImg from "../assets/images/landingPage/Demand.png"

const slides = [    
  {
    id: 1,
    image: FoodImg,
    caption: "Explore Food",
  },
  {
    id: 2,
    image:DemandImg,
    caption: "AI Demand Forecasting",
  },
  {
    id: 3,
    image:partyImg,
    caption: "Campus Events, Made Easy",
  },
];

const Carousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[28rem] md:h-[32rem]">
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-full object-cover object-center max-h-[576px]"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 w-full text-white py-4 px-6 text-lg font-semibold">
                {slide.caption}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
