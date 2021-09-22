import React from 'react'
import { Link } from 'react-router-dom'

export const ChatSideBar = ({ticket, chat}) => {
    return (
        <div className="col-md-4 px-0 rounded-left text-dark">
            <div className="my-3">
                <Link to="/support" className="btn btn-link text-decoration-none"><i className="fa fa-chevron-left"></i> Back to Support Center</Link>
            </div>

            <div className="col-12">
                <div className="px-3 rounded-right" >
                    <div className="row d-flex align-items-end pb-2 h-100">
                        <div className="col-auto">
                            
                            <p className={`fs-12 mb-2 text-uppercase font-weight-600 badge ${ticket.status === 'pending' ? 'badge-warning' : 'badge-success'}`}>{ticket.status}</p>

                            <p className="fs-12 mb-0 text-capitalize font-weight-600 mb-0">Ticket ID: <span className="font-weight-normal">{ticket.unique_id}</span></p>
                            <p className="fs-12 mb-0 font-weight-600 mb-3">CREATED AT: <span className="font-weight-normal">{ticket.date}</span></p>
                            
                            <h5 className="text-heading font-weight-600 mb-3 text-gray">{ticket.title}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
