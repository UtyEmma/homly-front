import RatingStar from 'components/rating/rating-star'
import React from 'react'
import AgentCard from 'views/tenants/agents/components/agent-card'

export default function ListingAction({agent}) {
    return (
        <>
            <div class="card border-0 shadow-hover-3 px-6 position-stick sticky-top mt-4 mt-md-0" style={{top: '50px', zIndex: '0'}}>
                <div class="card-body text-center pt-6 pb-2 px-0">
                    <a href={"agent-details-1.html"} class="d-inline-block mb-2">
                        {   
                            agent.avatar 
                            
                            ? 
                            
                            <div className="rounded-circle w-120px h-120 d-flex align-items-center justify-content-center overflow-hidden"><img src={agent.avatar} className="w-120px h-120" style={{objectFit: 'cover'}} alt={`${agent.firstname} ${agent.lastname}`} /></div> 
                            
                            : 
                            <div className="d-inline-block mb-2 w-120px h-120 bg-gray-01 rounded-circle fs-30 font-weight-500 text-muted d-flex align-items-center justify-content-center text-uppercase mb-4 mb-sm-0">
                                {`${agent.firstname.charAt(0).toUpperCase()}${agent.lastname.charAt(0).toUpperCase()}`}
                            </div>
                        }
                    </a>

                    <a href="agent-details-1.html" class="d-block fs-16 lh-214 text-dark mb-0 font-weight-500 hover-primary">{agent.firstname} {agent.lastname}</a>
                    
                    <p class="mb-0">{agent.title}</p>
                    <ul class="list-inline mb-0">
                        <li className="list-inline-item fs-13 text-heading font-weight-500">{agent.rating}/5</li>
                        <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                            <ul className="list-inline mb-0">
                                <RatingStar rating={agent.rating}/>
                            </ul>
                        </li>
                        <li className="list-inline-item fs-13 text-gray-light">({agent.no_reviews} reviews)</li>
                    </ul>
                </div>
                <div class="card-footer bg-white px-0 pt-1 pb-6">
                <ul class="list-group list-group-no-border pb-1">
                    <li class="list-group-item d-flex align-items-sm-center lh-114 row m-0 px-0 pt-3 pb-0">
                    <span class="col-sm-4 p-0 fs-13 mb-1 mb-sm-0">Phone</span>
                    <span class="col-sm-8 p-0 text-heading font-weight-500">{agent.phone_number}</span>
                    </li>
                    <li class="list-group-item d-flex align-items-sm-center row m-0 px-0 pt-2 pb-0">
                    <span class="col-sm-4 p-0 fs-13 lh-114">Email</span>
                    <span class="col-sm-8 p-0">{agent.email}</span>
                    </li>
                    <li class="list-group-item d-flex align-items-sm-center lh-114 row m-0 px-0 pt-3 pb-0">
                    <span class="col-sm-4 p-0 fs-13 mb-1 mb-sm-0">Social</span>
                    <ul className={`list-inline mb-0 ${agent.twitter || agent.facebook || agent.instagram || agent.website ? "" : "h-30"}`}>
                        {
                            agent.twitter 
                            
                            &&

                            <li className="list-inline-item mr-6">
                                <a href={agent.twitter} target="_blank" className="text-muted hover-primary"><i className="fab fa-twitter" /></a>
                            </li>
                        }

                        {
                            agent.facebook

                            &&

                            <li className="list-inline-item mr-6">
                                <a href={agent.facebook} target="_blank" className="text-muted hover-primary"><i className="fab fa-facebook-f"/></a>
                            </li>
                        }
                        

                        {
                            agent.instagram

                            && 

                            <li className="list-inline-item mr-6">
                                <a href={agent.instagram} target="_blank" className="text-muted hover-primary"><i className="fab fa-instagram" /></a>
                            </li>
                        }


                        {
                            agent.website

                            && 

                            <li className="list-inline-item">
                                <a href={agent.website} target="_blank" className="text-muted hover-primary"><i className="fa fa-globe-africa" /></a>
                            </li>
                        }
                    </ul>
                    </li>
                </ul>
                </div>
            </div> 
        </>
    )
}
