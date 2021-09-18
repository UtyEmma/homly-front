import { FetchMessages, FetchTickets } from 'providers/redux/_actions/support-actions'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const SupportCenterSidebar = ({titles, setTitles, chat, setChat, setIsLoading}) => {

    const dispatch = useDispatch()

    const allTickets = useSelector(state => state.tickets)
    const {loading, tickets } = allTickets

    const messages = useSelector(state => state.messages)
    const {ticket} = messages

    const user_data = useSelector(state => (state.user_data))
    const {token} = user_data


    const fetchTicket = () => {
        dispatch(FetchTickets(token));
    }

    const setTickets = () => {
        setTitles(tickets)
    }

    const fetchTicketChats = (id) => {
        setIsLoading(true)
        dispatch(FetchMessages(token, id))
    }

    useEffect(() => {
        setIsLoading(loading)
    }, [loading])

    const setMessages = () => {
        titles && setTitles(titles)
        setChat(ticket)
        setIsLoading(false)
    }

    useEffect(() => {
        !tickets && fetchTicket()
        tickets && setTickets()
        ticket && setMessages()
    }, [tickets, ticket])


    return (
        <div className="col-md-4 px-0 rounded-left text-dark">
            <div className="my-3 text-center px-5 pt-6">
                <button type="button" className="btn btn-primary px-9 btn-lg " data-toggle="modal" data-target="#exampleModal">
                    Create a Ticket
                </button>
            </div>

            <div className="py-4 mt-2">
                <ul className="list-group list-group-flush w-100 bg-transparent">
                    <li className="list-group-item pt-2 pb-4">
                        <h5 className="fs-13 letter-spacing-087 text-muted mb-3 text-uppercase px-3">Support Tickets</h5>
                        <ul className="list-group list-group-no-border rounded-lg ">

                            {
                           
                            titles && titles.length > 0

                            ?

                            <>
                                {
                                    titles.map((title, index) => {
                                        return (
                                            <li key={index} className="list-group-item px-3 px-xl-4 py-3 sidebar-item bg-hover-light" role="button" onClick={() => fetchTicketChats(title.unique_id)}>
                                                <button className="btn text-heading lh-1 sidebar-link d-flex align-items-center text-left">
                                                    <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                                                        <i className="fa fa-circle text-warning fs-12"></i>
                                                    </span>
                                                    <span className="fs-13 lh-13">{title.title}</span>
                                                </button>
                                            </li>
                                        )
                                    })
                                }
                            </>

                            :

                            <li className="list-group-item px-3 px-xl-4 py-3 sidebar-item">
                                <div>
                                    <i className="fa fa-ticket-alt text-primary fs-40"></i>
                                    <p>Your tickets will appear here when created.</p>
                                </div>
                            </li>
                            }
                            
                        </ul>
                    </li>
                </ul>
            </div>
        </div>   
    )
}
