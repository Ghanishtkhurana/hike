import api from "@/pages/api";
import { useQuery } from "@tanstack/react-query";

const useGetConvo = () => {
  const getConvo = useQuery({
    queryKey: "getConvo",
    queryFn: async () => {
      const response = await api.get("http://localhost:3000/api/convo");
      return response.json();
    },
    refetchOnWindowFocus: false,
  });
  return getConvo;
};
