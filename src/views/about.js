import React, { Component, useEffect } from 'react'
import NavBar from 'components/shared/nav-bar';
import Footer from '../components/shared/footer';
import { Helmet } from 'react-helmet';
import Searchbar from './layouts/components/search/searchbar';

const About = ({isLoggedIn, user, setIsLoading}) => {
    
    useEffect(() => {
        setIsLoading(false)
    })

    return (
        <div>
            <Helmet>
                <title>About us - Bayof Real Estate - Find Properties and agents around you</title>
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
            <NavBar isloggedIn={isLoggedIn} user={user}/>

            <main id="content">
                <Searchbar/>

                <div>
                    <section style={{backgroundImage: 'url("images/bg-about-us.jpg")'}} className="bg-img-cover-center py-10 pt-md-16 pb-md-17 bg-overlay">
                        <div className="container position-relative z-index-2 text-center">
                        <a href="http://www.youtube.com/watch?v=0O2aH4XLbto" className="d-inline-block m-auto position-relative play-animation" data-gtf-mfp="true" data-mfp-options="{&quot;type&quot;:&quot;iframe&quot;}">
                            <span className="text-white bg-primary w-78px h-78 rounded-circle d-flex align-items-center justify-content-center">
                            <i className="fas fa-play" />
                            </span>
                        </a>
                        <div className="mxw-751">
                            <h1 className="text-white fs-30 fs-md-42 lh-15 font-weight-normal mt-4 mb-10" data-animate="fadeInRight">We
                            believe in design as a powerful force for good.</h1>
                        </div>
                        </div>
                    </section>
                    <section className="bg-patten-03 bg-gray-01 pb-13">
                        <div className="container">
                        <div className="card border-0 mt-n13 z-index-3 mb-12">
                            <div className="card-body p-6 px-lg-14 py-lg-13">
                            <p className="letter-spacing-263 text-uppercase text-primary mb-6 font-weight-500 text-center">welcome to
                                grandhome</p>
                            <h2 className="text-heading mb-4 fs-22 fs-md-32 text-center lh-16 px-6">We see change as opportunity, not a
                                threat and
                                start
                                with the
                                belief that
                                there is
                                a better way. </h2>
                            <p className="text-center px-lg-11 fs-15 lh-17 mb-11">
                                Over the past 25 years we’ve created more than 5,000 new homes and 1.5 million sq ft of workspace in
                                over 60 regeneration projects. Have a look at the short film below to learn more about how we’ve
                                achieved this and what drives us.
                            </p>
                            <p className="letter-spacing-263 text-uppercase mb-4 font-weight-500 text-center">Jump to</p>
                            <div className="d-flex flex-wrap justify-content-center">
                                <a href="#" className="btn btn-lg bg-gray-01 text-body mr-4 mb-4 hover-primary">Services</a>
                                <a href="#" className="btn btn-lg bg-gray-01 text-body mr-4 mb-4 hover-primary">Leadership</a>
                                <a href="#" className="btn btn-lg bg-gray-01 text-body mr-4 mb-4 hover-primary">Offices Location</a>
                                <a href="#" className="btn btn-lg bg-gray-01 text-body mr-4 mb-4 hover-primary">Work with us</a>
                            </div>
                            </div>
                        </div>
                        <h2 className="text-dark lh-1625 text-center mb-2 fs-22 fs-md-32">Our services</h2>
                        <p className="mxw-751 text-center mb-1 px-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim</p>
                        <div className="row mt-8">
                            <div className="col-md-4 mb-6 mb-lg-0">
                            <div className="card shadow-2 px-7 pb-6 pt-4 h-100 border-0">
                                <div className="card-img-top d-flex align-items-end justify-content-center">
                                <span className="text-primary fs-90 lh-1"><svg className="icon icon-e1"><use xlinkHref="#icon-e1" /></svg></span>
                                </div>
                                <div className="card-body px-0 pt-6 pb-0 text-center">
                                <h4 className="card-title fs-18 lh-17 text-dark mb-2">Property Management</h4>
                                <p className="card-text px-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna
                                </p>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 mb-6 mb-lg-0">
                            <div className="card shadow-2 px-7 pb-6 pt-4 h-100 border-0">
                                <div className="card-img-top d-flex align-items-end justify-content-center">
                                <span className="text-primary fs-90 lh-1">
                                    <svg className="icon icon-e2"><use xlinkHref="#icon-e2" /></svg>
                                </span>
                                </div>
                                <div className="card-body px-0 pt-6 pb-0 text-center">
                                <h4 className="card-title fs-18 lh-17 text-dark mb-2">Mortgage Service</h4>
                                <p className="card-text px-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna
                                </p>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 mb-6 mb-lg-0">
                            <div className="card shadow-2 px-7 pb-6 pt-4 h-100 border-0">
                                <div className="card-img-top d-flex align-items-end justify-content-center">
                                <span className="text-primary fs-90 lh-1">
                                    <svg className="icon icon-e3"><use xlinkHref="#icon-e3" /></svg>
                                </span>
                                </div>
                                <div className="card-body px-0 pt-6 text-center pb-0">
                                <h4 className="card-title fs-18 lh-17 text-dark mb-2">Consulting Service</h4>
                                <p className="card-text px-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    <section className="py-12">
                        <div className="container">
                        <h2 className="text-dark lh-1625 text-center mb-2 fs-22 fs-md-32">Leadership</h2>
                        <p className="mxw-751 text-center mb-1 px-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim</p>
                        <div className="row mx-lg-n6 mt-8">
                            <div className="col-md-4 col-sm-12 mb-md-7 mb-4 px-lg-6">
                            <div className="card border-0 our-team text-center">
                                <div className="rounded overflow-hidden bg-hover-overlay d-inline-block">
                                <img className="card-img" src="images/our-team-01.jpg" alt="Dollie Horton" />
                                <ul className="list-inline text-gray-lighter position-absolute w-100 m-0 p-0 z-index-2">
                                    <li className="list-inline-item m-0">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-twitter" /></a>
                                    </li>
                                    <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-instagram" /></a>
                                    </li>
                                    <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-linkedin-in" /></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="card-body pt-5">
                                <h3 className="fs-22 text-heading lh-164 mb-0">
                                    <a href="#" className="text-heading hover-primary">Dollie Horton</a>
                                </h3>
                                <p className="m-0">President &amp; CEO</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 col-sm-12 mb-md-7 mb-4 px-lg-6">
                            <div className="card border-0 our-team text-center">
                                <div className="rounded overflow-hidden bg-hover-overlay d-inline-block">
                                <img className="card-img" src="images/our-team-'02'.jpg" alt="Dollie Horton" />
                                <ul className="list-inline text-gray-lighter position-absolute w-100 m-0 p-0 z-index-2">
                                    <li className="list-inline-item m-0">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-twitter" /></a>
                                    </li>
                                    <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-instagram" /></a>
                                    </li>
                                    <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-linkedin-in" /></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="card-body pt-5">
                                <h3 className="fs-22 text-heading lh-164 mb-0">
                                    <a href="#" className="text-heading hover-primary">Dollie Horton</a>
                                </h3>
                                <p className="m-0">Co-Founder</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 col-sm-12 mb-md-7 mb-4 px-lg-6">
                            <div className="card border-0 our-team text-center">
                                <div className="rounded overflow-hidden bg-hover-overlay d-inline-block">
                                <img className="card-img" src="images/our-team-03.jpg" alt="Dollie Horton" />
                                <ul className="list-inline text-gray-lighter position-absolute w-100 m-0 p-0 z-index-2">
                                    <li className="list-inline-item m-0">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-twitter" /></a>
                                    </li>
                                    <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-instagram" /></a>
                                    </li>
                                    <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-linkedin-in" /></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="card-body pt-5">
                                <h3 className="fs-22 text-heading lh-164 mb-0">
                                    <a href="#" className="text-heading hover-primary">Dollie Horton</a>
                                </h3>
                                <p className="m-0">Co-Founder</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 mb-sm-0 mb-7">
                            <div className="card border-0 our-team text-center">
                                <div className="rounded overflow-hidden bg-hover-overlay d-inline-block">
                                <img className="card-img" src="images/our-team-04.jpg" alt="Dollie Horton" />
                                <ul className="list-inline text-gray-lighter position-absolute w-100 m-0 p-0 z-index-2">
                                    <li className="list-inline-item m-0">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-twitter" /></a>
                                    </li>
                                    <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-instagram" /></a>
                                    </li>
                                    <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-linkedin-in" /></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="card-body pt-5">
                                <h3 className="fs-16 text-heading mb-1 lh-2">
                                    <a href="#" className="text-heading hover-primary">Dollie Horton</a>
                                </h3>
                                <p>Marketing Director</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-sm-0 mb-7">
                            <div className="card border-0 our-team text-center">
                                <div className="rounded overflow-hidden bg-hover-overlay d-inline-block">
                                <img className="card-img" src="images/our-team-05.jpg" alt="Dollie Horton" />
                                <ul className="list-inline text-gray-lighter position-absolute w-100 m-0 p-0 z-index-2">
                                    <li className="list-inline-item m-0">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-twitter" /></a>
                                    </li>
                                    <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-instagram" /></a>
                                    </li>
                                    <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-linkedin-in" /></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="card-body pt-5">
                                <h3 className="fs-16 text-heading mb-1 lh-2">
                                    <a href="#" className="text-heading hover-primary">Dollie Horton</a>
                                </h3>
                                <p>Project manager</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-sm-0 mb-7">
                            <div className="card border-0 our-team text-center">
                                <div className="rounded overflow-hidden bg-hover-overlay d-inline-block">
                                <img className="card-img" src="images/our-team-06.jpg" alt="Dollie Horton" />
                                <ul className="list-inline text-gray-lighter position-absolute w-100 m-0 p-0 z-index-2">
                                    <li className="list-inline-item m-0">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-twitter" /></a>
                                    </li>
                                    <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-instagram" /></a>
                                    </li>
                                    <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-linkedin-in" /></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="card-body pt-5">
                                <h3 className="fs-16 text-heading mb-1 lh-2">
                                    <a href="#" className="text-heading hover-primary">Tom Sanders</a>
                                </h3>
                                <p>Commercial Operations Director</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-sm-0 mb-7">
                            <div className="card border-0 our-team text-center">
                                <div className="rounded overflow-hidden bg-hover-overlay d-inline-block">
                                <img className="card-img" src="images/our-team-07.jpg" alt="Dollie Horton" />
                                <ul className="list-inline text-gray-lighter position-absolute w-100 m-0 p-0 z-index-2">
                                    <li className="list-inline-item m-0">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-twitter" /></a>
                                    </li>
                                    <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-instagram" /></a>
                                    </li>
                                    <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"><i className="fab fa-linkedin-in" /></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="card-body pt-5">
                                <h3 className="fs-16 text-heading mb-1 lh-2">
                                    <a href="#" className="text-heading hover-primary">Dollie Horton</a>
                                </h3>
                                <p>Head of Sales</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    <section>
                        <div>
                        <div className="position-relative">
                            <div id="map" className="mapbox-gl map-point-animate" style={{height: '550px'}} data-mapbox-access-token="pk.eyJ1IjoiZHVvbmdsaCIsImEiOiJjanJnNHQ4czExMzhyNDVwdWo5bW13ZmtnIn0.f1bmXQsS6o4bzFFJc8RCcQ" data-mapbox-options="{&quot;center&quot;:[-73.981566, 40.739011],&quot;setLngLat&quot;:[-73.981566, 40.739011]}" data-mapbox-marker="[{&quot;position&quot;:[-73.981566, 40.739011],&quot;className&quot;:&quot;marker&quot;,&quot;backgroundImage&quot;:&quot;images/googlle-market-01.png&quot;,&quot;backgroundRepeat&quot;:&quot;no-repeat&quot;,&quot;width&quot;:&quot;32px&quot;,&quot;height&quot;:&quot;40px&quot;}]" />
                            <div className="container">
                            <div className="map-info position-absolute">
                                <div className="card border-0 shadow-xs-4">
                                <div className="card-body pl-7 pr-6 pt-7 pb-10">
                                    <h4 className="fs-22 lh-238 mb-0">Offices Location</h4>
                                    <p className="mb-8">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscorem
                                    ipsum dolor sit
                                    ametcipsum ipsumg elit. consec tetur cing elitipsum dozlpsmg elit.</p>
                                    <h5 className="fs-16 lh-2 mb-0">Visit our office at</h5>
                                    <p className="mb-0">2005 Stokes Isle Apt. 896, Venaville, New York</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    <section className="pt-12">
                        <div className="container">
                        <h2 className="text-heading mb-4 fs-22 fs-md-32 text-center lh-16 px-md-13">
                            GrandHome is an estate agency that helps people live in more thoughtful and beautiful ways.
                        </h2>
                        <p className="text-center px-md-17 fs-15 lh-17 mb-8">
                            Our home is at the heart of the design, allowing us to engage with our community through talks and events,
                            and uphold our company culture with film screenings, yoga classes and team lunches.
                        </p>
                        <div className="text-center mb-11">
                            <a href="#" className="btn btn-lg btn-primary">Join our team</a>
                        </div>
                        <div className="row galleries mb-lg-n16">
                            <div className="col-sm-8 mb-6">
                            <div className="item item-size-2-1">
                                <a href="images/gallery-lg-08.jpg" className="card p-0 hover-zoom-in" data-gtf-mfp="true" data-gallery-id={'02'}>
                                <div className="card-img img" style={{backgroundImage: 'url("images/gallery-08.jpg")'}}>
                                </div>
                                </a>
                            </div>
                            </div>
                            <div className="col-sm-4 mb-6">
                            <div className="item item-size-2-1">
                                <a href="images/gallery-lg-09.jpg" className="card p-0 hover-zoom-in" data-gtf-mfp="true" data-gallery-id={'02'}>
                                <div className="card-img img" style={{backgroundImage: 'url("images/gallery-09.jpg")'}}>
                                </div>
                                </a>
                            </div>
                            </div>
                            <div className="col-sm-6 mb-6">
                            <div className="item item-size-2-1">
                                <a href="images/gallery-lg-10.jpg" className="card p-0 hover-zoom-in" data-gtf-mfp="true" data-gallery-id={'02'}>
                                <div className="card-img img" style={{backgroundImage: 'url("images/gallery-10.jpg")'}}>
                                </div>
                                </a>
                            </div>
                            </div>
                            <div className="col-sm-6 mb-6">
                            <div className="item item-size-2-1">
                                <a href="images/gallery-lg-11.jpg" className="card p-0 hover-zoom-in" data-gtf-mfp="true" data-gallery-id={'02'}>
                                <div className="card-img img" style={{backgroundImage: 'url("images/gallery-11.jpg")'}}>
                                </div>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    <section className="bg-gray-01 pt-10 pt-lg-17 pb-10">
                        <div className="container">
                        <h2 className="text-dark lh-1625 text-center mb-8 fs-22 fs-md-32 pt-lg-10">Keep exploring</h2>
                        <div className="row">
                            <div className="col-sm-6 col-lg-3 mb-6 mb-lg-0">
                            <a href="agents-grid-with-sidebar.html" className="card border-0 shadow-2 px-7 py-5 h-100 shadow-hover-lg-1">
                                <div className="card-img-top d-flex align-items-end justify-content-center">
                                <img src="images/icon-box-4.png" alt="Meet our agents" />
                                </div>
                                <div className="card-body px-0 pt-2 pb-0 text-center">
                                <h4 className="card-title fs-16 lh-186 text-dark hover-primary">Meet our agents</h4>
                                </div>
                            </a>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-6 mb-lg-0">
                            <a href="dashboard-add-new-property.html" className="card border-0 shadow-2 px-7 py-5 h-100 shadow-hover-lg-1">
                                <div className="card-img-top d-flex align-items-end justify-content-center">
                                <img src="images/icon-box-5.png" alt="Sell your home" />
                                </div>
                                <div className="card-body px-0 pt-2 pb-0 text-center">
                                <h4 className="card-title fs-16 lh-186 text-dark hover-primary">Sell your home</h4>
                                </div>
                            </a>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-6 mb-lg-0">
                            <a href="blog-grid-with-sidebar.html" className="card border-0 shadow-2 px-7 py-5 h-100 shadow-hover-lg-1">
                                <div className="card-img-top d-flex align-items-end justify-content-center">
                                <img src="images/icon-box-6.png" alt="Latest news" />
                                </div>
                                <div className="card-body px-0 pt-2 text-center pb-0">
                                <h4 className="card-title fs-16 lh-186 text-dark hover-primary">Latest news</h4>
                                </div>
                            </a>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-6 mb-lg-0">
                            <a href="contact-us-1.html" className="card border-0 shadow-2 px-7 py-5 h-100 shadow-hover-lg-1">
                                <div className="card-img-top d-flex align-items-end justify-content-center">
                                <img src="images/icon-box-7.png" alt="Contact us" />
                                </div>
                                <div className="card-body px-0 pt-2 text-center pb-0">
                                <h4 className="card-title fs-16 lh-186 text-dark hover-primary">Contact us</h4>
                                </div>
                            </a>
                            </div>
                        </div>
                        </div>
                    </section>
                    </div>

            </main>

            <Footer />
        </div>
    )
}

export default About;