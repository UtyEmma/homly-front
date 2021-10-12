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
        <div className="col-3 px-0 h-100 rounded-left text-dark py-5">
            <div className="my-3 text-center px-5">
                <button type="button"  class="btn btn-primary btn-block " data-toggle="modal" data-target="#exampleModal">
                    Create Ticket
                </button>
            </div>

            <div className="mb-0 py-3">
                {

                    titles && titles.length > 0

                    &&

                    <>
                    {
                        titles.map((title, index) => {
                            return (
                                <div role="button" key={index} className="py-3 px-2 bg-hover-dark hover-white" onClick={() => fetchTicketChats(title.unique_id)} key={title.unique_id}>
                                    <i className="fa fa-comment"></i>
                                    {title.title}
                                </div> 
                            )
                        })
                    }
                    
                    </>
                }

            </div>
        </div>
    )
}