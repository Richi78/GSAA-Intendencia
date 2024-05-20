import React, {useState, useEffect} from 'react';
import { getMaterial } from "../api/intendenciaApi";
import MaterialCard from '../Components/MaterialCard/MaterialCard';
import { FaPlus } from "react-icons/fa";
import './Materiales.css'
import { useNavigate } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Materiales = () => {
  
  const navigate = useNavigate();
  const [material, setMaterial] = useState([])

  useEffect(()=> {
    const get = getMaterial()
    get.then((data) => {
      setMaterial(data.data)
    })
  },[])

  if (material.length===0) {
    // return <div>Cargandin</div>
    return (
      <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
        <CircularProgress />
      </Box>
    );
  } else if (material.length>0){
    return (
      <div className='page materiales-container'>
        <div className='materiales-title'>
          <h1>Materiales</h1>
          <button 
            className='btn add-material'
            onClick={() => navigate('/registrar')}
          > 
            <FaPlus /> 
          </button>
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