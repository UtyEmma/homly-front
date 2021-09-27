import React from 'react'

export const ListingApprovedNotificationItem = ({notification}) => {
    return (    
        <>
            <div className="dropdown-item py-2">
                <div className="row">
                    <div className="col-auto d-flex align-items-center p-1">
                        <i className="fal fa-home fs-26 text-primary"></i>
                    </div>

                    <div className="col text-wrap pe-2">
                        <p className="fs-13 mb-0 lh-13">
                            <a className="fs-13 lh-13 btn-link text-primary" title="View Property" href={`my-listings/${notification.slug}`}>{notification.title}</a> has been approved.
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
