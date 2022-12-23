import React from 'react';

const Portal = () => {
  return (
    <div className=" p-4 lg:p-20 bg-[#bcbcbc]">
      <h2 className="text-xl mb-3 font-semibold md:text-center text-center lg:text-start">PERIZINAN EKSPOR-IMPOR YANG TERKIRIM KE PORTAL INSW</h2>
      <div className="lg:flex gap-5">
        <div className="w-full lg:w-[75%] mb-5 lg:mb-0">
          <div className="flex mb-3 gap-5 text-center p-4 rounded-lg bg-primary text-white shadow items-center">
            <div className="w-[33%] h-auto break-words">No Pengajuan INSW</div>
            <div className="w-[33%] h-auto break-words">No Permohonan INATRADE</div>
            <div className="w-[33%] h-auto break-words">Tanggal Kirim</div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="flex border-b items-center gap-5  p-3">
              <div className="w-[33%] h-auto break-words">4000083DBA8252112202200001</div>
              <div className="w-[33%] h-auto break-words">84147/INATRADE/12/2022</div>
              <div className="w-[33%] h-auto break-words">Kamis, 22 Desember 2022 22.37.18 WIB</div>
            </div>
            <div className="flex border-b items-center gap-5  p-3">
              <div className="w-[33%] h-auto break-words">4000083DBA8772112202200001</div>
              <div className="w-[33%] h-auto break-words">84147/INATRADE/12/2022</div>
              <div className="w-[33%] h-auto break-words">Kamis, 22 Desember 2022 20.01.48 WIB</div>
            </div>
            <div className="flex border-b items-center gap-5 p-3">
              <div className="w-[33%] h-auto break-words">4000083DBA8792112202200001</div>
              <div className="w-[33%] h-auto break-words">83755/INATRADE/12/2022</div>
              <div className="w-[33%] h-auto break-words">Kamis, 22 Desember 2022 20.01.38 WIB</div>
            </div>
          </div>
        </div>
        <div className="lg:w-[25%] w-full border bg-white rounded-lg p-5 text-center">
          <h3 className="text-5xl font-bold">5882</h3>
          <p className="font-bold mb-8">JUMLAH TERKIRIM BULAN INI</p>
          <div className="flex justify-center">
            <button className="btn btn-primary">Lihat Selengkapnya</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;
