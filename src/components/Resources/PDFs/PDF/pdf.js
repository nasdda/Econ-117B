import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Modal from '../../Modal/modal'
import './pdf.css'

const pdf = (props) => {
    return (
        <React.Fragment>
            <div className="Pdf" onClick={props.onClick}>
                <FontAwesomeIcon className="Icon-pdf" icon={faFilePdf} style={{ width: "30px", height: "30px" }} />
                <p className="File-name">{props.fileName}</p>
            </div>
            <Modal show={props.showModal} file={props.src} onClick={props.closeModal} />
        </React.Fragment>

    )
}


export default pdf