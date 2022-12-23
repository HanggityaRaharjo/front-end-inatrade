import React from 'react';

const CardUnduh = ({ nama }) => {
  return (
    <div className="h-44 rounded-2xl my-3 shadow-lg">
      <div className="flex">
        <div className="w-[30%]">
          <img src="book.png" alt="" />
        </div>
        <div className="w-[70%]">
          <h1 className="mb-10 text-2xl text-gray-700 font-bold">{nama}</h1>
          <div className="flex justify-start">
            <button className="bg-primary text-white px-5 py-2 rounded-2xl">Unduh</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUnduh;
