import React, { useState } from 'react'

import Toolbar from '../Navigation/Toolbar/toolbar'
import Chapter from './Chapters/chapter'
import createProblem from './ProblemFormat/problem_config'
import problemType from './ProblemFormat/problem_types'

// problems
import * as chapterContent from './Chapter Problems/probems.json'

import '../../App.css'
import './practice.css'


function Practice(props) {
    const [chapterState, setChapter] = useState({ chapter: '*' })

    const onChapterChange = (event) => {
        setChapter({
            chapter: event.target.value.trim(),
            canReset: false
        })
    }

    const changeHandler = (event, identifier) => {
        console.log(event.target.value)
        const updatedProblems = { ...chapterState.problems }
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
        setChapter({
            ...chapterState,
            problems: updatedProblems,
            canReset: true
        })
    }

    const submitHandler = (event, identifier) => {
        event.preventDefault()
        const updatedProblems = { ...chapterState.problems }
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
        setChapter({
            ...chapterState,
            problems: updatedProblems,
            canReset: true
        })
    }

    const resetHandler = (chapter) => {
        const resettedProblems = {}
        document.querySelectorAll('input[type="checkbox"]').forEach(checkBox => checkBox.checked = false)
        document.querySelectorAll(".Choices-form").forEach(form => {
            form.reset()
        })
        for (let k in chapterContent.default[chapter]) {
            resettedProblems[k] = createProblem(chapterContent.default[chapter][k])
        }
        setChapter({
            ...chapterState,
            problems: resettedProblems,
            canReset: false
        })

    }

    let chapterProblems = null
    let resetButton = null
    const problems = {}

    const setDisplayedContent = (chapter) => {
        resetButton = <button className="Reset-button"
            onClick={() => { resetHandler(chapter) }}
            disabled={!chapterState.canReset}>Reset</button>
        if (!chapterState.problems) {
            for (let k in chapterContent.default[chapter]) {
                problems[k] = createProblem(chapterContent.default[chapter][k])
            }
            setChapter({
                ...chapterState,
                problems: problems
            })
        }

        chapterProblems = <Chapter problems={chapterState.problems}
            chapter={chapter}
            onChange={changeHandler}
            onSubmit={submitHandler}
        />
    }

    switch (chapterState.chapter) {
        case '*':
            chapterProblems = (
                <React.Fragment>
                    <p className="Notice">Select a chapter to get started.</p>
                    <p className="Notice">Keep in mind that these problems are not graded and are solely for study purposes.</p>
                </React.Fragment>
            )
            break
        case '1':
            setDisplayedContent('chapter1')
            break
        case '2':
            setDisplayedContent('chapter2')

            break
        default:
            chapterProblems = <p className="Notice">No problems available.</p>
            break
    }

    return (
        <React.Fragment>
            <Toolbar />
            <h1 className="Page-title">Practice</h1>
            <div className="Practice-container">
                <select className="Chapter-selection" id="homework" onChange={(event) => onChapterChange(event)}>
                    <option value="*">-select chapter-</option>
                    <option value="1">Chapter 1</option>
                    <option value="2">Chapter 2</option>
                    <option value="3">Chapter 3</option>
                    <option value="4">Chapter 4</option>
                </select>
            </div>
            <br />
            {resetButton}
            {chapterProblems}
        </React.Fragment>
    )
}

export default Practice