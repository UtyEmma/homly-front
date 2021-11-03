import React from 'react'
import RatingStar from 'components/rating/rating-star';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import {capitalize} from "../../../../libraries/general/helper-functions";

export default function AgentCard({agent}) {

    return (
        <ScrollAnimation animateIn="fadeInUp" className="col-sm-6 col-md-4 col-lg-3 mb-6">
            <div className="card shadow-hover-xs-4 agent-3">
                <div className="card-header text-center pt-6 pb-3 bg-transparent text-center">
                <Link to={`/${agent.username}`} className="d-inline-block mb-2 w-120px h-120">
                    {   agent.avatar 
                            ? <div className="rounded-circle w-120px h-120 d-flex align-items-center justify-content-center overflow-hidden"><img src={agent.avatar} className="w-120px h-120" style={{objectFit: 'cover'}} alt={`${agent.firstname} ${agent.lastname}`} /></div> : 
                                <div className="d-inline-block mb-2 w-120px h-120 w-82px h-82 mr-2 bg-gray-01 rounded-circle fs-25 font-weight-500 text-muted d-flex align-items-center justify-content-center text-uppercase mr-sm-8 mb-4 mb-sm-0 mx-auto">
                                    {`${agent.firstname.charAt(0).toUpperCase()}${agent.lastname.charAt(0).toUpperCase()}`}
                                </div>
                    }
                </Link>

                <Link to={`/${agent.username}`} className="d-block fs-16 lh-2 text-dark mb-0 font-weight-500 hover-primary">
                    {capitalize(agent.firstname)} {capitalize(agent.lastname)}
                    {
                        agent.verified == "1"

                        ?

                        <i className="fs-12 pb-1 fa fa-badge-check text-primary ml-1"></i>

                        :

                        ""
                    }
                </Link>
                <p className="mb-2">{agent.title}</p>
                <ul className={`list-inline mb-0 ${agent.twitter || agent.facebook || agent.instagram || agent.website ? "" : "h-30"}`}>
                    {
                        agent.twitter 
                        
                        &&

                        <li className="list-inline-item mr-6">
                            <a href={agent.twitter} target="_blank" className="text-muted hover-primary" rel="noreferrer"><i className="fab fa-twitter" /></a>
                        </li>
                    }

                    {
                        agent.facebook

                        &&

                        <li className="list-inline-item mr-6">
                            <a href={agent.facebook} target="_blank" className="text-muted hover-primary" rel="noreferrer"><i className="fab fa-facebook-f"/></a>
                        </li>
                    }
                    

                    {
                        agent.instagram

                        && 

                        <li className="list-inline-item mr-6">
                            <a href={agent.instagram} target="_blank" className="text-muted hover-primary" rel="noreferrer"><i className="fab fa-instagram" /></a>
                        </li>
                    }


                    {
                        agent.website

                        && 

                        <li className="list-inline-item">
                            <a href={agent.website} target="_blank" className="text-muted hover-primary" rel="noreferrer"><i className="fa fa-globe-africa" /></a>
                        </li>
                    }
                </ul>
                </div>
                <div className="card-body text-center pt-2  px-0">
                <a href={`mailto:${agent.email}`} className="text-body">{agent.email}</a>
                <a href={`tel:${agent.phone}"`} className="text-heading font-weight-600 d-block mb-3">{agent.phone}</a>
                <ul className="list-inline mb-0">
                    <li className="list-inline-item fs-13 text-heading font-weight-500">{agent.rating ? agent.rating : 1}/5</li>
                        <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                            <ul className="list-inline mb-0">
                                <RatingStar rating={agent.rating ? agent.rating : 1}/>
                            </ul>
                        </li>
                    <li className="list-inline-item fs-13 text-gray-light">({agent.no_reviews} reviews)</li>
                </ul>
                <p><span className="badge badge-white badge-circle border fs-13 font-weight-bold mr-2 lh-11 mt-2 mb-0">{agent.no_of_listings}</span> Listed {agent.no_of_listings === 1 ? 'Property' : 'Properties'}</p>
                </div>
                <div className="card-footer px-0 text-center hover-image border-0">
                <Link to={`../${agent.username}`} className="d-flex align-items-center justify-content-center text-heading">
                    <span className="font-weight-500 mr-2">View Profile</span>
                    <span className="text-primary fs-16 icon"><i className="far fa-long-arrow-right" /></span>
                </Link>
                </div>
            </div>
        </ScrollAnimation>
    )
}
