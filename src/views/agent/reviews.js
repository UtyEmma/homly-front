import React, {useCallback, useEffect} from 'react'

import Sidebar from './layouts/shared/sidebar';
import Header from './layouts/shared/header';

import { ReviewItem } from './layouts/reviews-items';
import ReviewsNotFound from 'components/404/404-reviews';
import { useDispatch, useSelector } from 'react-redux';
import { FetchAgentReview } from 'providers/redux/_actions/review-actions';
import Preloader from 'components/preloader/preloader';
import { Helmet } from 'react-helmet';

const Reviews = ({agent, setIsLoading}) => {

    const dispatch = useDispatch();
    const {loading, reviews} = useSelector((state) => (state.agent_reviews));

    const user_data = useSelector(state => (state.user_data))
    const {token} = user_data

    const href = window.location.href

    const fetchReviews = useCallback(() => {
        dispatch(FetchAgentReview(token))
    }, [dispatch, token])

    useEffect(() => {
        fetchReviews()
    }, [href])

    useEffect(() => {
        setIsLoading(loading)   
    }, [loading, setIsLoading])

    return (
        <div className="wrapper dashboard-wrapper">
            <Helmet>
                <title>My Reviews</title>
            </Helmet>

            <div className="d-flex flex-wrap flex-xl-nowrap">
                <Sidebar agent={agent} />

                <div className="page-content">
                    <Header agent={agent} />

                    <main id="content" className="bg-gray-01">
                        <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10">
                            <div className="mb-6">
                            <h2 className="mb-0 text-heading fs-22 lh-15">
                                Reviews
                                <span className="badge badge-white badge-pill text-primary fs-18 font-weight-bold ml-2">{reviews && reviews.length}</span>
                            </h2>
                            <p className="mb-1">All reviews from clients on your account, will be displayed for you here</p>
                            </div>

                            <div className="card border-0 mb-4">
                                <div className="card-body p-0 p-sm-8 p-4">
                                        {
                                            reviews && reviews.length > 5

                                            ? 
                                                <>
                                                    <h3 className="fs-16 lh-2 text-heading mb-0 d-inline-block pr-4 border-bottom border-primary">
                                                        {reviews && reviews.length} Review{reviews &&  reviews.length !== 1 && 's'}
                                                    </h3>
                                                    
                                                    <ReviewItem reviews={reviews} />
                                                </>
                                            :
                                            
                                            <ReviewsNotFound />
                                        }
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
    
}

export default Reviews;
