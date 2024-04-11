import NxtProvider from "@/Providers/NxtProvider";
import ReactQuery from "@/Providers/ReactQuery";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Toaster />
      <ReactQuery>
        <NxtProvider>
          <Component {...pageProps} />
        </NxtProvider>
      </ReactQuery>
    </>
  );
}
