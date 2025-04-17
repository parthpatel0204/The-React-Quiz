import Options from "./Options";

function Questions({
  data,
  nextQuestion,
  selectOption,
  selectedAnswers,
  // setSelected,
  backQuestion,
  currentQuestion,
}) {
  // Reset selected when data (question) changes
  // useEffect(() => {
  //   // setSelected(null);
  // }, [data, setSelected]);

  return (
    <div>
      <div>
        <h3 className="question">
          {currentQuestion + 1}. {data.question}
        </h3>
        <div>
          <Options
            selectOption={selectOption}
            options={data.options}
            selected={selectedAnswers[currentQuestion]}
            correctOption={data.correctOption}
          />
        </div>
        <button disabled={currentQuestion === 0} onClick={backQuestion}>
          Back
        </button>
        <button onClick={nextQuestion}>
          {currentQuestion === 14 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Questions;
