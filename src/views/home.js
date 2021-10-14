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
import { Link } from 'react-router-dom'

const Home = ({isLoggedIn, user, isLoading, setIsLoading, status, token}) => {

    return (
        <div>           
            <Helmet>
                <title>Bayof - Property Ownership</title>
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@" />
                <meta name="twitter:creator" content="@" />
                <meta name="twitter:title" content="Bayof - Take ownership of landed property, globally" />
                <meta name="twitter:description" content="We're using technology to take the housing and real estate industry into the modern age" />
                {/* <meta name="twitter:image" content="/images/homeid-social-logo.png" /> */}
                <meta property="og:url" content={process.env.REACT_APP_API_URL} />
                <meta property="og:title" content="Take ownership of landed property, globally" />
                <meta property="og:description" content="We're using technology to take the real estate industry into the future" />
                <meta property="og:type" content="website" />
                {/* <meta property="og:image" content="/images/homeid-social.png" /> */}
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="description" content="We're using technology to take the real estate industry into the future" />
            </Helmet>
            
            <NavBar isloggedIn={isLoggedIn} token={token} user={user} status={status} />
            
            <main id="content">
                <HeroSection/>

                <PopularSection isLoading={isLoading} setIsLoading={setIsLoading} status={status} />

                <section className="bg-gray-02 pt-10 pb-11">
                    <div className="container container-xxl">
                        <h2 className="text-dark lh-1625 text-center c-title">Wondering why we built, Bayof?</h2>
                        <span className="heading-divider mx-auto" />
                        <div className="row justify-content-between mt-10">
                        <ScrollAnimation animateIn="fadeInUp" className="col-lg-4 mb-6 mb-lg-0">
                            <div className="card border-0 bg-transparent">
                            <div className="card-img-top d-flex align-items-end justify-content-center">
                                <img src="images/urban.png" alt="Wider range of properties" />
                            </div>
                            <div className="card-body px-0 px-xxl-10 pt-7 pb-0 text-center">
                                <h4 className="card-title fs-18 lh-17 text-dark mb-2 text-capitalize">Own properties with ease</h4>
                                <p className="card-text px-sm-2">
                                Taking ownership of a landed property does not have to take months to process. We've set out to make purchasing a property as easy as clicking a button.
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
                                <h4 className="card-title fs-18 lh-17 text-dark mb-2 text-capitalize">Easy access to Agents</h4>
                                <p className="card-text px-sm-2">
                                Looking to purchase a property? <br/> The current owners or agents incharge of the property can easily be reached out to on the platform.
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
                                <h4 className="card-title fs-18 lh-17 text-dark mb-2 text-capitalize">Global range of properties</h4>
                                <p className="card-text px-sm-2">
                                Our sights are set on a global scale. <br/> Users will be able to own properties anywhere in the universe.
                                </p>
                            </div>
                            </div>
                        </ScrollAnimation>
                        </div>
                    </div>
                    </section>
                    
                    <HomePropertiesSlider />

                    <SalePropertiesSlider />
                    
      <section class="bg-accent pt-10 pb-lg-11 pb-8 bg-patten-04">
        <div class="container container-xxl">
          <h2 class="text-dark text-center mxw-751 fs-26 lh-184 px-md-8 c-title">
            Make property deals in days, seriously.</h2>
          <span class="heading-divider mx-auto"></span>
          <div class="row mt-8">
            <div class="col-lg-4 mb-6 mb-lg-0" data-animate="zoomIn">
              <div class="card border-hover shadow-2 shadow-hover-lg-1 pl-5 pr-6 py-6 h-100 hover-change-image">
                <div class="row no-gutters">
                  <div class="col-sm-3">
                    <img src="images/group-16.png"
							     alt="Buy a new home"/>
                  </div>
                  <div class="col-sm-9">
                    <div class="card-body p-0 pl-0 pl-sm-5 pt-5 pt-sm-0">
                      <Link to="signup"
								   class="d-flex align-items-center text-dark hover-secondary"><h4
										class="fs-20 lh-1625 mb-1">Own a property </h4>
                        <span class="ml-2 text-primary fs-42 lh-1 hover-image d-inline-flex align-items-center">
                          <svg class="icon icon-long-arrow"><use
		                                    xlinkHref="#icon-long-arrow"></use></svg>
                        </span>
                      </Link>
                      <p class="mb-0">Who does not want to become a proud property owner? Join this highly estemeed rank with ease.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-6 mb-lg-0" data-animate="zoomIn">
              <div class="card border-hover shadow-2 shadow-hover-lg-1 pl-5 pr-6 py-6 h-100 hover-change-image">
                <div class="row no-gutters">
                  <div class="col-sm-3">
                    <img src="images/group-17.png"
							     alt="Sell a home"/>
                  </div>
                  <div class="col-sm-9">
                    <div class="card-body p-0 pl-0 pl-sm-5 pt-5 pt-sm-0">
                      <Link to="signup"
								   class="d-flex align-items-center text-dark hover-secondary"><h4
										class="fs-20 lh-1625 mb-1"> Sell a property </h4>
                        <span class="ml-2 text-primary fs-42 lh-1 hover-image d-inline-flex align-items-center">
                          <svg class="icon icon-long-arrow"><use
		                                    xlinkHref="#icon-long-arrow"></use></svg>
                        </span>
                      </Link>
                      <p class="mb-0">Trusted by many - we'll expose your property to a wide range of clients for awesome deals.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-6 mb-lg-0" data-animate="zoomIn">
              <div class="card border-hover shadow-2 shadow-hover-lg-1 pl-5 pr-6 py-6 h-100 hover-change-image">
                <div class="row no-gutters">
                  <div class="col-sm-3">
                    <img src="images/group-21.png"
							     alt="Rent a home"/>
                  </div>
                  <div class="col-sm-9">
                    <div class="card-body p-0 pl-0 pl-sm-5 pt-5 pt-sm-0">
                      <Link to="signup"
								   class="d-flex align-items-center text-dark hover-secondary"><h4
										class="fs-20 lh-1625 mb-1">Rent a property </h4>
                        <span class="ml-2 text-primary fs-42 lh-1 hover-image d-inline-flex align-items-center">
                          <svg class="icon icon-long-arrow"><use
		                                    xlinkHref="#icon-long-arrow"></use></svg>
                        </span>
                      </Link>
                      <p class="mb-0">Looking to purchase property for a period of time? We still got you covered.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* <section class="pt-lg-13 pb-lg-10 py-11 bg-gray-02">
        <div class="container">
          <p class="text-primary font-weight-500 letter-spacing-263 text-center text-uppercase mb-5">Meet our agents</p>
          <h2 class="text-dark text-center mb-9 lh-16">Need A Cozy Place? Contact Us!</h2>
          <div class="slick-slider mx-0 custom-arrow-spacing-30"
		     data-slick-options='{"slidesToShow": 4,"dots":true,"arrows":false,"responsive":[{"breakpoint": 1200,"settings": {"slidesToShow":3,"arrows":false}},{"breakpoint": 992,"settings": {"slidesToShow":3,"arrows":false}},{"breakpoint": 768,"settings": {"slidesToShow": 2,"arrows":false,"dots":true,"autoplay":true}},{"breakpoint": 576,"settings": {"slidesToShow": 1,"arrows":false,"dots":true}}]}'>
            <div class="box" data-animate="fadeInUp">
              <div class="card border-0 shadow-hover-3 px-4">
                <div class="card-body text-center pt-6 pb-3 px-0">
                  <a href="agent-details-1.html" class="d-inline-block mb-2">
                    <img src="images/agent-1.jpg" alt="{ agent.name }}" />
                  </a>
                  <a href="agent-details-1.html"
							   class="d-block fs-16 text-dark mb-0 font-weight-500 hover-primary lh-15">Oliver Beddows</a>
                  <p class="mb-0">Sales Excutive</p>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item fs-13 text-heading font-weight-500">4.8/5</li>
                    <li class="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                      </ul>
                    </li>
                    <li class="list-inline-item fs-13 text-gray-light">(67 reviews)</li>
                  </ul>
                </div>
                <div class="card-footer bg-white px-0 text-center pt-3 pb-1">
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item mb-2">
                      <a href="#"
									   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
											class="fab fa-twitter"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
									   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
											class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
									   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center">
                        <i class="fab fa-instagram"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
									   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
											class="fab fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box" data-animate="fadeInUp">
              <div class="card border-0 shadow-hover-3 px-4">
                <div class="card-body text-center pt-6 pb-3 px-0">
                  <a href="agent-details-1.html" class="d-inline-block mb-2">
                    <img src="images/agent-2-lg.jpg" alt="{ agent.name }}" />
                  </a>
                  <a href="agent-details-1.html"
							   class="d-block fs-16 text-dark mb-0 font-weight-500 hover-primary lh-15">Max Kordek</a>
                  <p class="mb-0">Real estate broker</p>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item fs-13 text-heading font-weight-500">4.8/5</li>
                    <li class="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                      </ul>
                    </li>
                    <li class="list-inline-item fs-13 text-gray-light">(67 reviews)</li>
                  </ul>
                </div>
                <div class="card-footer bg-white px-0 text-center pt-3 pb-1">
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item mb-2">
                      <a href="#"
									   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
											class="fab fa-twitter"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
									   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
											class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
									   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center">
                        <i class="fab fa-instagram"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
									   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
											class="fab fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box" data-animate="fadeInUp">
              <div class="card border-0 shadow-hover-3 px-4">
                <div class="card-body text-center pt-6 pb-3 px-0">
                  <a href="agent-details-1.html" class="d-inline-block mb-2">
                    <img src="images/agent-4-lg.jpg" alt="{ agent.name }}" />
                  </a>
                  <a href="agent-details-1.html"
							   class="d-block fs-16 text-dark mb-0 font-weight-500 hover-primary lh-15">Ted Stokes</a>
                  <p class="mb-0">Sales Excutive</p>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item fs-13 text-heading font-weight-500">4.8/5</li>
                    <li class="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                      </ul>
                    </li>
                    <li class="list-inline-item fs-13 text-gray-light">(67 reviews)</li>
                  </ul>
                </div>
                <div class="card-footer bg-white px-0 text-center pt-3 pb-1">
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item mb-2">
                      <a href="#"
									   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
											class="fab fa-twitter"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
									   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
											class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
									   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center">
                        <i class="fab fa-instagram"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
									   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
											class="fab fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box" data-animate="fadeInUp">
              <div class="card border-0 shadow-hover-3 px-4">
                <div class="card-body text-center pt-6 pb-3 px-0">
                  <a href="agent-details-1.html" class="d-inline-block mb-2">
                    <img src="images/agent-3-lg.jpg" alt="{ agent.name }}" />
                  </a>
                  <a href="agent-details-1.html"
							   class="d-block fs-16 text-dark mb-0 font-weight-500 hover-primary lh-15">David James</a>
                  <p class="mb-0">Real estate broker</p>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item fs-13 text-heading font-weight-500">4.8/5</li>
                    <li class="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                      </ul>
                    </li>
                    <li class="list-inline-item fs-13 text-gray-light">(67 reviews)</li>
                  </ul>
                </div>
                <div class="card-footer bg-white px-0 text-center pt-3 pb-1">
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item mb-2">
                      <a href="#"
									   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
											class="fab fa-twitter"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
									   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
											class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
									   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center">
                        <i class="fab fa-instagram"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
									   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
											class="fab fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box" data-animate="fadeInUp">
              <div class="card border-0 shadow-hover-3 px-4">
                <div class="card-body text-center pt-6 pb-3 px-0">
                  <a href="agent-details-1.html" class="d-inline-block mb-2">
                    <img src="images/agent-1.jpg" alt="{ agent.name }}" />
                  </a>
                  <a href="agent-details-1.html"
							   class="d-block fs-16 text-dark mb-0 font-weight-500 hover-primary lh-15">Oliver Beddows</a>
                  <p class="mb-0">Sales Excutive</p>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item fs-13 text-heading font-weight-500">4.8/5</li>
                    <li class="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                        <li class="list-inline-item mr-0">
                          <span class="text-warning fs-12 lh-2"><i class="fas fa-star"></i></span>
                        </li>
                      </ul>
                    </li>
                    <li class="list-inline-item fs-13 text-gray-light">(67 reviews)</li>
                  </ul>
                </div>
                <div class="card-footer bg-white px-0 text-center pt-3 pb-1">
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item mb-2">
                      <a href="#"
									   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
											class="fab fa-twitter"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
									   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
											class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
									   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center">
                        <i class="fab fa-instagram"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
									   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
											class="fab fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="p-6 mxw-670 pl-md-9 d-sm-flex align-items-sm-center position-relative mt-10 rounded-lg" style="background-color: #eaeff7" data-animate="fadeInUp">
            <div class="mt-md-0 mt-6">
              <h4 class="text-secondary fs-20 font-weight-normal">Become a<span class="font-weight-600"> Real Estate Agent</span></h4>
              <p class="mb-0">Lorem ipsum dolor sit amet, consec tetur cing elit</p>
            </div>
            <div class="ml-auto">
              <a href="#" class="btn btn-lg btn-primary rounded-lg mt-sm-0 mt-6">Register now</a>
            </div>
            <i class="far fa-users h-64 w-64px bg-indigo d-flex justify-content-center align-items-center text-white rounded-circle fs-24 position-absolute custom-pos-icon"></i>
          </div>
        </div>
      </section> */}
                  
                    <section className="pt-lg-13 pb-lg-9 mt-lg-1 py-11">
                    <div className="container container-xxl">
          <div class="row align-items-center">
            <div class="col-lg-5 pr-xl-17" data-animate="fadeInLeft">
                            <BlogList />
                        </div>
                        <div className="col-lg-7">
                            <TestimonialSlider  />
                        </div>
                        </div>
                    </div>
                    </section>
                    
                    <DestinationsSlider />

                </main>

            <Footer />
        </div>
    )
}


export default Home;
