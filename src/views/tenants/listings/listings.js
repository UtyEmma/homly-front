import React, { Component, useEffect, useState } from 'react'

import NavBar from 'components/shared/nav-bar';
import Footer from 'components/shared/footer';

import { useDispatch, useSelector } from 'react-redux';
import { ShowActiveListings, ShowAllListings } from 'providers/redux/_actions/listing/listing-actions';
import ListingGrid from './components/listing-grid';
import ListingList from './components/listing-list';
import ListingFilter from './components/listing-filter';
import { ToastContainer } from 'react-toastify';
import Preloader from 'components/preloader/preloader';
import Searchbar from 'views/layouts/components/search/searchbar';
import ListingNotFound from 'views/layouts/components/404/404-listing';


const Listing = ({isLoggedIn, user, results}) => {
        const dispatch = useDispatch();
        const listings = useSelector((state) => state.active_listings);
        const {loading, active_listings} = listings;
        const [params, setParams] = useState({})
        const [grid, setGrid] = useState(true)

        useEffect(() => {
            if(!active_listings && !results) {
                fetchListings()
            } 
        }, [params])

        const fetchListings = () => {
            dispatch(ShowAllListings(params))
        }
        
        const toggleGrid = () => {
            if(!grid){
                setGrid(true)
            }
        }

        const toggleList = () => {
            if(grid){
                setGrid(false)
            }
        }

        
        return (
            <div>
                
                <Preloader loading={loading}/>
                <ToastContainer />
                <NavBar isloggedIn={isLoggedIn} user={user}/>
    
                <main id="content">
                    <Searchbar />
                    <ListingFilter params={params} setParams={setParams}/>

                    <section className="pt-8 pb-11">
                        <div className="container">
                        <div className="row gx-4">
                            <div className="col-lg-8 mb-8 mb-lg-0">
                            <div className="row align-items-sm-center mb-6">
                                <div className="col-md-6">
                                <h2 className="fs-15 text-dark mb-0">We found <span className="text-primary">{active_listings ? active_listings.count : 0}</span> properties
                                    available for
                                    you
                                </h2>
                                </div>
                                <div className="col-md-6 mt-6 mt-md-0">
                                <div className="d-flex justify-content-md-end align-items-center">
                                    <div className="input-group border rounded input-group-lg w-auto bg-white mr-3">
                                    <label className="input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3" htmlFor="inputGroupSelect01"><i className="fas fa-align-left fs-16 pr-2" />Sortby:</label>
                                    <select className="form-control border-0 bg-transparent shadow-none p-0 selectpicker sortby" data-style="bg-transparent border-0 font-weight-600 btn-lg pl-0 pr-3" id="inputGroupSelect01" name="sortby">
                                        <option selected>Top Selling</option>
                                        <option value={1}>Most Viewed</option>
                                        <option value={2}>Price(low to high)</option>
                                        <option value={3}>Price(high to low)</option>
                                    </select>
                                    </div>
                                    <div className="d-none d-md-block">
                                    <button className="btn fs-sm-18 px-2 py-0 text-dark opacity-2" onClick={toggleList}>
                                        <i className="fas fa-list" />
                                    </button>
                                    <button className="btn fs-sm-18 px-2 py-0 text-dark ml-5" onClick={toggleGrid}>
                                        <i className="fa fa-th-large" />
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    active_listings && active_listings.length > 0
                                        ? 
                                    active_listings.listings.map((listing, index) => (
                                       grid ? <ListingGrid listing={listing} key={index}/> : 
                                                <ListingList listing={listing} key={index}/>
                                    ))
                                        : 

                                        loading ?
                                    <div className="spinner-border text-gray-lighter" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div> 

                                    :

                                    <ListingNotFound/>
                                }   
                            </div>

                            {
                                active_listings && active_listings.length > 0

                                &&

                                <nav className="pt-6">
                                    <ul className="pagination rounded-active justify-content-center mb-0">
                                    <li className="page-item"><a className="page-link" href="#"><i className="far fa-angle-double-left" /></a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item d-none d-sm-block"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">...</li>
                                    <li className="page-item"><a className="page-link" href="#">6</a></li>
                                    <li className="page-item"><a className="page-link" href="#"><i className="far fa-angle-double-right" /></a></li>
                                    </ul>
                                </nav>

                            }
                            </div>

                            <div className="col-lg-4 primary-sidebar sidebar-sticky" id="sidebar">
                            <div className="primary-sidebar-inner">
                                <div className="card border-0 mb-6 mt-2">
                                <div className="card-body">
                                    <h4 className="card-title fs-16 lh-2 text-dark mb-1">Newsletter Sign Up</h4>
                                    <p className="card-text mb-5">Subscribe to new letter to receive exclusive offer and the latest
                                    news</p>
                                    <form>
                                    <div className="form-group mb-3">
                                        <label htmlFor="name" className="sr-only">Email</label>
                                        <input type="text" className="form-control form-control-lg border-0 shadow-none" id="name" name="email" placeholder="Enter your email" />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg btn-block shadow-none mb-2">
                                        Subscribe
                                    </button>
                                    </form>
                                </div>
                                </div>
                                <div className="card border-0 mt-2">
                                    <div className="card-body text-center py-5 px-0">
                                        <img src="images/contact-widget.jpg" alt="Want to become an Estate Agent ?" />
                                        <div className="text-dark mb-6 mt-n2 font-weight-500">Want to become an
                                        <p className="mb-0 fs-18">Estate Agent?</p>
                                        </div>
                                        <a href="agent-signup" class="btn btn-primary">Register</a>
                                    </div>
                                </div>
                                <div className="card border-0 city-widget mb-9">
                                <div className="card-body px-0 pl-lg-6 py-0">
                                    <h4 className="card-title fs-16 lh-2 text-dark mb-3">Destinations</h4>
                                    <div className="row no-gutters m-n1">
                                    <div className="col-6 p-1">
                                        <a href="listing-with-left-sidebar.html" className="card hover-zoom-in">
                                        <div className="card-img bg-img" style={{backgroundImage: 'url("images/small-los-angeles.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}} />
                                        <div className="card-img-overlay bg-gradient-3 rounded-lg d-flex align-items-end">
                                            <p className="card-text font-weight-500 lh-1 text-white">Los Angeles</p>
                                        </div>
                                        </a>
                                    </div>
                                    <div className="col-6 p-1">
                                        <a href="listing-with-left-sidebar.html" className="card hover-zoom-in">
                                        <div className="card-img bg-img" style={{backgroundImage: 'url("images/small-south-florida.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}} />
                                        <div className="card-img-overlay bg-gradient-3 rounded-lg d-flex align-items-end">
                                            <p className="card-text font-weight-500 lh-1 text-white">South Florida</p>
                                        </div>
                                        </a>
                                    </div>
                                    <div className="col-6 p-1">
                                        <a href="listing-with-left-sidebar.html" className="card hover-zoom-in">
                                        <div className="card-img bg-img" style={{backgroundImage: 'url("images/small-the-hamptons.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}} />
                                        <div className="card-img-overlay bg-gradient-3 rounded-lg d-flex align-items-end">
                                            <p className="card-text font-weight-500 lh-1 text-white">The Hamptons</p>
                                        </div>
                                        </a>
                                    </div>
                                    <div className="col-6 p-1">
                                        <a href="listing-with-left-sidebar.html" className="card hover-zoom-in">
                                        <div className="card-img bg-img" style={{backgroundImage: 'url("images/small-greater-boston.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}} />
                                        <div className="card-img-overlay bg-gradient-3 rounded-lg d-flex align-items-end">
                                            <p className="card-text font-weight-500 lh-1 text-white">Greater Boston</p>
                                        </div>
                                        </a>
                                    </div>
                                    <div className="col-6 p-1">
                                        <a href="listing-with-left-sidebar.html" className="card hover-zoom-in">
                                        <div className="card-img bg-img" style={{backgroundImage: 'url("images/small-new-mexico.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}} />
                                        <div className="card-img-overlay bg-gradient-3 rounded-lg d-flex align-items-end">
                                            <p className="card-text font-weight-500 lh-1 text-white">New Mexico</p>
                                        </div>
                                        </a>
                                    </div>
                                    <div className="col-6 p-1">
                                        <a href="listing-with-left-sidebar.html" className="card hover-zoom-in">
                                        <div className="card-img bg-img" style={{backgroundImage: 'url("images/small-los-angeles.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}} />
                                        <div className="card-img-overlay bg-gradient-3 rounded-lg d-flex align-items-end">
                                            <p className="card-text font-weight-500 lh-1 text-white">Los Angeles</p>
                                        </div>
                                        </a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="card border-0 property-widget mb-6">
                                <div className="card-body px-0 pl-lg-6 py-0">
                                    <h4 className="card-title fs-16 lh-2 text-dark mb-3">Featured Properties</h4>
                                    <div className="slick-slider mx-0" data-slick-options="{&quot;slidesToShow&quot;: 1, &quot;autoplay&quot;:true}">
                                    <div className="box px-0">
                                        <div className="card border-0">
                                        <img src="images/feature-property-01.jpg" className="card-img" alt="Villa on Hollywood Boulevard" />
                                        <div className="card-img-overlay d-flex flex-column bg-gradient-3 rounded-lg">
                                            <div className="d-flex mb-auto">
                                            <a href="#" className="mr-1 badge badge-orange">featured</a>
                                            <a href="#" className="badge badge-indigo">for Rent</a>
                                            </div>
                                            <div className="px-2 pb-2">
                                            <a href="single-property-1.html" className="text-white"><h5 className="card-title fs-16 lh-2 mb-0">Villa on Hollywood
                                                Boulevard</h5>
                                            </a>
                                            <p className="card-text text-gray-light mb-0 font-weight-500">1421 San
                                                Predro
                                                St, Los Angeles</p>
                                            <p className="text-white mb-0"><span className="fs-17 font-weight-bold">$2500 </span>/month
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="box px-0">
                                        <div className="card border-0">
                                        <img src="images/feature-property-01.jpg" className="card-img" alt="Villa on Hollywood Boulevard" />
                                        <div className="card-img-overlay d-flex flex-column bg-gradient-3 rounded-lg">
                                            <div className="d-flex mb-auto">
                                            <a href="#" className="mr-1 badge badge-orange">featured</a>
                                            <a href="#" className="badge badge-indigo">for Rent</a>
                                            </div>
                                            <div className="px-2 pb-2">
                                            <a href="single-property-1.html" className="text-white"><h5 className="card-title fs-16 lh-2 mb-0">Villa on Hollywood
                                                Boulevard</h5>
                                            </a>
                                            <p className="card-text text-gray-light mb-0 font-weight-500">1421 San
                                                Predro
                                                St, Los Angeles</p>
                                            <p className="text-white mb-0"><span className="fs-17 font-weight-bold">$2500 </span>/month
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="box px-0">
                                        <div className="card border-0">
                                        <img src="images/feature-property-01.jpg" className="card-img" alt="Villa on Hollywood Boulevard" />
                                        <div className="card-img-overlay d-flex flex-column bg-gradient-3 rounded-lg">
                                            <div className="d-flex mb-auto">
                                            <a href="#" className="mr-1 badge badge-orange">featured</a>
                                            <a href="#" className="badge badge-indigo">for Rent</a>
                                            </div>
                                            <div className="px-2 pb-2">
                                            <a href="single-property-1.html" className="text-white"><h5 className="card-title fs-16 lh-2 mb-0">Villa on Hollywood
                                                Boulevard</h5>
                                            </a>
                                            <p className="card-text text-gray-light mb-0 font-weight-500">1421 San
                                                Predro
                                                St, Los Angeles</p>
                                            <p className="text-white mb-0"><span className="fs-17 font-weight-bold">$2500 </span>/month
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
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