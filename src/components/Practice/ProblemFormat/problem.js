import React, { useState } from 'react'
import problemType from './problem_types'
import './problem.css'


function Problem(props) {
    const [showHint, setHint] = useState(false);
    let input = null
    let outcome = null
    const hintClicked = (event) => {
        setHint(!showHint)
    }
    switch (props.type) {
        case problemType.MULTIPLE_CHOICE:
            input = props.choices.map((choice, index) => (
                <div key={`${props.chapter}-${props.qnumber}-${index}`}>
                    <input type="radio" className="Selectable"
                        id={`${props.chapter}-${props.qnumber}-${index}`}
                        name={props.chapter + props.qnumber}
                        value={choice}
                        onChange={event => props.change(event, props.id)}
                        required
                    />
                    <label htmlFor={choice}>{choice}</label>
                </div>
            ))
            input = (
                <form
                    className="Choices-form"
                    onSubmit={
                        event => props.submit(event, props.id)
                    }
                >
                    <div className="Choices">
                        {input}
                    </div>
                    <button className="Form-button" type="submit">Check</button>
                    <br />
                </form>
            )
            break
        case problemType.FREE_RESPONSE:
            input = (
                <form
                    onSubmit={
                        event => props.submit(event, props.id)
                    }
                >
                    <input
                        className="Input-textbox"
                        value={props.value}
                        type="text"
                        placeholder={props.placeHolder}
                        onChange={event => props.change(event, props.id)}
                        maxLength="100"
                        required
                    />
                    <br />
                    <button className="Form-button" type="submit">Check</button>
                </form>
            )
            break
        case problemType.ALL_THAT_APPLY:
            input = props.choices.map((choice, index) =>
                <div key={`${props.chapter}-${props.qnumber}-${index}`}>
                    <input type="checkbox" className="Selectable"
                        id={`${props.chapter}-${props.qnumber}-${index}`}
                        name={"answer"}
                        value={choice}
                        onChange={event => props.change(event, props.id)}
                    />
                    <label htmlFor={choice}>{choice}</label>
                </div>
            )
            input = (
                <form
                    className="Choices-form"
                    onSubmit={
                        event => props.submit(event, props.id)
                    }
                >
                    <div className="Choices">
                        {input}
                    </div>
                    <button className="Form-button" type="submit">Check</button>
                </form>
            )
            break
        default:
            input = null
    }

    if (props.correct !== undefined) {
        if (props.correct) {
            outcome = (
                <div className="Correct">
                    <p>{props.correctText || "Correct!"}</p>
                </div>
            )
        } else {
            outcome = (
                <div className="Incorrect">
                    <p>{props.incorrectText || "Incorrect. Try again."}</p>
                </div>
            )
        }
    }

    const hintContent = showHint ? (
        <p>{props.hint}</p>
    ) : null

    return (
        <div className="Problem">
            <div>
                <p>{props.qnumber}. {props.question}</p>
                {input}
                {props.hint && <button className="Form-button" type="button" onClick={hintClicked}>Hint</button>}
                {hintContent}
                {outcome}
            </div>
        </div>
    )
}

export default Problem