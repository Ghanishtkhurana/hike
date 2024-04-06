import NxtProvider from "@/Providers/NxtProvider";
import ReactQuery from "@/Providers/ReactQuery";
import ReduxToolkit from "@/Providers/ReduxToolkit";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ReduxToolkit>
        <ReactQuery>
          <NxtProvider>
            <Component {...pageProps} />
          </NxtProvider>
        </ReactQuery>
      </ReduxToolkit>
    </>
  );
}
