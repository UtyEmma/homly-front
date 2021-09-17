import React, { useEffect } from 'react'
import AgentReviewItem from './agent-review-item'

export default function AgentReviews({reviews, agent, status, setIsLoading}) {
    
    useEffect(() => {
        setIsLoading(false)
    })

    return (
        <>
          <h2 className="fs-22 text-heading lh-15 mb-6">Agents Rating &amp; Reviews </h2>
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

                        <p>No Reviews</p>
                    }                      
                        
                </div>
            </div>
        </>
    )
}
