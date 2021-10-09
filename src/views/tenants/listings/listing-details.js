import React, {useEffect, useState} from 'react'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FetchSingleListing } from 'providers/redux/_actions/listing/listing-actions'
import ListingComponents from './components/listing-details'
import ListingAction from './components/listing-action-card'
import Searchbar from 'views/layouts/components/search/searchbar'
import Preloader from 'components/preloader/preloader'

import NavBar from 'components/shared/nav-bar'
import Footer from 'components/shared/footer'
import { MapItem } from './components/listing-details/listing-map'
import { Helmet } from 'react-helmet'


const ListingDetails = ({isLoggedIn, user, status, adminMode, setIsLoading}) => {

    const {username, slug} = useParams();
    
    const dispatch = useDispatch()

    const [listingData, setListingData] = useState()

    const details = useSelector((state) => state.listing);
    const {loading, listing, agent } = details;

    const suspend_listing = useSelector((state) => state.suspend_item);
    const {data} = suspend_listing;

    useEffect(() => {
        const fetchListingData = () => {
            dispatch(FetchSingleListing(username, slug, '/listings'))
        }
        
        !listing && fetchListingData()
    }, [listing, data, username, slug, dispatch]);

    useEffect(() => {
        data && setListingData(data)
    }, [data])

    useEffect(() => {
        listing && setListingData(listing)
    }, [listing])

    useEffect(() => {
        setIsLoading(false)
    })

    return (
        <div>
            <Helmet>
                {
                    listing && <title>{listing.title} - Bayof Real Estate</title>
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
                        <div className="d-flex d-md-none bottom-bar-action bottom-bar-action-01 py-2 px-4 bg-gray-01 align-items-center position-fixed fixed-bottom d-sm-none">
                                <div className="media align-items-center">
                                    {   
                                        agent.avatar 
                                        
                                        ? 
                                        
                                        <div className="rounded-circle w-70px h-70 d-flex align-items-center justify-content-center overflow-hidden">
                                            <img src={agent.avatar} className="w-70px h-70 rounded-circle" style={{objectFit: 'cover'}} alt={`${agent.firstname} ${agent.lastname}`} />
                                        </div> 
                                        
                                        : 
                                        <div className="d-inline-block mb-2 w-70px h-70 mr-2 bg-gray-01 rounded-circle fs-25 font-weight-500 text-muted d-flex align-items-center justify-content-center text-uppercase mr-sm-8 mb-4 mb-sm-0 mx-auto">
                                            {`${agent.firstname.charAt(0).toUpperCase()}${agent.lastname.charAt(0).toUpperCase()}`}
                                        </div>
                                    }

                                    <div className="media-body ml-2">
                                        <a href={`/${agent.username}`} className="d-block text-dark fs-15 font-weight-500 lh-15">{agent.firstname} {agent.lastname} </a>
                                        <p className="fs-13 mb-0 text-truncate">{listing.title}</p>
                                        
                                        <div className="">
                                            <a href={`mailto:${agent.email}`} className="btn btn-link mr-2 fs-20 px-0 btn-text lh-1 shadow-none"><i className="fal fa-envelope" /></a>

                                            {
                                                agent.phone_number

                                                &&

                                                <a href={`tel:${agent.phone_number}`} className="btn btn-link fs-20 mx-2 px-0 lh-1 shadow-none" target="_blank" rel="noreferrer"><i className="fal fa-phone" /></a>

                                            }

                                            {
                                                agent.whatsapp_no 
                                    
                                                &&
                        
                                                <a href={` https://wa.me/${agent.whatsapp_no}`} className="btn btn-link mx-2 fs-20 px-0 lh-1 shadow-none" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp" /></a>
                                            }
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
