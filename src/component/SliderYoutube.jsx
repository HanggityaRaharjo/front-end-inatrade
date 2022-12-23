import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import '../assets/slideryoutube.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

export default function SliderYoutube() {
  return (
    <>
      <div className="-mt-[1px] bg-secondary">
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-navigation-size': '25px',
          }}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="lg:h-96 bg-secondary w-full p-10 lg:flex block gap-5">
              <div className="lg:w-1/2  text-end text-white">
                <h3 className="text-4xl font-bold break-words mb-5">Bimbingan Teknis Perizinan Berusaha di Bidang Impor Daging dan Produk Kehutanan</h3>
                <p className="text-base">Diseminasi Teknis Implementasi Digital Signature pada Perizinan Berusaha di Bidang Impor (Daging dan Produk Kehutanan) sesuai dengan permendag 20 tahun 2021</p>
              </div>
              <div className="lg:w-1/2 md:w-full ">
                <iframe
                  className="lg:w-[500px] w-full h-[100%]"
                  src="https://www.youtube.com/embed/4UPvKOrn-tQ"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  title="Kemendag Videos Screen"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-96 bg-secondary w-full">asdasdas</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
