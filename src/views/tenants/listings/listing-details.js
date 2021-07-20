import React, {Component, useEffect} from 'react'

import NavBar from '../../layouts/nav-bar'
import Footer from '../../layouts/footer'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FetchSingleListing } from 'providers/redux/_actions/listing/listing-actions'
import { toast } from 'react-toastify'
import Listing from './listings'
import ListingGallery from './components/listing-details/listing-gallery'
import ListingComponents from './components/listing-details'
import ListingAction from './components/listing-action-card'


const ListingDetails = ({isLoggedIn, user}) => {
    const {slug} = useParams();
    const dispatch = useDispatch()

    const details = useSelector((state) => state.listing);
    const {loading, listing, error} = details;

    useEffect(() => {
        !listing && fetchListingData(slug)
    }, [listing]);

    const fetchListingData = (slug) => {
        dispatch(FetchSingleListing(slug))
    }

    return (
        <div>
            <NavBar isloggedIn={isLoggedIn} user={user}/>

            <main id="content">
                <section className="bg-secondary py-6 py-lg-0">
                    <div className="container">
                    <form className="search-form d-none d-lg-block">
                        <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="row">
                            <div className="col-md-6">
                                <label className="text-uppercase font-weight-500 opacity-7 text-white letter-spacing-093 mb-1">Home
                                Type</label>
                                <select className="form-control selectpicker bg-transparent border-bottom rounded-0 border-input-opacity-02" name="type" title="Select" data-style="p-0 h-24 lh-17 text-white">
                                <option>Condominium</option>
                                <option>Single-Family Home</option>
                                <option>Townhouse</option>
                                <option>Multi-Family Home</option>
                                </select>
                            </div>
                            <div className="col-md-6 pl-md-3 pt-md-0 pt-6">
                                <label className="text-uppercase font-weight-500 opacity-7 text-white letter-spacing-093 mb-1">Location</label>
                                <select className="form-control selectpicker bg-transparent border-bottom rounded-0 border-input-opacity-02" name="location" title="Select" data-style="p-0 h-24 lh-17 text-white">
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
                        </div>
                        <div className="col-12 col-lg-5 pt-lg-0 pt-6">
                            <label className="text-uppercase font-weight-500 opacity-7 text-white letter-spacing-093">Search</label>
                            <div className="position-relative">
                            <input type="text" name="search" className="form-control bg-transparent shadow-none border-top-0 border-right-0 border-left-0 border-bottom rounded-0 h-24 lh-17 p-0 pr-md-5 text-white placeholder-light font-weight-500 border-input-opacity-02" placeholder="Enter an address, neighbourhood..." />
                            <i className="far fa-search position-absolute pos-fixed-right-center pr-0 fs-18 text-white pb-2 d-none d-md-block" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-2 pt-lg-0 pt-7">
                            <button type="submit" className="btn bg-white-opacity-01 bg-white-hover-opacity-03 h-lg-100 w-100 shadow-none text-white rounded-0 fs-16 font-weight-600">
                            Search
                            </button>
                        </div>
                        </div>
                    </form>
                    <form className="property-search property-search-mobile d-lg-none">
                        <div className="row align-items-lg-center" id="accordion-mobile">
                        <div className="col-12">
                            <div className="form-group mb-0 position-relative">
                            <a href="#advanced-search-filters-mobile" className="icon-primary btn advanced-search shadow-none pr-3 pl-0 d-flex align-items-center position-absolute pos-fixed-left-center py-0 h-100 border-right collapsed" data-toggle="collapse" data-target="#advanced-search-filters-mobile" aria-expanded="true" aria-controls="advanced-search-filters-mobile">
                            </a>
                            <input type="text" className="form-control form-control-lg border-0 shadow-none pr-9 pl-11 bg-white placeholder-muted" name="key-word" placeholder="Search..." />
                            <button type="submit" className="btn position-absolute pos-fixed-right-center p-0 text-heading fs-20 px-3 shadow-none h-100 border-left bg-white">
                                <i className="far fa-search" />
                            </button>
                            </div>
                        </div>
                        <div id="advanced-search-filters-mobile" className="col-12 pt-2 collapse" data-parent="#accordion-mobile">
                            <div className="row mx-n2">
                            <div className="col-sm-6 pt-4 px-2">
                                <select className="form-control border-0 shadow-none form-control-lg selectpicker bg-white" title="Home Types" data-style="btn-lg py-2 h-52 bg-white" name="type">
                                <option>Condominium</option>
                                <option>Single-Family Home</option>
                                <option>Townhouse</option>
                                <option>Multi-Family Home</option>
                                </select>
                            </div>
                            <div className="col-sm-6 pt-4 px-2">
                                <select className="form-control border-0 shadow-none form-control-lg selectpicker bg-white" name="bedroom" title="Location" data-style="btn-lg py-2 h-52 bg-white">
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
                        </div>
                        </div>
                    </form>
                    </div>
                </section>
                
                {
                    listing ? 
                    <>
                        <ListingGallery title={listing.title} images={listing.images}/>

                        <div className="primary-content bg-gray-01 pt-7 pb-12">
                            <div className="container">
                            <div className="row">
                                <article className="col-lg-8">
                                    <ListingComponents listing={listing} />
                                </article>

                                <ListingAction/>
                            </div>
                            </div>
                        </div>
                    </>
                    :
                    <div className="spinner-border text-gray-lighter" role="status">
                        <span className="sr-only">Loading...</span>
                    </div> 
                }
                

                <section>
                    <div className="d-flex   bottom-bar-action bottom-bar-action-01 py-2 px-4 bg-gray-01 align-items-center position-fixed fixed-bottom d-sm-none">
                    <div className="media align-items-center">
                        <img src="images/irene-wallace.png" alt="Irene Wallace" className="mr-4 rounded-circle" />
                        <div className="media-body">
                        <a href="#" className="d-block text-dark fs-15 font-weight-500 lh-15">Irene Wallace</a>
                        <span className="fs-13 lh-2">Sales Excutive</span>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <button type="button" className="btn btn-primary fs-18 p-2 lh-1 mr-1 mb-1 shadow-none" data-toggle="modal" data-target="#modal-messenger"><i className="fal fa-comment" /></button>
                        <a href="tel:(+84)2388-969-888" className="btn btn-primary fs-18 p-2 lh-1 mb-1 shadow-none" target="_blank"><i className="fal fa-phone" /></a>
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
                </section>
                </main>




            <Footer/>
        </div>
    )

}

export default ListingDetails;
