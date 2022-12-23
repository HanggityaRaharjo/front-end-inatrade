import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Header = () => {
  return (
    <div className="lg:flex md:block px-10 py-2 bg-white">
      <div className=" lg:w-1/2 p-5 lg:flex items-center">
        <div className="flex justify-center">
          <img src="logo-kemendag.png" className="h-16" alt="" />
        </div>
        <div className="flex justify-center">
          <img src="ina.svg" className="h-8" alt="" />
        </div>
      </div>
      <div className="lg:w-1/2 p-5 flex gap-2 lg:justify-end justify-center">
        <div>
          <h5 className=" lg:text-lg gap-2 items-center justify-between flex text-[12px]">
            <FaPhoneAlt size={15} />
            Call Center: 1 500 067
          </h5>
          <p className="flex lg:text-base items-center justify-between gap-2 text-[12px]">
            <IoMdMail size={15} /> cs-inatrade@kemendag.go.id
          </p>
          <p className="text-end lg:text-base text-[12px]">( 7 x 24 jam )</p>
        </div>
        <div>
          <button className="btn btn-sm btn-accent rounded text-white">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
