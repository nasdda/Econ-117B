import React from 'react'
import './toolbar.css'
import { NavLink } from 'react-router-dom'

const toolbar = (props) => {
    return (
        <div className='Toolbar'>
            <div className='Site-name'>ECON117B</div>
            <div className='Navigation'>
                <NavLink to="/" className='Navigation-option' activeClassName='Option-active' exact={true}>Home</NavLink>
                <NavLink to="/practice" className='Navigation-option' activeClassName='Option-active'>Practice</NavLink>
                <NavLink to="/resources" className='Navigation-option' activeClassName='Option-active'>Resources</NavLink>
                <NavLink to="/contact" className='Navigation-option' activeClassName='Option-active' >Contact</NavLink>
            </div>
        </div>
    )
}

export default React.memo(toolbar)