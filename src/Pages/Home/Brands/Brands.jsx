import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import brandimg from "../../../assets/brands/amazon.png";
import brandimg1 from "../../../assets/brands/amazon_vector.png";
import brandimg2 from "../../../assets/brands/casio.png";
import brandimg3 from "../../../assets/brands/moonstar.png";
import brandimg4 from "../../../assets/brands/randstad.png";
import brandimg5 from "../../../assets/brands/star.png";
import brandimg6 from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandLogo = [
  brandimg,
  brandimg1,
  brandimg2,
  brandimg3,
  brandimg4,
  brandimg5,
  brandimg6,
];
const Brands = () => {
  return (
    <div className="my-25 w-11/12 mx-auto">
      <h1 className="text-3xl font-extrabold text-[#03373D] text-center mb-10">
        We've helped thousands of sales teams
      </h1>
      <Swiper
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        pagination={{
          clickable: true,
        }}
      >
        {brandLogo.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="Brand Logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
