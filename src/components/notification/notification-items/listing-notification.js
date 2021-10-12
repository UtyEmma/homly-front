import React from 'react'
import { Link } from 'react-router-dom'

export const ListingNotificationItem = ({notification}) => {
    return (
        <>
            <div className="dropdown-item py-2">
                <div className="row">
                    <div className="col-auto d-flex align-items-center p-0 px-1">
                        <img src="/images/house.png" width="30" className="img-fluid p-0" alt="listing item" />
                    </div>

                    <div className="col text-wrap pe-2">
                        <p className="fs-13 mb-0 lh-13">
                            <Link className="fs-13 lh-13 btn-link text-primary" title="View Property" to={`my-listings/${notification.slug}`}>{notification.title}</Link> has been created and is being reviewed.
                        </p>
                        <div className="p-0 d-flex justify-content-end">
                            <small className="text-right">{notification.created_at}</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
