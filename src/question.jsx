import Option from "./option";

export default function Question({ question, dispatch, answer }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Option dispatch={dispatch} answer={answer} question={question} />
    </div>
  );
}
