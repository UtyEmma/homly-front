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
                            {agent.firstname} {agent.lastname}
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right w-100">
                            <a className="dropdown-item" href="/agent-profile">My Profile</a>
                            <a className="dropdown-item" href="#">Logout</a>
                        </div>
                        </div>
                        <div className="dropdown no-caret py-3 px-3 px-sm-6 d-flex align-items-center justify-content-end notice">
                        <a href="#" className="dropdown-toggle text-heading fs-20 font-weight-500 lh-1" data-toggle="dropdown">
                            <i className="far fa-bell" />
                            <span className="badge badge-primary badge-circle badge-absolute font-weight-bold fs-13">1</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
