// Imports
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { createContext, useContext, useState } from "react";
import questions from "../public/questions.json";

// Functions
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

// Exports
export default App;
