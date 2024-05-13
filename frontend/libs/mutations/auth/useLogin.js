import { AuthContext } from "@/context/AuthContext";
import api from "@/pages/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import toast from "react-hot-toast";

const useLogin = () => {
  const router = useRouter();
  const { setAuthContext } = useContext(AuthContext);
  const login = useMutation({
    mutationFn: async (data) => {
      const res = await api.post("auth/login", data);
      return res?.data;
    },
    onSuccess: (data) => {
      // console.log("data", data?.data);
      setAuthContext(data?.data);
      localStorage.setItem("chat-app", JSON.stringify(data?.data));
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
