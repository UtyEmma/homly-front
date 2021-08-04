import AgentListingsNotFound from 'components/404/404-agent_listings'
import Preloader from 'components/preloader/preloader'
import React, {Component, useEffect, useState} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { GetAgentListings } from '../../../providers/redux/_actions/listing/listing-actions'
import Header from '../layouts/shared/header'
import Sidebar from '../layouts/shared/sidebar'
import AgentListingItem from './components/agent-listing-item'
import AgentListingContainer from './components/agent_listing-container'

const AgentsListings = ({agent}) => {
    
    const dispatch = useDispatch();

    const {loading, agents_listings, get_listing_failure} = useSelector((state) => state.agents_listings);

    const loadListings = () => {
        dispatch(GetAgentListings());
    }

    useEffect(() => {
        if(!agents_listings){
            loadListings()
        }
        console.log(agents_listings)
    }, [agents_listings])


    return (
        <div className="wrapper dashboard-wrapper">
            <Preloader loading={loading} />
            <div className="d-flex flex-wrap flex-xl-nowrap">
                <Sidebar />

                <div className="page-content">
                    <Header agent={agent}/>

                    <main id="content" className="bg-gray-01">
                        <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10">

                        {
                            agents_listings && agents_listings.count > 0
                            
                            ? 
                            
                            <AgentListingContainer listings={agents_listings} />

                            :

                            <AgentListingsNotFound />
                        }

                        </div>
                    </main>

                </div>

            </div>
        </div>
    )
}

export default AgentsListings;