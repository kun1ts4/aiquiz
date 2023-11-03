import "./App.css";
import Question from "./components/Question";
import Menu from "./components/Menu";
import Result from "./components/Result";
import Loading from "./components/Loading";
import { setCurrentComponent } from "./quizSlice";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  
  const currentComponent = useSelector((state) => state.quiz.currentComponent);
  console.log(process.env.OPENAI_KEY);
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
        <div>
          <div>
            <p className="gh-link">GitHub: <a href="https://github.com/ulemisty/aiquiz">ulemisty</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
