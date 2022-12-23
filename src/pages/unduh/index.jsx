import React from 'react';
import Header from '../../component/Header';
import HeaderHalaman from '../../component/HeaderHalaman';
import JudulHalaman from '../../component/JudulHalaman';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import CardUnduh from '../../component/CardUnduh';

const Unduh = () => {
  return (
    <div className="bg-white">
      <Header />
      <Navbar />
      <HeaderHalaman gambar="bg-unduh.png" />
      <JudulHalaman namaHalaman="UNDUH" />
      <div className="border px-5 py-5 lg:px-56">
        <CardUnduh nama="Kebijakan dan Pengaturan Ekspor" />
        <CardUnduh nama="Kebijakan dan Pengaturan Impor" />
        <CardUnduh nama="Perubahan Atas Permendag Nomor 19 Tahun 2021 Tentang Kebijakan dan Pengaturan Ekspor" />
        <CardUnduh nama="Barang Dilarang Ekspor dan Barang Dilarang Impor" />
      </div>
      <Footer />
    </div>
  );
};

export default Unduh;
