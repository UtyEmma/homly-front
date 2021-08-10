import { AgentLogout } from 'providers/redux/_actions/agent-actions'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function Sidebar() {
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(AgentLogout())
    }

    return (
            <div className="db-sidebar bg-white">
                <nav className="navbar navbar-expand-xl navbar-light d-block px-0 position-fixed dashboard-nav py-0">
                    <div className="sticky-area shadow-xs-1 py-3">
                        <div className="d-flex px-3 px-xl-6 w-100">
                        <a className="navbar-brand" href="/">
                            <img src="images/logo.png" alt="HomeID" />
                        </a>
                        <div className="ml-auto d-flex align-items-center ">
                            <div className="d-flex align-items-center d-xl-none">
                            <div className="dropdown px-3">
                                <a href="#" className="dropdown-toggle d-flex align-items-center text-heading" data-toggle="dropdown">
                                <div className="w-48px">
                                    <img src="images/testimonial-5.jpg" alt="Ronald Hunter" className="rounded-circle" />
                                </div>
                                <span className="fs-13 font-weight-500 d-none d-sm-inline ml-2">
                                    Ronald Hunter
                                </span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">My Profile</a>
                                <a className="dropdown-item" href="#">My Profile</a>
                                <a className="dropdown-item" href="#">Logout</a>
                                </div>
                            </div>
                            <div className="dropdown no-caret py-4 px-3 d-flex align-items-center notice mr-3">
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
                                <a href="/dashboard" className="text-heading lh-1 sidebar-link">
                                    <span className="sidebar-item-icon d-inline-block mr-3 fs-20"><i className="fal fa-cog" /></span>
                                    <span className="sidebar-item-text">Dashboard</span>
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li className="list-group-item pt-6 pb-4">
                            <h5 className="fs-13 letter-spacing-087 text-muted mb-3 text-uppercase px-3">Manage Listings</h5>
                            <ul className="list-group list-group-no-border rounded-lg">
                                <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                    <a href="/new-listing" className="text-heading lh-1 sidebar-link">
                                        <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20 fs-20">
                                        <svg className="icon icon-add-new"><use xlinkHref="#icon-add-new" /></svg></span>
                                        <span className="sidebar-item-text">Add new</span>
                                    </a>
                                </li>
                                <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                    <a href="/my-listings" className="text-heading lh-1 sidebar-link d-flex align-items-center">
                                        <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                                        <svg className="icon icon-my-properties"><use xlinkHref="#icon-my-properties" /></svg>
                                        </span>
                                        <span className="sidebar-item-text">My Properties</span>
                                        <span className="sidebar-item-number ml-auto text-primary fs-15 font-weight-bold">29</span>
                                    </a>
                                </li>
                                <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                    <a href="/reviews" className="text-heading lh-1 sidebar-link d-flex align-items-center">
                                        <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                                        <svg className="icon icon-review"><use xlinkHref="#icon-review" /></svg>
                                        </span>
                                        <span className="sidebar-item-text">Reviews</span>
                                        <span className="sidebar-item-number ml-auto text-primary fs-15 font-weight-bold">29</span>
                                    </a>
                                </li>
                            </ul>
                            </li>
                            <li className="list-group-item pt-6 pb-4">
                                <h5 className="fs-13 letter-spacing-087 text-muted mb-3 text-uppercase px-3">Manage Acount</h5>
                                <ul className="list-group list-group-no-border rounded-lg">
                                    <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                        <a href="/agent-profile" className="text-heading lh-1 sidebar-link">
                                            <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                                            <svg className="icon icon-my-profile"><use xlinkHref="#icon-my-profile" /></svg>
                                            </span>
                                            <span className="sidebar-item-text">My Profile</span>
                                        </a>
                                    </li>
                                    <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                        <a onClick={logout} style={{cursor: "pointer"}} className="text-heading lh-1 sidebar-link">
                                            <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                                            <svg className="icon icon-log-out"><use xlinkHref="#icon-log-out" /></svg>
                                            </span>
                                            <span className="sidebar-item-text">Log Out</span>
                                        </a>
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
