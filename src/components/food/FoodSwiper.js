import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./swiperStyle.css";
import "swiper/css/effect-fade";

import { data } from "./data";

const FoodSwiper = ({ dish, delay }) => {
  SwiperCore.use([Autoplay]);
  const mughlai = data.mughlai;
  console.log("mughlai", data[0].mughlai);
  return (
    <>
      <div>
        <div className="food-swiper">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, EffectFade, A11y]}
            className="food-inner-swiper"
            spaceBetween={0}
            slidesPerView={1}
            // navigation
            effect={"fade"}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {dish.map((item) => {
              return (
                <SwiperSlide className="food-cards">
                  <img
                    class="food-img animate__animated animate__fadeIn"
                    src={item.img}
                    alt="dog-profile"
                  />
                </SwiperSlide>
              );
            })}
            ...
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FoodSwiper;
