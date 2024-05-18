import React from 'react'
import './FormularioRegist.css'
import { TextareaAutosize } from '@mui/material'

const FormularioRegist = () => {

  return (
    <div className='page'>
      <div className='add-container'>
        <div className='add-title'>
          <h1>Agregar material a la lista de intendencia</h1>
        </div>
        <form action="">
          <fieldset>
            <legend>Datos</legend>
              <div className='form-element'>
                <label htmlFor="">
                  Nombre: 
                </label>
                <input type="text" />
              </div> 
              <div className='form-element'>
                <label htmlFor="">
                  Estado: 
                </label>
                <select name="" id="">
                    <option value="B">Bueno</option>
                    <option value="R">Regular</option>
                    <option value="M">Malo</option>
                </select>
              </div>
              <div className='form-element'>
                <label htmlFor="">
                  Observaciones: 
                </label>
                <textarea maxLength={1000} rows={5} cols={50}></textarea>
              </div>
              <div className='form-element'>
                <label htmlFor="">
                  Última actividad: 
                </label>
                <input type="text" />
              </div>
              <div className='form-element'>
                <label htmlFor="">
                  Ubicación: 
                </label>
                <input type="text" />
              </div>

              <div className='enviar-btn'>
                <button className='btn btn-enviar'>Registrar</button>
              </div>
          </fieldset>
          
        </form>
      </div>
    </div>
  )
}

export default FormularioRegist