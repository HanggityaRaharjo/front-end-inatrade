import React from 'react';

const CardBerita = ({ j1, j2, g1, g2 }) => {
  return (
    <div className=" w-full h-full block lg:flex gap-5">
      <div className="w-full h-56 lg:w-1/2 flex gap-2 mb-2">
        <div className="w-1/2 relative bg-cover bg-center" style={{ backgroundImage: `url('${g1}')` }}>
          <div className="absolute p-3 left-10 bg-gray-800 text-white text-center">
            <p className="text-3xl">10</p>
            <p className="text-lg">10</p>
            <p className="text-lg">2022</p>
          </div>
        </div>
        <div className="w-1/2 relative p-5">
          <h1 className="lg:text-2xl text-justify text-xs font-bold lg:text-start">{j1}</h1>
          <button className="absolute bottom-5 px-2 py-1 bg-primary text-white left-1/2 -translate-x-1/2 rounded-full lg:text-sm text-xs">Lihat Selengkapnya</button>
        </div>
      </div>
      <div className="w-full h-56 lg:w-1/2 flex gap-2 mb-2">
        <div className="w-1/2 relative bg-cover bg-center" style={{ backgroundImage: `url('${g2}')` }}>
          <div className="absolute p-3 left-10 bg-gray-800 text-white text-center">
            <p className="text-3xl">10</p>
            <p className="text-lg">10</p>
            <p className="text-lg">2022</p>
          </div>
        </div>
        <div className="w-1/2 relative p-5">
          <h1 className="lg:text-2xl text-justify text-xs font-bold lg:text-start">{j2}</h1>
          <button className="absolute bottom-5 px-2 py-1 bg-primary text-white left-1/2 -translate-x-1/2 rounded-full lg:text-sm text-xs">Lihat Selengkapnya</button>
        </div>
      </div>
    </div>
  );
};

export default CardBerita;
