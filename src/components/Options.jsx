function Options({ options, selectOption, selected, correctOption }) {
  return (
    <div className="options">
      {options.map((opt, i) => (
        <button
          style={{
            backgroundColor:
              selected === undefined
                ? ""
                : i === selected
                ? i === correctOption
                  ? "green"
                  : "red"
                : "",
            cursor: selected !== undefined ? "not-allowed" : "pointer",
          }}
          onClick={() => selectOption(i)}
          key={i}
          disabled={selected !== undefined} // disable all buttons once selected
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Options;
