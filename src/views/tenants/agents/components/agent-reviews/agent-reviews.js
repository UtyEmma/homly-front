import React, { useEffect } from 'react'
import AgentReviewForm from './agent-review-form'
import AgentReviewItem from './agent-review-item'

export default function AgentReviews({reviews, agent, status, setIsLoading}) {
    
    useEffect(() => {
        setIsLoading(false)
    })

    return (
        <>
          <h2 className="fs-22 text-heading lh-15 mb-6">Agent Reviews </h2>
            <div className="card border-0 mb-4">
                <div className="card-body p-6">
                <h3 className="fs-16 lh-2 text-heading mb-6">{reviews && reviews.length > 0 && reviews.length} Reviews</h3>
                    {
                        reviews && reviews.length > 0 
                        
                        ?   

                        <>

                            {
                                reviews.map((review) => {
                                    return <AgentReviewItem review={review.review} publisher={review.publisher} />
                                })
                            }

                            <button className="btn btn-lg text-heading bg-hover-light border fs-14 px-5">
                                View more 
                                <span className="text-primary fs-15 text-primary d-inline-block ml-2">
                                    <i className="fal fa-long-arrow-down" />
                                </span> 
                            </button>
                        </>

                        :

                        <div className="card border-0 p-0 p-md-4 mb-0">
                            <div className="card-body d-flex justify-content-center flex-column">
                                <div className="col-md-6 offset-md-3 mb-2">
                                    <img src="/images/svg/review-property.svg" className="img-fluid" alt="property review" />
                                </div>
                                <h3 className="fs-md-18px fs-26 text-center">There are currently no reviews for this Agent</h3>
                            </div>
                        </div>
                    }                      
                        
                    <AgentReviewForm />
                </div>
            </div>
        </>
    )
}
