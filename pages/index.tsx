// Imports
import { useRouter } from "next/router";

// Functions
function Home() {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => router.push("/questions/1")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Start
      </button>
    </>
  );
}

// Exports
export default Home;
