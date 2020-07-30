import React from 'react'
import './toolbar.css'

const toolbar = (props) => {
    return (
        <div className='Toolbar'>
            <div className='Site-name'><p>Econ117B</p></div>
            <nav className='Navigation'>
                <p className='Navigation-option'>Home</p>
                <p className='Navigation-option'>Quizzes</p>
                <p className='Navigation-option'>Files</p>
                <p className='Navigation-option'>Contact</p>
            </nav>

        </div>)
}

export default toolbar