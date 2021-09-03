import { CreateNewTicket } from 'providers/redux/_actions/support-actions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const NewTicketForm = ({close, setTitles, setIsLoading}) => {

    const dispatch = useDispatch()

    const new_ticket = useSelector(state => state.new_ticket)
    const {loading, tickets } = new_ticket

    const createTicket = (e) => {
        e.preventDefault()
        let formData = new FormData(e.target);
        dispatch(CreateNewTicket(formData));
    }

    useEffect(() => {
        tickets && setTitles(tickets)
        setIsLoading(loading)
    }, [tickets, loading])

    return (
        <>
            <form onSubmit={createTicket} method="post" >
                <div className="modal-body">
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
                    {close && <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>}
                    <button type="submit" className="btn btn-primary">Create Ticket</button>
                </div>
            </form>   
        </>
    )
}
