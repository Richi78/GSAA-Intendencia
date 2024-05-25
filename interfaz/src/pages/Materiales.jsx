import { FaPlus } from "react-icons/fa";
import "./Materiales.css";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Components/Loading";
import { useMateriales } from "../hooks/useMateriales";
import MiniMaterialCard from "../Components/MiniMaterialCard/MiniMaterialCard";

const Materiales = () => {
  const navigate = useNavigate();

  const { data, isError, isLoading, isSuccess } = useMateriales();

  function ordenAlfabetico(lista){
    return lista.sort((a, b) => a.material.localeCompare(b.material))
  }

  return (
    <>
      {isLoading && <Loading />}
      {isError && <div className="page">Hubo un error</div>}
      {isSuccess && (
        <div className="page materiales-container">
          <div className="materiales-title">
            <h1>Materiales</h1>
            <button
              className="btn add-material"
              onClick={() => navigate("/registrar")}
            >
              <FaPlus />
            </button>
          </div>
          <div className="material-list">
            {data.data.length > 0 ? (
              ordenAlfabetico(data.data).map((mat, index) => {
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
      )}
    </>
  );
};

export default Materiales;
