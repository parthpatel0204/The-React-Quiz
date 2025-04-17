function StartScreen({ startQuiz }) {
  return (
    <div>
      <h2>THE REACT QUIZ</h2>
      <button onClick={startQuiz}>Let's Start</button>
    </div>
  );
}

export default StartScreen;
