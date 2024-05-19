import React, { useState } from 'react'
import './MaterialCard.css'
import { useNavigate } from 'react-router-dom'

const MaterialCard = ( {
      estado,
      id,
      material,
      observaciones,
      timpestamp,
      ubicacion,
      ultimaActividad
    } ) => {

  const navigate = useNavigate()
  const [mensajito,setMensajito] = useState(false)
  const toEdit = () => {
    navigate(`/editar/${id}`)
  }

  const toDelete = () => {
    setMensajito(true)
  }

  return (
    <>
    <div key={id} className='material-card-conteiner'>
      <div className='material-card-info'>
        <h2>{material}</h2>
        <hr />
        <div className='material-card-section2'>
          <div><strong>Estado:</strong> {estado}</div>
          <div><strong>Última Actividad:</strong> {ultimaActividad}</div>
        </div>
        <hr />
        <div className='material-obs'>
          <p>{observaciones}</p>
        </div>
        <hr />
        <div className='material-card-section2'>
          <div><strong>Ubicación:</strong> {ubicacion}</div>
          <div><strong>Registrado en:</strong> {timpestamp}</div>
        </div>
      </div>
      <div className='material-card-edit'>
        <button 
          className='btn btn-edit'
          onClick={toEdit}
        >
          Editar
        </button>
        <button 
          className='btn btn-delete'
          onClick={toDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
    {
      mensajito ? <div className='mensajito'>Solicitar a Richi la eliminación</div> : ""
    }
    </>
  )
}

export default MaterialCard