import React, { useEffect } from 'react'
import './Login.css'
import logo from '../../public/logo.png'
// import Button from '@mui/material/Button';
import { useUsuarioStore } from '../store/Logeado';
import { useForm } from "react-hook-form";
import { getTokenLogin } from '../api/intendenciaApi';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate()
  const { token, user, setToken, setUser } = useUsuarioStore()

  const {register, 
    handleSubmit, 
    formState: {errors}
  } = useForm({
    defaultValues: {
      usuario: '',
      password: '',
    },
  })

  const onSubmit = handleSubmit( (data) => {
    const res = getTokenLogin(data)
    res.then((res) => {
      setToken(res.data.token)
      setUser(res.data.user)
      window.localStorage.setItem('loggedUser', JSON.stringify(res.data.token))
      navigate('/materiales')
    })
    res.catch((error) => console.log(error))
  })

  return (
    <div className='page jaja'>
      <div className='login-container'>
        <div className='logo-gsaa'>
          <img 
            src={logo} 
            alt="logo gsaa" 
            />
        </div>
        <form className='form-login' onSubmit={onSubmit}>
          <div className='label-uwu'>
              <label>Usuario</label>
              <input 
                className='input-login' 
                type="text"
                name='usuario' 
                {
                  ...register('usuario',{
                    required:{
                      value: true,
                      message: 'Usuario obligatorio',
                    },
                  })
                }
              />
              {
                errors.usuario?.type==='required' && 
                <div className='login-error'>{errors.usuario.message}</div>
              }
          </div>
          <div className='label-uwu'>
              <label>Contraseña</label>
              <input 
                className='input-login' 
                type="password" 
                name='password'
                {
                  ...register('password',{
                    required: {
                      value: true,
                      message: 'Contraseña requerida',
                    },
                  })
                }
              />
              {
                errors.password?.type==='required' && 
                <div className='login-error'>{errors.password.message}</div>
              }
          </div>
          <div className='iniciar-sesion'>
            <button className='btn btn-login'>Iniciar Sesión</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login