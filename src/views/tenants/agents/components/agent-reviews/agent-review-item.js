import React, { useEffect } from 'react'
import RatingStar from 'components/rating/rating-star';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteAgentReview, EditReview } from 'providers/redux/_actions/review-actions';

export default function AgentReviewItem({userHasReviewed, setUserHasReviewed, review, publisher}) {
    const dispatch = useDispatch()

    const {token, type} = useSelector(state => state.user_data)
    const {reviews} = useSelector(state => state.delete_review)

    const deleteReview = () => {
        dispatch(DeleteAgentReview(token, review.unique_id, type))
    }

    const editPropertyReview = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        formData.append('role', type)
        dispatch(EditReview(token, formData))
    }

    useEffect(() => {
        review.owned_by_user && setUserHasReviewed(true)   
    })

    useEffect(() => {
        let status = !!reviews;
        status && setUserHasReviewed(!userHasReviewed)
    }, [reviews, setUserHasReviewed, userHasReviewed])

    return (
        <>
            <div className="media border-top py-6 d-sm-flex d-block text-sm-left text-center">
                <div className="w-82px h-82 mr-2 bg-gray-01 rounded-circle fs-25 font-weight-500 text-muted d-flex align-items-center justify-content-center text-uppercase mr-sm-8 mb-4 mb-sm-0 mx-auto">
                    {
                        publisher.avatar 
                            ? <img src={publisher.avatar} className="rounded-circle w-82px h-82" style={{objectFit: "cover", minHeight: '100%', minWidth: '100%'}} alt={`${publisher.firstname}`} /> : 
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
                            <div className="btn-group ">
                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn p-0 mb-0 text-muted border-left border-dark dropdown hover-primary lh-1 ml-2 pl-2"><i className="fa fa-edit"></i></button>

                                <div className="dropdown-menu dropdown-menu-md dropdown-menu-right mb-2">
                                    <div className="py-2 px-3">
                                        <h3 className="fs-16 lh-2 text-heading mb-2">Edit Review</h3>
    
                                        <form onSubmit={editPropertyReview}>
                                            <div className="form-group mb-2 d-flex justify-content-start">
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
                                            <input type="text" defaultValue={review.unique_id} name="unique_id" hidden/>
                                            <div className="form-group mb-3">
                                                <textarea className="form-control form-control-lg border-0" placeholder="Your Review" name="review" rows={4} defaultValue={review.review} />
                                            </div>
                                            <button type="submit" className="btn btn-lg btn-primary px-10">Edit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <button type="button" onClick={deleteReview} class="btn p-0 mb-0 text-muted border-left border-dark hover-primary lh-1 ml-2 pl-2"><i className="fa fa-trash-alt"></i></button>
                        </>
                    }
                    </div>
                </div>
            </div>  
        </>
    )
}
