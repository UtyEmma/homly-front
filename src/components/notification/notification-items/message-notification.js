import React from 'react'
import { Link } from 'react-router-dom'

export const MessageNotificationItem = ({notification}) => {
    return (
        <div className="dropdown-item py-2">
            <div className="row">
                <div className="col-auto d-flex align-items-center p-0 px-2">
                    <i className="fal fa-comment-alt-dots fs-26 text-primary"></i>
                </div>

                <div className="col text-wrap pe-2 pl-2 ps-0">
                    <div className="fs-13 mb-0 lh-13 px-0">
                        <p className="fs-13 mb-1 lh-13">{notification.message}</p>
                    </div>
                    <div className="p-0 d-flex justify-content-between">
                        <small><Link to={`/support/${notification.type_id}`} className="pr-1 btn-link text-primary fs-12">View Message</Link></small>
                        <small className="text-right">{notification.created_at}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
