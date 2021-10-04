import { NotificationBell } from 'components/notification/notification'
import { AgentLogout } from 'providers/redux/_actions/agent-actions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { headerSticky, sidebarSticky } from './handle-sticky-header'

export default function Sidebar({setIsLoading, agent}) {
    const dispatch = useDispatch()

    useEffect(() => {
        headerSticky.init()
        sidebarSticky.init()
    })

    const {token} = useSelector(state => state.user_data)

    const logout = () => {
        dispatch(AgentLogout(token))
    }

    return (
            <div className="db-sidebar bg-white">
                <nav className={`navbar navbar-expand-xl navbar-light d-block px-0 header-sticky dashboard-nav py-0`}>
                    <div className="sticky-area shadow-xs-1 py-3">
                            <div className="d-flex px-3 px-xl-6 w-100 pd-logo">

                                <Link className="navbar-brand" to="/">
                                    <img src="/images/logo/bayof-logo.png" width="102px" height="80px" alt="Bayof Logo" />
                                </Link>

                                <div className="ml-auto d-flex align-items-center ">
                                    <div className="d-flex align-items-center d-xl-none">
                                        <div className="dropdown px-3">
                                            <Link to="#" className="dropdown-toggle d-flex align-items-center text-heading" data-toggle="dropdown">
                                            {    
                                                agent.avatar 
                                            ? 
                                                <div className="w-46px h-46 overflow-hidden">
                                                    <img src={agent.avatar} className="rounded-circle  w-46px h-46" style={{objectFit: 'cover'}} alt={`${agent.firstname}`} />
                                                </div> 
                                            : 
                                                <div className="d-inline-block mb-2 w-46px h-46 mr-2 bg-gray-01 rounded-circle fs-18 font-weight-500 text-muted d-flex align-items-center justify-content-center text-uppercase mr-sm-8 mb-4 mb-sm-0 mx-auto">
                                                    {`${agent.firstname.charAt(0).toUpperCase()}${agent.lastname.charAt(0).toUpperCase()}`}
                                                </div>
                                            }
                                            <span className="fs-13 font-weight-500 d-none d-sm-inline ml-2">
                                                {agent.firstname}
                                            </span>
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link  to="/dashboard" className="dropdown-item rounded py-2 align-middle">
                                                    <i className="fa fa-user mr-3 text-primary"></i>
                                                    My Dashboard
                                                </Link>

                                                <Link className="dropdown-item rounded py-2 align-middle" to="/agent-profile">
                                                    <i className="fa fa-heart mr-3 text-primary"></i>
                                                    Profile
                                                </Link>

                                                <Link className="dropdown-item rounded py-2 align-middle" to="/activity">
                                                    <i className="fal fa-bell mr-3 text-primary"></i>
                                                    Activity
                                                </Link>


                                                <Link className="dropdown-item rounded py-2 align-middle" to="/support">
                                                    <i className="fa fa-headset mr-3 text-primary"></i>
                                                    Support
                                                </Link>
                                                    
                                                <button className="dropdown-item btn btn-secondary rounded py-2 align-middle" type="button" onClick={logout} >
                                                    <i className="fa fa-door-open mr-3 text-primary"></i>
                                                    Logout
                                                </button>
                                            </div>
                                        </div>

                                        <div className="pr-2">
                                            <NotificationBell />
                                        </div>
                                    </div>
                                    
                                    <button className="navbar-toggler border-0 px-0" type="button" data-toggle="collapse" data-target="#primaryMenuSidebar" aria-controls="primaryMenuSidebar" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                </div>
                            </div>
                            <div className="collapse navbar-collapse bg-white" id="primaryMenuSidebar">
                                <form className="d-block d-xl-none pt-5 px-3">
                                    <div className="input-group">
                                    <div className="input-group-prepend mr-0 bg-input">
                                        <button className="btn border-0 shadow-none fs-20 text-muted pr-0" type="submit"><i className="far fa-search" /></button>
                                    </div>
                                    <input type="text" className="form-control border-0 form-control-lg shadow-none" placeholder="Search for..." name="search" />
                                    </div>
                                </form>
                                <ul className="list-group list-group-flush w-100">
                                    <li className="list-group-item pt-6 pb-4">
                                    <h5 className="fs-13 letter-spacing-087 text-muted mb-3 text-uppercase px-3">Main</h5>
                                    <ul className="list-group list-group-no-border rounded-lg">
                                        <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                        <Link to="/dashboard" className="text-heading lh-1 sidebar-link">
                                            <span className="sidebar-item-icon d-inline-block mr-3 fs-20"><i className="fal fa-cog" /></span>
                                            <span className="sidebar-item-text">Dashboard</span>
                                        </Link>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="list-group-item pt-6 pb-4">
                                    <h5 className="fs-13 letter-spacing-087 text-muted mb-3 text-uppercase px-3">Manage Properties</h5>
                                    <ul className="list-group list-group-no-border rounded-lg">
                                        <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                            <a href="/new-listing" className="text-heading lh-1 sidebar-link">
                                                <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20 fs-20">
                                                <svg className="icon icon-add-new"><use xlinkHref="#icon-add-new" /></svg></span>
                                                <span className="sidebar-item-text">Add new</span>
                                            </a>
                                        </li>
                                        <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                            <Link to="/my-listings" className="text-heading lh-1 sidebar-link d-flex align-items-center">
                                                <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                                                <svg className="icon icon-my-properties"><use xlinkHref="#icon-my-properties" /></svg>
                                                </span>
                                                <span className="sidebar-item-text">My Properties</span>
                                                <span className="sidebar-item-number ml-auto text-primary fs-15 font-weight-bold">{agent.no_of_listings ? agent.no_of_listings : ''}</span>
                                            </Link>
                                        </li>
                                        <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                            <Link to="/reviews" className="text-heading lh-1 sidebar-link d-flex align-items-center">
                                                <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                                                <svg className="icon icon-review"><use xlinkHref="#icon-review" /></svg>
                                                </span>
                                                <span className="sidebar-item-text">Reviews</span>
                                                <span className="sidebar-item-number ml-auto text-primary fs-15 font-weight-bold">{agent.no_reviews ? agent.no_reviews : ''}</span>
                                            </Link>
                                        </li>
                                        <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                            <Link to="/agent-wishlists" className="text-heading lh-1 sidebar-link">
                                                <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                                                    <i className="far fa-heart"></i>
                                                </span>
                                                <span className="sidebar-item-text">Wishlists</span>
                                            </Link>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="list-group-item pt-6 pb-4">
                                        <h5 className="fs-13 letter-spacing-087 text-muted mb-3 text-uppercase px-3">Manage Acount</h5>
                                        <ul className="list-group list-group-no-border rounded-lg">
                                            <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                                <Link to="/agent-profile" className="text-heading lh-1 sidebar-link">
                                                    <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                                                    <svg className="icon icon-my-profile"><use xlinkHref="#icon-my-profile" /></svg>
                                                    </span>
                                                    <span className="sidebar-item-text">My Profile</span>
                                                </Link>
                                            </li>
                                            <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                                <Link to="/activity" className="text-heading lh-1 sidebar-link">
                                                    <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                                                        <i className="fal fa-bell"></i>
                                                    </span>
                                                    <span className="sidebar-item-text">Activity</span>
                                                </Link>
                                            </li>
                                            <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                                <Link to="/support" className="text-heading lh-1 sidebar-link">
                                                    <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                                                        <i className="fal fa-headset"></i>
                                                    </span>
                                                    <span className="sidebar-item-text">Support</span>
                                                </Link>
                                            </li>
                                            <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                                <button onClick={logout} className="btn p-0 text-heading lh-1 sidebar-link">
                                                    <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                                                    <svg className="icon icon-log-out"><use xlinkHref="#icon-log-out" /></svg>
                                                    </span>
                                                    <span className="sidebar-item-text">Log Out</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </nav>
            </div>
    )
}
