import React from 'react'
import './MaterialCard.css'

const MaterialCard = ( {
      estado,
      id,
      material,
      observaciones,
      timpestamp,
      ubicacion,
      ultimaActividad
    } ) => {
  
  return (
    <div key={id} className='material-card-conteiner'>
      <h2>{material}</h2>
      <hr />
      <div className='material-card-section2'>
        <div><strong>Estado:</strong> {estado}</div>
        <div><strong>Ultima Actividad:</strong> {ultimaActividad}</div>
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
  )
}

export default MaterialCard