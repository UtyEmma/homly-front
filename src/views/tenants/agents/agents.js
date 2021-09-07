import React, {Component, useEffect} from 'react'
import NavBar from 'components/shared/nav-bar'
import Footer from 'components/shared/footer'
import { useDispatch, useSelector } from 'react-redux'
import { ShowAllAgents } from '../../../providers/redux/_actions/agent-actions'
import Searchbar from 'views/layouts/components/search/searchbar'
import Preloader from 'components/preloader/preloader'
import AgentContainer from './components/agent-container'
import AgentNotFound from 'components/404/404-agents'

const Agents = ({isLoggedIn, user, setIsLoading}) => {

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
            <Preloader loading={loading}/>
            
            <NavBar isloggedIn={isLoggedIn} user={user}/>

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