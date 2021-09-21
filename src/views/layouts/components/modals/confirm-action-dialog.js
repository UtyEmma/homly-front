import React from 'react'
import { Modal } from 'react-bootstrap'

export const ConfirmActionDialog = ({show, setShow, callback, message, title}) => {

    const handleClose = () => {
        setShow(false)
    }

    const handleCallback = () => {
        return callback.action()
    }

    return (
        <>
           <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton className="border-0">
                    <Modal.Title>{title ? title : "Confirm Action"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {message ? message : "This action cannot be reversed. Are you sure you want to proceed?"}
                    </p>
                </Modal.Body>
                <Modal.Footer className="border-0">
                <button className="btn btn-link text-dark " onClick={handleClose}>
                    Close
                </button>
                <button className="btn btn-primary" onClick={handleCallback} >
                    Proceed
                </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
