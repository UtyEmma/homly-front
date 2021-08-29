import { NotificationBell } from 'components/notification/notification'
import React from 'react'

export default function Header({agent}) {
    return (
        <header className="main-header shadow-none shadow-lg-xs-1 bg-white position-relative d-none d-xl-block">
            <div className="container-fluid">
                <nav className="navbar navbar-light py-0 row no-gutters px-3 px-lg-0">
                    <div className="col-md-4 px-0 px-md-6 order-1 order-md-0">
                        <form>
                        <div className="input-group">
                            <div className="input-group-prepend mr-0">
                            <button className="btn border-0 shadow-none fs-20 text-muted p-0" type="submit"><i className="far fa-search" /></button>
                            </div>
                            <input type="text" className="form-control border-0 bg-transparent shadow-none" placeholder="Search for..." name="search" />
                        </div>
                        </form>
                    </div>
                    <div className="col-md-6 d-flex flex-wrap justify-content-md-end order-0 order-md-1">
                        <div className="dropdown border-md-right border-0 py-3 text-right">
                        <a href="#" className="dropdown-toggle text-heading pr-3 pr-sm-6 d-flex align-items-center justify-content-end" data-toggle="dropdown">
                            <div className="mr-2 w-48px">
                                {    
                                    agent.avatar 
                                ? 
                                    <div className="rounded-circle w-46px h-46 overflow-hidden">
                                        <img src={agent.avatar} className="w-46px h-46" style={{objectFit: 'cover'}} alt={`${agent.firstname} ${agent.lastname}`} />
                                    </div> 
                                : 
                                    <div className="d-inline-block mb-2 w-46px h-46 mr-2 bg-gray-01 rounded-circle fs-18 font-weight-500 text-muted d-flex align-items-center justify-content-center text-uppercase mr-sm-8 mb-4 mb-sm-0 mx-auto">
                                        {`${agent.firstname.charAt(0).toUpperCase()}${agent.lastname.charAt(0).toUpperCase()}`}
                                    </div>
                                }
                            </div>
                            <div className="fs-13 font-weight-500 lh-1">
                                Hello {agent.firstname}
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right w-100">
                            <a className="dropdown-item" href="/agent-profile">My Profile</a>
                            <a className="dropdown-item" href="#">Logout</a>
                        </div>
                        </div>
                        
                        <NotificationBell user={agent} />
                    </div>
                </nav>
            </div>
        </header>
    )
}
