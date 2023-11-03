import "./Menu.css";
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  setQuizTopic,
  setNumberOfQuestions,
  setCurrentComponent
} from "../quizSlice";

export default function Menu() {
  const dispatch = useDispatch();
  const topic = useSelector((state) => state.quiz.topic);
  const numberOfQuestions = useSelector(
    (state) => state.quiz.numberOfQuestions
  );

  const handleSubmit = () => {
    dispatch(setCurrentComponent("LOADING"));
    console.log(topic + numberOfQuestions);
  };

  return (
    <div className="Menu">
  
      <h1>AIquiz</h1>
      <Form className="topicForm" data-bs-theme="dark">
        <Form.Group className="topicInput">
          <Form.Label variant="secondary">Тема</Form.Label>
          <Form.Control
            tupe="input"
            value={topic}
            onChange={(e) => {
              dispatch(setQuizTopic(e.target.value));
            }}
          />
        </Form.Group>
        <Form.Group className="numberOfQuestionsInput">
          <Form.Label>Количество вопросов</Form.Label>
          <Form.Range
            min={1}
            max={10}
            value={numberOfQuestions}
            onChange={(e) => dispatch(setNumberOfQuestions(e.target.value))}
          />
          <Form.Control
            value={numberOfQuestions}
            onChange={(e) => dispatch(setNumberOfQuestions(e.target.value))}
            min={1}
            max={10}
          />
        </Form.Group>
        <Button
          variant="primary"
          className="submit"
          data-bs-theme="dark"
          onClick={() => handleSubmit()}
        >
          Начать
        </Button>
      </Form>
    </div>
  );
}
