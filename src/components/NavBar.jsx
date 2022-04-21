import React from 'react'
import CartW from './CartWidget'
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      
  <div className="container-fluid">
  <img src="https://ibb.co/BCJm942" className="navbar-brand" width="100px" alt="LogoHardComputers" />
    <a className="navbar-brand" href="#">HardComputers</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Quienes somos</a>
        <a className="nav-link" href="#">Productos</a>
        <a className="nav-link" href="#">Como llegar</a>
        <a className="nav-link disabled"></a>
        <CartW/>
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar