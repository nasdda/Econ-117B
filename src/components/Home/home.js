import React from 'react'
import Toolbar from '../Navigation/Toolbar/toolbar'
import '../../App.css'
import './home.css'

const home = () => {
    return (
        <div>
            <Toolbar />
            <h1 className="Page-title">Home</h1>
            <p className="Notice">Welcome to ECON 117B -- Tax Factors (Corporate Tax)!</p>
            <p className="Notice">The practice section in the navigation bar contains practice questions for homework and exams</p>
        </div>
    )
}

export default home