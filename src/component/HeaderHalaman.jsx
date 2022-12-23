import React from 'react';

const HeaderHalaman = ({ gambar }) => {
  return <div className="h-72 bg-cover relative  bg-bottom" style={{ backgroundImage: `url('${gambar}')` }}></div>;
};

export default HeaderHalaman;
