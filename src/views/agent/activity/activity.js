import React, { useCallback, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { NotificationContainer } from '../layouts/notifications/notification-container';
import Header from '../layouts/shared/header';
import Sidebar from '../layouts/shared/sidebar';

export const AgentActivity = ({agent}) => {
    const dispatch = useDispatch();

    const {loading, listings} = useSelector((state) => state.agents_listings);

    const user_data = useSelector(state => (state.user_data))
    const {token} = user_data

    // const loadListings = useCallbackback(() => {
    //     dispatch(GetAgentListings(token));
    // }, [dispatch, token])

    // useEffect(() => {
    //     if(!listings){ loadListings() }
    // }, [listings, loadListings])

    // useEffect(() => {
    //     setIsLoading(loading)
    // }, [loading, setIsLoading])

    return (
        <div className="wrapper dashboard-wrapper">
            <Helmet>
                <title>My Activity - Bayof Agent Dashboard</title>
            </Helmet>
            
            <div className="d-flex flex-wrap flex-xl-nowrap">
                <Sidebar agent={agent}/>

                <div className="page-content">
                    <Header agent={agent}/>

                    <main id="content" className="bg-gray-01">
                        <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10">

                            <div className="d-flex flex-wrap flex-md-nowrap mb-6">

                                <div className="mr-0 mr-md-auto">
                                    <h2 className="mb-0 text-heading fs-22 lh-15">My Activity<span className="badge badge-white badge-pill text-primary fs-18 font-weight-bold ml-2"></span></h2>
                                    <p>Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                                </div>  

                            </div>

                            <NotificationContainer /> 

                        </div>
                    </main>

                </div>

            </div>
        </div>
    )
}