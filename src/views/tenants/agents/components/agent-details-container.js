import RatingStar from 'components/rating/rating-star'
import { AgentSocialMediaLinks } from 'components/social-media/agent-social-media-links'
import { DeleteItem, SuspendItem, VerifyAgent } from 'providers/redux/_actions/admin-actions'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ConfirmActionDialog } from 'views/layouts/components/modals/confirm-action-dialog'
import AgentsListings from './agent-listings/agent-listings'
import AgentReviews from './agent-reviews/agent-reviews'

export default function AgentDetailsContainer({agent, listings, reviews, fetchAgent, status, setAgentData, setIsLoading}) {
    
    const dispatch = useDispatch()

    const {adminMode} = useSelector((state) => state.admin_mode)
    const {loading, data} = useSelector(state => state.suspend_item)
    // const {loading, data} = useSelector(state => state.delete_item)
    const {verifiedAgent} = useSelector(state => state.verify_agent)
    const {token} = useSelector((state) => state.user_data)
    
    const [show, setShow] = useState(false)
    const [action, setAction] = useState()

    const suspendAgent = () => {
        setAction('suspend')
        setShow(true)
    }

    const callback = () => {
        if (action === 'suspend') {
            return dispatch(SuspendItem(token, 'agent', agent.unique_id))   
        }else if(action === 'delete'){
            return dispatch(DeleteItem(token, 'agent', agent.unique_id, `/agents`))
        }
    }

    const verifyAgent = () => {
        dispatch(VerifyAgent(token, agent.unique_id))
    } 

    useEffect(() => {
        setIsLoading(loading)
    }, [loading, setIsLoading])

    useEffect(() => {
        data && setShow(false)
    }, [data])

    const deleteAgent = () => {
        setAction('delete')
        setShow(true)
    }

    return (
        <>
            <section className="py-7  page-title">
                <div className="container">
                <h3>Agent</h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb pt-6 pt-lg-0 pb-0">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/agents">Agents</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">
                            {agent.firstname} {agent.lastname} 
                        </li>
                    </ol>
                </nav>
                </div>
            </section>
            <section className="bg-gray-01 pt-9 pb-13">
                <div className="container">
                <div className="row">
                    <div className="col-lg-4 primary-sidebar sidebar-sticky" id="sidebar">
                    <div className="primary-sidebar-inner">
                        <div className="card p-6 mb-4">
                        <div className="card-body text-center p-0">
                            <div className="col-12 d-flex justify-content-center">
                                {   agent.avatar 
                                    ? 
                                    <div className="rounded-circle w-120px h-120 overflow-hidden">
                                        <img src={agent.avatar} className="w-120px h-120" style={{objectFit: 'cover'}} alt={`${agent.firstname} ${agent.lastname}`} />
                                    </div> 
                                    : 
                                    <div className="d-inline-block mb-2 w-120px h-120 w-82px h-82 mr-2 bg-gray-01 rounded-circle fs-25 font-weight-500 text-muted d-flex align-items-center justify-content-center text-uppercase mb-4 mb-sm-0 mx-auto">
                                        {`${agent.firstname.charAt(0).toUpperCase()}${agent.lastname.charAt(0).toUpperCase()}`}
                                    </div>
                                }
                            </div>
                            <p className="d-block fs-16 lh-214 text-dark mb-0 font-weight-500">
                                {agent.firstname} {agent.lastname}
                                {   
                                    agent.verified 
                                    
                                    ? 
                                    
                                    <i className="ml-1 fas fa-badge-check text-primary"></i> 
                                    
                                    :
                                    
                                    ""
                                }
                            </p>
                            <p className="mb-0">{agent.title}</p>
                            <ul className="list-inline mb-2">
                            <li className="list-inline-item fs-13 text-heading font-weight-500">{agent.rating ?? 1}/5</li>
                            <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                                <ul className="list-inline mb-0">
                                    <RatingStar rating={agent.rating ?? 1} />
                                </ul>
                            </li>
                            <li className="list-inline-item fs-13 text-gray-light">({agent.no_reviews} reviews)</li>
                            </ul>
                        </div>
                        <div className="card-footer bg-white px-0 pt-1">
                            <ul className="list-group list-group-no-border mb-7">
                            {
                                agent.phone_number

                                && 
                                
                                <li className="list-group-item d-flex align-items-sm-center lh-114 row m-0 px-0 pt-3 pb-0">
                                    <span className="col-3 p-0 fs-13">Phone</span>
                                    <span className="col-9 p-0 text-heading font-weight-500">{agent.phone_number}</span>
                                </li>
                            }

                            <li className="list-group-item d-flex align-items-sm-center row m-0 px-0 pt-2 pb-0">
                                <span className="col-3 p-0 fs-13">Email</span>
                                <span className="col-9 p-0">{agent.email}</span>
                            </li>
                            <li className="list-group-item d-flex align-items-sm-center lh-114 row m-0 px-0 pt-3 pb-0">
                                <AgentSocialMediaLinks agent={agent} />
                            </li>
                            </ul>
                            <a href={`mailto:${agent.email}`} type="submit" className="btn btn-primary btn-lg btn-block shadow-none">
                                Send An Email
                                <i className="fa fa-envelope ml-2"></i>
                            </a>

                            {
                                adminMode === true

                                &&

                                <> 
                                    <hr/>
                                
                                    <div className="">
                                        {
                                            
                                            !agent.verified

                                            &&

                                            <button type="button" onClick={verifyAgent} className="btn btn-block btn-lg btn-success">Verify Agent</button>

                                        }

                                        <button type="button" onClick={suspendAgent} className="btn btn-block btn-lg btn-outline-warning hover-white">{agent.status === 'active' ? 'Suspend' : 'Unsuspend'} Agent</button>
                                        
                                        <button type="button" onClick={deleteAgent} className="btn btn-block btn-lg btn-danger">Delete Agent</button>
                                    </div>
                                </>

                            }
                        </div>
                        </div>
                        <div className="card d-none d-md-block">
                            <div className="card-body text-center pt-7 pb-6 px-0">
                                <img src="images/contact-widget.jpg" alt="Want to become an Estate Agent ?" />
                                <div className="text-lead fs-20 text-dark mb-6 mt-n2 font-weight-600">Boost your visibility as
                                <p className="mb-0 fs-18">a Real Estate Agent?</p>
                                </div>
                                <a href="/agent-signup" className="btn btn-primary">Sign up Now</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-8 mb-6 mb-lg-0">
                    <h2 className="fs-22 text-heading lh-15 mb-6">About me</h2>
                    <div className="card border-0 mb-10">
                        <div className="card-body py-5 px-6">
                        <h3 className="card-title text-heading fs-16 lh-213">
                            About {agent.firstname} {agent.lastname}
                        </h3>
                        <p className="lh-214 mb-6">{agent.bio}</p>
                        </div>
                    </div>
                    
                    <AgentsListings listings={listings} setIsLoading={setIsLoading} />

                    <AgentReviews status={status} reviews={reviews} agent={agent} setIsLoading={setIsLoading} />
                </div>
                </div>
                </div>
            </section>
            
            <ConfirmActionDialog show={show} setShow={setShow} callback={callback} />
                </>
    )
}
