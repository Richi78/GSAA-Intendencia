import MaterialCard from "../Components/MaterialCard/MaterialCard";
import { FaPlus } from "react-icons/fa";
import "./Materiales.css";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Components/Loading";
import { useMateriales } from "../hooks/useMateriales";

const Materiales = () => {
  const navigate = useNavigate();

  const { data, isError, isLoading, isSuccess } = useMateriales();

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
              data.data.map((mat, index) => {
                return (
                  <div key={index} className="material-element">
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
