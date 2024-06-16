export default function NextButton({ dispatch, answer, index, numQ }) {
  if (answer === null) return null;
  if (index < numQ - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        next
      </button>
    );
  if (index === numQ - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        finished
      </button>
    );
}
