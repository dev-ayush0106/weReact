import React from 'react'
import "./navbar.css"
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav'>
      <h1>Logo</h1>
      <ul>
        {/* <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li> */}

        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li> */}

        <li>
          <NavLink to="/" className={({isActive})=> isActive ? "active":""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive})=> isActive ? "active":""}>About</NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({isActive})=> isActive ? "active":""}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({isActive})=> isActive ? "active":""}>Contact</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
