import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import "../App.css"

function Navbar() {
  return (
    <nav className='navbar'>
        <NavLink to='/' className='nav-logo'>Mr.K</NavLink>  
        <ul className='nav-links'>
            <li><Link to='/' className='nav-link'>Home</Link></li>
            <li><Link to='/menu' className='nav-link'>Menu</Link></li>
            <li><Link to='/predicter' className='nav-link'>Predicter</Link></li>
            <li><Link to='/about' className='nav-link'>About</Link></li>

        </ul>
    </nav>
  )
}

export default Navbar