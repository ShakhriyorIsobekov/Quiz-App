// rrd export
import { Link } from "react-router-dom";
// custom hooks
import { useFetch } from "../hooks/useFetch";

function MenuLinks() {
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch("https://your-project.vercel.app/data.json");
  return (
    <div>
      {isPending && <h2>Loading...</h2>}
      {error && <p>Something went wrong :(</p>}
      <div className="menu-list">
        {quizzes &&
          quizzes.map((quiz) => {
            return (
              <Link
                to={`/quiz/${quiz.title}`}
                key={quiz.title}
                className="menu-item header-logo"
              >
                <figure style={{ backgroundColor: quiz.color }}>
                  <img src={quiz.icon} alt="icon of languages" />
                </figure>
                <span>{quiz.title}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default MenuLinks;
