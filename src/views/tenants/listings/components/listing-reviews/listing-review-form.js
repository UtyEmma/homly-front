import { SubmitReview } from 'providers/redux/_actions/review-actions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ListingReviewForm({setUserHasReviewed, listing_id, status}) {
    const dispatch = useDispatch()
    const {loading, reviews} = useSelector(state => state.submit_review)
    const {token} = useSelector((state) => state.user_data)

    const submitPropertyReview = (e) => {
        e.preventDefault()
        let formData = new FormData(e.target)
        dispatch(SubmitReview(token, formData, listing_id))    
    }

    useEffect(() => {
        reviews && setUserHasReviewed(true)
    }, [reviews, setUserHasReviewed])

    return (
        <>
          <section className="mt-2 pb-7 px-6 pt-6 bg-white rounded-lg">
                <div className="card border-0">

                    {
                        status === 'tenant'

                        ?
                        <div className="card-body p-0">
                            <h3 className="fs-16 lh-2 text-heading mb-4">Write A Review</h3>
                            <form onSubmit={submitPropertyReview}>
                                <div className="form-group mb-4 d-flex justify-content-start">
                                    <div className="rate-input">
                                    <input type="radio" id="star5" name="rating" defaultValue={5} />
                                    <label htmlFor="star5" title="text" className="mb-0 mr-1 lh-1">
                                        <i className="fas fa-star" />
                                    </label>
                                    <input type="radio" id="star4" name="rating" defaultValue={4} />
                                    <label htmlFor="star4" title="text" className="mb-0 mr-1 lh-1">
                                        <i className="fas fa-star" />
                                    </label>
                                    <input type="radio" id="star3" name="rating" defaultValue={3} />
                                    <label htmlFor="star3" title="text" className="mb-0 mr-1 lh-1">
                                        <i className="fas fa-star" />
                                    </label>
                                    <input type="radio" id="star2" name="rating" defaultValue={2} />
                                    <label htmlFor="star2" title="text" className="mb-0 mr-1 lh-1">
                                        <i className="fas fa-star" />
                                    </label>
                                    <input type="radio" id="star1" name="rating" defaultValue={1} />
                                    <label htmlFor="star1" title="text" className="mb-0 mr-1 lh-1">
                                        <i className="fas fa-star" />
                                    </label>
                                    </div>
                                </div>
                                <div className="form-group mb-6">
                                    <textarea className="form-control form-control-lg border-0" placeholder="Your Review" name="review" rows={5} defaultValue={""} />
                                </div>
                                <button type="submit" className="btn btn-lg btn-primary px-10">Submit</button>
                            </form>
                        </div>

                        :

                        <div className="card p-5">
                            <div className="text-center">
                                <img src="/images/svg/reviews.svg" width="200" />
                                <h4 className="text-heading mt-5">Only Tenants Can Review this Property!!!</h4>
                                {/* <p className="fs-18">Please <a href="/login" className="btn btn-link fs-18 p-0">Login as a Tenant</a> to review this property</p> */}
                                <a href="/login" className="btn fs-16 btn-outline-primary mt-5">Login as a Tenant</a>
                            </div>
                        </div>


                    }
                    
                </div>
            </section>  
        </>
    )
}
