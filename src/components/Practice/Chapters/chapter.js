import React, { useState } from 'react'
import Problem from '../ProblemFormat/problem'
import database from '../../../Database/database'
import problemType from '../ProblemFormat/problem_types'
import createProblem from '../ProblemFormat/problem_config'
import Loader from '../../Loader/loader'

import './chapter.css'

function Chapter(props) {
    const [problemsState, setProblems] = useState({
        problems: {},
        fetched: false
    })

    const [errorState, setError] = useState(false)

    if (!problemsState.fetched) {
        database.get(props.databasePath).then(response => {
            const problems = {}
            for (let k in response.data) {
                problems[k] = createProblem(response.data[k])
            }
            setProblems({
                problems: problems,
                fetched: true
            })
            setError(false)
        }).catch(e => {
            console.log(e)
            setError(true)
        })
    }

    const changeHandler = (event, identifier) => {
        const updatedProblems = { ...problemsState.problems }
        const updatedProblem = { ...updatedProblems[identifier] }

        if (updatedProblem.type === problemType.ALL_THAT_APPLY) {
            if (updatedProblem.value.has(event.target.value)) {
                updatedProblem.value.delete(event.target.value)
            } else {
                updatedProblem.value.add(event.target.value)
            }
        } else {
            updatedProblem.value = event.target.value
        }
        updatedProblems[identifier] = updatedProblem
        setProblems({ problems: updatedProblems, fetched: true })
    }

    const submitHandler = (event, identifier) => {
        event.preventDefault()
        const updatedProblems = { ...problemsState.problems }
        const updatedProblem = { ...updatedProblems[identifier] }
        let inputAnswer = null
        let correctAnswer = null

        if (updatedProblem.type === problemType.ALL_THAT_APPLY) {
            inputAnswer = [...updatedProblem.value].sort().join('')
            correctAnswer = updatedProblem.answer.sort().join('')
        } else {
            inputAnswer = updatedProblem.value
            correctAnswer = updatedProblem.answer
        }
        if (inputAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
            updatedProblem.correct = true
        } else {
            updatedProblem.correct = false
        }
        updatedProblems[identifier] = updatedProblem
        setProblems({ problems: updatedProblems, fetched: true })
    }


    const problemsArray = []

    for (let key in problemsState.problems) {
        problemsArray.push({
            id: key,
            config: problemsState.problems[key]
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
            change={changeHandler}
            submit={submitHandler}
            fetched={problemsState.answerFetched}
        />
    ))

    return (
        errorState ? <p className="Error-message">Failed to load questions. <br/>Please check your internet connection or try refreshing page.</p>: 
            problemsState.fetched ? renderedProblemsArray : 
                <div style={{ textAlign: "center" }}><Loader /></div>
    )
}

export default Chapter