import css from './Options.module.css';

export default function Options({clickHandler, reset, total}) {
    return (
         <div>
            <button className={css.button} onClick={() => clickHandler('good')}>Good</button>
            <button className={css.button} onClick={() => clickHandler('neutral')}>Neutral</button>
            <button className={css.button} onClick={() => clickHandler('bad')}>Bad</button>
            {total > 0 ? <button className={css.button} onClick={reset}>Reset</button> : ''}
        </div>
    )
}