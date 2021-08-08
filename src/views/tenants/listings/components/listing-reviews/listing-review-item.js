import React, { useEffect, useState } from 'react'
import RatingStar from 'components/rating/rating-star';

export default function ListingReviewItem({review, publisher}) {
    
    return (
        <>
            <div className="media border-top py-6 d-sm-flex d-block text-sm-left text-center">
                <div className="w-82px h-82 mr-2 bg-gray-01 rounded-circle fs-25 font-weight-500 text-muted d-flex align-items-center justify-content-center text-uppercase mr-sm-8 mb-4 mb-sm-0 mx-auto">
                    {
                        publisher.avatar 
                            ? <img src={publisher.avatar[0]} alt={`${publisher.firstname} ${publisher.lastname}`} /> : 
                                `${publisher.firstname.charAt(0).toUpperCase()}${publisher.lastname.charAt(0).toUpperCase()}`
                    }
                </div>
                <div className="media-body">
                    <div className="row mb-1 align-items-center">
                    <div className="col-sm-6 mb-2 mb-sm-0">
                        <h4 className="mb-0 text-heading fs-14">{publisher.firstname} {publisher.lastname}</h4>
                    </div>
                    <div className="col-sm-6">
                        <ul className="list-inline d-flex justify-content-sm-end justify-content-center mb-0">
                            {
                                review.rating

                                ?

                                <RatingStar rating={review.rating}/>

                                :

                                <div></div>

                            }
                        </ul>
                    </div>
                    </div>
                    <p className="mb-3 pr-xl-17">{review.review}</p>
                    <div className="d-flex justify-content-sm-start justify-content-center">
                    <p className="mb-0 text-muted fs-13 lh-1">{review.created_at.date} at {review.created_at.time}</p>
                    {
                        review.owned_by_user 
                        
                        && 
                        
                        <>
                            <a href="#" class="mb-0 text-muted border-left border-dark hover-primary lh-1 ml-2 pl-2"><i className="fa fa-edit"></i></a>
                            <a href="#" class="mb-0 text-muted border-left border-dark hover-primary lh-1 ml-2 pl-2"><i className="fa fa-trash-alt"></i></a>
                        </>
                    }
                    </div>
                </div>
            </div>  
        </>
    )
}
