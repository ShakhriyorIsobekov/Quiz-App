// import react
import { lazy, useState } from "react";
// components
import Results from "./Results";
// toast
import toast from "react-hot-toast";

function Test({ questions: { color, icon, questions, title } }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswer = questions[questionIndex].answer;
    if (selectedAnswers == null) {
      toast.error("This didn't work.");
      alert(`Please, select an answer! ❌`);
    } else {
      if (selectedAnswers == correctAnswer) {
        setAnswerStatus("correct");
        setCorrectAnswersCount(correctAnswersCount + 1);
      } else {
        setAnswerStatus("incorrect");
      }
    }
    setShowNextButton(true);
    setStatusDisabled(true);
  };

  const handleNextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setAnsweredQuestions(answeredQuestions + 1);
    setSelectedAnswers(null);
    setShowNextButton(false);
    setAnswerStatus(null);
    setStatusDisabled(false);
  };

  const [answeredQuestions, setAnsweredQuestions] = useState(1);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [statusDisabled, setStatusDisabled] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  if (questionIndex === questions.length) {
    toast.success("Congratulations!", { icon: "🎉" });
    return (
      <Results
        title={title}
        color={color}
        icon={icon}
        correctAnswerCount={correctAnswersCount}
        questionsLength={questions}
      />
    );
  }

  return (
    <div className="test-container">
      <div className="test-content">
        <p className="test-description">
          Qustion {answeredQuestions} of {questions.length}
        </p>
        <h2 className="test-title">{questions[questionIndex].question}</h2>
        <div className="test-proccess-container">
          <div
            className="test-proccess"
            style={{
              width: (answeredQuestions / questions.length) * 100 + "%",
            }}
          ></div>
        </div>
      </div>
      <div className="test-questions">
        <form onSubmit={handleSubmit}>
          <ul className="test-list">
            {questions[questionIndex].options.map((option, index) => {
              let className = "";
              if (answerStatus == "correct" && option == selectedAnswers) {
                className = "correct";
              } else if (answerStatus == "incorrect") {
                if (option == selectedAnswers) {
                  className = "incorrect";
                }
                if (option == questions[questionIndex].answer) {
                  className = "correct";
                }
              }

              const alphabet = String.fromCharCode(65 + index);

              return (
                <li key={option}>
                  <label className={`test-label ${className}`}>
                    <span className="test-letter">{alphabet}</span>
                    <input
                      type="radio"
                      name="option"
                      onChange={() => setSelectedAnswers(option)}
                      disabled={statusDisabled}
                    />
                    <span className="test-text">{option}</span>
                    <img
                      src="../assets/icon-correct.svg"
                      alt="correct svg"
                      width={40}
                      height={40}
                      className="test-icon-correct"
                    />
                    <img
                      src="../assets/icon-incorrect.svg"
                      alt="correct svg"
                      width={40}
                      height={40}
                      className="test-icon-incorrect"
                    />
                  </label>
                </li>
              );
            })}
          </ul>
          {!showNextButton && <button className="test-btn btn">Submit</button>}
          {showNextButton && (
            <button onClick={handleNextQuestion} className="next-btn btn">
              {answeredQuestions == questions.length
                ? "Finish the Test"
                : "Next Test"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Test;
