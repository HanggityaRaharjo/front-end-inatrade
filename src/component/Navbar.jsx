import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/navbar.css';

const Navbar = () => {
  const [navResponsive, setNavResponsive] = useState(false);
  const [perizinan, setPerizinan] = useState(false);
  const NavResponsive = () => {
    setNavResponsive(!navResponsive);
  };
  const togglePerizinan = () => {
    setPerizinan(!perizinan);
  };

  return (
    <div className="w-full bg-primary relative z-20">
      {/* NavMenu */}
      <div className="text-white h-full  hidden text-sm py-6 px-32  lg:flex items-center gap-8 font-bold">
        <Link to={'/'}>
          <button>BERANDA</button>
        </Link>

        {/* Dropdown Perizinan */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="py-7 ">
            PERIZINAN
          </label>

          <ul tabIndex={0} className="dropdown-content menu shadow bg-accent translate-y-6 w-52 text-xs font-normal">
            <li className="hover:bg-green-500 bg-[#022133] border-b-[0.1px] border-gray-600">
              <button onClick={togglePerizinan}>DITJEN DAGLU</button>
            </li>
            <li className={perizinan ? 'hover:bg-green-500' : 'hidden'}>
              <a>Item 2</a>
            </li>
          </ul>
        </div>

        {/* End Dropdown Perizinan */}
        {/* Dropdown LAYANAN */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="py-7 ">
            LAYANAN
          </label>

          <ul tabIndex={0} className="dropdown-content menu shadow bg-accent translate-y-6 w-52 text-xs font-normal">
            <li className="hover:bg-green-500 border-b-[0.1px] border-gray-600">
              <a>STATUS PERMOHONAN</a>
            </li>
            <li className="hover:bg-green-500 border-b-[0.1px] border-gray-600">
              <a>STATUS LS</a>
            </li>
            <li className="hover:bg-green-500 border-b-[0.1px] border-gray-600">
              <a>SOSIALISASI</a>
            </li>
            <li className="hover:bg-green-500 border-b-[0.1px] border-gray-600">
              <a>STATUS PERMOHONAN</a>
            </li>
          </ul>
        </div>

        {/* End Dropdown LAYANAN */}

        <Link to={'/registrasi'}>REGISTRASI</Link>
        <Link to={'/unduh'}>UNDUH</Link>
        <button>BANTUAN</button>
        <button>PENCARIAN</button>
      </div>
      {/* End NavMenu */}
      {/* Nav Mobile */}
      <div className="py-6 px-16 lg:p-0">
        <div className="lg:hidden flex items-center">
          {!navResponsive ? (
            <button onClick={NavResponsive} className="animasi-nav">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          ) : (
            <button onClick={NavResponsive} className="animasi-nav">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
      {/* End Nav Mobile */}

      {/* Nav Mobile Menu */}
      <div className={navResponsive ? 'block absolute -translate-y-1 w-full z-50 lg:hidden' : 'hidden'}>
        <Link to={'/'}>
          <div className="border-t-[1px] border-gray-600 h-14 bg-accent flex items-center px-5 text-white hover:bg-green-500">BERANDA</div>
        </Link>
        <div className="border-t-[1px] border-gray-600 h-14 bg-accent flex items-center px-5 text-white hover:bg-green-500">
          <button>PERIZINAN</button>
        </div>
        <div className="border-t-[1px] border-gray-600 h-14 bg-accent flex items-center px-5 text-white hover:bg-green-500">
          <button>LAYANAN</button>
        </div>
        <div className="border-t-[1px] border-gray-600 h-14 bg-accent flex items-center px-5 text-white hover:bg-green-500">
          <button>REGISTRASI</button>
        </div>
        <div className="border-t-[1px] border-gray-600 h-14 bg-accent flex items-center px-5 text-white hover:bg-green-500">
          <button>UNDUH</button>
        </div>
        <div className="border-t-[1px] border-gray-600 h-14 bg-accent flex items-center px-5 text-white hover:bg-green-500">
          <button>BANTUAN</button>
        </div>
        <div className="border-t-[1px] border-gray-600 h-14 bg-accent flex items-center px-5 text-white hover:bg-green-500">
          <button>PENCARIAN</button>
        </div>
      </div>
      {/* End Nav Mobile Menu */}
    </div>
  );
};

export default Navbar;
