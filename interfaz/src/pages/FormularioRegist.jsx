import React from 'react'
import './FormularioRegist.css'
import { createMaterial } from '../api/intendenciaApi'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const FormularioRegist = () => {

  const navigate = useNavigate();
  const { register, 
    handleSubmit, 
    formState: {errors}, 
    watch, 
    setValue, 
    reset 
  } = useForm({
    defaultValues:{
        nombre: '',
        estado: '',
        observaciones: '',
        ultimaActividad: '',
        ubicacion: '',
    },
  });

  const onSubmit = handleSubmit( (data) => {
    console.log(data);
    const res = createMaterial(data);
    res.then(navigate('/materiales'));
    // reset()
  })

  return (
    <div className='page'>
      <div className='add-container'>
        <div className='add-title'>
          <h1>Agregar material a la lista de intendencia</h1>
        </div>
        <form onSubmit={onSubmit}>
          <fieldset>
            <legend>Datos</legend>
              <div className='form-element'>
                <label htmlFor="">
                  Nombre: 
                </label>
                <input 
                  type="text" 
                  name='nombre'
                  {
                    ...register("nombre",{
                        required: {
                            value: true,
                            message: 'Nombre es requerido',
                        },
                    })
                  }
                />
                {
                    errors.nombre?.type==='required' && 
                    <div className='form-element-error'>
                        <span>{errors.nombre.message}</span>
                    </div>
                }
              </div> 
              <div className='form-element'>
                <label htmlFor="">
                  Estado: 
                </label>
                <select 
                  name="estado" 
                  id="estado" 
                  {
                    ...register("estado", {
                        required: {
                            value: true,
                            message: "Estado es requerido"
                        }
                    })
                  }
                >
                    <option value="B">Bueno</option>
                    <option value="R">Regular</option>
                    <option value="M">Malo</option>
                </select>
                {
                    errors.estado?.type==='required' &&
                    <div className='form-element-error'>
                        <span>{errors.estado.message}</span>
                    </div>
                }
              </div>
              <div className='form-element'>
                <label htmlFor="">
                  Observaciones: 
                </label>
                <textarea 
                  maxLength={1000} 
                  rows={5} 
                  cols={50}
                  name='observaciones'
                  {
                    ...register('observaciones',{
                        required: {
                            value: true,
                            message: 'Observaciones son requeridas'
                        }
                    })
                  }
                />
                {
                    errors.observaciones?.type==='required' &&
                    <div className='form-element-error'>
                        <span>{errors.observaciones.message}</span>
                    </div>
                }
              </div>
              <div className='form-element'>
                <label htmlFor="">
                  Última actividad: 
                </label>
                <input 
                  type="text"
                  name='ultimaActividad'
                  {
                    ...register("ultimaActividad", {
                        required: {
                            value: true,
                            message: "Última actividad es requerida"
                        }
                    })
                  } 
                />
                {
                    errors.ultimaActividad?.type==='required' &&
                    <div className='form-element-error'>
                        <span>{errors.ultimaActividad.message}</span>
                    </div>
                }
              </div>
              <div className='form-element'>
                <label htmlFor="">
                  Ubicación: 
                </label>
                <input 
                  type="text"
                  name='ubicacion'
                  {
                    ...register("ubicacion", {
                        required: {
                            value: true,
                            message: "Ubicación es requerida"
                        }
                    })
                  } 
                />
                {
                    errors.ubicacion?.type==='required' &&
                    <div className='form-element-error'>
                        <span>{errors.ubicacion.message}</span>
                    </div>
                }
              </div>

              <div className='enviar-btn'>
                <button className='btn btn-enviar' >Registrar</button>
              </div>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default FormularioRegist