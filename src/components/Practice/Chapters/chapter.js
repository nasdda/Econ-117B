import React from 'react'
import Problem from '../ProblemFormat/problem'

import './chapter.css'

const chapter = (props) => {
    const problemsArray = []

    for (let key in props.problems) {

        problemsArray.push({
            id: key,
            config: props.problems[key]
        })
    }

    const renderedProblemsArray = problemsArray.map((prob, index) => (
        <Problem
            key={prob.id}
            id={prob.id}
            type={prob.config.type}
            question={prob.config.question}
            choices={prob.config.choices}
            placeHolder={prob.config.placeHolder}
            value={prob.config.value}
            correct={prob.config.correct}
            qnumber={index + 1}
            change={props.onChange}
            submit={props.onSubmit}
        />
    ))

    return (
        renderedProblemsArray
    )
}

export default chapter