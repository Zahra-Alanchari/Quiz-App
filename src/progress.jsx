export default function Progress({ index, numQ, points, maxPoint, answer }) {
  return (
    <header className="progress">
      <progress max={numQ} value={index - 1 + Number(answer !== null)} />
      <p>
        Question <strong>{index}</strong> / {numQ}{" "}
      </p>
      <p>
        <strong>{points}</strong>/ {maxPoint}{" "}
      </p>
    </header>
  );
}
