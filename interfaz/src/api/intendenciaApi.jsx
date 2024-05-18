import { useState } from 'react'
import axios from "axios";

// export const intendenciaApi = axios.create({
//     baseURL: 'https://gsaa-intendencia.onrender.com'
// })

export const getMaterial = async () => {
  try {
    const res = await axios({
      url: 'http://localhost:8000/api/material/',
      method: 'GET',
    });
    return res;
  } catch (error) {
    console.log(error)
  }
}

