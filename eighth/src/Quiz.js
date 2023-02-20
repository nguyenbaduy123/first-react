function Question(props) {
  const answers = props.answers.map((answer) => (
    <button
      key={answer.id}
      dangerouslySetInnerHTML={{ __html: answer.value }}
      className={`quiz--answer__btn ${answer.picked ? "picked " : ""} ${
        props.success === true && answer.value === props.correct_answer
          ? "correct-answer"
          : ""
      } ${
        props.success === false &&
        answer.picked &&
        answer.value !== props.correct_answer
          ? "wrong-answer"
          : ""
      } ${
        props.success !== "no-submitted" &&
        answer.value === props.correct_answer
          ? "need-choose"
          : ""
      } ${
        props.success === false &&
        answer.value !== props.correct_answer &&
        "blur"
      }`}
      onClick={() => props.pickAnswer(props.id, answer.id)}
    ></button>
  ));

  return (
    <div className="quiz">
      <h3
        className="quiz--header"
        dangerouslySetInnerHTML={{ __html: props.question }}
      />
      <div className="quiz--answer">{answers}</div>
      <hr />
    </div>
  );
}

export default Question;
