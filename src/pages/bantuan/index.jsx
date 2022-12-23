import React from 'react';
import Header from '../../component/Header';
import HeaderHalaman from '../../component/HeaderHalaman';
import JudulHalaman from '../../component/JudulHalaman';
import Navbar from '../../component/Navbar';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import Footer from '../../component/Footer';

const Bantuan = () => {
  return (
    <div className="bg-white">
      <Header />
      <Navbar />
      <HeaderHalaman gambar="bantuan.png" />
      <JudulHalaman namaHalaman="BANTUAN" />
      <div className="px-44 mb-10">
        {/* Heldesk */}
        <div className="border-b border-gray-300 py-5 mb-3">
          <h1 className="text-xl text-center mb-5">Helpdesk & Call Center ( 7 x 24 jam )</h1>
          <div className="lg:flex block gap-5 md:block">
            <div className="h-20 shadow-lg  mb-3 items-center p-2 border w-80 rounded-lg flex gap-5 hover:bg-green-500 hover:text-white transition duration-150">
              <FaPhoneAlt size={30} />
              <div>
                <p className="text-xl ">Telepon</p>
                <p>1 500 067</p>
              </div>
            </div>
            <div className="h-20 shadow-lg items-center p-2 border w-80 rounded-lg flex gap-5 hover:bg-green-500 hover:text-white transition duration-150">
              <IoMdMail size={30} />
              <div>
                <p className="text-xl ">Email</p>
                <p>cs-inatrade@kemendag.go.id</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Heldesk */}
        {/* Konsultasi */}
        <div className=" border-gray-300  py-5">
          <h1 className="text-xl text-center mb-5">Konsultasi Online</h1>
          <h3 className="text-lg">Layanan UPTP I - Bidang Perdagangan Luar Negeri</h3>
          <p className="text-gray-800 mb-2">Senin s.d Jumat ( 10.00 - 15.00 WIB )</p>
          <div className=" shadow-lg border rounded-lg p-3">
            <img src="zoom.png" width="8%" alt="" />
            <div className="grid w-[70%] grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 p-5">
              <div className="border p-5 rounded shadow-lg hover:bg-green-500 hover:text-white transition duration-150">
                <p className="mb-2">Direktorat Ekspor Produk Pertanian dan Kehutanan</p>
                <p>Meeting id: 592 008 4499</p>
                <p>Passcode: dektanhut</p>
              </div>
              <div className="border p-5 rounded shadow-lg hover:bg-green-500 hover:text-white transition duration-150">
                <p className="mb-2">Direktorat Ekspor Produk Industri dan Pertambangan</p>
                <p>Meeting id: 610 066 5919</p>
                <p>Passcode: dekintam</p>
              </div>
              <div className="border p-5 rounded shadow-lg hover:bg-green-500 hover:text-white transition duration-150">
                <p className="mb-3">Direktorat Impor</p>
                <p>Meeting id: 799 863 7042</p>
                <p>Passcode: ditimpor</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Konsultasi */}
        {/* Whatsapp */}
        <div className=" border-gray-300  py-5">
          <div className=" shadow-lg border rounded-lg p-3">
            <img src="wa.png" width="8%" alt="" />
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 p-5">
              <div className="border flex justify-center items-center p-4 rounded shadow-lg hover:bg-green-500 hover:text-white transition duration-150">
                <p>081-383-500741</p>
              </div>
              <div className="border flex justify-center items-center p-4 rounded shadow-lg hover:bg-green-500 hover:text-white transition duration-150">
                <p>081-382-299146</p>
              </div>
              <div className="border flex justify-center items-center p-4 rounded shadow-lg hover:bg-green-500 hover:text-white transition duration-150">
                <p>081-382-299128</p>
              </div>
              <div className="border flex justify-center items-center p-4 rounded shadow-lg hover:bg-green-500 hover:text-white transition duration-150">
                <p>081-381-286289</p>
              </div>
            </div>
            <p className="mx-5">*Konsultasi hanya menggunakan pesan teks</p>
          </div>
        </div>
        {/* End Whatsapp */}
      </div>
      <Footer />
    </div>
  );
};

export default Bantuan;
