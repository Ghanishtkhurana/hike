import api from "@/pages/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useCreateUser = () => {
  const router = useRouter();
  const createUser = useMutation({
    mutationFn: async (data) => {
      console.log("data in mut", data);
      const res = await api.post("auth/signup", data);
      console.log("res in mut", res);
      return res?.data;
    },
    onSuccess: (data) => {
      toast.success("Login Success");
      router.push("/login");
    },
    onError: (err) => {
      console.log("err", err?.response?.data);
      toast.error(err?.response?.data?.message);
    },
  });

  return createUser;
};

export default useCreateUser;
