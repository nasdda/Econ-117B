import React, { useState } from 'react'
import Modal from '../Modal/modal'
import './resource_item.css'
import '../../../App.css'

function ResourceItem(props) {
    const [toggleState, setToggle] = useState(false)

    const onClickHandler = event => {
        setToggle(true)
    }

    const closeModalHandler = event => {
        setToggle(false)
    }

    return (
        <React.Fragment>
            <div className="Resource-item" onClick={onClickHandler}>
                <div className="Icon">
                    {props.icon}
                </div>
                <div class="tooltip">
                    <p className="File-name">{props.name}</p>
                    <span class="tooltiptext">Preview</span>
                </div>
            </div>
            <Modal show={toggleState} src={props.src} onClick={closeModalHandler} />
        </React.Fragment>

    )
}

export default ResourceItem