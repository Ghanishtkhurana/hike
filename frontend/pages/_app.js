import NxtProvider from "@/Providers/NxtProvider";
import ReactQuery from "@/Providers/ReactQuery";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";
import SocketContextProvider from "@/context/SocketContext";
import AuthProvider from "@/context/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Toaster />
      <ReactQuery>
        <AuthProvider>
        <SocketContextProvider>
          <NxtProvider>
            <Component {...pageProps} />
          </NxtProvider>
        </SocketContextProvider>
        </AuthProvider>
      </ReactQuery>
    </>
  );
}
