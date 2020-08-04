import React from 'react'
import Toolbar from '../Navigation/Toolbar/toolbar'
import Profile from '../Profiles/profile'
import professor from '../../assets/prof.png'
import TA from '../../assets/TA.jpg'
import './contact.css'
import '../../App.css'


const contact = (props) => {
    return (
        <React.Fragment>
            <Toolbar />
            <h1 className="Page-title">Contact</h1>
            <Profile src={professor} alt="Thomas Moschetti" name="Thomas Moschetti" email="tmoschet@ucsc.edu"/>
            <Profile src={TA} alt="Jack Wang" name="Jack Wang" email="ywang460@ucsc.edu"/>
        </React.Fragment>
    ) 
}

export default contact