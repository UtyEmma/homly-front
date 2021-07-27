import React, {Component, useEffect} from 'react'
import NavBar from 'components/shared/nav-bar'
import Footer from 'components/shared/footer'
import AgentCard from './components/agent-card'
import { useDispatch, useSelector } from 'react-redux'
import { ShowAllAgents } from '../../../providers/redux/_actions/agent-actions'
import Searchbar from 'views/layouts/components/search/searchbar'
import Preloader from 'components/preloader/preloader'

const Agents = ({isLoggedIn, user}) => {

    const dispatch = useDispatch();
    const agents_listing = useSelector((state) => state.available_agents)
    const {loading, agents_data, agent_error} = agents_listing;

    const loadAgents = () => {
        dispatch(ShowAllAgents())
    }

    useEffect(() => {
        if(!agents_data){
            loadAgents()
        }
    }, [agents_data])

    return (
        <div>
            <Preloader loading={loading}/>
            
            <NavBar isloggedIn={isLoggedIn} user={user}/>

            <main id="content">
                <Searchbar />
                <section className="pt-12 pb-13">
                    <div className="container">
                    <div className="row align-items-sm-center mb-6">
                        <div className="col-sm-6 mb-6 mb-sm-0">
                        <h2 className="fs-15 text-dark mb-0">We found <span className="text-primary">{agents_data && agents_data.count}</span> agents available for
                            you
                        </h2>
                        </div>
                        <div className="col-sm-6">
                        <div className="d-flex justify-content-end align-items-center">
                            <div className="input-group border rounded input-group-lg w-auto mr-3">
                            <label className="input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3" htmlFor="inputGroupSelect01"><i className="fas fa-align-left fs-16 pr-2" />Sort
                                by:</label>
                            <select className="form-control border-0 bg-transparent shadow-none p-0 selectpicker" data-style="bg-transparent border-0 font-weight-600 btn-lg pl-0" id="inputGroupSelect01" name="sortby">
                                <option selected>Alphabet</option>
                                <option value={1}>Random</option>
                                <option value={1}>Rating</option>
                                <option value={1}>Number of property</option>
                            </select>
                            </div>
                            <div className="d-none d-md-block list-layout">
                            <a className="fs-sm-18 text-muted" href="agents-list.html">
                                <i className="fas fa-list" />
                            </a>
                            <span className="fs-sm-18 text-muted ml-5 active">
                                <i className="fa fa-th-large" />
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        {agents_data ? agents_data.agents.map((agent) =>(        
                            <AgentCard agent={agent} key={agent.unique_id}/> )) 
                                        
                            :
                        
                            <div className="spinner-border text-gray-lighter" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        
                        }

                    </div>
                    <nav className="mt-4">
                        <ul className="pagination rounded-active justify-content-center">
                        <li className="page-item"><a className="page-link" href="/"><i className="far fa-angle-double-left" /></a></li>
                        <li className="page-item"><a className="page-link" href="/">1</a></li>
                        <li className="page-item active"><a className="page-link" href="/">2</a></li>
                        <li className="page-item d-none d-sm-block"><a className="page-link" href="/">3</a></li>
                        <li className="page-item">...</li>
                        <li className="page-item"><a className="page-link" href="/">6</a></li>
                        <li className="page-item"><a className="page-link" href="/"><i className="far fa-angle-double-right" /></a></li>
                        </ul>
                    </nav>
                    <div className="text-center mt-2">8-14 of 45 Results</div>
                    </div>
                </section>
                </main>


            <Footer />
        </div>
    )
}

export default Agents;