import React, {Component, useEffect} from 'react'

import { Redirect, useParams } from 'react-router-dom'

import NavBar from 'components/shared/nav-bar'
import Footer from 'components/shared/footer'
import Preloader from 'components/preloader/preloader'
import { useDispatch, useSelector } from 'react-redux'
import { FetchAgentDetails } from 'providers/redux/_actions/agent-actions'
import AgentDetailsContainer from './components/agent-details-container'
import NotFound from 'views/not-found'
import Searchbar from 'views/layouts/components/search/searchbar'

const AgentDetails = ({isLoggedIn, user, status}) => {
    const {id} = useParams()
    const dispatch = useDispatch()

    const single_agent = useSelector(state => state.agent)
    const {loading, agent, error} = single_agent

    const loadAgent = () => {
        dispatch(FetchAgentDetails(id))
    }

    useEffect(() => {
        !agent && loadAgent()
    }, [agent])

    return (
        <div>
            <Preloader loading={loading} />
            <NavBar isloggedIn={isLoggedIn} user={user}/>

            <main id="content">
            <Searchbar />
            {

                agent
                
                ?

                <AgentDetailsContainer agent={agent.agent} status={status} fetchAgent={loadAgent} listings={agent.listing} reviews={agent.reviews} />

                :

                <NotFound />

            }
           
            </main>

            <Footer/>
        </div>
    )
    
}

export default AgentDetails;
