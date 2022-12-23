import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import '../assets/SliderBerita.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import CardBerita from './CardBerita';

export default function SliderBerita() {
  return (
    <div className="p-6">
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-navigation-size': '25px',
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
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
          <CardBerita j1="Kemendag Menerima Kunjungan Indonesia-Korea Business Cooperation Cente ..." j2="Mendag Meninjau Harga dan Stok Bapok di Pasar Sentral Remu Sorong, Pap ..." g1="KyD9nmYv_cover.jfif" g2="7e2TNCwx_cover.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CardBerita j1="Kemendag Menerima Kunjungan Indonesia-Korea Business Cooperation Cente ..." j2="Mendag Meninjau Harga dan Stok Bapok di Pasar Sentral Remu Sorong, Pap ..." g1="KyD9nmYv_cover.jfif" g2="7e2TNCwx_cover.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
