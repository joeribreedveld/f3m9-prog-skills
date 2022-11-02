// Imports
import { useRouter } from "next/router";

// Functions
function Results() {
  // Router
  const router = useRouter();

  // Handle Restart
  const handleRestart = () => {
    router.push("/");
  };

  return (
    <>
      <section>
        <h1 className="text-2xl font-bold mb-8">Results</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleRestart}
        >
          Restart
        </button>
      </section>
    </>
  );
}

// Exports
export default Results;
