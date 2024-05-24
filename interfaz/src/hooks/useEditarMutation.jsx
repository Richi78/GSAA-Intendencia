import { useMutation, useQuery } from "react-query";
import { editarMaterialById, getMaterialById } from "../api/intendenciaApi";
import { useNavigate } from "react-router-dom";

export const useMaterialByID = (id) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["materialByID"],
    queryFn: async () => await getMaterialById(id),
    refetchOnWindowFocus: false,
  });
  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};

export const useEditMaterialByIDMutation = () => {
  const navigate = useNavigate();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: editarMaterialById,
    onSuccess: () => {
      navigate("/materiales");
    },
  });
  return {
    mutate,
    isLoading,
    isError,
  };
};
