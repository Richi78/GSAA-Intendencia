import "./Login.css";
import logo from "../../public/logo.png";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../hooks/useLoginMutation";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      usuario: "",
      password: "",
    },
  });

  const { mutate, isLoading, isError } = useLoginMutation();

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <div className="page jaja">
      <div className="login-container">
        <div className="logo-gsaa">
          <img src={logo} alt="logo gsaa" />
        </div>
        <form className="form-login" onSubmit={onSubmit}>
          <div className="label-uwu">
            <label>Usuario</label>
            <input
              className="input-login"
              type="text"
              name="usuario"
              {...register("usuario", {
                required: {
                  value: true,
                  message: "Usuario obligatorio",
                },
              })}
            />
            {errors.usuario?.type === "required" && (
              <div className="login-error">{errors.usuario.message}</div>
            )}
          </div>
          <div className="label-uwu">
            <label>Contraseña</label>
            <input
              className="input-login"
              type="password"
              name="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Contraseña requerida",
                },
              })}
            />
            {errors.password?.type === "required" && (
              <div className="login-error">{errors.password.message}</div>
            )}
            {isError ? (
              <div className="login-error">Datos incorrectos</div>
            ) : (
              ""
            )}
          </div>
          <div className="iniciar-sesion">
            <button className="btn btn-login" disabled={isLoading}>
              {isLoading ? "Cargando..." : "Iniciar Sesión"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
