import AgentListingsNotFound from 'components/404/404-agent_listings'
import React, {useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAgentListings } from '../../../providers/redux/_actions/listing/listing-actions'
import Header from '../layouts/shared/header'
import Sidebar from '../layouts/shared/sidebar'
import AgentListingContainer from './components/agent_listing-container'
import { Helmet } from 'react-helmet'
import { FilterResults } from 'libraries/search/filter'

const AgentsListings = ({agent, setIsLoading}) => {
    
    const dispatch = useDispatch();

    const {loading, listings} = useSelector((state) => state.agents_listings);

    const user_data = useSelector(state => (state.user_data))
    const {token} = user_data

    const href = window.location.href

    const loadListings = useCallback(() => {
        dispatch(GetAgentListings(token));
    }, [dispatch, token])

    useEffect(() => {
        loadListings()
    }, [href])

    useEffect(() => {
        setIsLoading(loading)
    }, [loading, setIsLoading])

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
                        <div className="d-flex flex-wrap flex-md-nowrap mb-6">

                        <div className="mr-0 mr-md-auto">
                            <h2 className="mb-0 text-heading fs-22 lh-15">My Properties<span className="badge badge-white badge-pill text-primary fs-18 font-weight-bold ml-2">{listings && listings.length}</span></h2>
                            <p>Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                        </div>
                        <div className="form-inline justify-content-md-end mx-n2">
                            <div className="p-2">
                                <div className="input-group input-group-lg bg-white border">
                                    <div className="input-group-prepend">
                                        <button className="btn pr-0 shadow-none" type="button"><i className="far fa-search" /></button>
                                    </div>
                                    
                                    <input type="text" onChange={(e) => {FilterResults(e, '.filter-row', '.filter-item')}} className="font-weight-normal form-control bg-transparent border-0 shadow-none text-body" placeholder="Search Properties" name="search" />
                                </div>
                            </div>
                        </div>
                        </div>

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