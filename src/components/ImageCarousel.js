import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageCarousel({ images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,          // ⏱ 3 seconds
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      className="rounded-lg overflow-hidden"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`slide-${index}`}
            className="w-full h-[420px] object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
