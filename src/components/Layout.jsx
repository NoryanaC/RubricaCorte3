import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
import Clientes from './Clientes'
import Facturas from './Facturas';
import Inicio from './Inicio';
import Navbar from './Navbar'
import Producto from './Producto';

const Layout = () => {
  return (
    <>
 <Router>
    <Navbar/>
   <div className='container'>
   <Routes>
    <Route path='/' element={<Inicio/>}/>
    <Route path="/clientes" element={<Clientes/>}/>
    <Route path="/productos" element={<Producto/>}/>
    <Route path="/facturas" element={<Facturas/>}/>
  </Routes>
   </div>
 </Router>
    </>
  )
}

export default Layout