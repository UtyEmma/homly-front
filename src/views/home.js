import React, { useCallback, useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { FetchPopularListings } from 'providers/redux/_actions/listing/listing-actions'

const Home = ({ isLoggedIn, user, isLoading, setIsLoading, status, token }) => {
  return (
    <div>
      <Helmet>
        <title>Bayof - Property Ownership</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta
          name="twitter:title"
          content="Bayof - Take ownership of landed property, globally"
        />
        <meta
          name="twitter:description"
          content="We're using technology to take the housing and real estate industry into the modern age"
        />
        <meta property="og:url" content={process.env.REACT_APP_API_URL} />
        <meta
          property="og:title"
          content="Bayof - Take ownership of landed property, globally"
        />
        <meta
          property="og:description"
          content="We're using technology to take the real estate industry into the future"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="description"
          content="We're using technology to take the real estate industry into the future"
        />
      </Helmet>

    const dispatch = useDispatch()

    const popular_listings = useSelector((state) => state.popular_listings)
    const {loading, popular, rented, onsale} = popular_listings

    const loadPopularListings = useCallback(() => {
        dispatch(FetchPopularListings())
    }, [dispatch])

    useEffect(() => {
      loadPopularListings()
    }, [])

    useEffect(() => {
        setIsLoading(loading)
    }, [loading, setIsLoading])

    return (
        <div>           
            <Helmet>
                <title>Bayof - Property Ownership</title>
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@" />
                <meta name="twitter:creator" content="@" />
                <meta name="twitter:title" content="Bayof - Take ownership of landed property, globally" />
                <meta name="twitter:description" content="We're using technology to take the housing and real estate industry into the modern age" />
                <meta property="og:url" content={process.env.REACT_APP_API_URL} />
                <meta property="og:title" content="Take ownership of landed property, globally" />
                <meta property="og:description" content="We're using technology to take the real estate industry into the future" />
                <meta property="og:type" content="website" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="description" content="We're using technology to take the real estate industry into the future" />
            </Helmet>
            
            <NavBar isloggedIn={isLoggedIn} token={token} user={user} status={status} />
            
            <main id="content">
                <HeroSection/>

                {
            
                  popular && popular.length > 0

                  &&
                  
                  <PopularSection popular={popular} isLoading={isLoading} setIsLoading={setIsLoading} status={status} />
                
                }

                <section className="bg-gray-02 pt-10 pb-11">
                    <div className="container container-xxl">
                        <h2 className="text-dark lh-1625 text-center c-title fs-26 fs-md-48">Wondering why we built, Bayof?</h2>
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

                    {
                      rented && rented.length > 0

                      &&

                      <HomePropertiesSlider listings={rented} />
                    }

                    {
                      onsale && onsale.length > 0

                      &&

                      <SalePropertiesSlider listings={onsale} />
                    }
      <section class="bg-accent pt-10 pb-lg-11 pb-8 bg-patten-04">
        <div class="container container-xxl">
          <h2 class="text-dark text-center mxw-751 fs-26 lh-184 px-md-8 c-title fs-26 fs-md-48">
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
                  <div className="card-body px-0 px-xxl-10 pt-7 pb-0 text-center">
                    <h4 className="card-title fs-18 lh-17 text-dark mb-2 text-capitalize">
                      Own properties with ease
                    </h4>
                    <p className="card-text px-sm-2">
                      Taking ownership of a landed property does not have to
                      take months to process. We've set out to make purchasing a
                      property as easy as clicking a button.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                className="col-lg-4 mb-6 mb-lg-0"
              >
                <div className="card border-0 bg-transparent">
                  <div className="card-img-top d-flex align-items-end justify-content-center">
                    <img src="images/bank.png" alt="Financing made easy" />
                  </div>
                  <div className="card-body px-0 px-xxl-10 pt-7 pb-0 text-center">
                    <h4 className="card-title fs-18 lh-17 text-dark mb-2 text-capitalize">
                      Easy access to Agents
                    </h4>
                    <p className="card-text px-sm-2">
                      Looking to purchase a property? <br /> The current owners
                      or agents incharge of the property can easily be reached
                      out to on the platform.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                className="col-lg-4 mb-6 mb-lg-0"
              >
                <div className="card border-0 bg-transparent">
                  <div className="card-img-top d-flex align-items-end justify-content-center">
                    <img src="images/buy.png" alt="Transparentcy" />
                  </div>
                  <div className="card-body px-0 px-xxl-10 pt-7 pb-0 text-center">
                    <h4 className="card-title fs-18 lh-17 text-dark mb-2 text-capitalize">
                      Global range of properties
                    </h4>
                    <p className="card-text px-sm-2">
                      Our sights are set on a global scale. <br /> Users will be
                      able to own properties anywhere in the universe.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      

                  
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

        <DestinationsSlider />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
