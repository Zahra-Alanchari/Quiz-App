export default function StartScreen({ numQ, dispatch }) {
  return (
    <div className="start">
      <h2>Welcom to the react quiz</h2>
      <h3>{numQ} questions to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets start
      </button>
    </div>
  );
}
