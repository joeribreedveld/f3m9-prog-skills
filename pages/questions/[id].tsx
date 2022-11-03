// Imports
import questions from "../../public/questions.json";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

// Functions
function QuestionPage({ id, results, setResults }: any) {
  // UseEffect for setting current question using context id
  useEffect(() => {
    setCurrentQuestion(
      results.find((question: any) => question.number === parseInt(id)) ||
        questions[id - 1]
    );
  });

  // Router
  const router = useRouter();

  // State
  const [currentQuestion, setCurrentQuestion] = useState(
    // Find current question in results via context id or questions
    results.find((question: any) => question.number === parseInt(id)) ||
      questions[id - 1]
  );
  const [score, setScore] = useState(currentQuestion.rating);

  console.log(currentQuestion);

  // Handle Prev
  const handlePrev = () => {
    if (currentQuestion.number > 1) {
      handleSubmit();
      router.push(`/questions/${currentQuestion.number - 1}`);
    } else {
      handleSubmit();
      router.push("/");
    }
  };

  // Handle Next
  const handleNext = () => {
    if (currentQuestion.number < results.length) {
      handleSubmit();
      router.push(`/questions/${currentQuestion.number + 1}`);
    } else {
      handleFinish();
      router.push("/results");
    }
  };

  // Handle Submit save results by editing object in results array
  const handleSubmit = () => {
    const oldState = results;
    const newState = oldState.map((q: any) => {
      if (q.number === currentQuestion.number) {
        q.rating = score;
      }
      return q;
    });
    setResults(newState);
  };

  // Handle Finish for ChartJS
  const handleFinish = () => {};

  // Handle Score on plus
  const handlePlus = () => {
    if (score < 5) {
      setScore(score + 1);
    }
  };

  // Handle Score on minus
  const handleMinus = () => {
    if (score > 0) {
      setScore(score - 1);
    }
  };

  // Set Score on Current Question Change
  useEffect(() => {
    setScore(currentQuestion.rating);
  }, [currentQuestion]);

  return (
    <>
      <section>
        <h1 className="text-2xl font-bold mb-8">
          [{currentQuestion.number}]<span> - </span>
          {currentQuestion.question}
        </h1>
        <section className="mb-8">
          <p className="mb-4 text-lg">Score</p>
          <div className="text-6xl font-bold mb-6">{score}</div>
          <div className="flex gap-4 justify-center items-center">
            <button>
              <FaMinus onClick={handleMinus} />
            </button>
            <button onClick={handlePlus}>
              <FaPlus />
            </button>
          </div>
        </section>
        <div className="inline-flex">
          <button
            onClick={handlePrev}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
}

// Exports
export default QuestionPage;

// getServerSideProps
export async function getServerSideProps(context: any) {
  const contextid = context.params;
  const questionid = contextid.id;
  const question = questions[questionid];

  return {
    props: {
      id: questionid,
    },
  };
}
