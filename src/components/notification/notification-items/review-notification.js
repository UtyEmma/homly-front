import RatingStar from 'components/rating/rating-star'
import React from 'react'

export const ReviewNotificationItem = ({notification, index}) => {
    return (
        <>
            <div className="dropdown-item py-2" key={index}>
                <div className="row">
                    <div className="col-auto d-flex align-items-center p-0 px-1">
                        <img src="images/icon-box-5.png" width="30" className="img-fluid p-0" alt="listing item" />
                    </div>

                    <div className="col text-wrap pe-2">

                        <p className="fs-13 mb-0 lh-13">
                            <p className="fs-13 mb-1 lh-13">{notification.message}</p>
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item fs-13 text-heading font-weight-600">{notification.rating}/5</li>
                                    <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                                        <ul className="list-inline mb-0">
                                            <RatingStar rating={notification.rating}/>
                                        </ul>
                                    </li>
                            </ul>
                        </p>
                        <div className="p-0 d-flex justify-content-between">
                            <small><a href={`/reviews`} className="pr-1 btn-link text-primary fs-12" >View Reviews</a></small>
                            <small className="text-right">{notification.created_at}</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
