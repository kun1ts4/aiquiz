import "./App.css";
import Question from "./components/Question";
import Menu from "./components/Menu";
import Result from "./components/Result";
import Loading from "./components/Loading";
import { setCurrentComponent } from "./quizSlice";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  
  const currentComponent = useSelector((state) => state.quiz.currentComponent);

  return (
    <div className="App">
      {currentComponent === "MENU" ? (
        <Menu handleSubmit={setCurrentComponent("CARD")} />
      ) : currentComponent === "CARD" ? (
        <Question />
      ) : currentComponent === "LOADING" ? (
        <Loading />
      ) : currentComponent === "RESULT" ? (
        <Result />
      ) : null}
      <footer>
        <span>footer text</span>
      </footer>
    </div>
  );
}
