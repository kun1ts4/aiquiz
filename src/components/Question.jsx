import { Button, Card, ProgressBar } from "react-bootstrap";
import "./Question.css";
import { questions } from "./questions";
import { useSelector, useDispatch } from "react-redux";
import { nextQuestion, setCurrentComponent } from "../quizSlice";
import React, { useState } from "react";

export default function Question() {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.quiz.currentQuestionNumber);

  const finishQuiz = () => {
    dispatch(setCurrentComponent("RESULT"));
  };

  if (num >= questions.length - 1) {
    finishQuiz();
  }

  const correct = questions[num].correctAnswer;

  const answers = questions[num].incorrectAnswers;
  answers.push(correct);
  shuffle(answers);

  const [buttonVariants, setButtonVariants] = useState(0);
  const selectAnswer = (number) => {
    if (answers[number] == correct) {
      console.log("congrats");
      //setButtonVariants();
    } else {
      console.log("bad(");
    }
    dispatch(nextQuestion());
  };

  return (
    <div className="QuestionCard">
      <Card data-bs-theme="dark">
        <Card.Header>
          <ProgressBar now={(num / (questions.length - 1)) * 100} />
        </Card.Header>
        <Card.Body>
          <Card.Title>{questions[num].title}</Card.Title>
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
