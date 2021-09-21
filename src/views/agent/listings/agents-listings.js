import AgentListingsNotFound from 'components/404/404-agent_listings'
import Preloader from 'components/preloader/preloader'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAgentListings } from '../../../providers/redux/_actions/listing/listing-actions'
import Header from '../layouts/shared/header'
import Sidebar from '../layouts/shared/sidebar'
import AgentListingContainer from './components/agent_listing-container'
import { Helmet } from 'react-helmet'
import { ConfirmActionDialog } from 'views/layouts/components/modals/confirm-action-dialog'

const AgentsListings = ({agent, setIsLoading}) => {
    
    const dispatch = useDispatch();
    const [show, setShow] = useState(false)

    const {loading, listings} = useSelector((state) => state.agents_listings);

    const user_data = useSelector(state => (state.user_data))
    const {token} = user_data

    const loadListings = () => {
        dispatch(GetAgentListings(token));
    }

    useEffect(() => {
        if(!listings){ loadListings() }
    }, [listings])

    useEffect(() => {
        setIsLoading(loading)
    }, [loading])

    return (
        <div className="wrapper dashboard-wrapper">
            <Helmet>
                <title>My Listings - Bayof Agent Dashboard</title>
            </Helmet>
            
            <div className="d-flex flex-wrap flex-xl-nowrap">
                <Sidebar agent={agent}/>

                <div className="page-content">
                    <Header agent={agent}/>

                    <main id="content" className="bg-gray-01">
                        <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10">

                        {
                            listings && listings.length > 0
                            
                            ? 
                            
                            <AgentListingContainer listings={listings} />

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