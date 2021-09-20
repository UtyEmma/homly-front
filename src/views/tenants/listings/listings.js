import React, { useCallback, useEffect, useState } from 'react'

import NavBar from 'components/shared/nav-bar';
import Footer from 'components/shared/footer';

import { useDispatch, useSelector } from 'react-redux';
import { ShowAllListings } from 'providers/redux/_actions/listing/listing-actions';
import ListingFilter from './components/listing-filter';
import Preloader from 'components/preloader/preloader';
import Searchbar from 'views/layouts/components/search/searchbar';
import ListingNotFound from 'components/404/404-listing';
import ListingContainer from './components/listing-container';
import FeaturedListings from './components/featured-listings/featured-listings';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


const Listing = ({isLoggedIn, user, setIsLoading, status}) => {

    const dispatch = useDispatch();

    const {loading, listings, featured} = useSelector((state) => state.active_listings);

    const [params, setParams] = useState()
    const {token} = useSelector((state) => state.user_data)
    
    const fetchListings = useCallback(() => {
        dispatch(ShowAllListings(token, params))
    }, [dispatch, params, token])

    useEffect(() => {
        if(!listings || params){
            fetchListings()
        }
    }, [fetchListings, listings, params])

    useEffect(() => {
        setIsLoading(loading)
    }, [loading, setIsLoading])

    
    return (
        <div>
            <Helmet>
                <title>Find Properties - Bayof Real Estate - Find Properties and agents around you</title>
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
            
            <NavBar isloggedIn={isLoggedIn} user={user} status={status} />
            
            <Preloader loading={loading} />

            <main id="content">
                <Searchbar />

                <div className="bg-gray-03 py-3">
                    <div className="container px-3 px-lg-0">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-4">
                                <div className="agent-header">
                                    <span><a href="/">Home</a> / Properties</span>
                                    <h3 className="w-100">Available Properties</h3>
                                </div>
                            </div>

                            <div className="col-md-8 col-12 px-2 d-md-flex justify-content-end">
                                <ListingFilter params={params} setParams={setParams}/> 
                            </div>
                        </div>
                    </div>
                </div>

                <section className="pt-8 pb-11">
                    <div className="container">
                    <div className="row gx-4">
                        <div className="col-lg-8 mb-8 mb-lg-0">
                            {
                                listings && listings.length > 0 
                                    ? <ListingContainer listings={listings} status={status} params={params} setParams={setParams} /> : <ListingNotFound/>
                            }  
                        </div>

                        <div className="col-lg-4 primary-sidebar sidebar-sticky" id="sidebar">
                            <div className="primary-sidebar-inner">
                            
                            <div className="card border-0 property-widget mb-6">
                            <div className="card-body px-0 pl-lg-6 py-0">
                                <h4 className="card-title fs-16 lh-2 text-dark mb-3">Featured Properties</h4>
                                {
                                    featured && featured.length > 0

                                    ? 

                                    <FeaturedListings listings={featured} />

                                    :

                                    <div></div>
                                }
                            </div>
                            </div>
                            <div className="card border-0">
                            <div className="card-body pl-0 pl-lg-6 pr-0 py-0">
                                <h4 className="card-title fs-16 lh-2 text-dark mb-3">Latest Posts</h4>
                                <ul className="list-group list-group-flush">
                                <li className="list-group-item px-0 pt-0 pb-3">
                                    <div className="media">
                                    <div className="position-relative mr-3">
                                        <a href="blog-details-1.html" className="d-block w-100px rounded pt-11 bg-img-cover-center" style={{backgroundImage: 'url("images/post-02.jpg")'}}>
                                        </a>
                                        <a href="blog-grid-with-sidebar.html" className="badge text-white bg-dark-opacity-04 m-1 fs-13 font-weight-500 bg-hover-primary hover-white position-absolute pos-fixed-top">
                                        creative
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="fs-14 lh-186 mb-1">
                                        <a href="blog-details-1.html" className="text-dark hover-primary">
                                            Retail banks wake up to digital lending this year
                                        </a>
                                        </h4>
                                        <div className="text-gray-light">
                                        Dec 16, 2018
                                        </div>
                                    </div>
                                    </div>
                                </li>
                                <li className="list-group-item px-0 pt-2 pb-3">
                                    <div className="media">
                                    <div className="position-relative mr-3">
                                        <a href="blog-details-1.html" className="d-block w-100px rounded pt-11 bg-img-cover-center" style={{backgroundImage: 'url("images/post-04.jpg")'}}>
                                        </a>
                                        <a href="blog-grid-with-sidebar.html" className="badge text-white bg-dark-opacity-04 m-1 fs-13 font-weight-500 bg-hover-primary hover-white position-absolute pos-fixed-top">
                                        rental
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="fs-14 lh-186 mb-1">
                                        <a href="blog-details-1.html" className="text-dark hover-primary">
                                            Within the construction industry as their overdraft
                                        </a>
                                        </h4>
                                        <div className="text-gray-light">
                                        Dec 16, 2018
                                        </div>
                                    </div>
                                    </div>
                                </li>
                                <li className="list-group-item px-0 pt-2">
                                    <div className="media">
                                    <div className="position-relative mr-3">
                                        <a href="blog-details-1.html" className="d-block w-100px rounded pt-11 bg-img-cover-center" style={{backgroundImage: 'url("images/post-07.jpg")'}}>
                                        </a>
                                        <a href="blog-grid-with-sidebar.html" className="badge text-white bg-dark-opacity-04 m-1 fs-13 font-weight-500 bg-hover-primary hover-white position-absolute pos-fixed-top">
                                        rental
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="fs-14 lh-186 mb-1">
                                        <a href="blog-details-1.html" className="text-dark hover-primary">
                                            Future Office Buildings: Intelligent by Design
                                        </a>
                                        </h4>
                                        <div className="text-gray-light">
                                        Dec 16, 2018
                                        </div>
                                    </div>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </main>            
        <Footer />
    </div>

    )
}

export default Listing;