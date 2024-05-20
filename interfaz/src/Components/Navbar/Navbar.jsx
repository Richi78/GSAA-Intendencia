import React from 'react'
import './Navbar.css'
import { useUsuarioStore } from '../../store/Logeado'

const Navbar = () => {

  const {token} = useUsuarioStore()

  const onClick = () => {
    window.localStorage.clear()
    window.location.reload()
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