import React from 'react'

export const SupportCenterSidebar = () => {



    return (
        <div className="col-3 px-0 rounded-left text-dark">
            <div className="my-3 text-center px-5">
                <button type="button" className="btn btn-primary btn-block btn-lg " data-toggle="modal" data-target="#exampleModal">
                    Create a Ticket
                </button>
            </div>

            <div className="py-4 mt-2">
                <ul className="list-group list-group-flush w-100 bg-transparent">
                    <li className="list-group-item pt-2 pb-4">
                        <h5 className="fs-13 letter-spacing-087 text-muted mb-3 text-uppercase px-3">Support Tickets</h5>
                        <ul className="list-group list-group-no-border rounded-lg">
                            <li className="list-group-item px-3 px-xl-4 py-3 sidebar-item">
                                <a href="#" className="text-heading lh-1 sidebar-link d-flex align-items-center">
                                <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                                    <i className="fal fa-inbox"></i>
                                </span>
                                <span className="sidebar-item-text fs-13">All Tickets</span>
                                <span className="sidebar-item-number ml-auto text-primary fs-15 font-weight-bold">5</span>
                                </a>
                            </li>
                            <li className="list-group-item px-3 px-xl-4 py-3 sidebar-item">
                                <a href="#" className="text-heading lh-1 sidebar-link d-flex align-items-center">
                                    <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                                        <i className="fal fa-comment-dots"></i>
                                    </span>
                                    <span className="sidebar-item-text fs-13">Ongoing Tickets</span>
                                    <span className="sidebar-item-number ml-auto text-primary fs-15 font-weight-bold">5</span>
                                </a>
                            </li>
                            <li className="list-group-item px-3 px-xl-4 py-3 sidebar-item">
                                <a href="#" className="text-heading lh-1 sidebar-link d-flex align-items-center">
                                    <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                                        <i className="fal fa-archive"></i>
                                    </span>
                                    <span className="sidebar-item-text fs-13">Closed Tickets</span>
                                    <span className="sidebar-item-number ml-auto text-primary fs-15 font-weight-bold">5</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>   
    )
}
