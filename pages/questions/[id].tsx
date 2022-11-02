// Imports
import questions from "../../public/questions.json";
import { useRouter } from "next/router";

// Functions
function QuestionPage({ question }: any) {
  // Router
  const router = useRouter();

  // Handle Prev
  const handlePrev = () => {
    if (question.number > 1) {
      router.push(`/questions/${question.number - 1}`);
    } else {
      router.push("/");
    }
  };

  // Handle Next
  const handleNext = () => {
    if (question.number < questions.length) {
      router.push(`/questions/${question.number + 1}`);
    } else {
      router.push("/results");
    }
  };

  return (
    <>
      <section>
        <h1 className="text-2xl font-bold mb-2">Question Page</h1>
        <p className="mb-8">{question.question}</p>
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
  console.log(question);

  return {
    props: {
      question,
    },
  };
}
