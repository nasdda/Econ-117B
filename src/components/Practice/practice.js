import React, { useState, useEffect } from 'react'
import Toolbar from '../Navigation/Toolbar/toolbar'
import '../../App.css'
import './practice.css'



////
import Chapter from './Chapters/chapter'
import database from '../../Database/database'
import createProblem from './ProblemFormat/problem_config'
import Loader from '../Loader/loader'
import problemType from './ProblemFormat/problem_types'



function Practice(props) {

    const [chapterState, setChapter] = useState({ chapter: '*', error: false })

    useEffect(() => {
        let chapter = 'chapter' + chapterState.chapter
        let databasePath = '/' + chapter + '.json'
        if (chapterState.chapter !== '*' && !chapterState[chapter]) {
            database.get(databasePath).then(response => {
                const problems = {}
                for (let k in response.data) {
                    problems[k] = createProblem(response.data[k])
                }
                setChapter({
                    ...chapterState,
                    [chapter]: { ...problems },
                    error: false
                })
            }).catch(e => {
                if (!chapterState.error) {
                    setChapter({
                        ...chapterState,
                        error: true
                    })
                }
                console.log(e)
            })
        }
    })

    const onChapterChange = (event) => {
        setChapter({
            ...chapterState,
            chapter: event.target.value.trim()
        })
    }

    let chapterProblems = null

    const changeHandler = (event, identifier) => {
        const updatedChapter = { ...chapterState["chapter" + chapterState.chapter] }
        const updatedProblem = { ...updatedChapter[identifier] }

        if (updatedProblem.type === problemType.ALL_THAT_APPLY) {
            if (updatedProblem.value.has(event.target.value)) {
                updatedProblem.value.delete(event.target.value)
            } else {
                updatedProblem.value.add(event.target.value)
            }
        } else {
            updatedProblem.value = event.target.value
        }
        updatedChapter[identifier] = updatedProblem
        setChapter({
            ...chapterState,
            ["chapter" + chapterState.chapter]: updatedChapter
        })
    }

    const submitHandler = (event, identifier) => {
        event.preventDefault()
        const updatedChapter = { ...chapterState["chapter" + chapterState.chapter] }
        const updatedProblem = { ...updatedChapter[identifier] }
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
        updatedChapter[identifier] = updatedProblem
        setChapter({
            ...chapterState,
            ["chapter" + chapterState.chapter]: updatedChapter
        })
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
            if (chapterState.chapter1) {
                chapterProblems = <Chapter problems={chapterState.chapter1}
                    onChange={changeHandler}
                    onSubmit={submitHandler}
                />
            } else {
                chapterProblems = <Loader />
            }
            break
        case '2':
            if (chapterState.chapter2) {
                chapterProblems = <Chapter problems={chapterState.chapter2}
                    onChange={changeHandler}
                    onSubmit={submitHandler} />
            } else {
                chapterProblems = <Loader />
            }
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
            {chapterState.error ?
                <p className="Error-message">Failed to load questions. <br />Please check your internet connection or try refreshing page.</p> :
                chapterProblems}
        </React.Fragment>
    )
}

export default Practice