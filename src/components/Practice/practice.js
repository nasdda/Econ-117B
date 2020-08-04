import React, { useState } from 'react'
import Toolbar from '../Navigation/Toolbar/toolbar'
import Chapter1 from './Chapters/Chapter1/chapter1'
import Chapter2 from './Chapters/Chapter2/chapter2'
import '../../App.css'
import './practice.css'


function Practice(props) {

    const [chapterState, setChapter] = useState({ chapter: '*' })

    const onChapterChange = (event) => {
        setChapter({ chapter: event.target.value.trim() })
    }

    let chapterProblems = null

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
            chapterProblems = <Chapter1 />
            break
        case '2':
            chapterProblems = <Chapter2 />
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
            {chapterProblems}
        </React.Fragment>
    )
}

export default Practice