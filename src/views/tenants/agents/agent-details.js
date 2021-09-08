import React, {useEffect, useState} from 'react'

import { useParams } from 'react-router-dom'

import NavBar from 'components/shared/nav-bar'
import Footer from 'components/shared/footer'
import Preloader from 'components/preloader/preloader'
import { useDispatch, useSelector } from 'react-redux'
import { FetchAgentDetails } from 'providers/redux/_actions/agent-actions'
import AgentDetailsContainer from './components/agent-details-container'
import NotFound from 'views/not-found'
import Searchbar from 'views/layouts/components/search/searchbar'
import { Helmet } from 'react-helmet'

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
        setIsLoading(loading)
    }, loading)

    useEffect(() => {
        !agent && loadAgent()
        agent && handleSetAgentData()
        setIsLoading(loading)
    }, [agent])

    return (
        <div>
            <Helmet>
                {
                    agent
                    
                    &&

                    <title>{agent.firstname} {agent.lastname} - Bayof Agent</title>
                }
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@" />
                <meta name="twitter:creator" content="@" />
                <meta name="twitter:title" content="Bayof Real Estate" />
                <meta name="twitter:description" content="Find the best accomodation around you" />
                <meta name="twitter:image" content="/images/homeid-social-logo.png" />
                <meta property="og:url" content="home-01.html" />
                <meta property="og:title" content="Home 01" />
                <meta property="og:description" content="Find the best accomodation around you" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/homeid-social.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="description" content="Find Properties and agents around you." />
            </Helmet>
            <Preloader loading={loading} />
            <NavBar isloggedIn={isLoggedIn} user={user}/>

            <main id="content">
            <Searchbar />
            {

                agentData
                
                ?

                <AgentDetailsContainer agent={agentData.agent} setAgentData={setAgentData} status={status} fetchAgent={loadAgent} listings={agentData.listing} reviews={agentData.reviews} setIsLoading={setIsLoading} />

                :

                <NotFound />

            }
           
            </main>

            <Footer/>
        </div>
    )
    
}

export default AgentDetails;
