import React, {Component, useEffect, useState} from 'react'

import { Redirect, useParams } from 'react-router-dom'

import NavBar from 'components/shared/nav-bar'
import Footer from 'components/shared/footer'
import Preloader from 'components/preloader/preloader'
import { useDispatch, useSelector } from 'react-redux'
import { FetchAgentDetails } from 'providers/redux/_actions/agent-actions'
import AgentDetailsContainer from './components/agent-details-container'
import NotFound from 'views/not-found'
import Searchbar from 'views/layouts/components/search/searchbar'

const AgentDetails = ({isLoggedIn, user, status, setIsLoading}) => {

    const {id} = useParams()
    const dispatch = useDispatch()

    const [agentData, setAgentData] = useState()

    const single_agent = useSelector(state => state.agent)
    const {loading, agent, error} = single_agent

    const loadAgent = () => {
        dispatch(FetchAgentDetails(id))
    }

    const handleSetAgentData = () => {
        if (agent) {
            console.log(agent)
            setAgentData(agent)   
        }
    }

    useEffect(() => {
        setIsLoading(false)
    })

    useEffect(() => {
        !agent && loadAgent()
        agent && handleSetAgentData()
        setIsLoading(loading)
    }, [agent])

    return (
        <div>
            <Preloader loading={loading} />
            <NavBar isloggedIn={isLoggedIn} user={user}/>

            <main id="content">
            <Searchbar />
            {

                agentData
                
                ?

                <AgentDetailsContainer agent={agentData.agent} setAgentData={setAgentData} status={status} fetchAgent={loadAgent} listings={agentData.listing} reviews={agentData.reviews} />

                :

                <NotFound />

            }
           
            </main>

            <Footer/>
        </div>
    )
    
}

export default AgentDetails;
