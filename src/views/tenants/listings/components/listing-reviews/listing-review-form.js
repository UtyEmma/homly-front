import { SubmitReview } from 'providers/redux/_actions/review-actions'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ListingReviewForm({listing_id, status}) {
    const dispatch = useDispatch()
    const {loading, reviews} = useSelector(state => state.submit_review)

    const submitPropertyReview = (e) => {
        e.preventDefault()
        let formData = new FormData(e.target)
        dispatch(SubmitReview(formData, listing_id))    
    }

    return (
        <>
          <section className="mt-2 pb-7 px-6 pt-6 bg-white rounded-lg">
                <div className="card border-0">
                <div className="card-body p-0">
                    <h3 className="fs-16 lh-2 text-heading mb-4">Write A Review</h3>

                    {
                        status === 'tenant'

                        ?
                        
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

                        :

                        <div>
                            <h4>Only LoggedIn Users Can Post a Review</h4>
                            <h1>Please Login To Publish a Review</h1>
                        </div>


                    }
                    
                </div>
                </div>
            </section>  
        </>
    )
}