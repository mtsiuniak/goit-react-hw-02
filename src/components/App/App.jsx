import { useEffect, useState } from "react";
// import css from './App.module.css';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from "../Notification/Notification";

export default function App() {

    const [state, setState] = useState(() => {

        const savedFeedback = localStorage.getItem('feedback');

        if (savedFeedback !== null) {
            return JSON.parse(savedFeedback);
        }
        return {
        good: 0,
        neutral: 0,
        bad: 0
        }
    });

    useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(state));
    }, [state]);
    
    const updateFeedback = feedbackType => {setState(prevState => {
    return {
         ...prevState,
         [feedbackType]: prevState[feedbackType] + 1
         };
        });
    }

    const resetFeedback = () => {
        setState({
            good: 0,
            neutral: 0,
            bad: 0
        });
    }

    const totalFeedback = state.good + state.neutral + state.bad;
    const positiveFeedbacks = Math.round((state.good / totalFeedback) * 100)

    return (
        <>
            <Description />
            <Options clickHandler={updateFeedback} reset={resetFeedback} total={totalFeedback} />
            <br/>
            {totalFeedback > 0 ? <Feedback state={state} total={totalFeedback} positive={positiveFeedbacks} /> : <Notification/>}
        </>
    )
}

