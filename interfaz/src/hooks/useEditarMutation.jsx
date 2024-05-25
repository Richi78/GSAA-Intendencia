import { useMutation, useQuery } from "react-query";
import { editarMaterialById, getMaterialById } from "../api/intendenciaApi";
import { useNavigate } from "react-router-dom";

export const useMaterialByID = (id) => {
  const { data, isLoading, isError, isSuccess, isFetching } = useQuery({
    queryKey: ["materialByID"],
    queryFn: async () => await getMaterialById(id),
    refetchOnWindowFocus: false,
  });
  return {
    data,
    isLoading,
    isError,
    isSuccess,
    isFetching,
  };
};

export const useEditMaterialByIDMutation = () => {
  const navigate = useNavigate();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: editarMaterialById,
    onSuccess: () => {
      navigate("/materiales");
    },
    refetchOnWindowFocus: false,
  });
  return {
    mutate,
    isLoading,
    isError,
  };
};
