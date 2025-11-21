import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard/ReviewCard";
const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-[#03373D]">
          What our customers are sayings
        </h1>
        <p className="text-[#606060] mt-5 max-w-2xl mx-auto font-bold">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="my-10">
        <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: '50%',
            depth: 200,
            modifier: 1,
            scale:0.75,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination,Autoplay]}
          className="mySwiper"
        >
          {reviews.map((rview) => (
            <SwiperSlide key={rview.id}>
               <ReviewCard rview={rview}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </div>
  );
};

export default Reviews;
