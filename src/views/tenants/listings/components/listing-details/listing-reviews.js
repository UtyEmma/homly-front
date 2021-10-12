import { FetchReview } from 'providers/redux/_actions/review-actions'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListingReviewForm from '../listing-reviews/listing-review-form'
import ListingReviewItem from '../listing-reviews/listing-review-item'

export default function ListingReviews({listing_id, status, listing}) {
    const dispatch = useDispatch()

    const {reviews} = useSelector((state) => state.listing_reviews)
    const {token, user} = useSelector((state) => state.user_data)

    const [userHasReviewed, setUserHasReviewed] = useState(false)

    const loadReviews = useCallback(() => {
        dispatch(FetchReview(token, listing_id, status ?? ''))
    }, [dispatch, listing_id, status, token]) 

    useEffect(() => {
        !reviews && loadReviews()
    }, [loadReviews, reviews])

    return (
        <>
            <section className="mt-2 pb-2 px-0 px-md-6 pt-6 bg-white rounded-lg">
                <h4 className="fs-22 text-heading lh-15 mb-5">Rating &amp; Reviews</h4>
                <div className="card border-0">
                <div className="card-body p-0">
                    <h3 className="fs-16 lh-2 text-heading mb-0 d-inline-block pr-4 border-bottom border-primary">
                            {reviews && reviews.length > 0 ? reviews.length : ""} Reviews
                    </h3>

                    {
                        reviews && reviews.length > 0

                        ?

                        reviews.map((review, index) => {
                            return (
                                <ListingReviewItem status={status} userHasReviewed={userHasReviewed} setUserHasReviewed={setUserHasReviewed} key={review.unique_id} publisher={review.publisher} review={review.review} />
                            )
                        })

                        :

                        <div className="card border-0 p-0 p-md-4 mb-0">
                            <div className="card-body d-flex justify-content-center flex-column">
                                <div className="col-md-6 offset-md-3 mb-2">
                                    <img src="/images/svg/review-property.svg" className="img-fluid" alt="property review" />
                                </div>
                                <h3 className="fs-md-18px fs-26 text-center">There are currently no reviews for this Property</h3>
                            </div>
                        </div>
                    }
                </div>
                </div>
            </section>

            {
                user

                ?

                <>
                    {
                        userHasReviewed || user.unique_id === listing.agent_id

                        ?

                        ""
                        :

                        <ListingReviewForm setUserHasReviewed={setUserHasReviewed} listing_id={listing_id} status={status} />
                    }
                </>
                
                :

                ""
            }
        </>
    )
}
