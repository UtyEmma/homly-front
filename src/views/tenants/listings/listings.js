import React, { useEffect, useState } from 'react'

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


const Listing = ({isLoggedIn, user, isLoading, adminMode}) => {
        const dispatch = useDispatch();
        const state = useSelector((state) => state.active_listings);
        const {loading, listings, featured} = state;

        const [params, setParams] = useState({})

        useEffect(() => {
            if(!listings || params) {
                fetchListings()
            }
        }, [params])

        const fetchListings = () => {
            console.log(params)
            dispatch(ShowAllListings(params))
        }
        
        return (
            <div>
                
                <Preloader loading={loading}/>

                <NavBar isloggedIn={isLoggedIn} user={user}/>
    
                <main id="content">
                    <Searchbar />

                    <div className="bg-gray-03 py-3">
                        <div className="container px-6 px-lg-0">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-3">
                                    <div className="agent-header">
                                        <span><a href="/">Home</a> / Properties</span>
                                        <h3>Available Properties</h3>
                                    </div>
                                </div>

                                <div className="col-md-9 d-flex justify-content-end">
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
                                        ? <ListingContainer listings={listings} /> : <ListingNotFound/>
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
                    <div id="compare" className="compare">
                        <button className="btn shadow btn-open bg-white bg-hover-accent text-secondary rounded-right-0 d-flex justify-content-center align-items-center w-30px h-140 p-0">
                        </button>
                        <div className="list-group list-group-no-border bg-dark py-3">
                        <a href="#" className="list-group-item bg-transparent text-white fs-22 text-center py-0">
                            <i className="far fa-bars" />
                        </a>
                        <div className="list-group-item card bg-transparent">
                            <div className="position-relative hover-change-image bg-hover-overlay">
                            <img src="images/compare-01.jpg" className="card-img" alt="properties" />
                            <div className="card-img-overlay">
                                <a href="#" className="text-white hover-image fs-16 lh-1 pos-fixed-top-right position-absolute m-2"><i className="fal fa-minus-circle" /></a>
                            </div>
                            </div>
                        </div>
                        <div className="list-group-item card bg-transparent">
                            <div className="position-relative hover-change-image bg-hover-overlay">
                            <img src="images/compare-02.jpg" className="card-img" alt="properties" />
                            <div className="card-img-overlay">
                                <a href="#" className="text-white hover-image fs-16 lh-1 pos-fixed-top-right position-absolute m-2"><i className="fal fa-minus-circle" /></a>
                            </div>
                            </div>
                        </div>
                        <div className="list-group-item card card bg-transparent">
                            <div className="position-relative hover-change-image bg-hover-overlay ">
                            <img src="images/compare-03.jpg" className="card-img" alt="properties" />
                            <div className="card-img-overlay">
                                <a href="#" className="text-white hover-image fs-16 lh-1 pos-fixed-top-right position-absolute m-2"><i className="fal fa-minus-circle" /></a>
                            </div>
                            </div>
                        </div>
                        <div className="list-group-item bg-transparent">
                            <a href="compare-details.html" className="btn btn-lg btn-primary w-100 px-0 d-flex justify-content-center">
                            Compare
                            </a>
                        </div>
                        </div>
                    </div>
                    </main>
    
                
                <Footer />
            </div>

        )
}

export default Listing;