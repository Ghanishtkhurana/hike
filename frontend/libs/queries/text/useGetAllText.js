import api from "@/pages/api";
import useConvo from "@/zustand/useConvo";
import { useQuery } from "@tanstack/react-query";

const useGetAllText = () => {
  const { message, setMessage, selectedConvo } = useConvo();
  const getAllText = useQuery({
    queryKey: ["getAllText"],
    queryFn: async () => {
      const res = await api.get(`message/get_messages/${selectedConvo?._id}`);
      setMessage(res?.data?.data);
      return res?.data?.data;
    },
    refetchOnWindowFocus: false,
  });
  return getAllText;
};

export default useGetAllText;
