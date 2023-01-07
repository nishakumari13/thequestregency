import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./swiperStyle.css";
import room1 from "../../images/room1.jpeg";
import room2 from "../../images/room2.jpeg";
import room3 from "../../images/room3.jpeg";
import room4 from "../../images/room5.jpeg";
import room6 from "../../images/room6.jpeg";
import room7 from "../../images/room7.jpeg";
import room9 from "../../images/room9.jpeg";

const SwiperContainer = () => {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <div>
        <div className="main-swiper">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className="inner-swiper"
            spaceBetween={0}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            loop={true}
            autoplay={{
              delay: 700,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className="cards">
              <img class="img" src={room1} alt="dog-profile" />
            </SwiperSlide>
            <SwiperSlide className="cards">
              <img class="img" src={room2} alt="dog-profile" />
            </SwiperSlide>
            <SwiperSlide className="cards">
              <img class="img" src={room6} alt="dog-profile" />
            </SwiperSlide>
            <SwiperSlide className="cards">
              <img class="img" src={room3} alt="dog-profile" />
            </SwiperSlide>
            <SwiperSlide className="cards">
              <img class="img" src={room4} alt="dog-profile" />
            </SwiperSlide>
            <SwiperSlide className="cards">
              <img class="img" src={room9} alt="dog-profile" />
            </SwiperSlide>
            <SwiperSlide className="cards">
              <img class="img" src={room7} alt="dog-profile" />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SwiperContainer;
