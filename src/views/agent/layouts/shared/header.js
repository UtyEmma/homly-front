import { NotificationBell } from 'components/notification/notification'
import { AgentNavItems } from 'components/shared/profile-btn/profile-button'
import React from 'react'

export default function Header({agent, setIsLoading}) {
    return (
        <header className="main-header shadow-none shadow-lg-xs-1 bg-white position-relative d-none d-xl-block">
            <div className="container-fluid">
                <nav className="navbar navbar-light py-0 row no-gutters px-3 px-lg-0">
                    <div className="offset-md-6 col-md-6 d-flex flex-wrap justify-content-md-end order-0 order-md-1">
                        <div className="dropdown border-0 py-3  text-right">
                            <button className="dropdown-toggle btn text-heading pr-3 pr-sm-6 d-flex align-items-center justify-content-end" data-toggle="dropdown">
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
                                <div className="fs-14 font-weight-500 lh-1">
                                    <b>Hi, {agent.firstname}</b>
                                </div>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right w-100">
                                <AgentNavItems />
                            </div>
                        </div>
                        
                        <NotificationBell user={agent} />
                    </div>
                </nav>
            </div>
        </header>
    )
}
