import { CreateNewTicket } from 'providers/redux/_actions/support-actions'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NewTicketForm } from './new-ticket-form'

export const NewTicketModal = ({setTitles, setIsLoading}) => {
    return(
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Create a New Ticket</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                
                <NewTicketForm close setTitles={setTitles} setIsLoading={setIsLoading} />
                </div>
            </div>
        </div>   
    )
}
