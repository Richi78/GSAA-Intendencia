import React from 'react'
import './Login.css'
import logo from '../../public/logo.png'
import Button from '@mui/material/Button';

const Login = () => {
  return (
    <div className='page jaja'>
      <div className='login-container'>
        <div className='logo-gsaa'>
          <img 
            src={logo} 
            alt="logo gsaa" 
            />
        </div>
        <form className='form-login' action="">
          <label className='label-uwu' htmlFor=''>
              <p>Usuario</p>
              <input className='input-login' type="text" />
          </label>
          <label className='label-uwu' htmlFor="">
              <p>Contraseña</p>
              <input className='input-login' type="text" />
          </label>
          <div className='iniciar-sesion'>
            {/* <button>Iniciar Sesión</button> */}
            <Button variant="contained">Iniciar Sesión</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login