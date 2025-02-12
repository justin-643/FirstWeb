import React from 'react'

const Header = () => {
    
  const image = require(`../Media/${"Logo.webp"}`);

  
  return (
    <div>
      {/* Navbar */}
      <nav>
        <div  className="logo">
          <img src={image} alt="Error.." height="40" width="50" />
          <h1 className='LOGO'>Health care </h1>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href='Screen3'>Admin</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
