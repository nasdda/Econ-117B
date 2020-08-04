import React, { useState } from 'react'
import Loader from '../Loader/loader'
import './profile.css'

const Profile = (props) => {
    const [loadingState, setLoading] = useState(false)
    const loaded = () => {
        setLoading(true)
    }
    ///////// test
    return (
        <div className="Profile">
            {!loadingState && <Loader />}
            <img className="Picture" src={props.src} alt={props.alt} onLoad={loaded} style={{ display: loadingState ? "block" : "none" }} />
            <div className="Information">
                <p>{props.name}</p>
                <p><a target="_blank" rel="noopener noreferrer" href={'mailto:' + props.email}>{props.email}</a></p>
            </div>
        </div>
    )
}

export default Profile