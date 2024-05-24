import { useMutation } from "react-query";
import { useUsuarioStore } from "../store/Logeado";
import { useNavigate } from "react-router-dom";
import { getTokenLogin } from "../api/intendenciaApi";

export const useLoginMutation = () => {
  const navigate = useNavigate()
  const {setToken, setUser} = useUsuarioStore()
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: getTokenLogin,
    onSuccess: (userInfo) => {
      setToken(userInfo.data.token);
      setUser(userInfo.data.user);
      window.localStorage.setItem(
        "loggedUser",
        JSON.stringify(userInfo.data.token)
      );
      navigate("/materiales");
    },
  });
  return {
    mutate,
    isLoading,
    isError,
  }
};
