import React from 'react'
import { Helmet } from 'react-helmet';
import { NotificationContainer } from '../layouts/notifications/notification-container';
import Header from '../layouts/shared/header';
import Sidebar from '../layouts/shared/sidebar';
import { useSelector } from 'react-redux'

const AgentActivity = ({agent, setIsLoading}) => {
    const notification = useSelector((state) => state.notification)
    const {notifications} = notification

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
                                    <p>All notifications or activities on your account 
                    {notifications && notifications.length > 0 ? " are all" : " will be"} displayed below</p>
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

export default AgentActivity;