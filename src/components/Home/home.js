import React from 'react'
import Toolbar from '../Navigation/Toolbar/toolbar'
import '../../App.css'
import './home.css'

const home = () => {
    console.log(process.env.NODE_ENV)
    console.log(process.env.CODE)
    return (
        <div>
            <Toolbar />
            <h1 className="Page-title">Home</h1>
            <p className="Notice">*Site scaling may be off when accessed from mobile devices*</p>
        </div>
    )
}

export default home