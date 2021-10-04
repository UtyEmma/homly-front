import { MapFormErrors } from 'libraries/validation'
import { __reviews } from 'libraries/validation/schema/reviews-schema'
import { SubmitAgentReview, SubmitReview } from 'providers/redux/_actions/review-actions'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import Validator from 'validatorjs'

export default function AgentReviewForm({agent, status, fetchAgent}) {
    const dispatch = useDispatch()

    const {loading, reviews} = useSelector(state => state.submit_review)
    const {token, user} = useSelector(state => state.user_data)
    const [formErrors, setFormErrors] = useState({})

    const {rules, attributes} = __reviews

    const submitPropertyReview = (e) => {
        e.preventDefault()

        if(!user){
            return toast.error("Please login to Review this Agent")
        }
        let data = new FormData(e.target)
        data.append('role', status)
        
        const values = Object.fromEntries(data.entries());
        
        let validation = new Validator(values, rules)

        validation.setAttributeNames(attributes);
        
        validation.fails(() => {setFormErrors(MapFormErrors(validation.errors.errors))})
        
        if (validation.passes()) {
            setFormErrors({}); 
            dispatch(SubmitAgentReview(token, data, agent.unique_id))    
        }
    }

    return (
        <>
          <section className="mt-2 pb-7 px-md-6 pt-6 bg-white rounded-lg">
                <div className="card border-0">

                    {

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
                                <p className="text-danger fs-12 mt-1">{formErrors.rating?.message}</p>

                                <div className="form-group mb-6">
                                    <textarea className="form-control form-control-lg border-0" placeholder="Your Review" name="review" rows={5} defaultValue={""} />
                                    <p className="text-danger fs-12 mt-1">{formErrors.review?.message}</p>
                                </div>
                                <button type="submit" className="btn btn-lg btn-primary px-10">Submit</button>
                            </form>
                        </div>
                    }
                    
                </div>
            </section>  
        </>
    )
}
