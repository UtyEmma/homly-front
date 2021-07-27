import React from 'react'

export default function PopularSection() {
    return (
        <section className="pt-lg-12 pt-11 pb-11">
            <div className="container container-xxl">
                <div className="row flex-lg-row flex-cloumn">
                <div className="col-lg-5 col-xxl-6">
                    <h2 className="text-heading">Popular Properties</h2>
                    <span className="heading-divider" />
                    <p className="mb-7">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                </div>
                <div className="col-lg-7 col-xxl-6">
                    <ul className="nav nav-pills mt-lg-4 justify-content-lg-end mb-lg-0 mb-6" role="tablist">
                        <li className="nav-item pl-lg-3 pr-3 pr-lg-0 mb-3">
                            <a className="pointer nav-link active fs-13 letter-spacing-087 text-secondary text-uppercase px-4 bg-gray-01 text-active-white bg-active-primary rounded-lg" id="pills-all-tab" data-toggle="pill" href="#pills-all" role="tab" aria-controls="pills-all" aria-selected="true">all</a>
                        </li>
                        <li className="nav-item pl-lg-3 pr-3 pr-lg-0 mb-3">
                            <a className="pointer nav-link fs-13 letter-spacing-087 text-secondary text-uppercase px-4 bg-gray-01 text-active-white bg-active-primary rounded-lg" id="pills-all-tab" data-toggle="pill" href="#pills-all" role="tab" aria-controls="pills-all" aria-selected="true">all</a>
                        </li>
                    </ul>
                </div>
                </div>
                <div className="tab-content p-0 shadow-none" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
                    <div className="row">
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-08.jpg" className="card-img" alt="Villa on Hollywood Boulevard" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-primary mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Villa on Hollywood Boulevard</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <i className="fa fa-bed" />
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <i className="fa fa-shower" />
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <i className="fa fa-boot" />
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-09.jpg" className="card-img" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-orange mr-2">Featured</span>
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$5.700<span className="fs-14 font-weight-500"> / year</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Home in Metric Way</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-10.jpg" className="card-img" alt="Affordable Urban House" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$550<span className="fs-14 font-weight-500"> / month</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Affordable Urban House</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-11.jpg" className="card-img" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-primary mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Home in Metric Way</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-40.jpg" className="card-img" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$550<span className="fs-14 font-weight-500"> / month</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Home in Metric Way</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-41.jpg" className="card-img" alt="Affordable Urban House" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-primary mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Affordable Urban House</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-42.jpg" className="card-img" alt="Villa on Hollywood Boulevard" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-orange mr-2">Featured</span>
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Villa on Hollywood Boulevard</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-43.jpg" className="card-img" alt="Affordable Urban House" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-indigo mr-2">For Rent</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$550<span className="fs-14 font-weight-500"> / month</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Affordable Urban House</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    </div>
                </div>
                <div className="tab-pane fade " id="pills-apartment" role="tabpanel" aria-labelledby="pills-apartment-tab">
                    <div className="row">
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-09.jpg" className="card-img" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-orange mr-2">Featured</span>
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$5.700<span className="fs-14 font-weight-500"> / year</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Home in Metric Way</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-08.jpg" className="card-img" alt="Villa on Hollywood Boulevard" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-primary mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Villa on Hollywood Boulevard</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-10.jpg" className="card-img" alt="Affordable Urban House" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$550<span className="fs-14 font-weight-500"> / month</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Affordable Urban House</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-11.jpg" className="card-img" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-primary mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Home in Metric Way</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-43.jpg" className="card-img" alt="Affordable Urban House" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-indigo mr-2">For Rent</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$550<span className="fs-14 font-weight-500"> / month</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Affordable Urban House</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-40.jpg" className="card-img" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$550<span className="fs-14 font-weight-500"> / month</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Home in Metric Way</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-41.jpg" className="card-img" alt="Affordable Urban House" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-primary mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Affordable Urban House</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-42.jpg" className="card-img" alt="Villa on Hollywood Boulevard" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-orange mr-2">Featured</span>
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Villa on Hollywood Boulevard</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    </div>
                </div>
                <div className="tab-pane fade " id="pills-house" role="tabpanel" aria-labelledby="pills-house-tab">
                    <div className="row">
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-41.jpg" className="card-img" alt="Affordable Urban House" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-primary mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Affordable Urban House</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-10.jpg" className="card-img" alt="Affordable Urban House" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$550<span className="fs-14 font-weight-500"> / month</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Affordable Urban House</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-08.jpg" className="card-img" alt="Villa on Hollywood Boulevard" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-primary mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Villa on Hollywood Boulevard</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-09.jpg" className="card-img" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-orange mr-2">Featured</span>
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$5.700<span className="fs-14 font-weight-500"> / year</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Home in Metric Way</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-11.jpg" className="card-img" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-primary mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Home in Metric Way</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-40.jpg" className="card-img" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$550<span className="fs-14 font-weight-500"> / month</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Home in Metric Way</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-42.jpg" className="card-img" alt="Villa on Hollywood Boulevard" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-orange mr-2">Featured</span>
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Villa on Hollywood Boulevard</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-43.jpg" className="card-img" alt="Affordable Urban House" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-indigo mr-2">For Rent</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$550<span className="fs-14 font-weight-500"> / month</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Affordable Urban House</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    </div>
                </div>
                <div className="tab-pane fade " id="pills-office" role="tabpanel" aria-labelledby="pills-office-tab">
                    <div className="row">
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-08.jpg" className="card-img" alt="Villa on Hollywood Boulevard" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-primary mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Villa on Hollywood Boulevard</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-09.jpg" className="card-img" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-orange mr-2">Featured</span>
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$5.700<span className="fs-14 font-weight-500"> / year</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Home in Metric Way</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-10.jpg" className="card-img" alt="Affordable Urban House" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$550<span className="fs-14 font-weight-500"> / month</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Affordable Urban House</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-40.jpg" className="card-img" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$550<span className="fs-14 font-weight-500"> / month</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Home in Metric Way</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-11.jpg" className="card-img" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-primary mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Home in Metric Way</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-41.jpg" className="card-img" alt="Affordable Urban House" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-primary mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Affordable Urban House</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-42.jpg" className="card-img" alt="Villa on Hollywood Boulevard" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-orange mr-2">Featured</span>
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Villa on Hollywood Boulevard</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-43.jpg" className="card-img" alt="Affordable Urban House" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-indigo mr-2">For Rent</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$550<span className="fs-14 font-weight-500"> / month</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Affordable Urban House</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    </div>
                </div>
                <div className="tab-pane fade " id="pills-homes" role="tabpanel" aria-labelledby="pills-homes-tab">
                    <div className="row">
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-11.jpg" className="card-img" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-primary mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Home in Metric Way</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-08.jpg" className="card-img" alt="Villa on Hollywood Boulevard" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-primary mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Villa on Hollywood Boulevard</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-09.jpg" className="card-img" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-orange mr-2">Featured</span>
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$5.700<span className="fs-14 font-weight-500"> / year</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Home in Metric Way</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-10.jpg" className="card-img" alt="Affordable Urban House" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$550<span className="fs-14 font-weight-500"> / month</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Affordable Urban House</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-40.jpg" className="card-img" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$550<span className="fs-14 font-weight-500"> / month</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Home in Metric Way</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-41.jpg" className="card-img" alt="Affordable Urban House" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-primary mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Affordable Urban House</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-43.jpg" className="card-img" alt="Affordable Urban House" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-indigo mr-2">For Rent</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$550<span className="fs-14 font-weight-500"> / month</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Affordable Urban House</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-42.jpg" className="card-img" alt="Villa on Hollywood Boulevard" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-orange mr-2">Featured</span>
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Villa on Hollywood Boulevard</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    </div>
                </div>
                <div className="tab-pane fade " id="pills-villa" role="tabpanel" aria-labelledby="pills-villa-tab">
                    <div className="row">
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-08.jpg" className="card-img" alt="Villa on Hollywood Boulevard" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-primary mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Villa on Hollywood Boulevard</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-09.jpg" className="card-img" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-orange mr-2">Featured</span>
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$5.700<span className="fs-14 font-weight-500"> / year</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Home in Metric Way</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-11.jpg" className="card-img" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-primary mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Home in Metric Way</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-10.jpg" className="card-img" alt="Affordable Urban House" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$550<span className="fs-14 font-weight-500"> / month</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Affordable Urban House</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-40.jpg" className="card-img" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$550<span className="fs-14 font-weight-500"> / month</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Home in Metric Way</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-41.jpg" className="card-img" alt="Affordable Urban House" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-primary mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Affordable Urban House</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-42.jpg" className="card-img" alt="Villa on Hollywood Boulevard" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-orange mr-2">Featured</span>
                                <span className="badge badge-indigo mr-2">For Sale</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$1.250.000</p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Villa on Hollywood Boulevard</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" data-animate="zoomIn">
                        <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                        <img src="images/properties-grid-43.jpg" className="card-img" alt="Affordable Urban House" />
                        <div className="card-img-overlay d-flex flex-column position-relative-sm">
                            <div className="d-flex">
                            <div className="mr-auto h-24 d-flex">
                                <span className="badge badge-indigo mr-2">For Rent</span>
                            </div>
                            <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Compare">
                                    <i className="fas fa-exchange-alt" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-auto px-2">
                            <p className="fs-17 font-weight-bold text-white mb-0 lh-13">$550<span className="fs-14 font-weight-500"> / month</span></p>
                            <h4 className="mt-0 mb-2 lh-1"><a href="single-property-1.html" className="fs-16 text-white">Affordable Urban House</a></h4>
                            <div className="border-top border-white-opacity-03 pt-2">
                                <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                                <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
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
                    </div>
                </div>
                </div>
                <div className="text-center">
                <a href="listing-grid-with-left-filter.html" className="btn btn-lg text-secondary btn-accent rounded-lg mt-6">See all properties
                    <i className="far fa-long-arrow-right ml-1" />
                </a>
                </div>
            </div>
        </section>
    )
}
