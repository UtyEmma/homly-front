import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'

export const ConfirmActionDialog = ({show, setShow, callback, message, title}) => {

    const handleClose = () => {
        setShow(false)
    }

    return (
        <>
           <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="border-0">
                    <Modal.Title>{title ? title : "Confirm Action"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{message ? message : "Are you sure you wish to procced with this action?"}</Modal.Body>
                <Modal.Footer className="border-0">
                <button className="btn btn-link" onClick={handleClose}>
                    Close
                </button>
                <button className="btn btn-secondary" onClick={() => {callback(); handleClose()}}>
                    Proceed
                </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
