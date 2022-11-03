// Imports
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useState } from "react";
import questions from "../public/questions.json";

// Functions
function App({ Component, pageProps }: AppProps) {
  const [results, setResults] = useState(questions);

  return (
    <>
      <Layout>
        <Component {...pageProps} results={results} setResults={setResults} />
      </Layout>
    </>
  );
}

// Exports
export default App;
