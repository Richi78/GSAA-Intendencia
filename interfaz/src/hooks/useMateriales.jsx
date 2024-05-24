import { useQuery } from "react-query";
import { getMaterial } from "../api/intendenciaApi";

export const useMateriales = () => {
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["materiales"],
    queryFn: async () => await getMaterial(),
    refetchOnWindowFocus: false,
  });
  return {
    data,
    isError,
    isLoading,
    isSuccess,
  }
};
