import { Button, Form, Card, ProgressBar } from "react-bootstrap";
import "./Result.css";
import { useSelector, useDispatch } from "react-redux";

export default function Result() {
  const correct = useSelector((state) => state.quiz.correctAnswers);
  const total = useSelector((state) => state.quiz.numberOfQuestions);

  return (
    <div className="Result">
      <Card data-bs-theme="dark">
        <Card.Header>
          <Card.Title>Результат</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Верные ответы:<Card.Title>{correct}</Card.Title>
          </Card.Text>
          <Card.Text>
            Ошибки:<Card.Title>{total - correct}</Card.Title>
          </Card.Text>
          <Button href="/">← Main</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
