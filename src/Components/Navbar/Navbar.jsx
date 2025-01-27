import React from 'react'
import './Navbar.css'
import logo from '../../assets/Wul3.jpg'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Inicio</li>
            <li>Quienes somos</li>
            <li>El equipo</li>
            <li>Nuestros logros</li>
            <li><button className='btn'>Contactenos</button></li>
        </ul>
    </nav>
  )
}

export default Navbar