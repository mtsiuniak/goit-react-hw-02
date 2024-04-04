import { useEffect, useState } from "react";
// import css from './App.module.css';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';

export default function App() {

    const [state, setState] = useState(() => {

        const goodMark = localStorage.getItem('good');
        const neutralMark = localStorage.getItem('neutral');
        const badMark = localStorage.getItem('bad');

        if (goodMark !== null || neutralMark !== null || badMark !== null) {
            return {
            good: JSON.parse(goodMark),
            neutral: JSON.parse(neutralMark),
            bad: JSON.parse(badMark)
            }
        }

        return {
        good: 0,
        neutral: 0,
        bad: 0
        }
    });

    useEffect(() => { localStorage.setItem('good', state.good)}, [state.good])
    useEffect(() => { localStorage.setItem('neutral', state.neutral)}, [state.neutral])
    useEffect(() => { localStorage.setItem('bad', state.bad)}, [state.bad])
    
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
            {totalFeedback > 0 ? <Feedback state={state} total={totalFeedback} positive={positiveFeedbacks} /> : "No feedbacks yet"}
        </>
    )
}

