import React, {useState, useEffect} from 'react';
import { getMaterial } from "../api/intendenciaApi";
import MaterialCard from '../Components/MaterialCard/MaterialCard';
import './Materiales.css'

const Materiales = () => {
  
  const [material, setMaterial] = useState([])

  useEffect(()=> {
    const get = getMaterial()
    get.then((data) => {
      setMaterial(data.data)
      console.log(data.data)
    })
  },[])

  if (material.length===0) {
    return <div>Cargandin</div>
  } else if (material.length>0){
    return (
      <div className='page materiales-container'>
        <div className='materiales-title'>
          <h1>Materiales</h1>
        </div>
        <div className='material-list'>
          {
              material.length>0 ?
              material.map((mat, index) => {
                  return <div key={index} className='material-element'>
                    <MaterialCard 
                      estado={mat.estado}
                      id={mat.id}
                      material={mat.material}
                      observaciones={mat.observaciones}
                      timpestamp={mat.timestamp}
                      ubicacion={mat.ubicacion}
                      ultimaActividad={mat.ultimaActividad}
                    />
                  </div>
              })
              : <p>No hay materiales</p>
          }
        </div>
      </div>
    )
  }
}

export default Materiales