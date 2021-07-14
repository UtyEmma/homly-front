import React, { Component } from 'react'

import Footer from './layouts/shared/footer'

export default class NotFound extends Component {

    render() {
        return (
            
            <div>
                <header className="main-header navbar-light text-center border-bottom header-sticky header-sticky-smart">
                    <div className="sticky-area bg-white py-4">
                        <a href="index.html">
                            <img src="images/logo.png" alt="HomeID" />
                        </a>
                    </div>
                </header>

                <main id="content">
                    <section className="pt-9 pb-10">
                        <div className="container">
                            <div className="text-center mb-15">
                            <img src="images/page-404.jpg" alt="Page 404" className="mb-5" />
                            <h1 className="fs-30 lh-16 text-dark font-weight-600 mb-5">Oops! That page can’t be found.</h1>
                            <p className="mb-8">It looks like nothing was found at this location. Maybe try one of the links below or a
                                search?</p>
                            <form>
                                <div className="input-group mb-6 mxw-670 shadow-xxs-2 custom-input-group mb-2">
                                <div className="input-group-prepend">
                                    <button className="btn shadow-none text-dark fs-18" type="button"><i className="fal fa-search" />
                                    </button>
                                </div>
                                <input type="text" className="form-control bg-white shadow-none border-0 z-index-1" name="search" placeholder="Enter an address, neighborhood" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit">Search</button>
                                </div>
                                </div>
                            </form>
                            </div>
                            <div className="row">
                            <div className="col-lg-6 mb-6">
                                <h2 className="fs-22 lh-15 text-dark border-bottom pb-2 mb-2 pr-lg-7">Latest Listings</h2>
                                <ul className="list-unstyled row">
                                <li className="col-md-6 lh-26">
                                    <a href="single-property-1.html" className="text-body hover-dark">
                                    Los Angeles Offices
                                    </a>
                                </li>
                                <li className="col-md-6 lh-26">
                                    <a href="single-property-1.html" className="text-body hover-dark">
                                    Los Angeles Offices
                                    </a>
                                </li>
                                <li className="col-md-6 lh-26">
                                    <a href="single-property-1.html" className="text-body hover-dark">
                                    Luxury Home in Las Vegas
                                    </a></li>
                                <li className="col-md-6 lh-26">
                                    <a href="single-property-1.html" className="text-body hover-dark">
                                    Luxury Home in Las Vegas
                                    </a>
                                </li>
                                <li className="col-md-6 lh-26">
                                    <a href="single-property-1.html" className="text-body hover-dark">
                                    Villa for Rent in Queens
                                    </a>
                                </li>
                                <li className="col-md-6 lh-26">
                                    <a href="single-property-1.html" className="text-body hover-dark">
                                    Villa for Rent in Queens
                                    </a>
                                </li>
                                <li className="col-md-6 lh-26">
                                    <a href="single-property-1.html" className="text-body hover-dark">
                                    Sacramento Townhome
                                    </a>
                                </li>
                                <li className="col-md-6 lh-26">
                                    <a href="single-property-1.html" className="text-body hover-dark">
                                    Sacramento Townhome
                                    </a>
                                </li>
                                <li className="col-md-6 lh-26">
                                    <a href="single-property-1.html" className="text-body hover-dark">
                                    San Francisco Offices
                                    </a>
                                </li>
                                <li className="col-md-6 lh-26">
                                    <a href="single-property-1.html" className="text-body hover-dark">
                                    San Francisco Offices
                                    </a>
                                </li>
                                <li className="col-md-6 lh-26">
                                    <a href="single-property-1.html" className="text-body hover-dark">
                                    Villa for Rent in Queens
                                    </a>
                                </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 mb-6">
                                <h2 className="fs-22 lh-15 text-dark border-bottom pb-2 mb-2">Latest Articles</h2>
                                <ul className="list-unstyled row">
                                <li className="col-md-6 lh-26">
                                    <a href="blog-details-1.html" className="text-body hover-dark">
                                    Search widget on the right
                                    </a>
                                </li>
                                <li className="col-md-6 lh-26">
                                    <a href="blog-details-1.html" className="text-body hover-dark">
                                    Los Angeles Offices
                                    </a>
                                </li>
                                <li className="col-md-6 lh-26">
                                    <a href="blog-details-1.html" className="text-body hover-dark">
                                    Buying a Home
                                    </a></li>
                                <li className="col-md-6 lh-26">
                                    <a href="blog-details-1.html" className="text-body hover-dark">
                                    Luxury Home in Las Vegas
                                    </a>
                                </li>
                                <li className="col-md-6 lh-26">
                                    <a href="blog-details-1.html" className="text-body hover-dark">
                                    Why Live in New York
                                    </a>
                                </li>
                                <li className="col-md-6 lh-26">
                                    <a href="blog-details-1.html" className="text-body hover-dark">
                                    Villa for Rent in Queens
                                    </a>
                                </li>
                                <li className="col-md-6 lh-26">
                                    <a href="blog-details-1.html" className="text-body hover-dark">
                                    Video in Slider
                                    </a>
                                </li>
                                <li className="col-md-6 lh-26">
                                    <a href="blog-details-1.html" className="text-body hover-dark">
                                    Sacramento Townhome
                                    </a>
                                </li>
                                <li className="col-md-6 lh-26">
                                    <a href="blog-details-1.html" className="text-body hover-dark">
                                    Full Width Post
                                    </a>
                                </li>
                                <li className="col-md-6 lh-26">
                                    <a href="blog-details-1.html" className="text-body hover-dark">
                                    San Francisco Offices
                                    </a>
                                </li>
                                <li className="col-md-6 lh-26">
                                    <a href="blog-details-1.html" className="text-body hover-dark">
                                    Sidebar on the Left
                                    </a>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </section>
                </main>

            <Footer />  

            </div>

        )
    }
}
