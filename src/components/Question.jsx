import { Button, Card, ProgressBar } from "react-bootstrap";
import "./Question.css";
//import { questions } from "./questions";
import { useSelector, useDispatch } from "react-redux";
import { correctAnswer, nextQuestion, setCurrentComponent } from "../quizSlice";
import React from "react";

export default function Question() {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.quiz.currentQuestionNumber);
  const questions = useSelector((state) => state.quiz.questions);
  console.log(questions);

  const finishQuiz = () => {
    dispatch(setCurrentComponent("RESULT"));
  };

  if (num >= questions.length) {
    finishQuiz();
  }

  const correct = questions[num].correct_answer;
  const answers = [...questions[num].incorrect_answers, correct];
  //allAnswers.push(correct);
  shuffle(answers);


  const selectAnswer = (e, number) => {
    if (answers[number] == correct) {
      dispatch(correctAnswer());
    } else {
      console.log("bad(");
    }
    dispatch(nextQuestion());
  };

  return (
    <div className="QuestionCard">
      <Card data-bs-theme="dark">
        <Card.Header>
          <ProgressBar now={(num / (questions.length)) * 100} />
        </Card.Header>
        <Card.Body>
          <Card.Title>{questions[num].question}</Card.Title>
          <Card.Text>{questions[num].text}</Card.Text>
          <div className="container">
            <Button
              variant="outline-primary"
              onClick={(e) => {
                selectAnswer(e, 0);
              }}
            >
              {answers[0]}
            </Button>
            <Button
              variant="outline-primary"
              onClick={(e) => {
                selectAnswer(e, 1);
              }}
            >
              {answers[1]}
            </Button>
            <Button
              variant="outline-primary"
              onClick={(e) => {
                selectAnswer(e, 2);
              }}
            >
              {answers[2]}
            </Button>
            <Button
              variant="outline-primary"
              onClick={(e) => {
                selectAnswer(e, 3);
              }}
            >
              {answers[3]}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
