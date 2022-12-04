import React from 'react'
import { Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
         <div className='navbar navbar-dark bg-primary mb-3'>
         <Link className='navbar-brand' to="/"><h2>Mini Market</h2></Link>
         <div className='d-flex'>
         <Link to = "/clientes" className='btn btn-primary mr-3'><h5>Clientes</h5></Link>
         <Link to = "/productos" className='btn btn-primary mr-3'><h5>Productos</h5></Link>
         <Link to = "/facturas" className='btn btn-primary mr-3'><h5>Facturas</h5></Link>
         </div>
         </div>

    </div>
  )
}

export default Navbar