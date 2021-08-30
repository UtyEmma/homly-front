import { FetchMessages, FetchTickets } from 'providers/redux/_actions/support-actions'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChatBox } from './chat/chatbox'

export const SupportCenterContent = () => {
    const dispatch = useDispatch()
    const [titles, setTitles] = useState()
    const [chat, setChat] = useState()

    const allTickets = useSelector(state => state.tickets)
    const {loading, tickets } = allTickets

    const messages = useSelector(state => state.messages)
    const {ticket} = messages

    const fetchTicket = () => {
        dispatch(FetchTickets());
    }

    const setTickets = () => {
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
        <div className="col-9">
            <div className="row">
                <div className="col-3 bg-gray-04 px-0 pt-8" style={{height: "600px"}}>
                    <h5 className="fs-13 letter-spacing-087 mb-3 text-uppercase px-3">Tickets</h5>
                    <ul className="list-group list-group-flush list-group-no-border py-2">

                        {
                            titles && titles.length > 0

                            &&

                            <>
                                {
                                    titles.map((title, index) => {
                                        return (
                                            <li className="list-group-item px-xl-4 py-3 sidebar-item"  key={index}>
                                                <div role="button" onClick={() => fetchTicketChats(title.unique_id)} className="text-heading lh-1 sidebar-link d-flex align-items-center">
                                                    <span className="sidebar-item-text fs-13">{title.title}</span>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </>

                        }
                    </ul>
                </div>

                <div className="col-9 bg-white px-0" style={{height: "600px"}}>
                    <ChatBox chat={chat} setChat={setChat} />
                </div>
            </div>
        </div>
    )
}
