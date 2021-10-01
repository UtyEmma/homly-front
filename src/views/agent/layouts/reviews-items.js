import RatingStar from 'components/rating/rating-star'
// import { ReportUser } from 'providers/redux/_actions/review-actions'
import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'

export function ReviewItem({reviews}) {

    // const dispatch = useDispatch()

    // const {token} = useSelector(state => state.user_data)

    // const submitReport = (e) => {
    //     e.preventDefault()
    //     const formData = new FormData(e.target) 
    //     dispatch(ReportUser(token, formData))
    // }

    return (
        <>
            {
                reviews.map(({review, publisher}, index) => {
                    return(
                        <div key={index} className="media border-top pt-7 pb-6 d-sm-flex d-block text-sm-left text-center">
                            
                            {    
                                publisher.avatar 
                            ? 
                                <div className="rounded-circle overflow-hidden" style={{width: '100px', height: '100px'}}>
                                    <img src={publisher.avatar} style={{width: '100%', height: '100%', objectFit: 'cover'}} alt={`${publisher.firstname} ${publisher.lastname}`} />
                                </div> 
                            : 
                                <div className="d-inline-block mb-2 mr-2 bg-gray-01 rounded-circle fs-18 font-weight-500 text-muted d-flex align-items-center justify-content-center text-uppercase mr-sm-8 mb-4 mb-sm-0 mx-auto" style={{width: '100px', height: '100px'}}>
                                    {`${publisher.firstname.charAt(0).toUpperCase()}${publisher.lastname.charAt(0).toUpperCase()}`}
                                </div>
                            }

                            <div className="media-body mr-2">
                                <div className="row mb-1 align-items-center">
                                <div className="col-sm-6 mb-2 mb-sm-0">
                                    <h4 className="mb-0 text-heading fs-14">{publisher.firstname} {publisher.lastname}</h4>
                                </div>
                                <div className="col-sm-6">
                                    <ul className="list-inline d-flex justify-content-sm-end justify-content-center mb-0">
                                        <RatingStar rating={review.rating} />
                                    </ul>
                                </div>
                                </div>
                                <p className="mb-3 pr-xl-17">{review.review}</p>

                                <div className="d-flex justify-content-sm-between justify-content-between">
                                    <p className="mb-0 text-muted fs-13">{review.created_at.date} at {review.created_at.time}</p>

                                    {/* {
                                        review.reported

                                        ?
                                        
                                            <div>
                                                <span class="badge badge-pill badge-accent text-capitalize">
                                                    <i className="fa fa-exclamation-circle mr-1"></i>
                                                    Report Sent
                                                </span>
                                            </div>
                                        
                                        :

                                        <div className="dropdown">
                                            <button className="btn btn-link p-0 font-weight-500" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Report User
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-md dropdown-menu-right mb-3 mt-2 p-2" aria-labelledby="dropdownMenuButton">
                                                <form onSubmit={submitReport}>
                                                    <div className="form-group" id="report-input">
                                                        <textarea type="text" className="form-control" placeholder="Your Message..." style={{resize: 'none'}}></textarea>
                                                    </div>

                                                    <div className="form-group">
                                                        <button className="btn btn-primary btn-block">Report</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    } */}
                                </div>
                            </div>
                        </div>
                    )
                })
            }     
        </>       
    )
}
