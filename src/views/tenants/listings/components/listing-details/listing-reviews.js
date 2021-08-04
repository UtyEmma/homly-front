import { SubmitReview } from 'providers/redux/_actions/review-actions'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ListingReviews({listing_id}) {
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
                    <h3 className="fs-16 lh-2 text-heading mb-0 d-inline-block pr-4 border-bottom border-primary">5 Reviews</h3>
                    <div className="media border-top pt-7 pb-6 d-sm-flex d-block text-sm-left text-center">
                    <img src="images/review-07.jpg" alt="Danny Fox" className="mr-sm-8 mb-4 mb-sm-0" />
                    <div className="media-body">
                        <div className="row mb-1 align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                            <h4 className="mb-0 text-heading fs-14">Danny Fox</h4>
                        </div>
                        <div className="col-sm-6">
                            <ul className="list-inline d-flex justify-content-sm-end justify-content-center mb-0">
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <p className="mb-3 pr-xl-17">Very good and fast support during the week. Thanks for always
                        keeping your WordPress themes up to date. Your level of support and dedication
                        is second to none.</p>
                        <div className="d-flex justify-content-sm-start justify-content-center">
                        <p className="mb-0 text-muted fs-13 lh-1">02 Dec 2020 at 2:40pm</p>
                        <a href="#" className="mb-0 text-heading border-left border-dark hover-primary lh-1 ml-2 pl-2">Reply</a>
                        </div>
                    </div>
                    </div>
                    <div className="media border-top py-6 d-sm-flex d-block text-sm-left text-center">
                    <img src="images/review-08.jpg" alt="Viola Austin" className="mr-sm-8 mb-4 mb-sm-0" />
                    <div className="media-body">
                        <div className="row mb-1 align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                            <h4 className="mb-0 text-heading fs-14">Viola Austin</h4>
                        </div>
                        <div className="col-sm-6 ">
                            <ul className="list-inline d-flex justify-content-sm-end justify-content-center mb-0">
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <p className="mb-3 pr-xl-17">Very good and fast support during the week. Thanks for always
                        keeping your WordPress themes up to date. Your level of support and dedication
                        is second to none.</p>
                        <div className="d-flex justify-content-sm-start justify-content-center">
                        <p className="mb-0 text-muted fs-13 lh-1">02 Dec 2020 at 2:40pm</p>
                        <a href="#" className="mb-0 text-heading border-left border-dark hover-primary lh-1 ml-2 pl-2">Reply</a>
                        </div>
                    </div>
                    </div>
                    <div className="media border-top py-6 d-sm-flex d-block text-sm-left text-center">
                    <img src="images/review-09.jpg" alt="Nettie Singleton" className="mr-sm-8 mb-4 mb-sm-0" />
                    <div className="media-body">
                        <div className="row mb-1 align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                            <h4 className="mb-0 text-heading fs-14">Nettie Singleton</h4>
                        </div>
                        <div className="col-sm-6 ">
                            <ul className="list-inline d-flex justify-content-sm-end justify-content-center mb-0">
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <p className="mb-3 pr-xl-17">Very good and fast support during the week. Thanks for always
                        keeping your WordPress themes up to date. Your level of support and dedication
                        is second to none.</p>
                        <div className="d-flex justify-content-sm-start justify-content-center">
                        <p className="mb-0 text-muted fs-13 lh-1">02 Dec 2020 at 2:40pm</p>
                        <a href="#" className="mb-0 text-heading border-left border-dark hover-primary lh-1 ml-2 pl-2">Reply</a>
                        </div>
                    </div>
                    </div>
                    <div className="media border-top py-6 d-sm-flex d-block text-sm-left text-center">
                    <img src="images/review-07.jpg" alt="Vernon Fisher" className="mr-sm-8 mb-4 mb-sm-0" />
                    <div className="media-body">
                        <div className="row mb-1 align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                            <h4 className="mb-0 text-heading fs-14">Vernon Fisher</h4>
                        </div>
                        <div className="col-sm-6">
                            <ul className="list-inline d-flex justify-content-sm-end justify-content-center mb-0">
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            <li className="list-inline-item mr-1">
                                <span className="text-border fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <p className="mb-3 pr-xl-17">Very good and fast support during the week. Thanks for always
                        keeping your WordPress themes up to date. Your level of support and dedication
                        is second to none.</p>
                        <div className="d-flex justify-content-sm-start justify-content-center">
                        <p className="mb-0 text-muted fs-13 lh-1">02 Dec 2020 at 2:40pm</p>
                        <a href="#" className="mb-0 text-heading border-left border-dark hover-primary lh-1 ml-2 pl-2">Reply</a>
                        </div>
                    </div>
                    </div>
                    <div className="media border-top py-6 d-sm-flex d-block text-sm-left text-center">
                    <div className="w-82px h-82 mr-2 bg-gray-01 rounded-circle fs-25 font-weight-500 text-muted d-flex align-items-center justify-content-center text-uppercase mr-sm-8 mb-4 mb-sm-0 mx-auto">
                        HI
                    </div>
                    <div className="media-body">
                        <div className="row mb-1 align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                            <h4 className="mb-0 text-heading fs-14">Harry Iglesias</h4>
                        </div>
                        <div className="col-sm-6">
                            <ul className="list-inline d-flex justify-content-sm-end justify-content-center mb-0">
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            <li className="list-inline-item mr-1">
                                <span className="text-border fs-12 lh-2"><i className="fas fa-star" /></span>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <p className="mb-3 pr-xl-17">Very good and fast support during the week. Thanks for always
                        keeping your WordPress themes up to date. Your level of support and dedication
                        is second to none.</p>
                        <div className="d-flex justify-content-sm-start justify-content-center">
                        <p className="mb-0 text-muted fs-13 lh-1">02 Dec 2020 at 2:40pm</p>
                        <a href="#" className="mb-0 text-heading border-left border-dark hover-primary lh-1 ml-2 pl-2">Reply</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="mt-2 pb-7 px-6 pt-6 bg-white rounded-lg">
                <div className="card border-0">
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
                    <div className="row">
                        <div className="col-sm-6">
                        <div className="form-group mb-4">
                            <input placeholder="Your Name" className="form-control form-control-lg border-0" type="text" name="name" />
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div className="form-group mb-4">
                            <input type="email" placeholder="Email" name="email" className="form-control form-control-lg border-0" />
                        </div>
                        </div>
                    </div>
                    <div className="form-group mb-6">
                        <textarea className="form-control form-control-lg border-0" placeholder="Your Review" name="review" rows={5} defaultValue={""} />
                    </div>
                    <button type="submit" className="btn btn-lg btn-primary px-10">Submit</button>
                    </form>
                </div>
                </div>
            </section>
        </>
    )
}
