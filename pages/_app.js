import { Provider } from "react-redux";
import "../styles/globals.scss";
import Head from "next/head";
import { PersistGate } from "redux-persist/integration/react";
import store from "../store";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Flipkart | Clone</title>
        <meta name="description" content="Flipkart - online shopping" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}
