import React from 'react'
import { Modal } from 'react-bootstrap'
import { NewTicketForm } from './new-ticket-form'

export const NewTicketModal = ({show, setShow, setTitles, setIsLoading}) => {
    const handleClose = () => {
        setShow(false)
    }

    return(
        <Modal show={show} centered onHide={handleClose}>
            <Modal.Header  closeButton>
            <Modal.Title>Create New Ticket</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <NewTicketForm close  setShow={setShow} setTitles={setTitles} setIsLoading={setIsLoading} />
            </Modal.Body>
      </Modal> 
    )
}
