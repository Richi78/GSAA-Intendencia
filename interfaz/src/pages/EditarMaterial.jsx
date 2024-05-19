import React, { useEffect, useState } from 'react'
import './FormularioRegist.css'
import { editarMaterialById, getMaterialById } from '../api/intendenciaApi'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const EditarMaterial = () => {

    const id = useParams();
    const [datos, setDatos] = useState(null)
    const navigate = useNavigate();
    const { register, 
      handleSubmit, 
      formState: {errors},
      setValue,
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
      const res = editarMaterialById(id.id_material, data);
      res.then( (x) => console.log(x))
      res.catch((error)=>console.log(error))
      res.then(navigate('/materiales'));
    })
    
    useEffect(() => {
        const x = getMaterialById(id.id_material)
        x.then((res)=>{
            setDatos(res.data);
            setValue('nombre', res.data.material);
            setValue('estado', res.data.estado);
            setValue('observaciones', res.data.observaciones);
            setValue('ultimaActividad', res.data.ultimaActividad);
            setValue('ubicacion', res.data.ubicacion);
        })
        x.catch((error)=>console.log(error))
    }, [])

    if (!datos){
        return <div>Cargandin</div>
    } else{
        return (
          <div className='page'>
            <div className='add-container'>
              <div className='add-title'>
                <h1>Editar información de material</h1>
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
                      <button className='btn btn-enviar' >Editar</button>
                    </div>
                </fieldset>
              </form>
            </div>
          </div>
        )
    }
}

export default EditarMaterial