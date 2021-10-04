import { FetchTickets } from 'providers/redux/_actions/support-actions'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './tickets/tickets.css'

export const SupportCenterSidebar = ({setShow, titles, setTitles, setIsLoading}) => {

    const dispatch = useDispatch()

    const allTickets = useSelector(state => state.tickets)
    const {loading, tickets } = allTickets

    const user_data = useSelector(state => (state.user_data))
    const {token} = user_data

    const fetchTicket = useCallback(() => {
        dispatch(FetchTickets(token));
    }, [dispatch, token])

    const displayNewTicketForm = () => {
        setShow(true)
    }


    useEffect(() => {
        setIsLoading(loading)
    }, [loading, setIsLoading])

    useEffect(() => {
        !tickets && fetchTicket()
        tickets && setTitles(tickets)
    }, [fetchTicket, setTitles, tickets])


    return (
        <div className="col-md-5 px-0 rounded-left text-dark h-100">
            
            <div className="my-3 text-center px-5 pt-0 pt-md-6" >
                <button type="button" className="btn btn-primary px-9 btn-lg " onClick={displayNewTicketForm} >Create a Ticket</button>
            </div>
            
            <h5 className="fs-13 text-muted mb-0 text-uppercase px-3 mt-2">Support Tickets</h5>

            <div className="py-4 px-3 ticket-list" style={{height: "76%", overflowY:"scroll"}}>

                <div className="list-group list-group-no-border rounded-lg "  >

                    {
                    
                    titles && titles.length > 0

                    ?

                    <>
                        {
                            titles.map((title, index) => {
                                return (
                                    <Link to={`/support/${title.unique_id}`} key={title.unique_id} className="border-bottom border-top px-2 px-xl-3 py-2 bg-hover-light">
                                        <p className="fs-14 mb-0 font-weight-600 text-heading">
                                            {title.title}
                                        </p>
                                        <div className="d-flex justify-content-between">
                                            <div className={`text-uppercase fs-12 text-warning ${title.status === 'pending' ? 'text-warning' : 'text-success'}`}>{title.status}</div>
                                            <p className="text-left fs-13 mb-0"><i className="fal fa-calendar-alt mr-1"></i> {title.date}</p>
                                        </div>
                                    </Link>
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
                            
                </div>
            </div>
        </div>   
    )
}
