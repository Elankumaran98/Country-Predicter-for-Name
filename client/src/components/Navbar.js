import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import {FiMenu,FiX} from 'react-icons/fi'
import "../App.css"

function Navbar() {
  return (
    <nav className='navbar'>
        <NavLink to='/' className='nav-logo'>Mr.K</NavLink>  
        <div className='nav-icons'>
            <FiMenu/>
            <FiX/>
        </div>
        <ul className='nav-links'>
            <li className='nav-item'><Link to='/menu' className='nav-link'>Menu</Link></li>
            <li className='nav-item'><Link to='/' className='nav-link'>Home</Link></li>
            <li className='nav-item'><Link to='/predicter' className='nav-link'>Predicter</Link></li>
            <li className='nav-item'><Link to='/about' className='nav-link'>About</Link></li>

        </ul>
    </nav>
  )
}

export default Navbar