import { CreateNewTicket } from 'providers/redux/_actions/support-actions'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const NewTicketModal = () => {
    const dispatch = useDispatch()

    const new_ticket = useSelector(state => state.new_ticket)
    const {loading, tickets, chat } = new_ticket

    const createTicket = (e) => {
        e.preventDefault()
        let formData = new FormData(e.target);
        dispatch(CreateNewTicket(formData));
    }

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
                <form onSubmit={createTicket} method="post" >
                    <div class="modal-body">
                        <div className="form-group">
                            <label>Ticket Title</label>
                            <input type="text" placeholder="What are you complaining about ?" className="form-control form-control-lg border-0" name="title" />
                        </div>
                        <div className="form-group">
                            <label>Your Message</label>
                            <textarea type="text" placeholder="Your message goes here..." className="form-control form-control-lg border-0" name="message"></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary">Create Ticket</button>
                    </div>
                </form>
                </div>
            </div>
        </div>   
    )
}
