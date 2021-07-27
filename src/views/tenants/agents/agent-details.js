import React, {Component} from 'react'

import NavBar from 'components/shared/nav-bar'
import Footer from 'components/shared/footer'
import Preloader from 'components/preloader/preloader'

const AgentDetails = ({isLoggedIn, user}) => {
    return (
        <div>
            {/* <Preloader loading={loading} /> */}
            <NavBar isloggedIn={isLoggedIn} user={user}/>

            <main id="content">
            <section className="pb-7 page-title">
                <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb pt-6 pt-lg-0 pb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Agents</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Blanche Gordon</li>
                    </ol>
                </nav>
                </div>
            </section>
            <section className="bg-gray-01 pt-9 pb-13">
                <div className="container">
                <div className="row">
                    <div className="col-lg-4 primary-sidebar sidebar-sticky" id="sidebar">
                    <div className="primary-sidebar-inner">
                        <div className="card p-6 mb-4">
                        <div className="card-body text-center p-0">
                            <img src="images/agent-33.jpg" alt="Irene Wallace" className="mb-2" />
                            <p className="d-block fs-16 lh-214 text-dark mb-0 font-weight-500">Irene
                            Wallace</p>
                            <p className="mb-0">Sales Excutive</p>
                            <ul className="list-inline mb-2">
                            <li className="list-inline-item fs-13 text-heading font-weight-500">4.8/5</li>
                            <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                                <ul className="list-inline mb-0">
                                <li className="list-inline-item mr-0">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                </li>
                                <li className="list-inline-item mr-0">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                </li>
                                <li className="list-inline-item mr-0">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                </li>
                                <li className="list-inline-item mr-0">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                </li>
                                <li className="list-inline-item mr-0">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                </li>
                                </ul>
                            </li>
                            <li className="list-inline-item fs-13 text-gray-light">(67 reviews)</li>
                            </ul>
                        </div>
                        <div className="card-footer bg-white px-0 pt-1">
                            <ul className="list-group list-group-no-border mb-7">
                            <li className="list-group-item d-flex align-items-sm-center lh-114 row m-0 px-0 pt-3 pb-0">
                                <span className="col-3 p-0 fs-13">Office</span>
                                <span className="col-9 p-0 text-heading font-weight-500">123 900 68668</span>
                            </li>
                            <li className="list-group-item d-flex align-items-sm-center lh-114 row m-0 px-0 pt-3 pb-0">
                                <span className="col-3 p-0 fs-13">Mobile</span>
                                <span className="col-9 p-0 text-heading font-weight-500">123 900 68668</span>
                            </li>
                            <li className="list-group-item d-flex align-items-sm-center lh-114 row m-0 px-0 pt-3 pb-0">
                                <span className="col-3 p-0 fs-13">Fax</span>
                                <span className="col-9 p-0 text-heading font-weight-500">1-323 900 6800</span>
                            </li>
                            <li className="list-group-item d-flex align-items-sm-center row m-0 px-0 pt-2 pb-0">
                                <span className="col-3 p-0 fs-13">Email</span>
                                <span className="col-9 p-0">oliverbeddows@homeid.com</span>
                            </li>
                            <li className="list-group-item d-flex align-items-sm-center lh-114 row m-0 px-0 pt-3 pb-0">
                                <span className="col-3 p-0 fs-13">Social</span>
                                <ul className="col-9 list-inline text-gray-lighter m-0 p-0 z-index-2">
                                <li className="list-inline-item m-0">
                                    <a href="#" className="w-32px h-32 rounded bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-twitter" /></a>
                                </li>
                                <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-facebook-f" /></a>
                                </li>
                                <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-instagram" /></a>
                                </li>
                                <li className="list-inline-item mr-0 ml-2">
                                    <a href="#" className="w-32px h-32 rounded bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-linkedin-in" /></a>
                                </li>
                                </ul>
                            </li>
                            </ul>
                            <button type="submit" className="btn btn-primary btn-lg btn-block shadow-none">Send Message
                            </button>
                        </div>
                        </div>
                        <div className="card mb-4">
                        <div className="card-body px-6 pt-5 pb-6">
                            <h4 className="card-title fs-16 lh-2 text-dark mb-3">Search</h4>
                            <form>
                            <div className="form-group mb-2">
                                <select className="form-control border-0 shadow-none selectpicker" name="company" title="Company" data-style="btn-lg px-3">
                                <option>Google</option>
                                <option>Facebook</option>
                                </select>
                            </div>
                            <div className="form-row mb-2">
                                <div className="col-6 form-group">
                                <select className="form-control selectpicker border-0" name="language" title="Language" data-style="btn-lg rounded-lg px-3">
                                    <option>English</option>
                                    <option>France</option>
                                </select>
                                </div>
                                <div className="col-6 form-group">
                                <select className="form-control selectpicker border-0" name="region" title="Region" data-style="btn-lg rounded-lg px-3">
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
                            <div className="form-group mb-4">
                                <input type="text" className="form-control form-control-lg border-0" name="search" placeholder="Search by agent’s name..." />
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg btn-block">
                                Search
                            </button>
                            </form>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-body text-center pt-7 pb-6 px-0">
                            <img src="images/contact-widget.jpg" alt="Want to become an Estate Agent ?" />
                            <div className="text-dark mb-6 mt-n2 font-weight-500">Want to become an
                            <p className="mb-0 fs-18">Estate Agent?</p>
                            </div>
                            <a href="#" className="btn btn-primary">Register</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-8 mb-6 mb-lg-0">
                    <h2 className="fs-22 text-heading lh-15 mb-6">About me</h2>
                    <div className="card border-0 mb-10">
                        <div className="card-body py-5 px-6">
                        <h3 className="card-title text-heading fs-16 lh-213">
                            About Oliver Beddows
                        </h3>
                        <p className="lh-214 mb-6">Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit
                            tempus porttitor. Duis
                            mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                            Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet
                            rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            Cras mattis consectetur purus sit amet fermentum.</p>
                        </div>
                    </div>
                    <h2 className="fs-22 text-heading lh-15 mb-6">My listing</h2>
                    <div className="collapse-tabs mb-10">
                        <ul className="nav nav-tabs text-uppercase d-none d-md-inline-flex agent-details-tabs" role="tablist">
                        <li className="nav-item">
                            <a href="#all" className="nav-link active shadow-none fs-13" data-toggle="tab" role="tab">
                            All (8)
                            </a>
                        </li>
                        <li className="nav-item ml-0">
                            <a href="#sale" className="nav-link shadow-none fs-13" data-toggle="tab" role="tab">
                            For Sale (5)
                            </a>
                        </li>
                        <li className="nav-item ml-0">
                            <a href="#rent" className="nav-link shadow-none fs-13" data-toggle="tab" role="tab">
                            For Rent (3)
                            </a>
                        </li>
                        </ul>
                        <div className="tab-content shadow-none pt-7 pb-0 px-6 bg-white">
                        <div id="collapse-tabs-accordion-01">
                            <div className="tab-pane tab-pane-parent fade show active" id="all" role="tabpanel">
                            <div className="card border-0 bg-transparent">
                                <div className="card-header border-0 d-block d-md-none bg-transparent px-0 py-1" id="headingAll-01">
                                <h5 className="mb-0">
                                    <button className="btn lh-2 fs-18 bg-white py-1 px-6 mb-4 shadow-none w-100 collapse-parent border" data-toggle="collapse" data-target="#all-collapse-01" aria-expanded="true" aria-controls="all-collapse-01">
                                    All (8)
                                    </button>
                                </h5>
                                </div>
                                <div id="all-collapse-01" className="collapse show collapsible" aria-labelledby="headingAll-01" data-parent="#collapse-tabs-accordion-01">
                                <div className="card-body p-0">
                                    <div className="row">
                                    <div className="col-md-6 mb-7">
                                        <div className="card border-0">
                                        <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                            <img src="images/properties-grid-35.jpg" alt="Home in Metric Way" />
                                            <div className="card-img-overlay d-flex flex-column">
                                            <div className="mb-auto">
                                                <span className="badge badge-primary">For Sale</span>
                                            </div>
                                            <div className="d-flex hover-image">
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
                                                <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                                    <a href="#" className="text-white fs-20 hover-primary">
                                                    <i className="fas fa-exchange-alt" />
                                                    </a>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-3 px-0 pb-1">
                                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                                            </h2>
                                            <p className="font-weight-500 text-gray-light mb-0">
                                            1421 San Pedro St, Los Angeles</p>
                                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                            $1.250.000
                                            </p>
                                        </div>
                                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                            <ul className="list-inline mb-0">
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Br">
                                                <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-bedroom" />
                                                </svg>
                                                3 Br
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Ba">
                                                <svg className="icon icon-shower fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-shower" />
                                                </svg>
                                                3 Ba
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="2300 Sq.Ft">
                                                <svg className="icon icon-square fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-square" />
                                                </svg>
                                                2300 Sq.Ft
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-7">
                                        <div className="card border-0">
                                        <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                            <img src="images/properties-grid-36.jpg" alt="Villa on Hollywood Boulevard" />
                                            <div className="card-img-overlay d-flex flex-column">
                                            <div className="mb-auto">
                                                <span className="badge badge-indigo">for Rent</span>
                                            </div>
                                            <div className="d-flex hover-image">
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
                                                <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                                    <a href="#" className="text-white fs-20 hover-primary">
                                                    <i className="fas fa-exchange-alt" />
                                                    </a>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-3 px-0 pb-1">
                                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Villa on Hollywood Boulevard</a>
                                            </h2>
                                            <p className="font-weight-500 text-gray-light mb-0">
                                            1421 San Pedro St, Los Angeles</p>
                                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                            $550
                                            <span className="fs-14 font-weight-500 text-gray-light"> /month</span>
                                            </p>
                                        </div>
                                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                            <ul className="list-inline mb-0">
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Br">
                                                <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-bedroom" />
                                                </svg>
                                                3 Br
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Ba">
                                                <svg className="icon icon-shower fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-shower" />
                                                </svg>
                                                3 Ba
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="2300 Sq.Ft">
                                                <svg className="icon icon-square fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-square" />
                                                </svg>
                                                2300 Sq.Ft
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-7">
                                        <div className="card border-0">
                                        <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                            <img src="images/properties-grid-37.jpg" alt="Affordable Urban House" />
                                            <div className="card-img-overlay d-flex flex-column">
                                            <div className="mb-auto">
                                                <span className="badge badge-primary">For Sale</span>
                                            </div>
                                            <div className="d-flex hover-image">
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
                                                <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                                    <a href="#" className="text-white fs-20 hover-primary">
                                                    <i className="fas fa-exchange-alt" />
                                                    </a>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-3 px-0 pb-1">
                                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Affordable Urban House</a>
                                            </h2>
                                            <p className="font-weight-500 text-gray-light mb-0">
                                            1421 San Pedro St, Los Angeles</p>
                                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                            $1.250.000
                                            </p>
                                        </div>
                                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                            <ul className="list-inline mb-0">
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Br">
                                                <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-bedroom" />
                                                </svg>
                                                3 Br
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Ba">
                                                <svg className="icon icon-shower fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-shower" />
                                                </svg>
                                                3 Ba
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="2300 Sq.Ft">
                                                <svg className="icon icon-square fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-square" />
                                                </svg>
                                                2300 Sq.Ft
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-7">
                                        <div className="card border-0">
                                        <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                            <img src="images/properties-grid-73.jpg" alt="Explore Old Barcelona" />
                                            <div className="card-img-overlay d-flex flex-column">
                                            <div className="mb-auto">
                                                <span className="badge badge-primary">For Sale</span>
                                            </div>
                                            <div className="d-flex hover-image">
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
                                                <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                                    <a href="#" className="text-white fs-20 hover-primary">
                                                    <i className="fas fa-exchange-alt" />
                                                    </a>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-3 px-0 pb-1">
                                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Explore Old Barcelona</a>
                                            </h2>
                                            <p className="font-weight-500 text-gray-light mb-0">
                                            1421 San Pedro St, Los Angeles</p>
                                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                            $1.250.000
                                            </p>
                                        </div>
                                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                            <ul className="list-inline mb-0">
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Br">
                                                <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-bedroom" />
                                                </svg>
                                                3 Br
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Ba">
                                                <svg className="icon icon-shower fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-shower" />
                                                </svg>
                                                3 Ba
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="2300 Sq.Ft">
                                                <svg className="icon icon-square fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-square" />
                                                </svg>
                                                2300 Sq.Ft
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-7">
                                        <div className="card border-0">
                                        <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                            <img src="images/properties-grid-67.jpg" alt="Home in Metric Way" />
                                            <div className="card-img-overlay d-flex flex-column">
                                            <div className="mb-auto">
                                                <span className="badge badge-primary">For Sale</span>
                                            </div>
                                            <div className="d-flex hover-image">
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
                                                <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                                    <a href="#" className="text-white fs-20 hover-primary">
                                                    <i className="fas fa-exchange-alt" />
                                                    </a>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-3 px-0 pb-1">
                                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                                            </h2>
                                            <p className="font-weight-500 text-gray-light mb-0">
                                            1421 San Pedro St, Los Angeles</p>
                                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                            $1.250.000
                                            </p>
                                        </div>
                                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                            <ul className="list-inline mb-0">
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Br">
                                                <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-bedroom" />
                                                </svg>
                                                3 Br
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Ba">
                                                <svg className="icon icon-shower fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-shower" />
                                                </svg>
                                                3 Ba
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="2300 Sq.Ft">
                                                <svg className="icon icon-square fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-square" />
                                                </svg>
                                                2300 Sq.Ft
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-7">
                                        <div className="card border-0">
                                        <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                            <img src="images/properties-grid-68.jpg" alt="Garden Gingerbread House" />
                                            <div className="card-img-overlay d-flex flex-column">
                                            <div className="mb-auto">
                                                <span className="badge badge-indigo">for Rent</span>
                                            </div>
                                            <div className="d-flex hover-image">
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
                                                <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                                    <a href="#" className="text-white fs-20 hover-primary">
                                                    <i className="fas fa-exchange-alt" />
                                                    </a>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-3 px-0 pb-1">
                                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Garden Gingerbread House</a>
                                            </h2>
                                            <p className="font-weight-500 text-gray-light mb-0">
                                            1421 San Pedro St, Los Angeles</p>
                                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                            $550
                                            <span className="fs-14 font-weight-500 text-gray-light"> /month</span>
                                            </p>
                                        </div>
                                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                            <ul className="list-inline mb-0">
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Br">
                                                <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-bedroom" />
                                                </svg>
                                                3 Br
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Ba">
                                                <svg className="icon icon-shower fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-shower" />
                                                </svg>
                                                3 Ba
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="2300 Sq.Ft">
                                                <svg className="icon icon-square fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-square" />
                                                </svg>
                                                2300 Sq.Ft
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-7">
                                        <div className="card border-0">
                                        <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                            <img src="images/properties-grid-49.jpg" alt="Home in Metric Way" />
                                            <div className="card-img-overlay d-flex flex-column">
                                            <div className="mb-auto">
                                                <span className="badge badge-primary">For Sale</span>
                                            </div>
                                            <div className="d-flex hover-image">
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
                                                <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                                    <a href="#" className="text-white fs-20 hover-primary">
                                                    <i className="fas fa-exchange-alt" />
                                                    </a>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-3 px-0 pb-1">
                                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                                            </h2>
                                            <p className="font-weight-500 text-gray-light mb-0">
                                            1421 San Pedro St, Los Angeles</p>
                                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                            $550
                                            </p>
                                        </div>
                                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                            <ul className="list-inline mb-0">
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Br">
                                                <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-bedroom" />
                                                </svg>
                                                3 Br
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Ba">
                                                <svg className="icon icon-shower fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-shower" />
                                                </svg>
                                                3 Ba
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="2300 Sq.Ft">
                                                <svg className="icon icon-square fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-square" />
                                                </svg>
                                                2300 Sq.Ft
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-7">
                                        <div className="card border-0">
                                        <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                            <img src="images/properties-grid-19.jpg" alt="Home in Metric Way" />
                                            <div className="card-img-overlay d-flex flex-column">
                                            <div className="mb-auto">
                                                <span className="badge badge-primary">For Sale</span>
                                            </div>
                                            <div className="d-flex hover-image">
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
                                                <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                                    <a href="#" className="text-white fs-20 hover-primary">
                                                    <i className="fas fa-exchange-alt" />
                                                    </a>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-3 px-0 pb-1">
                                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                                            </h2>
                                            <p className="font-weight-500 text-gray-light mb-0">
                                            1421 San Pedro St, Los Angeles</p>
                                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                            $1.250.000
                                            </p>
                                        </div>
                                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                            <ul className="list-inline mb-0">
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Br">
                                                <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-bedroom" />
                                                </svg>
                                                3 Br
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Ba">
                                                <svg className="icon icon-shower fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-shower" />
                                                </svg>
                                                3 Ba
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="2300 Sq.Ft">
                                                <svg className="icon icon-square fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-square" />
                                                </svg>
                                                2300 Sq.Ft
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="tab-pane tab-pane-parent fade" id="sale" role="tabpanel">
                            <div className="card border-0 bg-transparent">
                                <div className="card-header border-0 d-block d-md-none bg-transparent p-0" id="headingSale-01">
                                <h5 className="mb-0">
                                    <button className="btn lh-2 fs-18 bg-white py-1 px-6 shadow-none w-100 collapse-parent border collapsed mb-4" data-toggle="collapse" data-target="#sale-collapse-01" aria-expanded="true" aria-controls="sale-collapse-01">
                                    For Sale (5)
                                    </button>
                                </h5>
                                </div>
                                <div id="sale-collapse-01" className="collapse collapsible" aria-labelledby="headingSale-01" data-parent="#collapse-tabs-accordion-01">
                                <div className="card-body p-0">
                                    <div className="row">
                                    <div className="col-md-6 mb-7">
                                        <div className="card border-0">
                                        <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                            <img src="images/properties-grid-35.jpg" alt="Home in Metric Way" />
                                            <div className="card-img-overlay d-flex flex-column">
                                            <div className="mb-auto">
                                                <span className="badge badge-primary">For Sale</span>
                                            </div>
                                            <div className="d-flex hover-image">
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
                                                <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                                    <a href="#" className="text-white fs-20 hover-primary">
                                                    <i className="fas fa-exchange-alt" />
                                                    </a>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-3 px-0 pb-1">
                                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                                            </h2>
                                            <p className="font-weight-500 text-gray-light mb-0">
                                            1421 San Pedro St, Los Angeles</p>
                                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                            $1.250.000
                                            </p>
                                        </div>
                                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                            <ul className="list-inline mb-0">
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Br">
                                                <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-bedroom" />
                                                </svg>
                                                3 Br
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Ba">
                                                <svg className="icon icon-shower fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-shower" />
                                                </svg>
                                                3 Ba
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="2300 Sq.Ft">
                                                <svg className="icon icon-square fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-square" />
                                                </svg>
                                                2300 Sq.Ft
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-7">
                                        <div className="card border-0">
                                        <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                            <img src="images/properties-grid-37.jpg" alt="Affordable Urban House" />
                                            <div className="card-img-overlay d-flex flex-column">
                                            <div className="mb-auto">
                                                <span className="badge badge-primary">For Sale</span>
                                            </div>
                                            <div className="d-flex hover-image">
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
                                                <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                                    <a href="#" className="text-white fs-20 hover-primary">
                                                    <i className="fas fa-exchange-alt" />
                                                    </a>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-3 px-0 pb-1">
                                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Affordable Urban House</a>
                                            </h2>
                                            <p className="font-weight-500 text-gray-light mb-0">
                                            1421 San Pedro St, Los Angeles</p>
                                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                            $1.250.000
                                            </p>
                                        </div>
                                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                            <ul className="list-inline mb-0">
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Br">
                                                <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-bedroom" />
                                                </svg>
                                                3 Br
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Ba">
                                                <svg className="icon icon-shower fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-shower" />
                                                </svg>
                                                3 Ba
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="2300 Sq.Ft">
                                                <svg className="icon icon-square fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-square" />
                                                </svg>
                                                2300 Sq.Ft
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-7">
                                        <div className="card border-0">
                                        <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                            <img src="images/properties-grid-73.jpg" alt="Explore Old Barcelona" />
                                            <div className="card-img-overlay d-flex flex-column">
                                            <div className="mb-auto">
                                                <span className="badge badge-primary">For Sale</span>
                                            </div>
                                            <div className="d-flex hover-image">
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
                                                <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                                    <a href="#" className="text-white fs-20 hover-primary">
                                                    <i className="fas fa-exchange-alt" />
                                                    </a>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-3 px-0 pb-1">
                                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Explore Old Barcelona</a>
                                            </h2>
                                            <p className="font-weight-500 text-gray-light mb-0">
                                            1421 San Pedro St, Los Angeles</p>
                                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                            $1.250.000
                                            </p>
                                        </div>
                                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                            <ul className="list-inline mb-0">
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Br">
                                                <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-bedroom" />
                                                </svg>
                                                3 Br
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Ba">
                                                <svg className="icon icon-shower fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-shower" />
                                                </svg>
                                                3 Ba
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="2300 Sq.Ft">
                                                <svg className="icon icon-square fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-square" />
                                                </svg>
                                                2300 Sq.Ft
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-7">
                                        <div className="card border-0">
                                        <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                            <img src="images/properties-grid-67.jpg" alt="Home in Metric Way" />
                                            <div className="card-img-overlay d-flex flex-column">
                                            <div className="mb-auto">
                                                <span className="badge badge-primary">For Sale</span>
                                            </div>
                                            <div className="d-flex hover-image">
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
                                                <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                                    <a href="#" className="text-white fs-20 hover-primary">
                                                    <i className="fas fa-exchange-alt" />
                                                    </a>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-3 px-0 pb-1">
                                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                                            </h2>
                                            <p className="font-weight-500 text-gray-light mb-0">
                                            1421 San Pedro St, Los Angeles</p>
                                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                            $1.250.000
                                            </p>
                                        </div>
                                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                            <ul className="list-inline mb-0">
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Br">
                                                <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-bedroom" />
                                                </svg>
                                                3 Br
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Ba">
                                                <svg className="icon icon-shower fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-shower" />
                                                </svg>
                                                3 Ba
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="2300 Sq.Ft">
                                                <svg className="icon icon-square fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-square" />
                                                </svg>
                                                2300 Sq.Ft
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-7">
                                        <div className="card border-0">
                                        <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                            <img src="images/properties-grid-49.jpg" alt="Home in Metric Way" />
                                            <div className="card-img-overlay d-flex flex-column">
                                            <div className="mb-auto">
                                                <span className="badge badge-primary">For Sale</span>
                                            </div>
                                            <div className="d-flex hover-image">
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
                                                <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                                    <a href="#" className="text-white fs-20 hover-primary">
                                                    <i className="fas fa-exchange-alt" />
                                                    </a>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-3 px-0 pb-1">
                                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                                            </h2>
                                            <p className="font-weight-500 text-gray-light mb-0">
                                            1421 San Pedro St, Los Angeles</p>
                                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                            $550
                                            </p>
                                        </div>
                                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                            <ul className="list-inline mb-0">
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Br">
                                                <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-bedroom" />
                                                </svg>
                                                3 Br
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Ba">
                                                <svg className="icon icon-shower fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-shower" />
                                                </svg>
                                                3 Ba
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="2300 Sq.Ft">
                                                <svg className="icon icon-square fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-square" />
                                                </svg>
                                                2300 Sq.Ft
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-7">
                                        <div className="card border-0">
                                        <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                            <img src="images/properties-grid-19.jpg" alt="Home in Metric Way" />
                                            <div className="card-img-overlay d-flex flex-column">
                                            <div className="mb-auto">
                                                <span className="badge badge-primary">For Sale</span>
                                            </div>
                                            <div className="d-flex hover-image">
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
                                                <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                                    <a href="#" className="text-white fs-20 hover-primary">
                                                    <i className="fas fa-exchange-alt" />
                                                    </a>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-3 px-0 pb-1">
                                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                                            </h2>
                                            <p className="font-weight-500 text-gray-light mb-0">
                                            1421 San Pedro St, Los Angeles</p>
                                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                            $1.250.000
                                            </p>
                                        </div>
                                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                            <ul className="list-inline mb-0">
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Br">
                                                <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-bedroom" />
                                                </svg>
                                                3 Br
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Ba">
                                                <svg className="icon icon-shower fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-shower" />
                                                </svg>
                                                3 Ba
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="2300 Sq.Ft">
                                                <svg className="icon icon-square fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-square" />
                                                </svg>
                                                2300 Sq.Ft
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="tab-pane tab-pane-parent fade" id="rent" role="tabpanel">
                            <div className="card border-0 bg-transparent">
                                <div className="card-header border-0 d-block d-md-none bg-transparent p-0" id="headingRent-01">
                                <h5 className="mb-0">
                                    <button className="btn lh-2 fs-18 bg-white py-1 px-6 shadow-none w-100 collapse-parent border collapsed mb-4" data-toggle="collapse" data-target="#rent-collapse-01" aria-expanded="true" aria-controls="rent-collapse-01">
                                    For Rent (3)
                                    </button>
                                </h5>
                                </div>
                                <div id="rent-collapse-01" className="collapse collapsible" aria-labelledby="headingRent-01" data-parent="#collapse-tabs-accordion-01">
                                <div className="card-body p-0">
                                    <div className="row">
                                    <div className="col-md-6 mb-7">
                                        <div className="card border-0">
                                        <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                            <img src="images/properties-grid-36.jpg" alt="Villa on Hollywood Boulevard" />
                                            <div className="card-img-overlay d-flex flex-column">
                                            <div className="mb-auto">
                                                <span className="badge badge-indigo">for Rent</span>
                                            </div>
                                            <div className="d-flex hover-image">
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
                                                <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                                    <a href="#" className="text-white fs-20 hover-primary">
                                                    <i className="fas fa-exchange-alt" />
                                                    </a>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-3 px-0 pb-1">
                                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Villa on Hollywood Boulevard</a>
                                            </h2>
                                            <p className="font-weight-500 text-gray-light mb-0">
                                            1421 San Pedro St, Los Angeles</p>
                                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                            $550
                                            <span className="fs-14 font-weight-500 text-gray-light"> /month</span>
                                            </p>
                                        </div>
                                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                            <ul className="list-inline mb-0">
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Br">
                                                <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-bedroom" />
                                                </svg>
                                                3 Br
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Ba">
                                                <svg className="icon icon-shower fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-shower" />
                                                </svg>
                                                3 Ba
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="2300 Sq.Ft">
                                                <svg className="icon icon-square fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-square" />
                                                </svg>
                                                2300 Sq.Ft
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-7">
                                        <div className="card border-0">
                                        <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                            <img src="images/properties-grid-68.jpg" alt="Garden Gingerbread House" />
                                            <div className="card-img-overlay d-flex flex-column">
                                            <div className="mb-auto">
                                                <span className="badge badge-indigo">for Rent</span>
                                            </div>
                                            <div className="d-flex hover-image">
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
                                                <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                                    <a href="#" className="text-white fs-20 hover-primary">
                                                    <i className="fas fa-exchange-alt" />
                                                    </a>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-3 px-0 pb-1">
                                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Garden Gingerbread House</a>
                                            </h2>
                                            <p className="font-weight-500 text-gray-light mb-0">
                                            1421 San Pedro St, Los Angeles</p>
                                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                            $550
                                            <span className="fs-14 font-weight-500 text-gray-light"> /month</span>
                                            </p>
                                        </div>
                                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                            <ul className="list-inline mb-0">
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Br">
                                                <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-bedroom" />
                                                </svg>
                                                3 Br
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Ba">
                                                <svg className="icon icon-shower fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-shower" />
                                                </svg>
                                                3 Ba
                                            </li>
                                            <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="2300 Sq.Ft">
                                                <svg className="icon icon-square fs-18 text-primary mr-1">
                                                <use xlinkHref="#icon-square" />
                                                </svg>
                                                2300 Sq.Ft
                                            </li>
                                            </ul>
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
                    </div>
                    <h2 className="fs-22 text-heading lh-15 mb-6">Agency Rating &amp; Reviews </h2>
                    <div className="card border-0 mb-4">
                        <div className="card-body p-6">
                        <div className="row">
                            <div className="col-sm-6 mb-6 mb-sm-0">
                            <h5 className="fs-16 lh-2 text-heading mb-6">
                                Avarage User Rating
                            </h5>
                            <p className="fs-40 text-heading font-weight-bold mb-6 lh-1">4.6 <span className="fs-18 text-gray-light font-weight-normal">/5</span></p>
                            <ul className="list-inline">
                                <li className="list-inline-item bg-warning text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                                <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item bg-warning text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                                <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item bg-warning text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                                <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item bg-warning text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                                <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item bg-gray-04 text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                                <i className="fas fa-star" />
                                </li>
                            </ul>
                            </div>
                            <div className="col-sm-6">
                            <h5 className="fs-16 lh-2 text-heading mb-5">
                                Rating Breakdown
                            </h5>
                            <div className="d-flex align-items-center mx-n1">
                                <ul className="list-inline d-flex px-1 mb-0">
                                <li className="list-inline-item text-warning mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item text-warning mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item text-warning mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item text-warning mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item text-warning mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                </ul>
                                <div className="d-block w-100 px-1">
                                <div className="progress rating-progress">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                </div>
                                <div className="text-muted px-1">60%</div>
                            </div>
                            <div className="d-flex align-items-center mx-n1">
                                <ul className="list-inline d-flex px-1 mb-0">
                                <li className="list-inline-item text-warning mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item text-warning mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item text-warning mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item text-warning mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item text-border mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                </ul>
                                <div className="d-block w-100 px-1">
                                <div className="progress rating-progress">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                </div>
                                <div className="text-muted px-1">40%</div>
                            </div>
                            <div className="d-flex align-items-center mx-n1">
                                <ul className="list-inline d-flex px-1 mb-0">
                                <li className="list-inline-item text-warning mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item text-warning mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item text-warning mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item text-border mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item text-border mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                </ul>
                                <div className="d-block w-100 px-1">
                                <div className="progress rating-progress">
                                    <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                </div>
                                <div className="text-muted px-1">0%</div>
                            </div>
                            <div className="d-flex align-items-center mx-n1">
                                <ul className="list-inline d-flex px-1 mb-0">
                                <li className="list-inline-item text-warning mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item text-warning mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item text-border mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item text-border mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item text-border mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                </ul>
                                <div className="d-block w-100 px-1">
                                <div className="progress rating-progress">
                                    <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                </div>
                                <div className="text-muted px-1">0%</div>
                            </div>
                            <div className="d-flex align-items-center mx-n1">
                                <ul className="list-inline d-flex px-1 mb-0">
                                <li className="list-inline-item text-warning mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item text-border mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item text-border mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item text-border mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                <li className="list-inline-item text-border mr-1">
                                    <i className="fas fa-star" />
                                </li>
                                </ul>
                                <div className="d-block w-100 px-1">
                                <div className="progress rating-progress">
                                    <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                </div>
                                <div className="text-muted px-1">0%</div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card border-0 mb-4">
                        <div className="card-body p-6">
                        <h3 className="fs-16 lh-2 text-heading mb-6">67 Reviews</h3>
                        <div className="media border-bottom mb-6 pb-6">
                            <img src="images/review-06.jpg" alt="Dollie Horton" className="mr-2" />
                            <div className="media-body">
                            <div className="row mb-1 align-items-center">
                                <div className="col-sm-6 mb-2 mb-sm-0">
                                <p className="mb-0 text-heading fs-16 font-weight-500">Dollie Horton</p>
                                <p className="mb-0 lh-1">San Diego</p>
                                </div>
                                <div className="col-sm-6 text-sm-right">
                                <ul className="list-inline d-flex justify-content-sm-end mb-0">
                                    <li className="list-inline-item mr-1">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                    </li>
                                    <li className="list-inline-item mr-1">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                    </li>
                                    <li className="list-inline-item mr-1">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                    </li>
                                    <li className="list-inline-item mr-1">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                    </li>
                                    <li className="list-inline-item mr-1">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                    </li>
                                </ul>
                                <p className="mb-0 text-muted">02 Dec 2016 at 2:40pm</p>
                                </div>
                            </div>
                            <p className="mb-0">Very good and fast support during the week. Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none. Solved all my problems in a pressing time! Excited to see the other themes they make!</p>
                            </div>
                        </div>
                        <div className="media border-bottom mb-6 pb-6">
                            <img src="images/review-01.jpg" alt="Dollie Horton" className="mr-2" />
                            <div className="media-body">
                            <div className="row mb-1 align-items-center">
                                <div className="col-sm-6 mb-2 mb-sm-0">
                                <p className="mb-0 text-heading fs-16 font-weight-500">Dollie Horton</p>
                                <p className="mb-0 lh-1">San Diego</p>
                                </div>
                                <div className="col-sm-6 text-sm-right">
                                <ul className="list-inline d-flex justify-content-sm-end mb-0">
                                    <li className="list-inline-item mr-1">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                    </li>
                                    <li className="list-inline-item mr-1">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                    </li>
                                    <li className="list-inline-item mr-1">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                    </li>
                                    <li className="list-inline-item mr-1">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                    </li>
                                    <li className="list-inline-item mr-1">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                    </li>
                                </ul>
                                <p className="mb-0 text-muted">02 Dec 2016 at 2:40pm</p>
                                </div>
                            </div>
                            <p className="mb-0">Very good and fast support during the week. Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none. Solved all my problems in a pressing time! Excited to see the other themes they make!</p>
                            </div>
                        </div>
                        <div className="media border-bottom mb-6 pb-6">
                            <div className="w-70px h-70 mr-2 bg-gray-01 rounded-circle fs-18 text-muted d-flex align-items-center justify-content-center">
                            DH
                            </div>
                            <div className="media-body">
                            <div className="row mb-1 align-items-center">
                                <div className="col-sm-6 mb-2 mb-sm-0">
                                <p className="mb-0 text-heading fs-16 font-weight-500">Dollie Horton</p>
                                <p className="mb-0 lh-1">San Diego</p>
                                </div>
                                <div className="col-sm-6 text-sm-right">
                                <ul className="list-inline d-flex justify-content-sm-end mb-0">
                                    <li className="list-inline-item mr-1">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                    </li>
                                    <li className="list-inline-item mr-1">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                    </li>
                                    <li className="list-inline-item mr-1">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                    </li>
                                    <li className="list-inline-item mr-1">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                    </li>
                                    <li className="list-inline-item mr-1">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                    </li>
                                </ul>
                                <p className="mb-0 text-muted">02 Dec 2016 at 2:40pm</p>
                                </div>
                            </div>
                            <p className="mb-0">Very good and fast support during the week. Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none. Solved all my problems in a pressing time! Excited to see the other themes they make!</p>
                            </div>
                        </div>
                        <div className="media  pb-6">
                            <img src="images/review-02.jpg" alt="Dollie Horton" className="mr-2" />
                            <div className="media-body">
                            <div className="row mb-1 align-items-center">
                                <div className="col-sm-6 mb-2 mb-sm-0">
                                <p className="mb-0 text-heading fs-16 font-weight-500">Dollie Horton</p>
                                <p className="mb-0 lh-1">San Diego</p>
                                </div>
                                <div className="col-sm-6 text-sm-right">
                                <ul className="list-inline d-flex justify-content-sm-end mb-0">
                                    <li className="list-inline-item mr-1">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                    </li>
                                    <li className="list-inline-item mr-1">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                    </li>
                                    <li className="list-inline-item mr-1">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                    </li>
                                    <li className="list-inline-item mr-1">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                    </li>
                                    <li className="list-inline-item mr-1">
                                    <span className="text-warning fs-12 lh-2"><i className="fas fa-star" /></span>
                                    </li>
                                </ul>
                                <p className="mb-0 text-muted">02 Dec 2016 at 2:40pm</p>
                                </div>
                            </div>
                            <p className="mb-0">Very good and fast support during the week. Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none. Solved all my problems in a pressing time! Excited to see the other themes they make!</p>
                            </div>
                        </div>
                        <a href="#" className="btn btn-lg text-heading bg-hover-light border fs-14 px-5">View more <span className="text-primary fs-15 text-primary d-inline-block ml-2">
                            <i className="fal fa-long-arrow-down" />
                            </span> </a>
                        </div>
                    </div>
                    <div className="card border-0">
                        <div className="card-body p-6">
                        <h3 className="fs-16 lh-2 text-heading mb-4">Write A Review</h3>
                        <form>
                            <div className="form-group mb-4 d-flex justify-content-start">
                            <div className="rate-input">
                                <input type="radio" id="star5" name="rate" defaultValue={5} />
                                <label htmlFor="star5" title="text" className="mb-0 mr-1 lh-1">
                                <i className="fas fa-star" />
                                </label>
                                <input type="radio" id="star4" name="rate" defaultValue={4} />
                                <label htmlFor="star4" title="text" className="mb-0 mr-1 lh-1">
                                <i className="fas fa-star" />
                                </label>
                                <input type="radio" id="star3" name="rate" defaultValue={3} />
                                <label htmlFor="star3" title="text" className="mb-0 mr-1 lh-1">
                                <i className="fas fa-star" />
                                </label>
                                <input type="radio" id="star2" name="rate" defaultValue={2} />
                                <label htmlFor="star2" title="text" className="mb-0 mr-1 lh-1">
                                <i className="fas fa-star" />
                                </label>
                                <input type="radio" id="star1" name="rate" defaultValue={1} />
                                <label htmlFor="star1" title="text" className="mb-0 mr-1 lh-1">
                                <i className="fas fa-star" />
                                </label>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group mb-4">
                                <input placeholder="Your Name" className="form-control form-control-lg border-0" type="text" name="name" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group mb-4">
                                <input type="email" placeholder="Email" name="email" className="form-control form-control-lg border-0" />
                                </div>
                            </div>
                            </div>
                            <div className="form-group mb-6">
                            <textarea className="form-control border-0" placeholder="Your Review" name="message" rows={5} defaultValue={""} />
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary px-9">Submit</button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <div className="bottom-bar-action py-2 px-4 bg-gray-01 position-fixed fixed-bottom d-block d-sm-none">
                <div className="container">
                <div className="row no-gutters mx-n2 mxw-571 mx-auto">
                    <div className="col-6 px-2">
                    <a href="#modal-messenger" data-toggle="modal" className="btn btn-primary btn-lg btn-block fs-14 px-1 py-3 h-auto lh-13">Send Message</a>
                    </div>
                    <div className="col-6 px-2">
                    <a href="tel:(+84)2388-969-888" className="btn btn-primary btn-lg btn-block fs-14 px-1 py-3 h-auto lh-13">Call</a>
                    </div>
                </div>
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
                        <label className="form-check-label fs-13" htmlFor="exampleCheck3">Egestas fringilla phasellus faucibus
                        scelerisque eleifend donec.</label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block rounded">Request Info</button>
                    </div>
                </div>
                </div>
            </div>
            </main>

            <Footer/>
        </div>
    )
    
}

export default AgentDetails;
