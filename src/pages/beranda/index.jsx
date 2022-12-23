import React from 'react';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import SliderHero from '../../component/SliderHero';
import CardService from '../../component/CardService';
import Portal from '../../component/Portal';
import SliderBerita from '../../component/SliderBerita';
import SliderYoutube from '../../component/SliderYoutube';
import Map from '../../component/Map';
import CardBrand from '../../component/CardBrand';
import Footer from '../../component/Footer';

const Beranda = () => {
  return (
    <>
      <Header />
      <Navbar />
      <SliderHero />
      <CardService />
      <Portal />
      <SliderBerita />
      <SliderYoutube />
      <Map />
      <CardBrand />
      <Footer />
    </>
  );
};

export default Beranda;
