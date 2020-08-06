import React, { useState } from 'react'
import Modal from '../Modal/modal'
import { ReactComponent as Preview } from '../../../assets/preview.svg'
import { ReactComponent as Download } from '../../../assets/download.svg'
import './resource_item.css'
import '../../../App.css'

function ResourceItem(props) {
    const [toggleState, setToggle] = useState(false)

    return (
        <React.Fragment>
            <div className="Resource-item" >
                <div className="Icon">
                    {props.icon}
                </div>
                <p className="File-name"><a href={props.src} rel="noopener noreferrer" target="_blank">{props.name}</a></p>
                <div className="Option-icon">
                    <div className="tooltip">
                        <div className="Icon-background">
                            <Preview onClick={() => setToggle(true)} />
                        </div>
                        <span className="tooltiptext">Preview</span>
                    </div>

                    {props.downloadable &&
                        <div className="tooltip">
                            <a href={props.src} download={props.name}>
                                <Download />
                            </a>
                            <span className="tooltiptext">Download</span>
                        </div>}


                </div>
            </div>
            <Modal show={toggleState} src={props.src} onClick={() => setToggle(false)} />
        </React.Fragment>

    )
}

export default ResourceItem