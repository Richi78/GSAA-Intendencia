import "./FormularioRegist.css";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import {
  useEditMaterialByIDMutation,
  useMaterialByID,
} from "../hooks/useEditarMutation";
import { Loading } from "../Components/Loading";

const EditarMaterial = () => {
  const id = useParams();

  const {
    data: queryData,
    isLoading: queryLoading,
    isError: queryError,
    isSuccess: querySuccess,
  } = useMaterialByID(id.id_material);
  const {
    mutate,
    isLoading: mutationLoading,
    isError: mutationError,
  } = useEditMaterialByIDMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      nombre: "",
      estado: "",
      observaciones: "",
      ultimaActividad: "",
      ubicacion: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate({...id, ...data});
  });

  if (querySuccess) {
    setValue("nombre", queryData.data.material);
    setValue("estado", queryData.data.estado);
    setValue("observaciones", queryData.data.observaciones);
    setValue("ultimaActividad", queryData.data.ultimaActividad);
    setValue("ubicacion", queryData.data.ubicacion);
  }
  return (
    <>
      {queryLoading && <Loading />}
      {queryError && <div>Hubo un error, vuelve a intentarlo</div>}
      {querySuccess && (
        <div className="page">
          <div className="add-container">
            <div className="add-title">
              <h1>Editar información de material</h1>
            </div>
            <form onSubmit={onSubmit}>
              <fieldset>
                <legend>Datos</legend>
                <div className="form-element">
                  <label htmlFor="">Nombre:</label>
                  <input
                    type="text"
                    name="nombre"
                    {...register("nombre", {
                      required: {
                        value: true,
                        message: "Nombre es requerido",
                      },
                    })}
                  />
                  {errors.nombre?.type === "required" && (
                    <div className="form-element-error">
                      <span>{errors.nombre.message}</span>
                    </div>
                  )}
                </div>
                <div className="form-element">
                  <label htmlFor="">Estado:</label>
                  <select
                    name="estado"
                    id="estado"
                    {...register("estado", {
                      required: {
                        value: true,
                        message: "Estado es requerido",
                      },
                    })}
                  >
                    <option value="B">Bueno</option>
                    <option value="R">Regular</option>
                    <option value="M">Malo</option>
                  </select>
                  {errors.estado?.type === "required" && (
                    <div className="form-element-error">
                      <span>{errors.estado.message}</span>
                    </div>
                  )}
                </div>
                <div className="form-element">
                  <label htmlFor="">Descripción:</label>
                  <textarea
                    maxLength={1000}
                    rows={5}
                    cols={50}
                    name="observaciones"
                    {...register("observaciones", {
                      required: {
                        value: true,
                        message: "Observaciones son requeridas",
                      },
                    })}
                  />
                  {errors.observaciones?.type === "required" && (
                    <div className="form-element-error">
                      <span>{errors.observaciones.message}</span>
                    </div>
                  )}
                </div>
                <div className="form-element">
                  <label htmlFor="">Última actividad:</label>
                  <input
                    type="text"
                    name="ultimaActividad"
                    {...register("ultimaActividad", {
                      required: {
                        value: true,
                        message: "Última actividad es requerida",
                      },
                    })}
                  />
                  {errors.ultimaActividad?.type === "required" && (
                    <div className="form-element-error">
                      <span>{errors.ultimaActividad.message}</span>
                    </div>
                  )}
                </div>
                <div className="form-element">
                  <label htmlFor="">Ubicación:</label>
                  <input
                    type="text"
                    name="ubicacion"
                    {...register("ubicacion", {
                      required: {
                        value: true,
                        message: "Ubicación es requerida",
                      },
                    })}
                  />
                  {errors.ubicacion?.type === "required" && (
                    <div className="form-element-error">
                      <span>{errors.ubicacion.message}</span>
                    </div>
                  )}
                  {mutationError && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "small",
                        gridColumn: "2",
                      }}
                    >
                      Hubo un error, vuelve a intentarlo
                    </div>
                  )}
                </div>

                <div className="enviar-btn">
                  <button className="btn btn-enviar" disabled={mutationLoading}>
                    {mutationLoading ? "Editando..." : "Editar"}
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditarMaterial;
