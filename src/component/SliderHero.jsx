import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import '../assets/sliderhero.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function SliderHero() {
  return (
    <>
      <div className="-mt-[1px] bg-white">
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-navigation-size': '25px',
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          
            <SwiperSlide>
              <div className="lg:h-[700px] md:h-[600px] sm:h-[500px] h-[400px] w-full relative bg-cover" style={{ backgroundImage: `url('slide1.png')` }}>
                <div className="absolute left-12 top-1/2  text-start">
                  <h2 className="lg:text-6xl text-white font-bold lg:mb-5">Sistem Informasi Perdagangan</h2>
                  <h2 className="lg:text-6xl text-white font-bold lg:mb-10">(INATRADE)</h2>
                  <p className="lg:text-xl text-sm text-white">With over 10 years of experience helping bussinesses to find comprehensive solutions</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="lg:h-[700px] md:h-[600px] sm:h-[500px] h-[400px] w-full relative bg-cover" style={{ backgroundImage: `url('9bca3839-aacf-45d0-9db6-6587e04b345b.jfif')` }}></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="lg:h-[700px] md:h-[600px] sm:h-[500px] h-[400px] w-full relative bg-cover" style={{ backgroundImage: `url('25b09c3e-f9c5-4617-af0c-3d14dc413ef6.jfif')` }}></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="lg:h-[700px] md:h-[600px] sm:h-[500px] h-[400px] w-full relative bg-cover" style={{ backgroundImage: `url('e2096065-f9c6-4408-b2c7-ac8503baf075.png')` }}></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="lg:h-[700px] md:h-[600px] sm:h-[500px] h-[400px] w-full relative bg-cover" style={{ backgroundImage: `url('dec5a526-2dfb-4b22-bbeb-3e2fba705295.png')` }}></div>
            </SwiperSlide>
          
        </Swiper>
      </div>
    </>
  );
}
