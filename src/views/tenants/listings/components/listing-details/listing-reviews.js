import { FetchReview, SubmitReview } from 'providers/redux/_actions/review-actions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListingReviewForm from '../listing-reviews/listing-review-form'
import ListingReviewItem from '../listing-reviews/listing-review-item'

export default function ListingReviews({listing_id, status}) {
    const dispatch = useDispatch()

    const state = useSelector((state) => state.listing_reviews)
    const {loading, reviews} = state;

    const loadReviews = () => {
        dispatch(FetchReview(listing_id))
    }

    useEffect(() => {
        !reviews && loadReviews()
    }, [reviews])

    return (
        <>
        <section className="mt-2 pb-7 px-6 pt-6 bg-white rounded-lg">
                <h4 className="fs-22 text-heading lh-15 mb-5">Rating &amp; Reviews</h4>
                <div className="card border-0">
                <div className="card-body p-0">
                    <div className="row">
                    <div className="col-sm-6 mb-6 mb-sm-0">
                        <div className="bg-gray-01 rounded-lg pt-2 px-6 pb-6">
                        <h5 className="fs-16 lh-2 text-heading mb-6">
                            Avarage User Rating
                        </h5>
                        <p className="fs-40 text-heading font-weight-bold mb-6 lh-1">4.6 <span className="fs-18 text-gray-light font-weight-normal">/5</span></p>
                        <ul className="list-inline">
                            <li className="list-inline-item bg-warning text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item bg-warning text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item bg-warning text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item bg-warning text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item bg-gray-04 text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                            <i className="fas fa-star" />
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 pt-3">
                        <h5 className="fs-16 lh-2 text-heading mb-5">
                        Rating Breakdown
                        </h5>
                        <div className="d-flex align-items-center mx-n1">
                        <ul className="list-inline d-flex px-1 mb-0">
                            <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                            </li>
                        </ul>
                        <div className="d-block w-100 px-1">
                            <div className="progress rating-progress">
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="text-muted px-1">60%</div>
                        </div>
                        <div className="d-flex align-items-center mx-n1">
                        <ul className="list-inline d-flex px-1 mb-0">
                            <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item text-border mr-1">
                            <i className="fas fa-star" />
                            </li>
                        </ul>
                        <div className="d-block w-100 px-1">
                            <div className="progress rating-progress">
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="text-muted px-1">40%</div>
                        </div>
                        <div className="d-flex align-items-center mx-n1">
                        <ul className="list-inline d-flex px-1 mb-0">
                            <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item text-border mr-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item text-border mr-1">
                            <i className="fas fa-star" />
                            </li>
                        </ul>
                        <div className="d-block w-100 px-1">
                            <div className="progress rating-progress">
                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="text-muted px-1">0%</div>
                        </div>
                        <div className="d-flex align-items-center mx-n1">
                        <ul className="list-inline d-flex px-1 mb-0">
                            <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item text-border mr-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item text-border mr-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item text-border mr-1">
                            <i className="fas fa-star" />
                            </li>
                        </ul>
                        <div className="d-block w-100 px-1">
                            <div className="progress rating-progress">
                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="text-muted px-1">0%</div>
                        </div>
                        <div className="d-flex align-items-center mx-n1">
                        <ul className="list-inline d-flex px-1 mb-0">
                            <li className="list-inline-item text-warning mr-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item text-border mr-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item text-border mr-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item text-border mr-1">
                            <i className="fas fa-star" />
                            </li>
                            <li className="list-inline-item text-border mr-1">
                            <i className="fas fa-star" />
                            </li>
                        </ul>
                        <div className="d-block w-100 px-1">
                            <div className="progress rating-progress">
                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="text-muted px-1">0%</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="mt-2 pb-2 px-6 pt-6 bg-white rounded-lg">
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
                                <ListingReviewItem key={index} publisher={review.publisher} review={review.review} />
                            )
                        })

                        :

                        <div>
                            There are currently no reviews for this Listing
                        </div>
                    }
                </div>
                </div>
            </section>
            <ListingReviewForm listing_id={listing_id} status={status} />
        </>
    )
}
