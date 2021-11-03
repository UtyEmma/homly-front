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
    const {loading, agent} = single_agent

    const {token} = useSelector(state => state.user_data)

    useEffect(() => {
        setIsLoading(loading)
    }, [loading, setIsLoading])
    
    const loadAgent = () => {
        dispatch(FetchAgentDetails(token, id, status ?? ''))
    }
    
    useEffect(() => {
        agent && setAgentData(agent)
    }, [agent])

    useEffect(() => {
        loadAgent()
    }, [id])

    return (
        <div>
            <Helmet>
                {
                    agentData

                    &&

                    <title>{ `${agentData.agent.firstname} ${agentData.agent.lastname} - Bayof Agent`} </title>
                }
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@" />
                <meta name="twitter:creator" content="@" />
                <meta
                  name="twitter:title"
                  content="Bayof - Take ownership of landed property, globally"
                />
                <meta
                  name="twitter:description"
                  content="We're using technology to take the housing and real estate industry into the modern age"
                />
                <meta property="og:url" content="{process.env.REACT_APP_API_URL}" />
                <meta
                  property="og:title"
                  content="Bayof - Take ownership of landed property, globally"
                />
                <meta
                  property="og:description"
                  content="We're using technology to take the real estate industry into the future"
                />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/homeid-social.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta
                  name="description"
                  content="We're using technology to take the real estate industry into the future"
                />
            </Helmet>
            <Preloader loading={loading} />
            <NavBar isloggedIn={isLoggedIn} user={user}/>

            <main id="content">
            <Searchbar />
            {

                agentData
                
                ?

                <AgentDetailsContainer agent={agentData.agent} setAgentData={setAgentData} status={status} listings={agentData.listing} reviews={agentData.reviews} setIsLoading={setIsLoading} />

                :

                <NotFound />

            }
           
            </main>

            <Footer/>
        </div>
    )
    
}

export default AgentDetails;
