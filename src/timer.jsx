import { useEffect } from "react";

export default function Timer({ dispatch, secondRemain }) {
  const mins = Math.floor(secondRemain / 60);
  const secs = secondRemain % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {" "}
      {mins}: {secs}
    </div>
  );
}
