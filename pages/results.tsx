// Imports
import { useRouter } from "next/router";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Functions
function Results({ results, setResults }: any) {
  // Router
  const router = useRouter();

  // Handle Restart
  const handleRestart = () => {
    // Clear results
    const baseQuestions = results.map((q: any) => {
      q.rating = 0;
      return q;
    });

    // Set results to cleared
    setResults(baseQuestions);

    // Go home
    router.push("/");
  };

  console.log(results);

  const ratings = results.map((question: any) => question.rating);
  const questions = results.map((question: any) => question.question);

  // Set data for chart
  let data = {
    labels: questions,
    datasets: [
      {
        label: "Mijn score",
        data: ratings,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
      },
    ],
  };

  return (
    <>
      <section>
        <h1 className="text-2xl font-bold mb-8">Results</h1>
        <article className="w-[50vw]">
          <Bar data={data}></Bar>
        </article>
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
