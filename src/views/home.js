import React from 'react'
import HeroSection from './layouts/home/hero-section'
import PopularSection from './layouts/home/popular-section'
import NavBar from 'components/shared/nav-bar'
import Footer from 'components/shared/footer'
import ScrollAnimation from 'react-animate-on-scroll'
import { Helmet } from 'react-helmet'
import { HomePropertiesSlider } from './layouts/home/sliders/rent-properties-slider/home-properties-slider'
import { SalePropertiesSlider } from './layouts/home/sliders/sale-properties-sliders/sale-properties-slider'
import { TestimonialSlider } from './layouts/home/sliders/testimonials/testionmials-slider'
import { DestinationsSlider } from './layouts/home/sliders/destinations/destinations-slider'
import { BlogList } from './layouts/home/blog-list'

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
                    
                    <HomePropertiesSlider />

                    <SalePropertiesSlider />
                    
                    <section>
                    <div className="bg-patten-01 pt-12 pb-10 bg-secondary">
                        <div className="container">
                        <h2 className="text-white text-center lh-1625 mxw-589 font-weight-normal">Looking to Buy a new property or Sell
                            an existing
                            one?</h2>
                        <span className="heading-divider mx-auto" />
                        <div className="row info-box-3 mt-7 no-gutters mx-auto">
                            <ScrollAnimation className="col-md-3 col-sm-6 mb-6 mb-md-0" animateIn="zoomIn">
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
                            </ScrollAnimation>
                            <ScrollAnimation className="col-md-3 col-sm-6 mb-6 mb-md-0" animateIn="zoomIn">
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
                            </ScrollAnimation>
                            <ScrollAnimation className="col-md-3 col-sm-6 mb-6 mb-md-0" animateIn="zoomIn">
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
                            </ScrollAnimation>
                            <ScrollAnimation className="col-md-3 col-sm-6 mb-6 mb-md-0" animateIn="zoomIn">
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
                            </ScrollAnimation>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section className="pt-lg-13 pb-lg-9 mt-lg-1 py-11">
                    <div className="container container-xxl">
                        <div className="row">
                        <div className="col-lg-6">
                            <BlogList />
                        </div>
                        <div className="col-lg-6">
                            <TestimonialSlider  />
                        </div>
                        </div>
                    </div>
                    </section>
                    
                    <DestinationsSlider />

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
