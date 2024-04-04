import css from './Options.module.css';

export default function Options({clickHandler, reset}) {
    return (
         <>
            <button className={css.button} onClick={() => clickHandler('good')}>Good</button>
            <button className={css.button} onClick={() => clickHandler('neutral')}>Neutral</button>
            <button className={css.button} onClick={() => clickHandler('bad')}>Bad</button>
            <button className={css.button} onClick={reset}>Reset</button>
        </>
    )
}