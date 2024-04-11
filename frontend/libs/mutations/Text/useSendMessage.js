import api from "@/pages/api";
import useConvo from "@/zustand/useConvo";
import { useMutation } from "@tanstack/react-query";

const useSendMessage = () => {
  const { message, setMessage, selectedConvo } = useConvo();
  const sendmsg = useMutation({
    mutationFn: async ({ msg }) => {
      const res = await api.post(
        `message/send_message/${selectedConvo?._id}`,
        msg
      );
      setMessage([...message, msg]);
      return res?.data;
    },
    onSuccess: (data) => {
      console.log("message sent successfully", data);
    },
    onError: (error) => {
      console.log("error sending message", error);
    },
  });
  return sendmsg;
};
export default useSendMessage;
