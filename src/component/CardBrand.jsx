import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

export default function CardBrand() {
  return (
    <div className="lg:p-20 p-5">
      <div className="bg-white p-5 rounded-xl border-x boder-b-4 shadow-xl">
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-navigation-size': '25px',
          }}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          centeredSlides={true}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="border-x w-full h-20 p-5">
              <img src="download (4).png" className="w-full" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-x w-full h-20 p-5">
              <img src="download.png" className="w-full" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-x w-full h-20 p-5">
              <img src="download (1).png" className="w-full" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-x w-full h-20 p-5">
              <img src="download (2).png" className="w-full" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-x w-full h-20 p-5">
              <img src="download (3).png" className="w-full" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
