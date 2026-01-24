import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageCarousel({ images }) {
  return (
    <div className="w-full max-w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={16}

        /* ✅ MOBILE FIXES */
        grabCursor={true}
        touchStartPreventDefault={false}
        resistanceRatio={0.85}

        /* ✅ AUTOPLAY */
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}

        /* ✅ UI */
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}

        className="rounded-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[220px] sm:h-[300px] md:h-[420px]">
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
