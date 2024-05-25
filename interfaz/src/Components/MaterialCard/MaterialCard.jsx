import { useState } from "react";
import "./MaterialCard.css";
import { useNavigate, useParams } from "react-router-dom";
import { useMaterialByID } from "../../hooks/useEditarMutation";
import { Loading } from "../Loading";

const MaterialCard = () => {
  const navigate = useNavigate();
  const id = useParams();
  const { data, isLoading, isError, isSuccess, isFetching } = useMaterialByID(
    id.id_material
  );
  const [mensajito, setMensajito] = useState(false);

  const toEdit = () => {
    navigate(`/editar/${id.id_material}`);
  };

  const toDelete = () => {
    setMensajito(true);
  };

  return (
    <>
      {isLoading || (isFetching && <Loading />)}
      {isError && <div>error</div>}
      {isSuccess && (
        <div className="page ">
          <div className="mat-con">
            <div className="foto-info-section">
              <div className="material-card-conteiner">
                <div className="material-card-info">
                  <h2>{data.data.material}</h2>
                  <hr />
                  <div className="material-card-section2">
                    <div>
                      <strong>Estado:</strong> {data.data.estado}
                    </div>
                    <div>
                      <strong>Última Actividad:</strong>{" "}
                      {data.data.ultimaActividad}
                    </div>
                  </div>
                  <hr />
                  <div className="material-obs">
                    <p>{data.data.observaciones}</p>
                  </div>
                  <hr />
                  <div className="material-card-section2">
                    <div>
                      <strong>Ubicación:</strong> {data.data.ubicacion}
                    </div>
                    <div>
                      <strong>Registrado en:</strong> {data.data.timestamp}
                    </div>
                  </div>
                </div>
                <div className="material-card-edit">
                  <button className="btn btn-edit" onClick={toEdit}>
                    Editar
                  </button>
                  <button className="btn btn-delete" onClick={toDelete}>
                    Eliminar
                  </button>
                </div>
              </div>
              <div className="seccion-fotos">
                Próximamente fotos en esta sección
              </div>
              {mensajito ? (
                <div className="mensajito">
                  Solicitar a Richi la eliminación
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MaterialCard;
