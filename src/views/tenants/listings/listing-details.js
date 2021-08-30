import React, {Component, useEffect} from 'react'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FetchSingleListing } from 'providers/redux/_actions/listing/listing-actions'
import ListingGallery from './components/listing-details/listing-gallery'
import ListingComponents from './components/listing-details'
import ListingAction from './components/listing-action-card'
import Searchbar from 'views/layouts/components/search/searchbar'
import Preloader from 'components/preloader/preloader'

import NavBar from 'components/shared/nav-bar'
import Footer from 'components/shared/footer'
import { MapItem } from './components/listing-details/listing-map'


const ListingDetails = ({isLoggedIn, user, status, adminMode}) => {
    const {slug} = useParams();
    const dispatch = useDispatch()

    const details = useSelector((state) => state.listing);
    const {loading, listing, agent} = details;

    useEffect(() => {
        !listing && fetchListingData(slug)
    }, [listing]);

    const fetchListingData = (slug) => {
        dispatch(FetchSingleListing(slug))
    }

    return (
        <div>
            <Preloader loading={loading}/>
            <NavBar isloggedIn={isLoggedIn} user={user}/>

            <main id="content">
                <Searchbar/>
                
                {
                    listing 
                    
                    && 
                    
                    <>
                        <MapItem listing={listing} />
                        
                        <div className="primary-content bg-gray-01 pt-7 pb-12">
                            <div className="container">
                            <div className="row">
                                <article className="col-lg-8">
                                    <ListingComponents listing={listing} status={status} />
                                </article>

                                <aside className="col-lg-4 pl-xl-4">
                                    <ListingAction agent={agent} adminMode={adminMode} listing={listing}/>
                                </aside>
                            </div>
                            </div>
                        </div>
                    </>
                }
                

                <section>

                    {
                        agent

                        &&

                        <>
                        <div className="d-flex  bottom-bar-action bottom-bar-action-01 py-2 px-4 bg-gray-01 align-items-center position-fixed fixed-bottom d-sm-none">
                                <div className="media align-items-center">
                                    {   
                                        agent.avatar 
                                        
                                        ? 
                                        
                                        <div className="rounded-circle w-120px h-120 d-flex align-items-center justify-content-center overflow-hidden">
                                            <img src={agent.avatar} className="w-120px h-120" style={{objectFit: 'cover'}} alt={`${agent.firstname} ${agent.lastname}`} />
                                        </div> 
                                        
                                        : 
                                        <div className="d-inline-block mb-2 w-120px h-120 w-82px h-82 mr-2 bg-gray-01 rounded-circle fs-25 font-weight-500 text-muted d-flex align-items-center justify-content-center text-uppercase mr-sm-8 mb-4 mb-sm-0 mx-auto">
                                            {`${agent.firstname.charAt(0).toUpperCase()}${agent.lastname.charAt(0).toUpperCase()}`}
                                        </div>
                                    }

                                    <div className="media-body">
                                        <a href="#" className="d-block text-dark fs-15 font-weight-500 lh-15">{agent.firstname} {agent.lastname} </a>
                                        <span className="fs-13 lh-2">{agent.title}</span>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <button type="button" className="btn btn-primary fs-18 p-2 lh-1 mr-1 mb-1 shadow-none" data-toggle="modal" data-target="#modal-messenger"><i className="fal fa-comment" /></button>
                                    <a href={`tel:${agent.phone_number}`} className="btn btn-primary fs-18 p-2 lh-1 mb-1 shadow-none" target="_blank"><i className="fal fa-phone" /></a>
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
                                        <label className="form-check-label fs-13" htmlFor="exampleCheck3">Egestas fringilla phasellus faucibus scelerisque eleifend donec.</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-lg btn-block rounded">Request Info</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }

                </section>
                </main>

            <Footer />
        </div>
    )

}

export default ListingDetails;
