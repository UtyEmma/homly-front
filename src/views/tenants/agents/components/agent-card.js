import React from 'react'

export default function AgentCard({agent}) {

    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-6">
            <div className="card shadow-hover-xs-4 agent-3">
                <div className="card-header text-center pt-6 pb-3 bg-transparent text-center">
                <a href="agent-details-1.html" className="d-inline-block mb-2 w-120px h-120">
                    <img src="images/agent-1.jpg" alt="Max Kordek" />
                </a>
                <a href="agent-details-1.html" className="d-block fs-16 lh-2 text-dark mb-0 font-weight-500 hover-primary">{agent.firstname} {agent.lastname}</a>
                <p className="mb-2">Real Estate Broker</p>
                <ul className="list-inline mb-0">
                    <li className="list-inline-item mr-6">
                    <a href="/" className="text-muted hover-primary"><i className="fab fa-twitter" /></a>
                    </li>
                    <li className="list-inline-item mr-6">
                    <a href="/" className="text-muted hover-primary"><i className="fab fa-facebook-f" /></a>
                    </li>
                    <li className="list-inline-item mr-6">
                    <a href="/" className="text-muted hover-primary">
                        <i className="fab fa-skype" /></a>
                    </li>
                    <li className="list-inline-item">
                    <a href="/" className="text-muted hover-primary"><i className="fab fa-linkedin-in" /></a>
                    </li>
                </ul>
                </div>
                <div className="card-body text-center pt-2  px-0">
                <a href="mailto:oliverbeddows@homeid.com" className="text-body">{agent.email}</a>
                <a href="tel:123-900-68668" className="text-heading font-weight-600 d-block mb-3">{agent.phone}</a>
                <ul className="list-inline mb-0">
                    <li className="list-inline-item fs-13 text-heading font-weight-500">4.8/5</li>
                    <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item mr-0">
                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                        </li>
                        <li className="list-inline-item mr-0">
                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                        </li>
                        <li className="list-inline-item mr-0">
                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                        </li>
                        <li className="list-inline-item mr-0">
                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                        </li>
                        <li className="list-inline-item mr-0">
                        <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                        </li>
                    </ul>
                    </li>
                    <li className="list-inline-item fs-13 text-gray-light">(67 reviews)</li>
                </ul>
                </div>
                <div className="card-footer px-0 text-center hover-image border-0">
                <a href="listing-with-left-sidebar.html" className="d-flex align-items-center justify-content-center text-heading">
                    <span className="badge badge-white badge-circle border fs-13 font-weight-bold mr-2 lh-12">{agent.no_of_listings}</span>
                    <span className="font-weight-500 mr-2">Listed Properties</span>
                    <span className="text-primary fs-16 icon"><i className="far fa-long-arrow-right" /></span>
                </a>
                </div>
            </div>
        </div>
    )
}
