import RatingStar from 'components/rating/rating-star'
import React from 'react'
import AgentsListings from './agent-listings'
import AgentReviews from './agent-reviews'

export default function AgentDetailsContainer({agent, listings, reviews}) {
    return (
        <>
            <section className="pb-7 page-title">
                <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb pt-6 pt-lg-0 pb-0">
                    <li className="breadcrumb-item"><a href="../">Home</a></li>
                    <li className="breadcrumb-item"><a href="/agents">Agents</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{agent.firstname} {agent.lastname}</li>
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
                                    <div className="d-inline-block mb-2 w-120px h-120 w-82px h-82 mr-2 bg-gray-01 rounded-circle fs-25 font-weight-500 text-muted d-flex align-items-center justify-content-center text-uppercase mr-sm-8 mb-4 mb-sm-0 mx-auto">
                                        {`${agent.firstname.charAt(0).toUpperCase()}${agent.lastname.charAt(0).toUpperCase()}`}
                                    </div>
                                }
                            </div>
                            <p className="d-block fs-16 lh-214 text-dark mb-0 font-weight-500">{agent.firstname} {agent.lastname}
                            </p>
                            <p className="mb-0">{agent.title}</p>
                            <ul className="list-inline mb-2">
                            <li className="list-inline-item fs-13 text-heading font-weight-500">{agent.rating}/5</li>
                            <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                                <ul className="list-inline mb-0">
                                    <RatingStar rating={agent.rating} />
                                </ul>
                            </li>
                            <li className="list-inline-item fs-13 text-gray-light">({agent.no_reviews} reviews)</li>
                            </ul>
                        </div>
                        <div className="card-footer bg-white px-0 pt-1">
                            <ul className="list-group list-group-no-border mb-7">
                            <li className="list-group-item d-flex align-items-sm-center lh-114 row m-0 px-0 pt-3 pb-0">
                                <span className="col-3 p-0 fs-13">Phone Number</span>
                                <span className="col-9 p-0 text-heading font-weight-500">{agent.phone_number}</span>
                            </li>
                            <li className="list-group-item d-flex align-items-sm-center row m-0 px-0 pt-2 pb-0">
                                <span className="col-3 p-0 fs-13">Email</span>
                                <span className="col-9 p-0">{agent.email}</span>
                            </li>
                            <li className="list-group-item d-flex align-items-sm-center lh-114 row m-0 px-0 pt-3 pb-0">
                                <span className="col-3 p-0 fs-13">Social</span>
                                <ul className="col-9 list-inline text-gray-lighter m-0 p-0 z-index-2">
                                <li className="list-inline-item m-0">
                                    <a href={agent.twitter} className="w-32px h-32 rounded bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-twitter" /></a>
                                </li>
                                <li className="list-inline-item mr-0 ml-2">
                                    <a href={agent.facebook} className="w-32px h-32 rounded bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-facebook-f" /></a>
                                </li>
                                <li className="list-inline-item mr-0 ml-2">
                                    <a href={agent.instagram} className="w-32px h-32 rounded bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-instagram" /></a>
                                </li>
                                <li className="list-inline-item mr-0 ml-2">
                                    <a href={agent.website} className="w-32px h-32 rounded bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fa fa-globe-africa" /></a>
                                </li>
                                </ul>
                            </li>
                            </ul>
                            <a href={`mailto:${agent.email}`} type="submit" className="btn btn-primary btn-lg btn-block shadow-none">Send Message</a>
                        </div>
                        </div>
                        <div className="card mb-4">
                        <div className="card-body px-6 pt-5 pb-6">
                            <h4 className="card-title fs-16 lh-2 text-dark mb-3">Search</h4>
                            <form>
                            <div className="form-group mb-2">
                                <select className="form-control border-0 shadow-none selectpicker" name="company" title="Company" data-style="btn-lg px-3">
                                <option>Google</option>
                                <option>Facebook</option>
                                </select>
                            </div>
                            <div className="form-row mb-2">
                                <div className="col-6 form-group">
                                <select className="form-control selectpicker border-0" name="language" title="Language" data-style="btn-lg rounded-lg px-3">
                                    <option>English</option>
                                    <option>France</option>
                                </select>
                                </div>
                                <div className="col-6 form-group">
                                <select className="form-control selectpicker border-0" name="region" title="Region" data-style="btn-lg rounded-lg px-3">
                                    <option>Austin</option>
                                    <option>Boston</option>
                                    <option>Chicago</option>
                                    <option>Denver</option>
                                    <option>Los Angeles</option>
                                    <option>New York</option>
                                    <option>San Francisco</option>
                                </select>
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <input type="text" className="form-control form-control-lg border-0" name="search" placeholder="Search by agent’s name..." />
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg btn-block">
                                Search
                            </button>
                            </form>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-body text-center pt-7 pb-6 px-0">
                            <img src="images/contact-widget.jpg" alt="Want to become an Estate Agent ?" />
                            <div className="text-dark mb-6 mt-n2 font-weight-500">Want to become an
                            <p className="mb-0 fs-18">Estate Agent?</p>
                            </div>
                            <a href="/agent-signup" className="btn btn-primary">Register</a>
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
                    
                    <AgentsListings listings={listings} />

                    <AgentReviews reviews={reviews} />
                </div>
                </div>
                </div>
            </section>
            <div className="bottom-bar-action py-2 px-4 bg-gray-01 position-fixed fixed-bottom d-block d-sm-none">
                <div className="container">
                <div className="row no-gutters mx-n2 mxw-571 mx-auto">
                    <div className="col-6 px-2">
                    <a href="#modal-messenger" data-toggle="modal" className="btn btn-primary btn-lg btn-block fs-14 px-1 py-3 h-auto lh-13">Send Message</a>
                    </div>
                    <div className="col-6 px-2">
                    <a href="tel:(+84)2388-969-888" className="btn btn-primary btn-lg btn-block fs-14 px-1 py-3 h-auto lh-13">Call</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="modal fade" id="modal-messenger" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header border-0 pb-0">
                    <h4 className="modal-title text-heading" id="exampleModalLabel">Contact Form</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body pb-6">
                    <div className="form-group mb-2">
                        <input type="text" className="form-control form-control-lg border-0" placeholder="First Name, Last Name" />
                    </div>
                    <div className="form-group mb-2">
                        <input type="email" className="form-control form-control-lg border-0" placeholder="Your Email" />
                    </div>
                    <div className="form-group mb-2">
                        <input type="tel" className="form-control form-control-lg border-0" placeholder="Your phone" />
                    </div>
                    <div className="form-group mb-2">
                        <textarea className="form-control border-0" rows={4} defaultValue={"Hello, I'm interested in Villa Called Archangel"} />
                    </div>
                    <div className="form-group form-check mb-4">
                        <input type="checkbox" className="form-check-input" id="exampleCheck3" />
                        <label className="form-check-label fs-13" htmlFor="exampleCheck3">Egestas fringilla phasellus faucibus
                        scelerisque eleifend donec.</label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block rounded">Request Info</button>
                    </div>
                </div>
                </div>
            </div>
                </>
    )
}
