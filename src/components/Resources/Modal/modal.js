import React from 'react'
import './modal.css'

const modal = (props) => {

    return (
        props.show && (
            <div className="Modal" onClick={props.onClick}>
                <div className="Modal-content">
                    <button className="close">&times;</button>
                    <iframe className="Document-frame" frameBorder="0" src={props.src} title="Document" allowFullScreen/>
                </div>
            </div>
        ) 
    )

}

export default modal