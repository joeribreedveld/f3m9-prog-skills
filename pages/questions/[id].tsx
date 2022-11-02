// Imports
import questions from "../../public/questions.json";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

// Functions
function QuestionPage({ question, statistics, setStatistics }: any) {
  // Router
  const router = useRouter();

  // Set Statistics
  setStatistics(questions);

  // State
  const [score, setScore] = useState(question.rating);

  // Handle Prev
  const handlePrev = () => {
    if (question.number > 1) {
      handleSubmit();
      router.push(`/questions/${question.number - 1}`);
    } else {
      handleSubmit();
      router.push("/");
    }
  };

  // Handle Next
  const handleNext = () => {
    if (question.number < questions.length) {
      handleSubmit();

      router.push(`/questions/${question.number + 1}`);
    } else {
      handleFinish();
      router.push("/results");
    }
  };

  // Handle Submit
  const handleSubmit = () => {
    question.rating = score;
    setStatistics(...statistics, question);
    console.log(statistics);

    setScore(0);
  };

  // Handle Finish
  const handleFinish = () => {};

  // Handle Score
  const handlePlus = () => {
    if (score < 5) setScore(score + 1);
  };

  const handleMinus = () => {
    if (score > 0) setScore(score - 1);
  };

  return (
    <>
      <section>
        <h1 className="text-2xl font-bold mb-2">Question Page</h1>
        <p className="mb-8">{question.question}</p>
        <section className="mb-8">
          <p>Score</p>
          <div className="text-3xl font-bold mb-6">{score}</div>
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
  const questionid = contextid.id - 1;
  const question = questions[questionid];

  return {
    props: {
      question,
    },
  };
}
