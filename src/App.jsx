import { useEffect, useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import Questions from "./components/Questions";
import EndScreen from "./components/EndScreen";

function App() {
  const [start, setStart] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [selected, setSelected] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [point, setPoint] = useState(0);

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => setQuizData(data))
      .catch((err) => console.error(err));

    // console.log(quizData);
  }, []);

  function nextQuestion() {
    setCurrentQuestion((prev) => prev + 1);
  }

  function backQuestion() {
    setCurrentQuestion((prev) => prev - 1);
  }

  function startQuiz() {
    setStart(!start);
  }

  function selectOption(i) {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = i;
    setSelectedAnswers(updatedAnswers);

    const correctIndex = quizData[currentQuestion]?.correctOption;
    console.log(correctIndex);

    const questionPoint = quizData[currentQuestion]?.points;

    if (i === correctIndex) {
      alert("Right Answer");
      setPoint((prev) => prev + questionPoint);
    } else {
      alert("Wrong Answer");
    }
    console.log("selected");
  }

  return (
    <>
      {currentQuestion >= quizData.length ? (
        <EndScreen point={point} />
      ) : start ? (
        <Questions
          data={quizData[currentQuestion]}
          nextQuestion={nextQuestion}
          currentQuestion={currentQuestion}
          backQuestion={backQuestion}
          selectOption={selectOption}
          selectedAnswers={selectedAnswers}
        />
      ) : (
        <StartScreen startQuiz={startQuiz} />
      )}
    </>
  );
}

export default App;
