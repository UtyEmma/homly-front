import React from 'react'

import HeroSection from './layouts/home/hero-section'
import PopularSection from './layouts/home/popular-section'
import NavBar from 'components/shared/nav-bar'
import Footer from 'components/shared/footer'
import ScrollAnimation from 'react-animate-on-scroll'
import { Helmet } from 'react-helmet'

const Home = ({isLoggedIn, user, isLoading, setIsLoading, status, token}) => {

    return (
        <div>           
            <Helmet>
                <title>Bayof - Find Properties and agents around you</title>
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
            
            <NavBar isloggedIn={isLoggedIn} token={token} user={user} status={status} />
            
            <main id="content">
                <HeroSection/>

                <PopularSection isLoading={isLoading} setIsLoading={setIsLoading} status={status} />

                <section className="bg-gray-02 pt-10 pb-11">
                    <div className="container container-xxl">
                        <h2 className="text-dark lh-1625 text-center">Why Choose Us?</h2>
                        <span className="heading-divider mx-auto" />
                        <div className="row justify-content-between mt-10">
                        <ScrollAnimation animateIn="fadeInUp" className="col-lg-4 mb-6 mb-lg-0">
                            <div className="card border-0 bg-transparent">
                            <div className="card-img-top d-flex align-items-end justify-content-center">
                                <img src="images/urban.png" alt="Wider range of properties" />
                            </div>
                            <div className="card-body px-0 px-xxl-10 pt-7 pb-0 text-center">
                                <h4 className="card-title fs-18 lh-17 text-dark mb-2">Wider range of properties</h4>
                                <p className="card-text px-sm-2">
                                Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscorem ipsum dolor sit ametcipsum suscorein ipsumg elit.
                                </p>
                            </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" className="col-lg-4 mb-6 mb-lg-0">
                            <div className="card border-0 bg-transparent">
                            <div className="card-img-top d-flex align-items-end justify-content-center">
                                <img src="images/bank.png" alt="Financing made easy" />
                            </div>
                            <div className="card-body px-0 px-xxl-10 pt-7 pb-0 text-center">
                                <h4 className="card-title fs-18 lh-17 text-dark mb-2">Financing made easy</h4>
                                <p className="card-text px-sm-2">
                                Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscorem ipsum dolor sit ametcipsum suscorein ipsumg elit.
                                </p>
                            </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" className="col-lg-4 mb-6 mb-lg-0" >
                            <div className="card border-0 bg-transparent">
                            <div className="card-img-top d-flex align-items-end justify-content-center">
                                <img src="images/buy.png" alt="Transparentcy" />
                            </div>
                            <div className="card-body px-0 px-xxl-10 pt-7 pb-0 text-center">
                                <h4 className="card-title fs-18 lh-17 text-dark mb-2">Transparentcy</h4>
                                <p className="card-text px-sm-2">
                                Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscorem ipsum dolor sit ametcipsum suscorein ipsumg elit.
                                </p>
                            </div>
                            </div>
                        </ScrollAnimation>
                        </div>
                    </div>
                    </section>
                    <section className="py-lg-12 my-lg-1 py-11">
                    <div className="container container-xxl">
                        <div className="row">
                        <div className="col-md-6">
                            <h2 className="text-heading">Properties For Sale</h2>
                            <span className="heading-divider" />
                            <p className="mb-7">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                        </div>
                        <div className="col-md-6 text-md-right">
                            <a href="listing-grid-with-left-filter.html" className="btn btn-lg text-secondary btn-accent rounded-lg mb-8">
                            See all properties
                            <i className="far fa-long-arrow-right ml-1" />
                            </a>
                        </div>
                        </div>
                        <div className="slick-slider mx-n2 custom-arrow-spacing-30" data-slick-options="{&quot;slidesToShow&quot;: 5, &quot;autoplay&quot;:true,&quot;dots&quot;:false,&quot;arrows&quot;:true,&quot;responsive&quot;:[{&quot;breakpoint&quot;: 1600,&quot;settings&quot;: {&quot;slidesToShow&quot;:3,&quot;arrows&quot;:false}},{&quot;breakpoint&quot;: 992,&quot;settings&quot;: {&quot;slidesToShow&quot;:3,&quot;arrows&quot;:false}},{&quot;breakpoint&quot;: 768,&quot;settings&quot;: {&quot;slidesToShow&quot;: 2,&quot;arrows&quot;:false,&quot;dots&quot;:true,&quot;autoplay&quot;:true}},{&quot;breakpoint&quot;: 576,&quot;settings&quot;: {&quot;slidesToShow&quot;: 1,&quot;arrows&quot;:false,&quot;dots&quot;:true,&quot;autoplay&quot;:true}}]}">
                            <div className="card border-0 hover-change-image">
                            <div className="bg-overlay-gradient-1 bg-hover-overlay-gradient-3 rounded-lg card-img">
                                <img src="images/properties-grid-12.jpg" alt="Villa on Hollywood Boulevard" />
                                <div className="card-img-overlay d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge mr-2 badge-orange">Featured</span>
                                    <span className="badge mr-2 badge-primary">For Sale</span>
                                </div>
                                <ul className="list-inline mb-0 hover-image text-center">
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                        <i className="far fa-heart" />
                                    </a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                        <i className="fas fa-exchange-alt" />
                                    </a>
                                    </li>
                                </ul>
                                <ul className="list-inline d-flex mb-0 flex-wrap px-2 mr-n5">
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <h2 className="my-0 mt-1">
                                <a href="single-property-1.html" className="fs-16 text-dark hover-primary lh-2">Villa on Hollywood Boulevard</a>
                                </h2>
                                <p className="text-gray-light font-weight-500 mb-1">1421 San Pedro St, Los Angeles</p>
                                <p className="fs-17 font-weight-bold text-heading mb-0">$1.250.000</p>
                            </div>
                            </div>
                            <div className="card border-0 hover-change-image">
                            <div className="bg-overlay-gradient-1 bg-hover-overlay-gradient-3 rounded-lg card-img">
                                <img src="images/properties-grid-13.jpg" alt="Home in Metric Way" />
                                <div className="card-img-overlay d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge mr-2 badge-primary">For Sale</span>
                                </div>
                                <ul className="list-inline mb-0 hover-image text-center">
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                        <i className="far fa-heart" />
                                    </a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                        <i className="fas fa-exchange-alt" />
                                    </a>
                                    </li>
                                </ul>
                                <ul className="list-inline d-flex mb-0 flex-wrap px-2 mr-n5">
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <h2 className="my-0 mt-1"><a href="single-property-1.html" className="fs-16 text-dark hover-primary lh-2">Home in Metric Way</a>
                                </h2>
                                <p className="text-gray-light font-weight-500 mb-1">1421 San Pedro St, Los Angeles</p>
                                <p className="fs-17 font-weight-bold text-heading mb-0">$1.250.000</p>
                            </div>
                            </div>
                            <div className="card border-0 hover-change-image">
                            <div className="bg-overlay-gradient-1 bg-hover-overlay-gradient-3 rounded-lg card-img">
                                <img src="images/properties-grid-14.jpg" alt="Affordable Urban House" />
                                <div className="card-img-overlay d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge mr-2 badge-primary">For Sale</span>
                                </div>
                                <ul className="list-inline mb-0 hover-image text-center">
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                        <i className="far fa-heart" />
                                    </a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                        <i className="fas fa-exchange-alt" />
                                    </a>
                                    </li>
                                </ul>
                                <ul className="list-inline d-flex mb-0 flex-wrap px-2 mr-n5">
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <h2 className="my-0 mt-1"><a href="single-property-1.html" className="fs-16 text-dark hover-primary lh-2">Affordable Urban House</a>
                                </h2>
                                <p className="text-gray-light font-weight-500 mb-1">1421 San Pedro St, Los Angeles</p>
                                <p className="fs-17 font-weight-bold text-heading mb-0">$1.250.000</p>
                            </div>
                            </div>
                        <div className="box px-2" data-animate="fadeInUp">
                            <div className="card border-0 hover-change-image">
                            <div className="bg-overlay-gradient-1 bg-hover-overlay-gradient-3 rounded-lg card-img">
                                <img src="images/properties-grid-15.jpg" alt="Explore Old Barcelona" />
                                <div className="card-img-overlay d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge mr-2 badge-orange">Featured</span>
                                    <span className="badge mr-2 badge-primary">For Sale</span>
                                </div>
                                <ul className="list-inline mb-0 hover-image text-center">
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                        <i className="far fa-heart" />
                                    </a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                        <i className="fas fa-exchange-alt" />
                                    </a>
                                    </li>
                                </ul>
                                <ul className="list-inline d-flex mb-0 flex-wrap px-2 mr-n5">
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <h2 className="my-0 mt-1"><a href="single-property-1.html" className="fs-16 text-dark hover-primary lh-2">Explore Old Barcelona</a>
                                </h2>
                                <p className="text-gray-light font-weight-500 mb-1">1421 San Pedro St, Los Angeles</p>
                                <p className="fs-17 font-weight-bold text-heading mb-0">$1.250.000</p>
                            </div>
                            </div>
                        </div>
                        <div className="box px-2" data-animate="fadeInUp">
                            <div className="card border-0 hover-change-image">
                            <div className="bg-overlay-gradient-1 bg-hover-overlay-gradient-3 rounded-lg card-img">
                                <img src="images/properties-grid-16.jpg" alt="Garden Gingerbread House" />
                                <div className="card-img-overlay d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge mr-2 badge-primary">For Sale</span>
                                </div>
                                <ul className="list-inline mb-0 hover-image text-center">
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                        <i className="far fa-heart" />
                                    </a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                        <i className="fas fa-exchange-alt" />
                                    </a>
                                    </li>
                                </ul>
                                <ul className="list-inline d-flex mb-0 flex-wrap px-2 mr-n5">
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <h2 className="my-0 mt-1"><a href="single-property-1.html" className="fs-16 text-dark hover-primary lh-2">Garden Gingerbread House</a>
                                </h2>
                                <p className="text-gray-light font-weight-500 mb-1">1421 San Pedro St, Los Angeles</p>
                                <p className="fs-17 font-weight-bold text-heading mb-0">$1.250.000</p>
                            </div>
                            </div>
                        </div>
                        <div className="box px-2" data-animate="fadeInUp">
                            <div className="card border-0 hover-change-image">
                            <div className="bg-overlay-gradient-1 bg-hover-overlay-gradient-3 rounded-lg card-img">
                                <img src="images/properties-grid-12.jpg" alt="Villa on Hollywood Boulevard" />
                                <div className="card-img-overlay d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge mr-2 badge-orange">Featured</span>
                                    <span className="badge mr-2 badge-primary">For Sale</span>
                                </div>
                                <ul className="list-inline mb-0 hover-image text-center">
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                        <i className="far fa-heart" />
                                    </a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                        <i className="fas fa-exchange-alt" />
                                    </a>
                                    </li>
                                </ul>
                                <ul className="list-inline d-flex mb-0 flex-wrap px-2 mr-n5">
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <h2 className="my-0 mt-1"><a href="single-property-1.html" className="fs-16 text-dark hover-primary lh-2">Villa on Hollywood Boulevard</a>
                                </h2>
                                <p className="text-gray-light font-weight-500 mb-1">1421 San Pedro St, Los Angeles</p>
                                <p className="fs-17 font-weight-bold text-heading mb-0">$1.250.000</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section className="pb-lg-13 pb-11">
                    <div className="container container-xxl">
                        <div className="row">
                        <div className="col-md-6">
                            <h2 className="text-heading">Properties For Rent</h2>
                            <span className="heading-divider" />
                            <p className="mb-7">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                        </div>
                        <div className="col-md-6 text-md-right">
                            <a href="listing-grid-with-left-filter.html" className="btn btn-lg text-secondary btn-accent rounded-lg mb-8">See all properties
                            <i className="far fa-long-arrow-right ml-1" />
                            </a>
                        </div>
                        </div>
                        <div className="slick-slider mx-n2" data-slick-options="{&quot;slidesToShow&quot;: 5, &quot;autoplay&quot;:true,&quot;dots&quot;:false,&quot;arrows&quot;:true,&quot;responsive&quot;:[{&quot;breakpoint&quot;: 1600,&quot;settings&quot;: {&quot;slidesToShow&quot;:3,&quot;arrows&quot;:false}},{&quot;breakpoint&quot;: 992,&quot;settings&quot;: {&quot;slidesToShow&quot;:3,&quot;arrows&quot;:false}},{&quot;breakpoint&quot;: 768,&quot;settings&quot;: {&quot;slidesToShow&quot;: 2,&quot;arrows&quot;:false,&quot;dots&quot;:true,&quot;autoplay&quot;:true}},{&quot;breakpoint&quot;: 576,&quot;settings&quot;: {&quot;slidesToShow&quot;: 1,&quot;arrows&quot;:false,&quot;dots&quot;:true,&quot;autoplay&quot;:true}}]}">
                        <div className="box px-2" data-animate="fadeInUp">
                            <div className="card border-0 hover-change-image">
                            <div className="rounded-lg bg-overlay-gradient-7 bg-hover-overlay-gradient-3 card-img">
                                <img src="images/properties-grid-23.jpg" alt="Villa on Hollywood Boulevard" />
                                <div className="card-img-overlay d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge mr-2 badge-indigo">For Rent</span>
                                </div>
                                <ul className="list-inline mb-0 hover-image text-center">
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                        <i className="far fa-heart" />
                                    </a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                        <i className="fas fa-exchange-alt" />
                                    </a>
                                    </li>
                                </ul>
                                <ul className="list-inline d-flex mb-0 flex-wrap px-2 mr-n5">
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <h2 className="my-0 mt-1"><a href="single-property-1.html" className="fs-16 text-dark hover-primary lh-2">Villa on Hollywood Boulevard</a>
                                </h2>
                                <p className="text-gray-light font-weight-500 mb-1">1421 San Pedro St, Los Angeles</p>
                                <p className="fs-17 font-weight-bold text-heading mb-0">$550<span className="text-gray-light font-weight-500 fs-14"> / month</span></p>
                            </div>
                            </div>
                        </div>
                        <div className="box px-2" data-animate="fadeInUp">
                            <div className="card border-0 hover-change-image">
                            <div className="rounded-lg bg-overlay-gradient-7 bg-hover-overlay-gradient-3 card-img">
                                <img src="images/properties-grid-24.jpg" alt="Home in Metric Way" />
                                <div className="card-img-overlay d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge mr-2 badge-indigo">For Rent</span>
                                </div>
                                <ul className="list-inline mb-0 hover-image text-center">
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                        <i className="far fa-heart" />
                                    </a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                        <i className="fas fa-exchange-alt" />
                                    </a>
                                    </li>
                                </ul>
                                <ul className="list-inline d-flex mb-0 flex-wrap px-2 mr-n5">
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <h2 className="my-0 mt-1"><a href="single-property-1.html" className="fs-16 text-dark hover-primary lh-2">Home in Metric Way</a>
                                </h2>
                                <p className="text-gray-light font-weight-500 mb-1">1421 San Pedro St, Los Angeles</p>
                                <p className="fs-17 font-weight-bold text-heading mb-0">$550<span className="text-gray-light font-weight-500 fs-14"> / month</span></p>
                            </div>
                            </div>
                        </div>
                        <div className="box px-2" data-animate="fadeInUp">
                            <div className="card border-0 hover-change-image">
                            <div className="rounded-lg bg-overlay-gradient-7 bg-hover-overlay-gradient-3 card-img">
                                <img src="images/properties-grid-25.jpg" alt="Affordable Urban House" />
                                <div className="card-img-overlay d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge mr-2 badge-orange">Featured</span>
                                    <span className="badge mr-2 badge-indigo">For Rent</span>
                                </div>
                                <ul className="list-inline mb-0 hover-image text-center">
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                        <i className="far fa-heart" />
                                    </a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                        <i className="fas fa-exchange-alt" />
                                    </a>
                                    </li>
                                </ul>
                                <ul className="list-inline d-flex mb-0 flex-wrap px-2 mr-n5">
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <h2 className="my-0 mt-1"><a href="single-property-1.html" className="fs-16 text-dark hover-primary lh-2">Affordable Urban House</a>
                                </h2>
                                <p className="text-gray-light font-weight-500 mb-1">1421 San Pedro St, Los Angeles</p>
                                <p className="fs-17 font-weight-bold text-heading mb-0">$5.700<span className="text-gray-light font-weight-500 fs-14"> / year</span></p>
                            </div>
                            </div>
                        </div>
                        <div className="box px-2" data-animate="fadeInUp">
                            <div className="card border-0 hover-change-image">
                            <div className="rounded-lg bg-overlay-gradient-7 bg-hover-overlay-gradient-3 card-img">
                                <img src="images/properties-grid-26.jpg" alt="Explore Old Barcelona" />
                                <div className="card-img-overlay d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge mr-2 badge-indigo">For Rent</span>
                                </div>
                                <ul className="list-inline mb-0 hover-image text-center">
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                        <i className="far fa-heart" />
                                    </a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                        <i className="fas fa-exchange-alt" />
                                    </a>
                                    </li>
                                </ul>
                                <ul className="list-inline d-flex mb-0 flex-wrap px-2 mr-n5">
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <h2 className="my-0 mt-1"><a href="single-property-1.html" className="fs-16 text-dark hover-primary lh-2">Explore Old Barcelona</a>
                                </h2>
                                <p className="text-gray-light font-weight-500 mb-1">1421 San Pedro St, Los Angeles</p>
                                <p className="fs-17 font-weight-bold text-heading mb-0">$550<span className="text-gray-light font-weight-500 fs-14"> / month</span></p>
                            </div>
                            </div>
                        </div>
                        <div className="box px-2" data-animate="fadeInUp">
                            <div className="card border-0 hover-change-image">
                            <div className="rounded-lg bg-overlay-gradient-7 bg-hover-overlay-gradient-3 card-img">
                                <img src="images/properties-grid-12.jpg" alt="Garden Gingerbread House" />
                                <div className="card-img-overlay d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge mr-2 badge-orange">Featured</span>
                                    <span className="badge mr-2 badge-indigo">For Rent</span>
                                </div>
                                <ul className="list-inline mb-0 hover-image text-center">
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                        <i className="far fa-heart" />
                                    </a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="#" className="w-52px h-52 rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                        <i className="fas fa-exchange-alt" />
                                    </a>
                                    </li>
                                </ul>
                                <ul className="list-inline d-flex mb-0 flex-wrap px-2 mr-n5">
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                    </li>
                                    <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <h2 className="my-0 mt-1"><a href="single-property-1.html" className="fs-16 text-dark hover-primary lh-2">Garden Gingerbread House</a>
                                </h2>
                                <p className="text-gray-light font-weight-500 mb-1">1421 San Pedro St, Los Angeles</p>
                                <p className="fs-17 font-weight-bold text-heading mb-0">$5.700<span className="text-gray-light font-weight-500 fs-14"> / year</span></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section>
                    <div className="bg-patten-01 pt-12 pb-10 bg-secondary">
                        <div className="container">
                        <h2 className="text-white text-center lh-1625 mxw-589 font-weight-normal">Looking to Buy a new property or Sell
                            an existing
                            one?</h2>
                        <span className="heading-divider mx-auto" />
                        <div className="row info-box-3 mt-7 no-gutters mx-auto">
                            <div className="col-md-3 col-sm-6 mb-6 mb-md-0" data-animate="zoomIn">
                            <a href="listing-with-left-sidebar.html" className="card border-0 align-items-center justify-content-center pb-5 pt-7 px-0 shadow-hover-3 bg-transparent bg-hover-white text-decoration-none hover-change-image">
                                <div className="card-img-top d-flex align-items-center justify-content-center border-md-right rounded-0">
                                <div className=" position-relative">
                                    <img src="images/verified.png" className="hover-image position-absolute pos-fixed-top" alt="Apartment" />
                                    <img src="images/white-verified.png" className="image" alt="Apartment" />
                                </div>
                                </div>
                                <div className="card-body px-0 pt-5 pb-0">
                                <h4 className="card-title fs-16 lh-2 text-white mb-0">Apartment</h4>
                                </div>
                            </a>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-6 mb-md-0" data-animate="zoomIn">
                            <a href="listing-with-left-sidebar.html" className="card border-0 align-items-center justify-content-center pb-5 pt-7 px-0 shadow-hover-3 bg-transparent bg-hover-white text-decoration-none hover-change-image">
                                <div className="card-img-top d-flex align-items-center justify-content-center border-md-right rounded-0">
                                <div className=" position-relative">
                                    <img src="images/sofa.png" className="hover-image position-absolute pos-fixed-top" alt="House" />
                                    <img src="images/white-sofa.png" className="image" alt="House" />
                                </div>
                                </div>
                                <div className="card-body px-0 pt-5 pb-0">
                                <h4 className="card-title fs-16 lh-2 text-white mb-0">House</h4>
                                </div>
                            </a>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-6 mb-md-0" data-animate="zoomIn">
                            <a href="listing-with-left-sidebar.html" className="card border-0 align-items-center justify-content-center pb-5 pt-7 px-0 shadow-hover-3 bg-transparent bg-hover-white text-decoration-none hover-change-image">
                                <div className="card-img-top d-flex align-items-center justify-content-center border-md-right rounded-0">
                                <div className=" position-relative">
                                    <img src="images/architecture-and-city.png" className="hover-image position-absolute pos-fixed-top" alt="Office" />
                                    <img src="images/white-architecture-and-city.png" className="image" alt="Office" />
                                </div>
                                </div>
                                <div className="card-body px-0 pt-5 pb-0">
                                <h4 className="card-title fs-16 lh-2 text-white mb-0">Office</h4>
                                </div>
                            </a>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-6 mb-md-0" data-animate="zoomIn">
                            <a href="listing-with-left-sidebar.html" className="card border-0 align-items-center justify-content-center pb-5 pt-7 px-0 shadow-hover-3 bg-transparent bg-hover-white text-decoration-none hover-change-image">
                                <div className="card-img-top d-flex align-items-center justify-content-center  rounded-0">
                                <div className=" position-relative">
                                    <img src="images/eco-house.png" className="hover-image position-absolute pos-fixed-top" alt="Villa" />
                                    <img src="images/white-eco-house.png" className="image" alt="Villa" />
                                </div>
                                </div>
                                <div className="card-body px-0 pt-5 pb-0">
                                <h4 className="card-title fs-16 lh-2 text-white mb-0">Villa</h4>
                                </div>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section className="pt-lg-13 pb-lg-9 mt-lg-1 py-11">
                    <div className="container container-xxl">
                        <div className="row">
                        <div className="col-lg-6">
                            <h2 className="text-heading mb-6">From Our Blog</h2>
                            <div className="card border-0 mb-7" data-animate="fadeInLeft">
                            <div className="row no-gutters align-items-lg-center h-100">
                                <div className="d-flex align-items-end p-0 col-sm-4">
                                <a href="blog-details-1.html" className="hover-shine">
                                    <img src="images/post-02.jpg" className="card-img" alt="Retail banks wake up to digital lending this year" />
                                </a>
                                <a href="#" className="badge pos-fixed-bottom text-white bg-dark-opacity-04 fs-13 m-2 font-weight-500 bg-hover-primary hover-white position-absolute">
                                    rental
                                </a>
                                </div>
                                <div className="col-sm-8">
                                <div className="card-body pl-sm-6 px-0 pt-5 pt-lg-0 pb-0">
                                    <div className="fs-15 mb-0 mb-md-2 text-gray">
                                    30th Dec, 2020
                                    </div>
                                    <h3 className="fs-sm-22 fs-18 font-weight-normal lh-182 pr-xl-14">
                                    <a href="blog-details-1.html" className="text-heading hover-primary">Retail banks wake up to digital lending this year</a>
                                    </h3>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="card border-0 mb-7" data-animate="fadeInLeft">
                            <div className="row no-gutters align-items-lg-center h-100">
                                <div className="d-flex align-items-end p-0 col-sm-4">
                                <a href="blog-details-1.html" className="hover-shine">
                                    <img src="images/post-01.jpg" className="card-img" alt="Within the construction industry as their overdraft" />
                                </a>
                                <a href="#" className="badge pos-fixed-bottom text-white bg-dark-opacity-04 fs-13 m-2 font-weight-500 bg-hover-primary hover-white position-absolute">
                                    tips
                                </a>
                                </div>
                                <div className="col-sm-8">
                                <div className="card-body pl-sm-6 px-0 pt-5 pt-lg-0 pb-0">
                                    <div className="fs-15 mb-0 mb-md-2 text-gray">
                                    30th Dec, 2020
                                    </div>
                                    <h3 className="fs-sm-22 fs-18 font-weight-normal lh-182 pr-xl-14">
                                    <a href="blog-details-1.html" className="text-heading hover-primary">Within the construction industry as their overdraft</a>
                                    </h3>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-accent px-3 pl-md-11 pr-md-10 pt-6 pb-7" data-animate="fadeInRight">
                            <div className="slick-slider custom-slider-1 mx-0" data-slick-options="{&quot;slidesToShow&quot;: 1, &quot;autoplay&quot;:true,&quot;dots&quot;:true}">
                                <div className="box px-0">
                                <div className="card border-0 bg-transparent">
                                    <div className="card-body p-0">
                                    <div className="d-flex mb-6 align-items-end">
                                        <h5 className="card-title fs-24 text-secondary mb-0">Great quality!</h5>
                                        <div className="ml-auto opacity-2">
                                        <img src="images/quote.png" alt="quote" />
                                        </div>
                                    </div>
                                    <p className="card-text fs-18 lh-2 text-heading mb-5">
                                        We have chosen to work extensively with HomeID because of their quality services, including their On-the-Job Training program and other employer.
                                    </p>
                                    <div className="media align-items-center">
                                        <div className="rounded-circle mr-4 bg-white w-70px h-70 d-flex align-items-end justify-content-center">
                                        <img src="images/testimonial-1.png" alt="Oliver Beddows" />
                                        </div>
                                        <div className="media-body">
                                        <p className="fs-17 lh-1 text-heading font-weight-600 mb-2">Oliver Beddows</p>
                                        <p className="fs-15 lh-12 mb-0">/ Reporter, Insights</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="box px-0">
                                <div className="card border-0 bg-transparent">
                                    <div className="card-body p-0">
                                    <div className="d-flex mb-6 align-items-end">
                                        <h5 className="card-title fs-24 text-secondary mb-0">Great quality!</h5>
                                        <div className="ml-auto opacity-2">
                                        <img src="images/quote.png" alt="quote" />
                                        </div>
                                    </div>
                                    <p className="card-text fs-18 lh-2 text-heading mb-5">
                                        We have chosen to work extensively with HomeID because of their quality services, including their On-the-Job Training program and other employer.
                                    </p>
                                    <div className="media align-items-center">
                                        <div className="rounded-circle mr-4 bg-white w-70px h-70 d-flex align-items-end justify-content-center">
                                        <img src="images/testimonial-1.png" alt="Oliver Beddows" />
                                        </div>
                                        <div className="media-body">
                                        <p className="fs-17 lh-1 text-heading font-weight-600 mb-2">Oliver Beddows</p>
                                        <p className="fs-15 lh-12 mb-0">/ Reporter, Insights</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="box px-0">
                                <div className="card border-0 bg-transparent">
                                    <div className="card-body p-0">
                                    <div className="d-flex mb-6 align-items-end">
                                        <h5 className="card-title fs-24 text-secondary mb-0">Great quality!</h5>
                                        <div className="ml-auto opacity-2">
                                        <img src="images/quote.png" alt="quote" />
                                        </div>
                                    </div>
                                    <p className="card-text fs-18 lh-2 text-heading mb-5">
                                        We have chosen to work extensively with HomeID because of their quality services, including their On-the-Job Training program and other employer.
                                    </p>
                                    <div className="media align-items-center">
                                        <div className="rounded-circle mr-4 bg-white w-70px h-70 d-flex align-items-end justify-content-center">
                                        <img src="images/testimonial-1.png" alt="Oliver Beddows" />
                                        </div>
                                        <div className="media-body">
                                        <p className="fs-17 lh-1 text-heading font-weight-600 mb-2">Oliver Beddows</p>
                                        <p className="fs-15 lh-12 mb-0">/ Reporter, Insights</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section className="bg-gray-02 pt-9 pb-lg-13 pb-11">
                    <div className="container container-xxl">
                        <h2 className="text-heading">Destinations We Love The Most</h2>
                        <span className="heading-divider" />
                        <p className="mb-7">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                        <div className="slick-slider mx-n2" data-slick-options="{&quot;slidesToShow&quot;: 5,&quot;arrows&quot;:false, &quot;autoplay&quot;:false,&quot;dots&quot;:false,&quot;responsive&quot;:[{&quot;breakpoint&quot;: 1600,&quot;settings&quot;: {&quot;slidesToShow&quot;:4}},{&quot;breakpoint&quot;: 1200,&quot;settings&quot;: {&quot;slidesToShow&quot;:3}},{&quot;breakpoint&quot;: 992,&quot;settings&quot;: {&quot;slidesToShow&quot;:2}},{&quot;breakpoint&quot;: 768,&quot;settings&quot;: {&quot;slidesToShow&quot;: 2}},{&quot;breakpoint&quot;: 576,&quot;settings&quot;: {&quot;slidesToShow&quot;: 1}}]}">
                        <div className="box px-2" data-animate="zoomIn">
                            <div className="card text-white bg-overlay-gradient-5 hover-zoom-in">
                            <img src="images/properties-city-06.jpg" className="card-img" alt="New York" />
                            <div className="card-img-overlay d-flex justify-content-end flex-column p-4">
                                <h2 className="mb-0 fs-20 lh-182"><a href="single-property-1.html" className="text-white">New York</a></h2>
                                <p className="fs-13 font-weight-500 letter-spacing-087 mb-0">FROM<span className="ml-2 fs-15 font-weight-bold">$540.000 - $900.000</span>
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="box px-2" data-animate="zoomIn">
                            <div className="card text-white bg-overlay-gradient-5 hover-zoom-in">
                            <img src="images/properties-city-07.jpg" className="card-img" alt="Los Angeles" />
                            <div className="card-img-overlay d-flex justify-content-end flex-column p-4">
                                <h2 className="mb-0 fs-20 lh-182"><a href="single-property-1.html" className="text-white">Los Angeles</a></h2>
                                <p className="fs-13 font-weight-500 letter-spacing-087 mb-0">FROM<span className="ml-2 fs-15 font-weight-bold">$520.000 - $700.000</span>
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="box px-2" data-animate="zoomIn">
                            <div className="card text-white bg-overlay-gradient-5 hover-zoom-in">
                            <img src="images/properties-city-08.jpg" className="card-img" alt="San Jose" />
                            <div className="card-img-overlay d-flex justify-content-end flex-column p-4">
                                <h2 className="mb-0 fs-20 lh-182"><a href="single-property-1.html" className="text-white">San Jose</a></h2>
                                <p className="fs-13 font-weight-500 letter-spacing-087 mb-0">FROM<span className="ml-2 fs-15 font-weight-bold">$340.000 - $600.000</span>
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="box px-2" data-animate="zoomIn">
                            <div className="card text-white bg-overlay-gradient-5 hover-zoom-in">
                            <img src="images/properties-city-09.jpg" className="card-img" alt="Fort Worth" />
                            <div className="card-img-overlay d-flex justify-content-end flex-column p-4">
                                <h2 className="mb-0 fs-20 lh-182"><a href="single-property-1.html" className="text-white">Fort Worth</a></h2>
                                <p className="fs-13 font-weight-500 letter-spacing-087 mb-0">FROM<span className="ml-2 fs-15 font-weight-bold">$240.000 - $660.000</span>
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="box px-2" data-animate="zoomIn">
                            <div className="card text-white bg-overlay-gradient-5 hover-zoom-in">
                            <img src="images/properties-city-10.jpg" className="card-img" alt="Kansas City" />
                            <div className="card-img-overlay d-flex justify-content-end flex-column p-4">
                                <h2 className="mb-0 fs-20 lh-182"><a href="single-property-1.html" className="text-white">Kansas City</a></h2>
                                <p className="fs-13 font-weight-500 letter-spacing-087 mb-0">FROM<span className="ml-2 fs-15 font-weight-bold">$380.000 - $680.000</span>
                                </p>
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


export default Home;
