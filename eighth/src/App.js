import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import Quiz from "./Quiz";

function App() {
  const [quizzes, setQuizzes] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function allNewQuiz(data) {
    let newQuizzes = data;
    newQuizzes = newQuizzes.map((quiz) => generateNewQuiz(quiz));
    newQuizzes = newQuizzes.map((quiz) => randomAnswer(quiz));
    setQuizzes(newQuizzes);
    setSubmitted(false);
  }

  useEffect(() => {
    async function fetchData() {
      if (loading) {
        const res = await fetch("https://opentdb.com/api.php?amount=10");
        const data = await res.json();
        allNewQuiz(data.results);
        setLoading(false);
      }
    }
    fetchData();
  }, [loading]);

  // function start() {
  //   fetch("https://opentdb.com/api.php?amount=10")
  //     .then((res) => res.json())
  //     .then((data) => allNewQuiz(data.results));
  // }

  function generateNewQuiz(quiz) {
    return {
      ...quiz,
      id: nanoid(),
      success: false,

      answers: [
        ...quiz.incorrect_answers.map((answer) => ({
          id: nanoid(),
          value: answer,
          picked: false,
        })),
        {
          id: nanoid(),
          value: quiz.correct_answer,
          picked: false,
        },
      ],
    };
  }

  function randomAnswer(quiz) {
    // const tempAnswers = [];
    // while (quiz.answers.length !== 0) {
    //   const randomIndex = Math.floor(Math.random() * quiz.answers.length);
    //   tempAnswers.push(quiz.answers[randomIndex]);
    //   quiz.answers.splice(randomIndex, 1);
    // }
    // return { ...quiz, answers: tempAnswers };

    const randomIndex = Math.floor(Math.random() * quiz.answers.length);
    quiz.answers.splice(randomIndex, 0, quiz.answers[quiz.answers.length - 1]);
    quiz.answers.splice(-1);
    return quiz;
  }

  function pickAnswer(id, answerId) {
    if (submitted === false) {
      setQuizzes(
        quizzes.map((quiz) => {
          if (quiz.id === id) {
            const newAns = quiz.answers.map((answer) =>
              answer.id === answerId
                ? { ...answer, picked: true }
                : { ...answer, picked: false }
            );
            return { ...quiz, answers: newAns };
          } else {
            return quiz;
          }
        })
      );
    }
  }

  function check() {
    setQuizzes((oldQuizzes) =>
      oldQuizzes.map((quiz) => {
        if (
          quiz.answers.some(
            (answer) =>
              answer.picked === true && answer.value === quiz.correct_answer
          )
        ) {
          return { ...quiz, success: true };
        } else return quiz;
      })
    );
  }

  function submit() {
    setSubmitted(true);
    check();
  }

  function getResult() {
    let count = 0;
    quizzes.forEach((quiz) => {
      quiz.success === true && count++;
    });
    return count;
  }

  const quizElements = quizzes.map((quiz) => (
    <Quiz
      key={quiz.id}
      id={quiz.id}
      question={quiz.question}
      correct_answer={quiz.correct_answer}
      answers={quiz.answers}
      pickAnswer={pickAnswer}
      success={submitted === true ? quiz.success : "no-submitted"}
    />
  ));

  if (loading) {
    return (
      <main>
        <h3>Loading...</h3>
      </main>
    );
  }

  return (
    <main className="container">
      <div className="main--quiz">
        {quizzes.length ? (
          <>
            {quizElements}
            {submitted ? (
              <div className="submitted">
                <h4>
                  You have {getResult()}/{quizzes.length} correct answers!
                </h4>
                <button className="try-again" onClick={() => setLoading(true)}>
                  Try Again
                </button>
              </div>
            ) : (
              <button className="submit" onClick={submit}>
                Submit
              </button>
            )}
          </>
        ) : (
          <button className="start" onClick={() => setLoading(true)}>
            Start quiz
          </button>
        )}
      </div>
    </main>
  );
}

export default App;
