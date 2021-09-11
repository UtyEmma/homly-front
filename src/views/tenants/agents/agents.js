import React, {Component, useEffect} from 'react'
import NavBar from 'components/shared/nav-bar'
import Footer from 'components/shared/footer'
import { useDispatch, useSelector } from 'react-redux'
import { ShowAllAgents } from '../../../providers/redux/_actions/agent-actions'
import Searchbar from 'views/layouts/components/search/searchbar'
import Preloader from 'components/preloader/preloader'
import AgentContainer from './components/agent-container'
import AgentNotFound from 'components/404/404-agents'
import { Helmet } from 'react-helmet'

const Agents = ({isLoggedIn, user, setIsLoading, status}) => {

    const dispatch = useDispatch();
    const agents_listing = useSelector((state) => state.available_agents)
    const {loading, agents} = agents_listing;

    const loadAgents = () => {
        dispatch(ShowAllAgents())
    }

    useEffect(() => {
        if(!agents){
            loadAgents()
        }
    }, [agents])

    useEffect(() => {
        setIsLoading(loading)
    }, [loading])

    return (
        <div>
            <Helmet>
                <title>Find Agents - Bayof Real Estate - Find Properties and agents around you</title>
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

            <Preloader loading={loading}/>
            
            <NavBar isloggedIn={isLoggedIn} user={user} status={status} />

            <main id="content">
                <Searchbar />
                <div className="row bg-gray-03 py-5">
                    <div className="container px-6 px-lg-0">
                        <div className="agent-header">
                            <span>Home / Agents</span>
                            <h3>Available Agents</h3>
                        </div>
                    </div>
                </div>
                <section className="pt-5 pb-13">
                    <div className="container">
                        {
                            agents && agents.length > 0 ? <AgentContainer agents={agents} /> : <AgentNotFound />
                        }
                    </div>
                </section>
                </main>


            <Footer />
        </div>
    )
}

export default Agents;