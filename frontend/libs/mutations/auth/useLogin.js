import api from "@/pages/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useLogin = () => {
  const router = useRouter();
  const login = useMutation({
    mutationFn: async (data) => {
      const res = await api.post("auth/login", data);
      return res?.data;
    },
    onSuccess: () => {
      toast.success("Login Success");
      router.push("/chat");
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return login;
};

export default useLogin;
