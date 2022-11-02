// Imports
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useState } from "react";

// Functions
function App({ Component, pageProps }: AppProps) {
  const [statistics, setStatistics] = useState([]);

  return (
    <>
      <Layout>
        <Component
          {...pageProps}
          statistics={statistics}
          setStatistics={setStatistics}
        />
      </Layout>
    </>
  );
}

// Exports
export default App;
