import { create } from "zustand";
// import zukeeper from "zukeeper";

const useConvo = create((set) => ({
  selectedConvo: null,
  message: [],
  setSelectedConvo: (convo) => set({ selectedConvo: convo }),
  setMessage: (message) => set({ message: message }),
  setEmptyMessage: () => set({ message: [] }),
}));

export default useConvo;
