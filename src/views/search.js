import React, { Component, useEffect, useState } from 'react'

import { ToastContainer } from 'react-toastify';
import Preloader from 'components/preloader/preloader';
import Searchbar from 'views/layouts/components/search/searchbar';
import NavBar from 'components/shared/nav-bar';
import ListingGrid from './tenants/listings/components/listing-grid';
import ListingList from './tenants/listings/components/listing-list';
import Footer from 'components/shared/footer';
import ListingFilter from './tenants/listings/components/listing-filter';
import SearchResultsFilter from './layouts/components/search/components/search-filter';

const Search = ({isLoggedIn, user, results}) => {
        const [grid, setGrid] = useState(true)
        const loading = false;

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
                <Searchbar />

                <SearchResultsFilter />

                <section className="position-relative">
                    <div className="container-fluid px-0">
                    <div className="row no-gutters">
                        <div className="col-xl-6 col-xxl-5 px-3 px-xxl-6 pt-7 order-2 order-xl-1 pb-11">
                        <div className="row align-items-sm-center mb-6">
                            <div className="col-md-6 col-xl-5 col-xxl-6">
                            <h2 className="fs-15 text-dark mb-0">We found <span className="text-primary">45</span> properties
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
                            <div className="col-12">
                            <div className="card mb-8 mb-lg-6 border-0" data-animate="fadeInUp">
                                <div className="row no-gutters">
                                <div className="col-md-6 mb-5 mb-md-0 pr-md-6">
                                    <div className="position-relative hover-change-image bg-hover-overlay h-100 pt-75 bg-img-cover-center rounded-lg" style={{backgroundImage: 'url("images/properties-list-06.jpg")'}}>
                                    <div className="card-img-overlay p-2 d-flex flex-column">
                                        <div>
                                        <span className="badge badge-primary">For Sale</span>
                                        </div>
                                        <div className="mt-auto d-flex hover-image">
                                        <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                            <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-images" /><span className="pl-1">9</span>
                                            </a>
                                            </li>
                                            <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-play-circle" /><span className="pl-1">2</span>
                                            </a>
                                            </li>
                                        </ul>
                                        <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                            <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="far fa-heart" />
                                            </a>
                                            </li>
                                            <li className="list-inline-item h-32  mr-3" data-toggle="tooltip" title="Compare">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="fas fa-exchange-alt" />
                                            </a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="card-body p-0">
                                    <h2 className="card-title my-0"><a href="single-property-1.html" className="fs-16 lh-2 text-dark hover-primary d-block">Home in Metric Way</a>
                                    </h2>
                                    <p className="card-text mb-1 font-weight-500 text-gray-light">1421 San Pedro St, Los Angeles</p>
                                    <p className="card-text mb-2 ml-0">Lorem ipsum dolor sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem sit amet, sectetur cing elit uspe ndisse suscorem</p>
                                    <p className="card-text fs-17 font-weight-bold text-heading mb-3">
                                        $1.250.000
                                    </p>
                                    </div>
                                    <div className="card-footer pt-3 bg-transparent px-0 pb-0">
                                    <ul className="list-inline d-flex mb-0 flex-wrap justify-content-between mr-n2">
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="3 Bedroom">
                                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-bedroom" />
                                        </svg>
                                        3 Br
                                        </li>
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="3 Bathrooms">
                                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-shower" />
                                        </svg>
                                        3 Ba
                                        </li>
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="Size">
                                        <svg className="icon icon-square fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-square" />
                                        </svg>
                                        2300 Sq.Ft
                                        </li>
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="1 Garage">
                                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-Garage" />
                                        </svg>
                                        1 Gr
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card mb-8 mb-lg-6 border-0" data-animate="fadeInUp">
                                <div className="row no-gutters">
                                <div className="col-md-6 mb-5 mb-md-0 pr-md-6">
                                    <div className="position-relative hover-change-image bg-hover-overlay h-100 pt-75 bg-img-cover-center rounded-lg" style={{backgroundImage: 'url("images/properties-list-16.jpg")'}}>
                                    <div className="card-img-overlay p-2 d-flex flex-column">
                                        <div>
                                        <span className="badge badge-indigo">for Rent</span>
                                        </div>
                                        <div className="mt-auto d-flex hover-image">
                                        <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                            <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-images" /><span className="pl-1">9</span>
                                            </a>
                                            </li>
                                            <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-play-circle" /><span className="pl-1">2</span>
                                            </a>
                                            </li>
                                        </ul>
                                        <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                            <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="far fa-heart" />
                                            </a>
                                            </li>
                                            <li className="list-inline-item h-32  mr-3" data-toggle="tooltip" title="Compare">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="fas fa-exchange-alt" />
                                            </a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="card-body p-0">
                                    <h2 className="card-title my-0"><a href="single-property-1.html" className="fs-16 lh-2 text-dark hover-primary d-block">Garden Gingerbread House</a>
                                    </h2>
                                    <p className="card-text mb-1 font-weight-500 text-gray-light">1421 San Pedro St, Los Angeles</p>
                                    <p className="card-text mb-2 ml-0">Lorem ipsum dolor sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem sit amet, sectetur cing elit uspe ndisse suscorem</p>
                                    <p className="card-text fs-17 font-weight-bold text-heading mb-3">
                                        $550
                                        <span className="fs-14 font-weight-500 text-gray-light"> /month</span>
                                    </p>
                                    </div>
                                    <div className="card-footer pt-3 bg-transparent px-0 pb-0">
                                    <ul className="list-inline d-flex mb-0 flex-wrap justify-content-between mr-n2">
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="3 Bedroom">
                                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-bedroom" />
                                        </svg>
                                        3 Br
                                        </li>
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="3 Bathrooms">
                                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-shower" />
                                        </svg>
                                        3 Ba
                                        </li>
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="Size">
                                        <svg className="icon icon-square fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-square" />
                                        </svg>
                                        2300 Sq.Ft
                                        </li>
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="1 Garage">
                                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-Garage" />
                                        </svg>
                                        1 Gr
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card mb-8 mb-lg-6 border-0" data-animate="fadeInUp">
                                <div className="row no-gutters">
                                <div className="col-md-6 mb-5 mb-md-0 pr-md-6">
                                    <div className="position-relative hover-change-image bg-hover-overlay h-100 pt-75 bg-img-cover-center rounded-lg" style={{backgroundImage: 'url("images/properties-list-05.jpg")'}}>
                                    <div className="card-img-overlay p-2 d-flex flex-column">
                                        <div>
                                        <span className="badge badge-indigo">for Rent</span>
                                        </div>
                                        <div className="mt-auto d-flex hover-image">
                                        <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                            <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-images" /><span className="pl-1">9</span>
                                            </a>
                                            </li>
                                            <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-play-circle" /><span className="pl-1">2</span>
                                            </a>
                                            </li>
                                        </ul>
                                        <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                            <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="far fa-heart" />
                                            </a>
                                            </li>
                                            <li className="list-inline-item h-32  mr-3" data-toggle="tooltip" title="Compare">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="fas fa-exchange-alt" />
                                            </a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="card-body p-0">
                                    <h2 className="card-title my-0"><a href="single-property-1.html" className="fs-16 lh-2 text-dark hover-primary d-block">Affordable Urban House</a>
                                    </h2>
                                    <p className="card-text mb-1 font-weight-500 text-gray-light">1421 San Pedro St, Los Angeles</p>
                                    <p className="card-text mb-2 ml-0">Lorem ipsum dolor sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem sit amet, sectetur cing elit uspe ndisse suscorem</p>
                                    <p className="card-text fs-17 font-weight-bold text-heading mb-3">
                                        $550
                                        <span className="fs-14 font-weight-500 text-gray-light"> /month</span>
                                    </p>
                                    </div>
                                    <div className="card-footer pt-3 bg-transparent px-0 pb-0">
                                    <ul className="list-inline d-flex mb-0 flex-wrap justify-content-between mr-n2">
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="3 Bedroom">
                                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-bedroom" />
                                        </svg>
                                        3 Br
                                        </li>
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="3 Bathrooms">
                                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-shower" />
                                        </svg>
                                        3 Ba
                                        </li>
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="Size">
                                        <svg className="icon icon-square fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-square" />
                                        </svg>
                                        2300 Sq.Ft
                                        </li>
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="1 Garage">
                                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-Garage" />
                                        </svg>
                                        1 Gr
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card mb-8 mb-lg-6 border-0" data-animate="fadeInUp">
                                <div className="row no-gutters">
                                <div className="col-md-6 mb-5 mb-md-0 pr-md-6">
                                    <div className="position-relative hover-change-image bg-hover-overlay h-100 pt-75 bg-img-cover-center rounded-lg" style={{backgroundImage: 'url("images/properties-list-17.jpg")'}}>
                                    <div className="card-img-overlay p-2 d-flex flex-column">
                                        <div>
                                        <span className="badge badge-primary">For Sale</span>
                                        </div>
                                        <div className="mt-auto d-flex hover-image">
                                        <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                            <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-images" /><span className="pl-1">9</span>
                                            </a>
                                            </li>
                                            <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-play-circle" /><span className="pl-1">2</span>
                                            </a>
                                            </li>
                                        </ul>
                                        <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                            <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="far fa-heart" />
                                            </a>
                                            </li>
                                            <li className="list-inline-item h-32  mr-3" data-toggle="tooltip" title="Compare">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="fas fa-exchange-alt" />
                                            </a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="card-body p-0">
                                    <h2 className="card-title my-0"><a href="single-property-1.html" className="fs-16 lh-2 text-dark hover-primary d-block">Villa on Hollywood Boulevard</a>
                                    </h2>
                                    <p className="card-text mb-1 font-weight-500 text-gray-light">1421 San Pedro St, Los Angeles</p>
                                    <p className="card-text mb-2 ml-0">Lorem ipsum dolor sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem sit amet, sectetur cing elit uspe ndisse suscorem</p>
                                    <p className="card-text fs-17 font-weight-bold text-heading mb-3">
                                        $1.250.000
                                    </p>
                                    </div>
                                    <div className="card-footer pt-3 bg-transparent px-0 pb-0">
                                    <ul className="list-inline d-flex mb-0 flex-wrap justify-content-between mr-n2">
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="3 Bedroom">
                                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-bedroom" />
                                        </svg>
                                        3 Br
                                        </li>
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="3 Bathrooms">
                                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-shower" />
                                        </svg>
                                        3 Ba
                                        </li>
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="Size">
                                        <svg className="icon icon-square fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-square" />
                                        </svg>
                                        2300 Sq.Ft
                                        </li>
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="1 Garage">
                                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-Garage" />
                                        </svg>
                                        1 Gr
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card mb-8 mb-lg-6 border-0" data-animate="fadeInUp">
                                <div className="row no-gutters">
                                <div className="col-md-6 mb-5 mb-md-0 pr-md-6">
                                    <div className="position-relative hover-change-image bg-hover-overlay h-100 pt-75 bg-img-cover-center rounded-lg" style={{backgroundImage: 'url("images/properties-list-18.jpg")'}}>
                                    <div className="card-img-overlay p-2 d-flex flex-column">
                                        <div>
                                        <span className="badge badge-primary">For Sale</span>
                                        </div>
                                        <div className="mt-auto d-flex hover-image">
                                        <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                            <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-images" /><span className="pl-1">9</span>
                                            </a>
                                            </li>
                                            <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-play-circle" /><span className="pl-1">2</span>
                                            </a>
                                            </li>
                                        </ul>
                                        <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                            <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="far fa-heart" />
                                            </a>
                                            </li>
                                            <li className="list-inline-item h-32  mr-3" data-toggle="tooltip" title="Compare">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="fas fa-exchange-alt" />
                                            </a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="card-body p-0">
                                    <h2 className="card-title my-0"><a href="single-property-1.html" className="fs-16 lh-2 text-dark hover-primary d-block">Explore Old Barcelona</a>
                                    </h2>
                                    <p className="card-text mb-1 font-weight-500 text-gray-light">1421 San Pedro St, Los Angeles</p>
                                    <p className="card-text mb-2 ml-0">Lorem ipsum dolor sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem sit amet, sectetur cing elit uspe ndisse suscorem</p>
                                    <p className="card-text fs-17 font-weight-bold text-heading mb-3">
                                        $1.250.000
                                    </p>
                                    </div>
                                    <div className="card-footer pt-3 bg-transparent px-0 pb-0">
                                    <ul className="list-inline d-flex mb-0 flex-wrap justify-content-between mr-n2">
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="3 Bedroom">
                                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-bedroom" />
                                        </svg>
                                        3 Br
                                        </li>
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="3 Bathrooms">
                                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-shower" />
                                        </svg>
                                        3 Ba
                                        </li>
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="Size">
                                        <svg className="icon icon-square fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-square" />
                                        </svg>
                                        2300 Sq.Ft
                                        </li>
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="1 Garage">
                                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-Garage" />
                                        </svg>
                                        1 Gr
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card mb-8 mb-lg-6 border-0" data-animate="fadeInUp">
                                <div className="row no-gutters">
                                <div className="col-md-6 mb-5 mb-md-0 pr-md-6">
                                    <div className="position-relative hover-change-image bg-hover-overlay h-100 pt-75 bg-img-cover-center rounded-lg" style={{backgroundImage: 'url("images/properties-list-19.jpg")'}}>
                                    <div className="card-img-overlay p-2 d-flex flex-column">
                                        <div>
                                        <span className="badge badge-indigo">for Rent</span>
                                        </div>
                                        <div className="mt-auto d-flex hover-image">
                                        <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                            <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-images" /><span className="pl-1">9</span>
                                            </a>
                                            </li>
                                            <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-play-circle" /><span className="pl-1">2</span>
                                            </a>
                                            </li>
                                        </ul>
                                        <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                            <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="far fa-heart" />
                                            </a>
                                            </li>
                                            <li className="list-inline-item h-32  mr-3" data-toggle="tooltip" title="Compare">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="fas fa-exchange-alt" />
                                            </a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="card-body p-0">
                                    <h2 className="card-title my-0"><a href="single-property-1.html" className="fs-16 lh-2 text-dark hover-primary d-block">Home in Metric Way</a>
                                    </h2>
                                    <p className="card-text mb-1 font-weight-500 text-gray-light">1421 San Pedro St, Los Angeles</p>
                                    <p className="card-text mb-2 ml-0">Lorem ipsum dolor sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem sit amet, sectetur cing elit uspe ndisse suscorem</p>
                                    <p className="card-text fs-17 font-weight-bold text-heading mb-3">
                                        $550
                                        <span className="fs-14 font-weight-500 text-gray-light"> /month</span>
                                    </p>
                                    </div>
                                    <div className="card-footer pt-3 bg-transparent px-0 pb-0">
                                    <ul className="list-inline d-flex mb-0 flex-wrap justify-content-between mr-n2">
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="3 Bedroom">
                                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-bedroom" />
                                        </svg>
                                        3 Br
                                        </li>
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="3 Bathrooms">
                                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-shower" />
                                        </svg>
                                        3 Ba
                                        </li>
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="Size">
                                        <svg className="icon icon-square fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-square" />
                                        </svg>
                                        2300 Sq.Ft
                                        </li>
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="1 Garage">
                                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-Garage" />
                                        </svg>
                                        1 Gr
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card mb-8 mb-lg-6 border-0" data-animate="fadeInUp">
                                <div className="row no-gutters">
                                <div className="col-md-6 mb-5 mb-md-0 pr-md-6">
                                    <div className="position-relative hover-change-image bg-hover-overlay h-100 pt-75 bg-img-cover-center rounded-lg" style={{backgroundImage: 'url("images/properties-list-20.jpg")'}}>
                                    <div className="card-img-overlay p-2 d-flex flex-column">
                                        <div>
                                        <span className="badge badge-primary">For Sale</span>
                                        </div>
                                        <div className="mt-auto d-flex hover-image">
                                        <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                            <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-images" /><span className="pl-1">9</span>
                                            </a>
                                            </li>
                                            <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-play-circle" /><span className="pl-1">2</span>
                                            </a>
                                            </li>
                                        </ul>
                                        <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                            <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="far fa-heart" />
                                            </a>
                                            </li>
                                            <li className="list-inline-item h-32  mr-3" data-toggle="tooltip" title="Compare">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="fas fa-exchange-alt" />
                                            </a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="card-body p-0">
                                    <h2 className="card-title my-0"><a href="single-property-1.html" className="fs-16 lh-2 text-dark hover-primary d-block">Home in Metric Way</a>
                                    </h2>
                                    <p className="card-text mb-1 font-weight-500 text-gray-light">1421 San Pedro St, Los Angeles</p>
                                    <p className="card-text mb-2 ml-0">Lorem ipsum dolor sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem sit amet, sectetur cing elit uspe ndisse suscorem</p>
                                    <p className="card-text fs-17 font-weight-bold text-heading mb-3">
                                        $1.250.000
                                    </p>
                                    </div>
                                    <div className="card-footer pt-3 bg-transparent px-0 pb-0">
                                    <ul className="list-inline d-flex mb-0 flex-wrap justify-content-between mr-n2">
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="3 Bedroom">
                                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-bedroom" />
                                        </svg>
                                        3 Br
                                        </li>
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="3 Bathrooms">
                                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-shower" />
                                        </svg>
                                        3 Ba
                                        </li>
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="Size">
                                        <svg className="icon icon-square fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-square" />
                                        </svg>
                                        2300 Sq.Ft
                                        </li>
                                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="1 Garage">
                                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                                            <use xlinkHref="#icon-Garage" />
                                        </svg>
                                        1 Gr
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-12">
                            <nav className="pt-2 pt-lg-4">
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
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-6 col-xxl-7 order-1 order-xl-2 primary-map map-sticky overflow-hidden" id="map-sticky">
                        <div className="primary-map-inner">
                            <div className="mapbox-gl map-grid-property-01 xl-vh-100" id="map" data-marker-target="#template-properties" data-mapbox-access-token="pk.eyJ1IjoiZHVvbmdsaCIsImEiOiJjanJnNHQ4czExMzhyNDVwdWo5bW13ZmtnIn0.f1bmXQsS6o4bzFFJc8RCcQ">
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