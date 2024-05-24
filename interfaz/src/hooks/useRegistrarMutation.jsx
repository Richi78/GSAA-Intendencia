import { useMutation } from "react-query";
import { createMaterial } from "../api/intendenciaApi";
import { useNavigate } from "react-router-dom";

export const useRegistrarMutation = () => {
  const navigate = useNavigate()
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: createMaterial,
    onSuccess: () => {
        navigate('/materiales')
    },
  });
  return {
    mutate,
    isLoading,
    isError,
  };
};
