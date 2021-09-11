import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import Searchbar from 'views/layouts/components/search/searchbar';
import NavBar from 'components/shared/nav-bar';
import Footer from 'components/shared/footer';
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router';
import ListingGrid from './tenants/listings/components/listing-grid';
import { SearchListingsMap } from 'components/maps/multiple-markers';
import { SearchListings } from 'providers/redux/_actions/search-actions';
import { Helmet } from 'react-helmet';

const QueryString =  require('query-string')

const Search = ({isLoggedIn, user, setIsLoading, status}) => {

    const location = useLocation()
    const dispatch = useDispatch()
    const parsed = QueryString.parse(location.search);

    const results = useSelector((state) => state.search)
    const {loading, result} = results

    const search = () => {
        dispatch(SearchListings(parsed));
    }

    useEffect(() => {
        !result && search()
    }, [result])

    useEffect(() => {
        console.log(loading)
        setIsLoading(loading)
    }, [loading])
        
    return (
        <div>
            <Helmet>
                <title>Search - Bayof Real Estate</title>
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
            <ToastContainer />
            
            <NavBar isloggedIn={isLoggedIn} user={user} status={status} />
            
            <Searchbar parsed={parsed} />

            <section className="position-relative">
                <div className="container-fluid px-0">
                <div className="row no-gutters">
                    <div className="col-xl-6 col-xxl-5 px-3 px-xxl-6 pt-7 order-2 order-xl-1 pb-11">
                    <div className="row align-items-sm-center mb-6">
                        <div className="col-md-6 col-xl-5 col-xxl-6">
                            <h2 className="fs-15 text-dark mb-0">We found <span className="text-primary">{result && result.total}</span> properties
                                available for you
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                       
                        {
                            result

                            &&

                            result.map((listing, index) => {
                                return (
                                    <ListingGrid listing={listing} key={index} />
                                )
                            })
                        }

                            
                    </div>
                    </div>
                    <div className="col-xl-6 col-xxl-7 order-1 order-xl-2 primary-map map-sticky overflow-hidden" id="map-sticky">
                    <div className="primary-map-inner">
                        {
                        
                            result && result.length > 0

                            && 

                            <SearchListingsMap zoom={11} listings={result}/>
                        
                        }
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
            <Footer />
        </div>

    )
}

export default Search;