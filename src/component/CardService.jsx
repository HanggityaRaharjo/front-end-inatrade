import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

export default function CardService() {
  return (
    <>
      <div className="h-[600px] p-5 lg:p-20 md:p-14 bg-white">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full h-full group relative">
              <div className="h-44 rounded-lg bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url('download.jfif')` }}>
                <div className="w-full h-full group-hover:bg-green-400 group-hover:bg-opacity-30 transition duration-300"></div>
              </div>
              <div className="absolute h-16 w-16 flex justify-center items-center rounded-full bg-white left-1/2 -translate-x-1/2 top-[145px]">
                <div className="h-12 w-12 flex justify-center items-center bg-green-500 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </div>
              <div className="text-start mt-10 p-5">
                <p className="font-semibold text-2xl">STATUS</p>
                <p className="font-semibold text-2xl">PERMOHONAN</p>
              </div>
              <div className="text-start text-sm text-gray-500 p-5">
                <p>Silahkan cek status terkini permohnan Anda di halaman ini.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full group relative">
              <div className="h-44 rounded-lg bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url('download (1).jfif')` }}>
                <div className="w-full h-full group-hover:bg-green-400 group-hover:bg-opacity-30 transition duration-300"></div>
              </div>
              <div className="absolute h-16 w-16 flex justify-center items-center rounded-full bg-white left-1/2 -translate-x-1/2 top-[145px]">
                <div className="h-12 w-12 flex justify-center items-center bg-green-500 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </div>
              <div className="text-start mt-10 p-5">
                <p className="font-semibold text-2xl">CALL CENTRE</p>
              </div>
              <div className="text-start text-sm text-gray-500 p-5">
                <p>Bagi Anda yang ingin menghubungi call center,silahkan klik disini.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full group relative">
              <div className="h-44 rounded-lg bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url('download (2).jfif')` }}>
                <div className="w-full h-full group-hover:bg-green-400 group-hover:bg-opacity-30 transition duration-300"></div>
              </div>
              <div className="absolute h-16 w-16 flex justify-center items-center rounded-full bg-white left-1/2 -translate-x-1/2 top-[145px]">
                <div className="h-12 w-12 flex justify-center items-center bg-green-500 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </div>
              <div className="text-start mt-10 p-5">
                <p className="font-semibold text-2xl">REALISASI API</p>
              </div>
              <div className="text-start text-sm text-gray-500 p-5">
                <p>Bagi anda yang ingin melakukan realisasi api,silahkan klik link di sini.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full group relative">
              <div className="h-44 rounded-lg bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url('download (3).jfif')` }}>
                <div className="w-full h-full group-hover:bg-green-400 group-hover:bg-opacity-30 transition duration-300"></div>
              </div>
              <div className="absolute h-16 w-16 flex justify-center items-center rounded-full bg-white left-1/2 -translate-x-1/2 top-[145px]">
                <div className="h-12 w-12 flex justify-center items-center bg-green-500 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </div>
              <div className="text-start mt-10 p-5">
                <p className="font-semibold text-2xl">HAK AKSES</p>
                <p className="font-semibold text-2xl">INATRADE</p>
              </div>
              <div className="text-start text-sm text-gray-500 p-5">
                <p>Layanan yang digunakan untuk melakukan permohonan secara online dan laporan realisasi ekspor dan impor</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
