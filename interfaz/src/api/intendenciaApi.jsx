import { useState } from 'react'
import axios from "axios";
import { getToken } from '../store/Logeado';


// export const intendenciaApi = axios.create({
//     baseURL: 'https://gsaa-intendencia.onrender.com'
// })



export const getMaterial = async () => {
  try {
    const res = await axios({
      url: 'https://gsaa-intendencia.onrender.com/api/material/',
      method: 'GET',
      headers: {
        'Authorization': `Token ${getToken()}`
      },
    });
    return res;
  } catch (error) {
    console.log(error)
  }
}

export const createMaterial = async (data) => {
  try{
    const res = await axios({
      url: 'https://gsaa-intendencia.onrender.com/api/material/',
      method: 'POST',
      data: {data},
      headers: {
        'Authorization': `Token ${getToken()}`
      },
    });
    return res
  } catch (error) {
    console.log(error);
  }
}

export const getMaterialById = async (id_material) => {
  try {
    const res = await axios({
      url: `https://gsaa-intendencia.onrender.com/api/editar/${id_material}`,
      method: 'GET',
      headers: {
        'Authorization': `Token ${getToken()}`
      },
    })
    return res
  } catch (error) {
    console.log(error)
  }
}

export const editarMaterialById = async (id_material, data) => {
  try {
    const res = await axios({
      url: `https://gsaa-intendencia.onrender.com/api/editar/${id_material}`,
      method: 'PUT',
      data: {data},
      headers: {
        'Authorization': `Token ${getToken()}`
      },
    })
    return res
  } catch (error) {
    console.log(error)
  }
}

export const getTokenLogin = async (data) => {
  try {
    const res = await axios({
      url: 'https://gsaa-intendencia.onrender.com/api/login/',
      method: 'POST',
      data: {data},
    })
    return res
  } catch (error) {
    console.log(error)
  }
}