import React from 'react'
import { Link } from 'react-router-dom'
import CartW from './CartWidget'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      
  <div className="container-fluid">
  <img src="https://ibb.co/BCJm942" className="navbar-brand" width="100px" alt="LogoHardComputers" />
    <Link  to="/" className="navbar-brand" href="/">HardComputers</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/QuienesSomos" className="nav-link active" aria-current="page" href="/">Quienes somos</Link>
        <Link to="/Productos" className="nav-link" href="/">Productos</Link>
        <Link to="/ComoLlegar" className="nav-link" href="/">Como llegar</Link>
      
        <CartW/>
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar