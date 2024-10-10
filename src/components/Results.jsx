import { Link } from "react-router-dom";

function Results({ title, color, icon, correctAnswerCount, questionsLength }) {
  return (
    <div className="test-cotainer result-container">
      <div className="home-content">
        <h1 className="home-title">
          <span>Quiz is successfully completed 🥇</span>
          <h5>
            {correctAnswerCount < 5
              ? "Unfortunately, you could not pass the Test ❌"
              : "Perfect, you passed the Test ✅"}
          </h5>
        </h1>
      </div>
      <div className="test-completed">
        <div className="test-completed-body">
          <div className="menu-item header-logo">
            <figure style={{ backgroundColor: color }}>
              <img src={`.${icon}`} alt="icon" />
            </figure>
            <span>{title}</span>
          </div>
          <div className="big-text">{correctAnswerCount}</div>
          <p>out of {questionsLength.length}</p>
        </div>
        <Link className="btn result-btn" to={"/"}>
          Play again
        </Link>
      </div>
    </div>
  );
}

export default Results;
