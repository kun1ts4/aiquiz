import { setCurrentComponent } from "../quizSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import generateQuestions from "../openaiClient"

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
        <>
            generating questions
        </>
    );
}
