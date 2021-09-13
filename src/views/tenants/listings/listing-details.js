import React, {Component, useEffect, useState} from 'react'

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
import { Helmet } from 'react-helmet'


const ListingDetails = ({isLoggedIn, user, status, adminMode, setIsLoading}) => {
    const {slug} = useParams();
    const dispatch = useDispatch()

    const [listingData, setListingData] = useState()

    const details = useSelector((state) => state.listing);
    const {loading, listing} = details;

    const suspend_listing = useSelector((state) => state.suspend_item);
    const {data} = suspend_listing;

    useEffect(() => {
        !listing && fetchListingData(slug)
        listing && setListingData(listing)
        data && setListingData(data)
    }, [listing, data]);

    useEffect(() => {
        setIsLoading(false)
    })

    const fetchListingData = (slug) => {
        dispatch(FetchSingleListing(slug))
    }

    return (
        <div>
            <Helmet>
                {
                    listing
                    &&

                    <title>{listing.title}</title>
                }
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
                <Searchbar/>
                
                {
                    listingData 
                    
                    && 
                    
                    <>
                        <MapItem listing={listingData.listing} />
                        
                        <div className="primary-content bg-gray-01 pt-7 pb-12">
                            <div className="container">
                            <div className="row">
                                <article className="col-lg-8">
                                    <ListingComponents listing={listingData.listing} status={status} />
                                </article>

                                <aside className="col-lg-4 pl-xl-4">
                                    <ListingAction agent={listingData.agent} adminMode={adminMode} listing={listingData.listing}/>
                                </aside>
                            </div>
                            </div>
                        </div>
                    </>
                }
                

                <section>

                    {
                        listingData && listingData.agent

                        &&

                        <>
                        <div className="d-flex  bottom-bar-action bottom-bar-action-01 py-2 px-4 bg-gray-01 align-items-center position-fixed fixed-bottom d-sm-none">
                                <div className="media align-items-center">
                                    {   
                                        listingData.agent.avatar 
                                        
                                        ? 
                                        
                                        <div className="rounded-circle d-flex align-items-center justify-content-center overflow-hidden">
                                            <img src={listingData.agent.avatar} className="w-70px h-70" style={{objectFit: 'cover'}} alt={`${listingData.agent.firstname} ${listingData.agent.lastname}`} />
                                        </div> 
                                        
                                        : 
                                        <div className="d-inline-block mb-2 w-70px h-70 mr-2 bg-gray-01 rounded-circle fs-25 font-weight-500 text-muted d-flex align-items-center justify-content-center text-uppercase mr-sm-8 mb-4 mb-sm-0 mx-auto">
                                            {`${listingData.agent.firstname.charAt(0).toUpperCase()}${listingData.agent.lastname.charAt(0).toUpperCase()}`}
                                        </div>
                                    }

                                    <div className="media-body">
                                        <a href="#" className="d-block text-dark fs-15 font-weight-500 lh-15">{listingData.agent.firstname} {listingData.agent.lastname} </a>
                                        <span className="fs-13 lh-2">{listingData.listing.title}</span>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <button type="button" className="btn btn-primary fs-18 p-2 lh-1 mr-1 mb-1 shadow-none" data-toggle="modal" data-target="#modal-messenger"><i className="fal fa-comment" /></button>
                                    <a href={`tel:${listingData.agent.phone_number}`} className="btn btn-primary fs-18 p-2 lh-1 mb-1 shadow-none" target="_blank"><i className="fal fa-phone" /></a>
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
