import { useQuery } from "react-query";
import { getMaterial } from "../api/intendenciaApi";

export const useMateriales = (list, setList) => {
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["materiales"],
    queryFn: async () => await getMaterial(),
    refetchOnWindowFocus: false,
    onSuccess: (info) => {setList([...list, ...info.data])}
  });
  return {
    data,
    isError,
    isLoading,
    isSuccess,
  }
};
