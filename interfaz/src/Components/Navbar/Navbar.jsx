import React from 'react'
import './Navbar.css'
import { useUsuarioStore } from '../../store/Logeado'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const {token} = useUsuarioStore()
  const navigate = useNavigate()

  const onClick = () => {
    window.localStorage.clear()
    navigate('/login')
  }

  return (
    <nav className='navBar'>
      <h2>Intendencia GSAA</h2>
      {
        token 
          ? <button className='btn btn-logout' onClick={onClick}>Cerrar Sesión</button>
          : ''
      }
    </nav>
  )
}

export default Navbar