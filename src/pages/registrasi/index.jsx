import React from 'react';
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import JudulHalaman from '../../component/JudulHalaman';
import Navbar from '../../component/Navbar';

const Registrasi = () => {
  return (
    <div className="bg-white">
      <Header />
      <Navbar />
      <div className="bg-white">
        <JudulHalaman namaHalaman="REGISTRASI" />
        <div className="flex my-5 justify-center items-center">
          <div className="border-green-500 w-[50%]">
            <h3 className="text-xl font-bold text-center text-gray-800 mb-10">Silahkan pilih jenis hak akses dibawah ini:</h3>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 justify-center ">
              <div className="bg-[#607d8b] rounded p-2 text-white h-44">
                <div className="flex justify-center">
                  <img src="perorangan.png" width="60%" alt="" />
                </div>
                <p className="text-lg font-bold text-center">Surveyor</p>
              </div>
              <div className="bg-[#607d8b] rounded p-2 text-white h-44">
                <div className="flex justify-center">
                  <img src="perorangan.png" width="60%" alt="" />
                </div>
                <p className="text-lg font-bold text-center">Angkutan Laut</p>
              </div>
              <div className="bg-[#607d8b] rounded p-2 text-white h-44">
                <div className="flex justify-center">
                  <img src="perorangan.png" width="60%" alt="" />
                </div>
                <p className="text-lg font-bold text-center">Tembusan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registrasi;
