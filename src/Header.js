import React from 'react'

const Header = () => {

  
  return (
    <div>
      {/* Navbar */}
      <nav>
        <div className="logo">
          <img src="https://static.vecteezy.com/system/resources/previews/017/196/552/non_2x/doctor-icon-on-transparent-background-free-png.png" alt="Error.." height="40" width="50" />
          <h1 className='LOGO'>Health care </h1>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
