import { FaPlus } from "react-icons/fa";
import "./Materiales.css";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Components/Loading";
import { useMateriales } from "../hooks/useMateriales";
import MiniMaterialCard from "../Components/MiniMaterialCard/MiniMaterialCard";
import { useState } from "react";

const Materiales = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const { data, isError, isLoading, isSuccess } = useMateriales(list, setList);

  function ordenAlfabetico(lista) {
    const x = lista.sort((a, b) => a.material.localeCompare(b.material));
    return x;
  }

  const handleChange = (e) => {
    const y = data.data.filter((x) =>
      x.material.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setList([...y]);
  };

  return (
    <>
      {isLoading && <Loading />}
      {isError && <div className="page">Hubo un error</div>}
      {isSuccess && (
        <div className="page">
          <div className="materiales-title">
            <h1>Materiales</h1>
            <button
              className="btn add-material"
              onClick={() => navigate("/registrar")}
            >
              <FaPlus />
            </button>
          </div>
          <div className="materiales-filtro">
            <label>Filtro por nombre: </label>
            <input type="text" onChange={handleChange} />
          </div>
          <div className="materiales-container">
            <div className="material-list">
              {list.length > 0 ? (
                ordenAlfabetico(list).map((mat, index) => {
                  return (
                    <div key={index} className="material-element">
                      <MiniMaterialCard
                        estado={mat.estado}
                        id={mat.id}
                        material={mat.material}
                        observaciones={mat.observaciones}
                        timpestamp={mat.timestamp}
                        ubicacion={mat.ubicacion}
                        ultimaActividad={mat.ultimaActividad}
                      />
                    </div>
                  );
                })
              ) : (
                <p>No hay materiales</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Materiales;
