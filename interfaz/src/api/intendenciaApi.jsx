import axios from "axios";
import { getToken } from "../store/Logeado";

// export const intendenciaApi = axios.create({
//     baseURL: 'https://gsaa-intendencia.onrender.com'
// })

export const getMaterial = async () => {
  return await axios({
    url: "https://gsaa-intendencia.onrender.com/api/material/",
    method: "GET",
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  });
};

export const createMaterial = async (data) => {
  return await axios({
    url: "https://gsaa-intendencia.onrender.com/api/material/",
    method: "POST",
    data: { data },
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  });
};

export const getMaterialById = async (id_material) => {
  const res = await axios({
    url: `https://gsaa-intendencia.onrender.com/api/editar/${id_material}`,
    method: "GET",
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  });
  return res;
};

export const editarMaterialById = async (data) => { //id_material, data
  const res = await axios({
    url: `https://gsaa-intendencia.onrender.com/api/editar/${data.id_material}`,
    method: "PUT",
    data: { data },
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  });
  return res;
};

export const getTokenLogin = async (data) => {
  const res = await axios({
    url: "https://gsaa-intendencia.onrender.com/api/login/",
    method: "POST",
    data: { data },
  });
  return res;
};
