import React, {Component, useEffect} from 'react'

import Sidebar from './layouts/shared/sidebar';
import Header from './layouts/shared/header';

import { ReviewItem } from './layouts/reviews-items';
import ReviewsNotFound from 'components/404/404-reviews';
import { useDispatch, useSelector } from 'react-redux';
import { FetchAgentReview } from 'providers/redux/_actions/review-actions';

const Reviews = ({agent}) => {

    const dispatch = useDispatch();
    const {loading, reviews} = useSelector((state) => (state.agent_reviews));

    const fetchReviews = () => {
        dispatch(FetchAgentReview())
    }

    useEffect(() => {
        !reviews && fetchReviews()
    }, [reviews])

    return (
        <div className="wrapper dashboard-wrapper">
            <div className="d-flex flex-wrap flex-xl-nowrap">
                <Sidebar />

                <div className="page-content">
                    <Header agent={agent} />

                    <main id="content" className="bg-gray-01">
                        <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10">
                            <div className="mb-6">
                            <h2 className="mb-0 text-heading fs-22 lh-15">Reviews<span className="badge badge-white badge-pill text-primary fs-18 font-weight-bold ml-2">29</span>
                            </h2>
                            <p className="mb-1">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                            </div>
                            {
                                reviews && reviews.length > 0

                                ? 

                                <ReviewItem reviews={reviews} />

                                :
                                
                                <ReviewsNotFound />
                            }
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
    
}

export default Reviews;
