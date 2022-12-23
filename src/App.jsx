import React from 'react';

import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Beranda from './pages/beranda';
import Unduh from './pages/unduh';
import Registrasi from './pages/registrasi';
import './App.css';
import Bantuan from './pages/bantuan';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Beranda />,
  },
  {
    path: '/registrasi',
    element: <Registrasi />,
  },
  {
    path: '/unduh',
    element: <Unduh />,
  },
  {
    path: '/bantuan',
    element: <Bantuan />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
