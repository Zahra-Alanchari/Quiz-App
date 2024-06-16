export default function Finish({ points, maxpoint, dispatch }) {
  const percentage = (points / maxpoint) * 100;
  return (
    <>
      <p className="result">
        you finished <strong>{points}</strong> out of {maxpoint} (
        {Math.ceil(percentage)}%)
      </p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}
