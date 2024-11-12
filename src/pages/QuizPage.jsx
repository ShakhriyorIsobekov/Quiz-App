// rrd import
import { useParams } from "react-router-dom";
// hooks
import { useFetch } from "../hooks/useFetch";
// react hooks
import { useEffect } from "react";
// components
import Test from "../components/Test";

function QuizPage() {
  const data = useParams();
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(`https://quiz-app-shk.vercel.app/data.json?title=${data.quiz}`);

  useEffect(() => {
    document.title = data.quiz + " " + "Quiz";
  }, [data.quiz]);

  return (
    <section className="quiz-container container">
      {isPending && <h3>Pending...</h3>}
      {error && <h3>Something went wrong :(</h3>}
      {quizzes && <Test questions={quizzes[0]} />}
    </section>
  );
}

export default QuizPage;
