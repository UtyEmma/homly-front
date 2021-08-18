import React, { Component, useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import Preloader from 'components/preloader/preloader';
import Searchbar from 'views/layouts/components/search/searchbar';
import NavBar from 'components/shared/nav-bar';
import Footer from 'components/shared/footer';
import SearchResultsFilter from './layouts/components/search/components/search-filter';
import { useDispatch, useSelector } from 'react-redux'
import { SearchListings } from 'providers/redux/_actions/search-actions'
import { useQuery } from 'libraries/http/query';
import { useLocation } from 'react-router';
import ListingGrid from './tenants/listings/components/listing-grid';
import { MapWithMultipleMarkers } from './agent/layouts/listings/blocks/map/map-display';
import { SearchListingsMap } from 'components/maps/multiple-markers';

const QueryString =  require('query-string')

const Search = ({isLoggedIn, user}) => {

    const location = useLocation()
    const dispatch = useDispatch()
    const [grid, setGrid] = useState(true)
    const results = useSelector((state) => state.search)
    const {loading, result} = results
    const parsed = QueryString.parse(location.search);  

    const search = () => {
        dispatch(SearchListings(parsed));
    }

    const toggleGrid = () => {
        !grid && setGrid(true)
    }
    const toggleList = () => {
        grid && setGrid(false)
    }

    useEffect(() => {
        !result && search()
    }, [result])
        
    return (
        <div>
            <Preloader loading={loading}/>

            <ToastContainer />
            
            <NavBar isloggedIn={isLoggedIn} user={user}/>
            
            <Searchbar parsed={parsed} />

            <SearchResultsFilter />

            <section className="position-relative">
                <div className="container-fluid px-0">
                <div className="row no-gutters">
                    <div className="col-xl-6 col-xxl-5 px-3 px-xxl-6 pt-7 order-2 order-xl-1 pb-11">
                    <div className="row align-items-sm-center mb-6">
                        <div className="col-md-6 col-xl-5 col-xxl-6">
                        <h2 className="fs-15 text-dark mb-0">We found <span className="text-primary">{result && result.total}</span> properties
                            available for
                            you
                        </h2>
                        </div>
                        <div className="col-md-6 col-xl-7 col-xxl-6 mt-6 mt-md-0">
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
                            <a className="fs-sm-18 text-dark" href="#">
                                <i className="fas fa-list" />
                            </a>
                            <a className="fs-sm-18 text-dark opacity-2 ml-5" href="listing-half-map-grid-layout-1.html">
                                <i className="fa fa-th-large" />
                            </a>
                            </div>
                        </div>
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
            <div className="d-none" id="template-properties">
                <div className="marker-item" data-icon-marker="images/googlle-market-02.png" data-position="[-73.9893691, 40.6751204]" data-marker-style="{&quot;className&quot;:&quot;marker&quot;,&quot;style&quot;:{&quot;width&quot;:&quot;45px&quot;,&quot;height&quot;:&quot;48px&quot;},&quot;popup&quot;:{&quot;className&quot;:&quot;popup-map-property-02&quot;,&quot;maxWidth&quot;:&quot;319px&quot;}}">
                <div className="position-relative">
                    <div className="media flex-row no-gutters align-items-center pb-2 border-bottom p-2">
                    <div className="col-3 mr-2 card border-0"><img src="images/properties-list-03.jpg" className="card-img" alt="Home in Metric Way" /></div>
                    <div className="media-body">
                        <h2 className="my-0"><a href="single-property-1.html" className="fs-13 lh-2 text-dark hover-primary d-block">Home in
                            Metric
                            Way</a></h2>
                        <p className="mb-0 font-weight-500 text-gray-light">1421 San Pedro St, Los Angeles</p>
                        <p className="fs-17 font-weight-bold text-heading mb-0">$1.250.000</p>
                    </div>
                    </div>
                    <ul className="list-inline d-flex mb-0 flex-wrap justify-content-between p-2">
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center">
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-bedroom" />
                        </svg>
                        3 Br
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center">
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-shower" />
                        </svg>
                        3 Ba
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center">
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-square" />
                        </svg>
                        2300 Sq.Ft
                    </li>
                    </ul>
                    <div className="badge badge-primary">For Sale</div>
                </div>
                </div>
                <div className="marker-item" data-icon-marker="images/googlle-market-02.png" data-position="[-73.9934889, 40.6743149]" data-marker-style="{&quot;className&quot;:&quot;marker&quot;,&quot;style&quot;:{&quot;width&quot;:&quot;45px&quot;,&quot;height&quot;:&quot;48px&quot;},&quot;popup&quot;:{&quot;className&quot;:&quot;popup-map-property-02&quot;,&quot;maxWidth&quot;:&quot;319px&quot;}}">
                <div className="position-relative">
                    <div className="media flex-row no-gutters align-items-center pb-2 border-bottom p-2">
                    <div className="col-3 mr-2 card border-0"><img src="images/properties-list-04.jpg" className="card-img" alt="Home in Metric Way" /></div>
                    <div className="media-body">
                        <h2 className="my-0"><a href="single-property-1.html" className="fs-13 lh-2 text-dark hover-primary d-block">Home in
                            Metric
                            Way</a></h2>
                        <p className="mb-0 font-weight-500 text-gray-light">1421 San Pedro St, Los Angeles</p>
                        <p className="fs-17 font-weight-bold text-heading mb-0">$1.250.000</p>
                    </div>
                    </div>
                    <ul className="list-inline d-flex mb-0 flex-wrap justify-content-between p-2">
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center">
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-bedroom" />
                        </svg>
                        3 Br
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center">
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-shower" />
                        </svg>
                        3 Ba
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center">
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-square" />
                        </svg>
                        2300 Sq.Ft
                    </li>
                    </ul>
                    <div className="badge badge-primary">For Sale</div>
                </div>
                </div>
                <div className="marker-item" data-icon-marker="images/googlle-market-03.png" data-position="[-73.9947227, 40.6734035]" data-marker-style="{&quot;className&quot;:&quot;marker&quot;,&quot;style&quot;:{&quot;width&quot;:&quot;45px&quot;,&quot;height&quot;:&quot;48px&quot;},&quot;popup&quot;:{&quot;className&quot;:&quot;popup-map-property-02&quot;,&quot;maxWidth&quot;:&quot;319px&quot;}}">
                <div className="position-relative">
                    <div className="media flex-row no-gutters align-items-center pb-2 border-bottom p-2">
                    <div className="col-3 mr-2 card border-0"><img src="images/properties-list-11.jpg" className="card-img" alt="Home in Metric Way" /></div>
                    <div className="media-body">
                        <h2 className="my-0"><a href="single-property-1.html" className="fs-13 lh-2 text-dark hover-primary d-block">Home in
                            Metric
                            Way</a></h2>
                        <p className="mb-0 font-weight-500 text-gray-light">1421 San Pedro St, Los Angeles</p>
                        <p className="fs-17 font-weight-bold text-heading mb-0">$2500<span className="fs-14 font-weight-500 text-gray-light"> /month</span></p>
                    </div>
                    </div>
                    <ul className="list-inline d-flex mb-0 flex-wrap justify-content-between p-2">
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center">
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-bedroom" />
                        </svg>
                        3 Br
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center">
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-shower" />
                        </svg>
                        3 Ba
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center">
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-square" />
                        </svg>
                        2300 Sq.Ft
                    </li>
                    </ul>
                    <div className="badge badge-indigo">For Rent</div>
                </div>
                </div>
                <div className="marker-item" data-icon-marker="images/googlle-market-02.png" data-position="[-73.9968864, 40.6747657]" data-marker-style="{&quot;className&quot;:&quot;marker&quot;,&quot;style&quot;:{&quot;width&quot;:&quot;45px&quot;,&quot;height&quot;:&quot;48px&quot;},&quot;popup&quot;:{&quot;className&quot;:&quot;popup-map-property-02&quot;,&quot;maxWidth&quot;:&quot;319px&quot;}}">
                <div className="position-relative">
                    <div className="media flex-row no-gutters align-items-center pb-2 border-bottom p-2">
                    <div className="col-3 mr-2 card border-0"><img src="images/properties-list-12.jpg" className="card-img" alt="Home in Metric Way" /></div>
                    <div className="media-body">
                        <h2 className="my-0"><a href="single-property-1.html" className="fs-13 lh-2 text-dark hover-primary d-block">Home in
                            Metric
                            Way</a></h2>
                        <p className="mb-0 font-weight-500 text-gray-light">1421 San Pedro St, Los Angeles</p>
                        <p className="fs-17 font-weight-bold text-heading mb-0">$1.250.000</p>
                    </div>
                    </div>
                    <ul className="list-inline d-flex mb-0 flex-wrap justify-content-between p-2">
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center">
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-bedroom" />
                        </svg>
                        3 Br
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center">
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-shower" />
                        </svg>
                        3 Ba
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center">
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-square" />
                        </svg>
                        2300 Sq.Ft
                    </li>
                    </ul>
                    <div className="badge badge-primary">For Sale</div>
                </div>
                </div>
                <div className="marker-item" data-icon-marker="images/googlle-market-02.png" data-position="[-73.9929114, 40.6731454]" data-marker-style="{&quot;className&quot;:&quot;marker&quot;,&quot;style&quot;:{&quot;width&quot;:&quot;45px&quot;,&quot;height&quot;:&quot;48px&quot;},&quot;popup&quot;:{&quot;className&quot;:&quot;popup-map-property-02&quot;,&quot;maxWidth&quot;:&quot;319px&quot;}}">
                <div className="position-relative">
                    <div className="media flex-row no-gutters align-items-center pb-2 border-bottom p-2">
                    <div className="col-3 mr-2 card border-0"><img src="images/properties-list-13.jpg" className="card-img" alt="Home in Metric Way" /></div>
                    <div className="media-body">
                        <h2 className="my-0"><a href="single-property-1.html" className="fs-13 lh-2 text-dark hover-primary d-block">Home in
                            Metric
                            Way</a></h2>
                        <p className="mb-0 font-weight-500 text-gray-light">1421 San Pedro St, Los Angeles</p>
                        <p className="fs-17 font-weight-bold text-heading mb-0">$1.250.000</p>
                    </div>
                    </div>
                    <ul className="list-inline d-flex mb-0 flex-wrap justify-content-between p-2">
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center">
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-bedroom" />
                        </svg>
                        3 Br
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center">
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-shower" />
                        </svg>
                        3 Ba
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center">
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-square" />
                        </svg>
                        2300 Sq.Ft
                    </li>
                    </ul>
                    <div className="badge badge-primary">For Sale</div>
                </div>
                </div>
                <div className="marker-item" data-icon-marker="images/googlle-market-03.png" data-position="[-73.9927934, 40.674364]" data-marker-style="{&quot;className&quot;:&quot;marker&quot;,&quot;style&quot;:{&quot;width&quot;:&quot;45px&quot;,&quot;height&quot;:&quot;48px&quot;},&quot;popup&quot;:{&quot;className&quot;:&quot;popup-map-property-02&quot;,&quot;maxWidth&quot;:&quot;319px&quot;}}">
                <div className="position-relative">
                    <div className="media flex-row no-gutters align-items-center pb-2 border-bottom p-2">
                    <div className="col-3 mr-2 card border-0"><img src="images/properties-list-03.jpg" className="card-img" alt="Home in Metric Way" /></div>
                    <div className="media-body">
                        <h2 className="my-0"><a href="single-property-1.html" className="fs-13 lh-2 text-dark hover-primary d-block">Home in
                            Metric
                            Way</a></h2>
                        <p className="mb-0 font-weight-500 text-gray-light">1421 San Pedro St, Los Angeles</p>
                        <p className="fs-17 font-weight-bold text-heading mb-0">$2500<span className="fs-14 font-weight-500 text-gray-light"> /month</span></p>
                    </div>
                    </div>
                    <ul className="list-inline d-flex mb-0 flex-wrap justify-content-between p-2">
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center">
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-bedroom" />
                        </svg>
                        3 Br
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center">
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-shower" />
                        </svg>
                        3 Ba
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center">
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-square" />
                        </svg>
                        2300 Sq.Ft
                    </li>
                    </ul>
                    <div className="badge badge-indigo">For Rent</div>
                </div>
                </div>
            </div>
            
            <Footer />
        </div>

    )
}

export default Search;