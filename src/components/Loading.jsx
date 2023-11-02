import { setCurrentComponent } from "../quizSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import generateQuestions from "../openaiClient"
import "./Loading.css"

export default function Loading() {
    const dispatch = useDispatch(); 

    const handleLoaded = () => {
        dispatch(setCurrentComponent("CARD"));
    };

    const numberOfQuestions = useSelector(
        (state) => state.quiz.numberOfQuestions
    );
    
    const topic = useSelector((state) => state.quiz.topic);

    useEffect(() => {
        const fetchQuestions = async() => {
            const questions = await generateQuestions(topic, "russian", numberOfQuestions);
            dispatch(setQuestions(questions));
            handleLoaded();
        };

        fetchQuestions();
    }, [dispatch]);

    return (
        <div className="loading-container">
            <h1 className="loading-title">Generating questions</h1>
            <Spinner></Spinner>
        </div>
    );
}
