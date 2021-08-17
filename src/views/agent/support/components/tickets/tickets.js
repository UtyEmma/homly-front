import { FetchMessages, FetchTickets } from 'providers/redux/_actions/support-actions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Tickets = ({titles, setTitles, setChat}) => {

    const dispatch = useDispatch()

    const allTickets = useSelector(state => state.tickets)
    const {loading, tickets } = allTickets

    const chat = useSelector(state => state.messages)
    const {ticket} = chat

    const fetchTicket = () => {
        dispatch(FetchTickets());
    }

    const setTickets = () => {
        console.log(tickets)
        setTitles(tickets)
    }

    const fetchTicketChats = (id) => {
        dispatch(FetchMessages(id))
    }

    const setMessages = () => {
        setChat(ticket)
    }

    useEffect(() => {
        !tickets && fetchTicket()
        tickets && setTickets()
        ticket && setMessages()
    }, [tickets, ticket])

    return (
        <div className="card card-body mb-6 p-6 pb-0">
            <div className="invoice-action-currency mb-5">
                <h5 className="card-title fs-16 lh-2 text-dark">My Tickets</h5>
                <div className="mb-0">
                    {

                        titles && titles.length > 0

                        &&

                        titles.map((title, index) => {
                            return (
                                <div key={index} className="" >
                                    <button type="button" className="btn btn-block btn-default" onClick={() => fetchTicketChats(title.unique_id)} key={title.unique_id}>{title.title}</button>
                                </div> 
                            )
                        })

                    }

                    <hr/>
                    <button type="button" class="btn btn-primary  btn-block btn-lg" data-toggle="modal" data-target="#exampleModal">
                        Create Ticket
                    </button>
                </div>
            </div>
        </div>
    )
}