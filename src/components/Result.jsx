import { Button, Form, Card, ProgressBar } from "react-bootstrap";
import "./Result.css";

export default function Result() {
  return (
    <div className="Result">
      <Card data-bs-theme="dark">
        <Card.Header>
          <Card.Title>Your result</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Correct answers:<Card.Title>2</Card.Title>
          </Card.Text>
          <Card.Text>
            Incorrect answers:<Card.Title>4</Card.Title>
          </Card.Text>
          <Button href="https://hzjxdp.csb.app/">← Main</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
