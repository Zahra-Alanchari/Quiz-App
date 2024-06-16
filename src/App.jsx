import { useEffect, useReducer } from "react";
import Header from "./header";
import Main from "./mainbody";
import Loader from "./loader";
import Error from "./error";
import StartScreen from "./start";
import Question from "./question";
import NextButton from "./nextbtn";
import Progress from "./progress";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer": {
      const question = state.questions[state.index];

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }

    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    default:
      throw new Error("action not found");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numQuestion = state.questions.length;
  const maxPoint = state.questions.reduce((prev, cur) => prev + cur.points, 0)

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {state.status === "loading" && <Loader />}
        {state.status === "error" && <Error />}
        {state.status === "ready" && (
          <StartScreen numQ={numQuestion} dispatch={dispatch} />
        )}
        {state.status === "active" && (
          <>
            <Progress index={state.index +1 } numQ={numQuestion} points={state.points} maxPoint={maxPoint} answer={state.answer}/>
            <Question
              dispatch={dispatch}
              answer={state.answer}
              question={state.questions[state.index]}
            />
            <NextButton dispatch={dispatch} answer={state.answer} />
          </>
        )}
        {status === 'finished' &&}
      </Main>
    </div>
  );
}
