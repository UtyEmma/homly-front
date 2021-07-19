import React from 'react'
import Footer from 'views/layouts/footer'
import NavBar from 'views/layouts/nav-bar'

const Wishlist = ({isLoggedIn, user}) => {
    return (
        <div>
            <NavBar isloggedIn={isLoggedIn} user={user}/>

            <main id="content">
                <section classnamename="pb-4 page-title shadow">
                    <div classnamename="container">
                    <nav aria-label="breadcrumb">
                        <ol classnamename="breadcrumb pt-6 pt-lg-2 lh-15 pb-5">
                        <li classnamename="breadcrumb-item"><a href="#">Home</a></li>
                        <li classname="breadcrumb-item active" aria-current="page">Listing</li>
                        </ol>
                        <h1 classname="fs-30 lh-1 mb-0 text-heading font-weight-600">Listing Full Width Grid 3</h1>
                        <div classname="mt-6 form-search-01">
                        <form classname="form-inline mx-n1" id="accordion-5">
                            <div classname="form-group p-1">
                            <label htmlFor="location" classname="sr-only">Location</label>
                            <select classname="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker" title="Location" data-style="bg-white" id="location" name="location">
                                <option>Austin</option>
                                <option>Boston</option>
                                <option>Chicago</option>
                                <option>Denver</option>
                                <option>Los Angeles</option>
                                <option>New York</option>
                                <option>San Francisco</option>
                            </select>
                            </div>
                            <div classname="form-group p-1">
                            <label htmlFor="any-price" classname="sr-only">Any Price</label>
                            <select classname="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker" title="Any Price" data-style="bg-white" id="any-price" name="any-price">
                                <option>Hight</option>
                                <option>Low</option>
                                <option>Medium</option>
                            </select>
                            </div>
                            <div classname="form-group p-1">
                            <label htmlFor="type" classname="sr-only">Type</label>
                            <select classname="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker" title="Type" data-style="bg-white" id="type" name="type">
                                <option selected>house</option>
                                <option>hotel</option>
                                <option>motel</option>
                            </select>
                            </div>
                            <div classname="form-group p-1">
                            <label htmlFor="status" classname="sr-only">All status</label>
                            <select classname="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker" title="All status" data-style="bg-white" id="status" name="status">
                                <option>For Rent</option>
                                <option>For Sale</option>
                            </select>
                            </div>
                            <div classname="form-group p-1">
                            <label htmlFor="area" classname="sr-only">Area</label>
                            <select classname="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker" title="Area" data-style="bg-white" id="area" name="areas">
                                <option>Albany Park</option>
                                <option>Altgeld Gardens</option>
                                <option>Andersonville</option>
                                <option>Beverly</option>
                                <option>Brickel</option>
                                <option>Brooklyn</option>
                                <option>Brookside</option>
                            </select>
                            </div>
                            <div classname="form-group p-1">
                            <label htmlFor="room" classname="sr-only">Room</label>
                            <select classname="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker" title="Room" data-style="bg-white" id="room" name="room">
                                <option selected>2+ Beds</option>
                                <option>3+ Beds</option>
                            </select>
                            </div>
                            <div classname="form-group p-1">
                            <a href="#advanced-search-filters-5" classname="btn bg-transparent border-0 shadow-xxs-1 text-gray-light" data-toggle="collapse" data-target="#advanced-search-filters-5" aria-expanded="true" aria-controls="advanced-search-filters-5">
                                <span>More</span>
                                <span classname="ml-auto">...</span>
                            </a>
                            </div>
                            <div id="advanced-search-filters-5" classname="row pt-2 collapse p-1 w-100" data-parent="#accordion-5">
                            <div classname="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div classname="custom-control custom-checkbox">
                                <input type="checkbox" classname="custom-control-input" name="features[]" id="check1-5" />
                                <label classname="custom-control-label justify-content-start" htmlFor="check1-5">Air
                                    Conditioning</label>
                                </div>
                            </div>
                            <div classname="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div classname="custom-control custom-checkbox">
                                <input type="checkbox" classname="custom-control-input" name="features[]" id="check2-5" />
                                <label classname="custom-control-label justify-content-start" htmlFor="check2-5">Laundry</label>
                                </div>
                            </div>
                            <div classname="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div classname="custom-control custom-checkbox">
                                <input type="checkbox" classname="custom-control-input" name="features[]" id="check4-5" />
                                <label classname="custom-control-label justify-content-start" htmlFor="check4-5">Washer</label>
                                </div>
                            </div>
                            <div classname="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div classname="custom-control custom-checkbox">
                                <input type="checkbox" classname="custom-control-input" name="features[]" id="check5-5" />
                                <label classname="custom-control-label justify-content-start" htmlFor="check5-5">Barbeque</label>
                                </div>
                            </div>
                            <div classname="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div classname="custom-control custom-checkbox">
                                <input type="checkbox" classname="custom-control-input" name="features[]" id="check6-5" />
                                <label classname="custom-control-label justify-content-start" htmlFor="check6-5">Lawn</label>
                                </div>
                            </div>
                            <div classname="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div classname="custom-control custom-checkbox">
                                <input type="checkbox" classname="custom-control-input" name="features[]" id="check7-5" />
                                <label classname="custom-control-label justify-content-start" htmlFor="check7-5">Sauna</label>
                                </div>
                            </div>
                            <div classname="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div classname="custom-control custom-checkbox">
                                <input type="checkbox" classname="custom-control-input" name="features[]" id="check8-5" />
                                <label classname="custom-control-label justify-content-start" htmlFor="check8-5">WiFi</label>
                                </div>
                            </div>
                            <div classname="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div classname="custom-control custom-checkbox">
                                <input type="checkbox" classname="custom-control-input" name="features[]" id="check9-5" />
                                <label classname="custom-control-label justify-content-start" htmlFor="check9-5">Dryer</label>
                                </div>
                            </div>
                            <div classname="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div classname="custom-control custom-checkbox">
                                <input type="checkbox" classname="custom-control-input" name="features[]" id="check10-5" />
                                <label classname="custom-control-label justify-content-start" htmlFor="check10-5">Microwave</label>
                                </div>
                            </div>
                            <div classname="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div classname="custom-control custom-checkbox">
                                <input type="checkbox" classname="custom-control-input" name="features[]" id="check11-5" />
                                <label classname="custom-control-label justify-content-start" htmlFor="check11-5">Swimming
                                    Pool</label>
                                </div>
                            </div>
                            <div classname="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div classname="custom-control custom-checkbox">
                                <input type="checkbox" classname="custom-control-input" name="features[]" id="check12-5" />
                                <label classname="custom-control-label justify-content-start" htmlFor="check12-5">Window
                                    Coverings</label>
                                </div>
                            </div>
                            <div classname="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div classname="custom-control custom-checkbox">
                                <input type="checkbox" classname="custom-control-input" name="features[]" id="check13-5" />
                                <label classname="custom-control-label justify-content-start" htmlFor="check13-5">Gym</label>
                                </div>
                            </div>
                            <div classname="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div classname="custom-control custom-checkbox">
                                <input type="checkbox" classname="custom-control-input" name="features[]" id="check14-5" />
                                <label classname="custom-control-label justify-content-start" htmlFor="check14-5">Outdoor
                                    Shower</label>
                                </div>
                            </div>
                            <div classname="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div classname="custom-control custom-checkbox">
                                <input type="checkbox" classname="custom-control-input" name="features[]" id="check15-5" />
                                <label classname="custom-control-label justify-content-start" htmlFor="check15-5">TV
                                    Cable</label>
                                </div>
                            </div>
                            <div classname="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div classname="custom-control custom-checkbox">
                                <input type="checkbox" classname="custom-control-input" name="features[]" id="check16-5" />
                                <label classname="custom-control-label justify-content-start" htmlFor="check16-5">Refrigerator</label>
                                </div>
                            </div>
                            </div>
                        </form>
                        </div>
                    </nav>
                    </div>
                </section>
                <section classname="py-6">
                    <div classname="container">
                    <div classname="row align-items-sm-center">
                        <div classname="col-md-6">
                        <h2 classname="fs-15 text-dark mb-0">We found <span classname="text-primary">45</span> properties
                            available for
                            you
                        </h2>
                        </div>
                        <div classname="col-md-6 mt-6 mt-md-0">
                        <div classname="d-flex justify-content-md-end align-items-center">
                            <div classname="input-group border rounded input-group-lg w-auto bg-white mr-3">
                            <label classname="input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3" htmlFor="inputGroupSelect01"><i classname="fas fa-align-left fs-16 pr-2" />Sortby:</label>
                            <select classname="form-control border-0 bg-transparent shadow-none p-0 selectpicker sortby" data-style="bg-transparent border-0 font-weight-600 btn-lg pl-0 pr-3" id="inputGroupSelect01" name="sortby">
                                <option selected>Top Selling</option>
                                <option value={1}>Most Viewed</option>
                                <option value={2}>Price(low to high)</option>
                                <option value={3}>Price(high to low)</option>
                            </select>
                            </div>
                            <div classname="d-none d-md-block">
                            <a classname="fs-sm-18 text-dark opacity-2" href="listing-full-width-list.html">
                                <i classname="fas fa-list" />
                            </a>
                            <a classname="fs-sm-18 text-dark ml-5" href="#">
                                <i classname="fa fa-th-large" />
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                <section classname="pb-10">
                    <div classname="container">
                    <div classname="row">
                        <div classname="col-lg-4 col-md-6 pb-6">
                        <div classname="card shadow-hover-xs-4" data-animate="fadeInUp">
                            <div classname="card-header bg-transparent px-4 pt-4 pb-3">
                            <h2 classname="fs-16 lh-2 mb-0">
                                <a href="single-property-1.html" classname="text-dark hover-primary">Home in Metric Way</a>
                            </h2>
                            <p classname="font-weight-500 text-gray-light mb-3">1421 San Pedro St, Los Angeles</p>
                            <div classname="position-relative d-block rounded-lg hover-change-image bg-hover-overlay card-img">
                                <img src="images/properties-grid-31.jpg" alt="Home in Metric Way" />
                                <div classname="card-img-overlay d-flex flex-column">
                                <div><span classname="badge badge-orange">Featured</span></div>
                                <div classname="mt-auto d-flex hover-image">
                                    <ul classname="list-inline mb-0 d-flex align-items-end mr-auto">
                                    <li classname="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                        <a href="#" classname="text-white hover-primary">
                                        <i classname="far fa-images" /><span classname="pl-1">9</span>
                                        </a>
                                    </li>
                                    <li classname="list-inline-item" data-toggle="tooltip" title="2 Video">
                                        <a href="#" classname="text-white hover-primary">
                                        <i classname="far fa-play-circle" /><span classname="pl-1">2</span>
                                        </a>
                                    </li>
                                    </ul>
                                    <ul classname="list-inline mb-0 d-flex align-items-end mr-n3">
                                    <li classname="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                        <a href="#" classname="text-white fs-20 hover-primary">
                                        <i classname="far fa-heart" />
                                        </a>
                                    </li>
                                    <li classname="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                        <a href="#" classname="text-white fs-20 hover-primary">
                                        <i classname="fas fa-exchange-alt" />
                                        </a>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div classname="d-flex justify-content-between align-items-center pt-3">
                                <p classname="fs-17 font-weight-bold text-heading mb-0 lh-1">
                                $1.250.000
                                </p>
                                <span classname="badge badge-primary">For Sale</span>
                            </div>
                            </div>
                            <div classname="card-body py-2">
                            <p classname="mb-0">Lorem ipsum dolor sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem</p>
                            </div>
                            <div classname="card-footer bg-transparent pt-3 pb-4 pb-3">
                            <ul classname="list-inline d-flex mb-0 flex-wrap mr-n5">
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                <svg classname="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                </svg>
                                3 Br
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                                <svg classname="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                </svg>
                                3 Ba
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                                <svg classname="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                </svg>
                                2300 Sq.Ft
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                                <svg classname="icon icon-Garage fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-Garage" />
                                </svg>
                                1 Gr
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div classname="col-lg-4 col-md-6 pb-6">
                        <div classname="card shadow-hover-xs-4" data-animate="fadeInUp">
                            <div classname="card-header bg-transparent px-4 pt-4 pb-3">
                            <h2 classname="fs-16 lh-2 mb-0">
                                <a href="single-property-1.html" classname="text-dark hover-primary">Home in Metric Way</a>
                            </h2>
                            <p classname="font-weight-500 text-gray-light mb-3">1421 San Pedro St, Los Angeles</p>
                            <div classname="position-relative d-block rounded-lg hover-change-image bg-hover-overlay card-img">
                                <img src="images/properties-grid-32.jpg" alt="Home in Metric Way" />
                                <div classname="card-img-overlay d-flex flex-column">
                                <div classname="mt-auto d-flex hover-image">
                                    <ul classname="list-inline mb-0 d-flex align-items-end mr-auto">
                                    <li classname="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                        <a href="#" classname="text-white hover-primary">
                                        <i classname="far fa-images" /><span classname="pl-1">9</span>
                                        </a>
                                    </li>
                                    <li classname="list-inline-item" data-toggle="tooltip" title="2 Video">
                                        <a href="#" classname="text-white hover-primary">
                                        <i classname="far fa-play-circle" /><span classname="pl-1">2</span>
                                        </a>
                                    </li>
                                    </ul>
                                    <ul classname="list-inline mb-0 d-flex align-items-end mr-n3">
                                    <li classname="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                        <a href="#" classname="text-white fs-20 hover-primary">
                                        <i classname="far fa-heart" />
                                        </a>
                                    </li>
                                    <li classname="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                        <a href="#" classname="text-white fs-20 hover-primary">
                                        <i classname="fas fa-exchange-alt" />
                                        </a>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div classname="d-flex justify-content-between align-items-center pt-3">
                                <p classname="fs-17 font-weight-bold text-heading mb-0 lh-1">
                                $1.250.000
                                </p>
                                <span classname="badge badge-primary">For Sale</span>
                            </div>
                            </div>
                            <div classname="card-body py-2">
                            <p classname="mb-0">Lorem ipsum dolor sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem</p>
                            </div>
                            <div classname="card-footer bg-transparent pt-3 pb-4 pb-3">
                            <ul classname="list-inline d-flex mb-0 flex-wrap mr-n5">
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                <svg classname="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                </svg>
                                3 Br
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                                <svg classname="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                </svg>
                                3 Ba
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                                <svg classname="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                </svg>
                                2300 Sq.Ft
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                                <svg classname="icon icon-Garage fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-Garage" />
                                </svg>
                                1 Gr
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div classname="col-lg-4 col-md-6 pb-6">
                        <div classname="card shadow-hover-xs-4" data-animate="fadeInUp">
                            <div classname="card-header bg-transparent px-4 pt-4 pb-3">
                            <h2 classname="fs-16 lh-2 mb-0">
                                <a href="single-property-1.html" classname="text-dark hover-primary">Home in Metric Way</a>
                            </h2>
                            <p classname="font-weight-500 text-gray-light mb-3">1421 San Pedro St, Los Angeles</p>
                            <div classname="position-relative d-block rounded-lg hover-change-image bg-hover-overlay card-img">
                                <img src="images/properties-grid-33.jpg" alt="Home in Metric Way" />
                                <div classname="card-img-overlay d-flex flex-column">
                                <div><span classname="badge badge-orange">Featured</span></div>
                                <div classname="mt-auto d-flex hover-image">
                                    <ul classname="list-inline mb-0 d-flex align-items-end mr-auto">
                                    <li classname="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                        <a href="#" classname="text-white hover-primary">
                                        <i classname="far fa-images" /><span classname="pl-1">9</span>
                                        </a>
                                    </li>
                                    <li classname="list-inline-item" data-toggle="tooltip" title="2 Video">
                                        <a href="#" classname="text-white hover-primary">
                                        <i classname="far fa-play-circle" /><span classname="pl-1">2</span>
                                        </a>
                                    </li>
                                    </ul>
                                    <ul classname="list-inline mb-0 d-flex align-items-end mr-n3">
                                    <li classname="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                        <a href="#" classname="text-white fs-20 hover-primary">
                                        <i classname="far fa-heart" />
                                        </a>
                                    </li>
                                    <li classname="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                        <a href="#" classname="text-white fs-20 hover-primary">
                                        <i classname="fas fa-exchange-alt" />
                                        </a>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div classname="d-flex justify-content-between align-items-center pt-3">
                                <p classname="fs-17 font-weight-bold text-heading mb-0 lh-1">
                                $5.700
                                <span classname="text-gray-light font-weight-500 fs-14"> / year</span>
                                </p>
                                <span classname="badge badge-indigo">for Rent</span>
                            </div>
                            </div>
                            <div classname="card-body py-2">
                            <p classname="mb-0">Lorem ipsum dolor sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem</p>
                            </div>
                            <div classname="card-footer bg-transparent pt-3 pb-4 pb-3">
                            <ul classname="list-inline d-flex mb-0 flex-wrap mr-n5">
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                <svg classname="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                </svg>
                                3 Br
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                                <svg classname="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                </svg>
                                3 Ba
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                                <svg classname="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                </svg>
                                2300 Sq.Ft
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                                <svg classname="icon icon-Garage fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-Garage" />
                                </svg>
                                1 Gr
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div classname="col-lg-4 col-md-6 pb-6">
                        <div classname="card shadow-hover-xs-4" data-animate="fadeInUp">
                            <div classname="card-header bg-transparent px-4 pt-4 pb-3">
                            <h2 classname="fs-16 lh-2 mb-0">
                                <a href="single-property-1.html" classname="text-dark hover-primary">Home in Metric Way</a>
                            </h2>
                            <p classname="font-weight-500 text-gray-light mb-3">1421 San Pedro St, Los Angeles</p>
                            <div classname="position-relative d-block rounded-lg hover-change-image bg-hover-overlay card-img">
                                <img src="images/properties-grid-59.jpg" alt="Home in Metric Way" />
                                <div classname="card-img-overlay d-flex flex-column">
                                <div classname="mt-auto d-flex hover-image">
                                    <ul classname="list-inline mb-0 d-flex align-items-end mr-auto">
                                    <li classname="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                        <a href="#" classname="text-white hover-primary">
                                        <i classname="far fa-images" /><span classname="pl-1">9</span>
                                        </a>
                                    </li>
                                    <li classname="list-inline-item" data-toggle="tooltip" title="2 Video">
                                        <a href="#" classname="text-white hover-primary">
                                        <i classname="far fa-play-circle" /><span classname="pl-1">2</span>
                                        </a>
                                    </li>
                                    </ul>
                                    <ul classname="list-inline mb-0 d-flex align-items-end mr-n3">
                                    <li classname="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                        <a href="#" classname="text-white fs-20 hover-primary">
                                        <i classname="far fa-heart" />
                                        </a>
                                    </li>
                                    <li classname="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                        <a href="#" classname="text-white fs-20 hover-primary">
                                        <i classname="fas fa-exchange-alt" />
                                        </a>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div classname="d-flex justify-content-between align-items-center pt-3">
                                <p classname="fs-17 font-weight-bold text-heading mb-0 lh-1">
                                $5.700
                                <span classname="text-gray-light font-weight-500 fs-14"> / year</span>
                                </p>
                                <span classname="badge badge-indigo">for Rent</span>
                            </div>
                            </div>
                            <div classname="card-body py-2">
                            <p classname="mb-0">Lorem ipsum dolor sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem</p>
                            </div>
                            <div classname="card-footer bg-transparent pt-3 pb-4 pb-3">
                            <ul classname="list-inline d-flex mb-0 flex-wrap mr-n5">
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                <svg classname="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                </svg>
                                3 Br
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                                <svg classname="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                </svg>
                                3 Ba
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                                <svg classname="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                </svg>
                                2300 Sq.Ft
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                                <svg classname="icon icon-Garage fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-Garage" />
                                </svg>
                                1 Gr
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div classname="col-lg-4 col-md-6 pb-6">
                        <div classname="card shadow-hover-xs-4" data-animate="fadeInUp">
                            <div classname="card-header bg-transparent px-4 pt-4 pb-3">
                            <h2 classname="fs-16 lh-2 mb-0">
                                <a href="single-property-1.html" classname="text-dark hover-primary">Home in Metric Way</a>
                            </h2>
                            <p classname="font-weight-500 text-gray-light mb-3">1421 San Pedro St, Los Angeles</p>
                            <div classname="position-relative d-block rounded-lg hover-change-image bg-hover-overlay card-img">
                                <img src="images/properties-grid-60.jpg" alt="Home in Metric Way" />
                                <div classname="card-img-overlay d-flex flex-column">
                                <div classname="mt-auto d-flex hover-image">
                                    <ul classname="list-inline mb-0 d-flex align-items-end mr-auto">
                                    <li classname="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                        <a href="#" classname="text-white hover-primary">
                                        <i classname="far fa-images" /><span classname="pl-1">9</span>
                                        </a>
                                    </li>
                                    <li classname="list-inline-item" data-toggle="tooltip" title="2 Video">
                                        <a href="#" classname="text-white hover-primary">
                                        <i classname="far fa-play-circle" /><span classname="pl-1">2</span>
                                        </a>
                                    </li>
                                    </ul>
                                    <ul classname="list-inline mb-0 d-flex align-items-end mr-n3">
                                    <li classname="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                        <a href="#" classname="text-white fs-20 hover-primary">
                                        <i classname="far fa-heart" />
                                        </a>
                                    </li>
                                    <li classname="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                        <a href="#" classname="text-white fs-20 hover-primary">
                                        <i classname="fas fa-exchange-alt" />
                                        </a>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div classname="d-flex justify-content-between align-items-center pt-3">
                                <p classname="fs-17 font-weight-bold text-heading mb-0 lh-1">
                                $1.250.000
                                </p>
                                <span classname="badge badge-primary">For Sale</span>
                            </div>
                            </div>
                            <div classname="card-body py-2">
                            <p classname="mb-0">Lorem ipsum dolor sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem</p>
                            </div>
                            <div classname="card-footer bg-transparent pt-3 pb-4 pb-3">
                            <ul classname="list-inline d-flex mb-0 flex-wrap mr-n5">
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                <svg classname="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                </svg>
                                3 Br
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                                <svg classname="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                </svg>
                                3 Ba
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                                <svg classname="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                </svg>
                                2300 Sq.Ft
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                                <svg classname="icon icon-Garage fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-Garage" />
                                </svg>
                                1 Gr
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div classname="col-lg-4 col-md-6 pb-6">
                        <div classname="card shadow-hover-xs-4" data-animate="fadeInUp">
                            <div classname="card-header bg-transparent px-4 pt-4 pb-3">
                            <h2 classname="fs-16 lh-2 mb-0">
                                <a href="single-property-1.html" classname="text-dark hover-primary">Home in Metric Way</a>
                            </h2>
                            <p classname="font-weight-500 text-gray-light mb-3">1421 San Pedro St, Los Angeles</p>
                            <div classname="position-relative d-block rounded-lg hover-change-image bg-hover-overlay card-img">
                                <img src="images/properties-grid-61.jpg" alt="Home in Metric Way" />
                                <div classname="card-img-overlay d-flex flex-column">
                                <div><span classname="badge badge-orange">Featured</span></div>
                                <div classname="mt-auto d-flex hover-image">
                                    <ul classname="list-inline mb-0 d-flex align-items-end mr-auto">
                                    <li classname="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                        <a href="#" classname="text-white hover-primary">
                                        <i classname="far fa-images" /><span classname="pl-1">9</span>
                                        </a>
                                    </li>
                                    <li classname="list-inline-item" data-toggle="tooltip" title="2 Video">
                                        <a href="#" classname="text-white hover-primary">
                                        <i classname="far fa-play-circle" /><span classname="pl-1">2</span>
                                        </a>
                                    </li>
                                    </ul>
                                    <ul classname="list-inline mb-0 d-flex align-items-end mr-n3">
                                    <li classname="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                        <a href="#" classname="text-white fs-20 hover-primary">
                                        <i classname="far fa-heart" />
                                        </a>
                                    </li>
                                    <li classname="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                        <a href="#" classname="text-white fs-20 hover-primary">
                                        <i classname="fas fa-exchange-alt" />
                                        </a>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div classname="d-flex justify-content-between align-items-center pt-3">
                                <p classname="fs-17 font-weight-bold text-heading mb-0 lh-1">
                                $1.250.000
                                </p>
                                <span classname="badge badge-primary">For Sale</span>
                            </div>
                            </div>
                            <div classname="card-body py-2">
                            <p classname="mb-0">Lorem ipsum dolor sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem</p>
                            </div>
                            <div classname="card-footer bg-transparent pt-3 pb-4 pb-3">
                            <ul classname="list-inline d-flex mb-0 flex-wrap mr-n5">
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                <svg classname="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                </svg>
                                3 Br
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                                <svg classname="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                </svg>
                                3 Ba
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                                <svg classname="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                </svg>
                                2300 Sq.Ft
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                                <svg classname="icon icon-Garage fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-Garage" />
                                </svg>
                                1 Gr
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div classname="col-lg-4 col-md-6 pb-6">
                        <div classname="card shadow-hover-xs-4" data-animate="fadeInUp">
                            <div classname="card-header bg-transparent px-4 pt-4 pb-3">
                            <h2 classname="fs-16 lh-2 mb-0">
                                <a href="single-property-1.html" classname="text-dark hover-primary">Home in Metric Way</a>
                            </h2>
                            <p classname="font-weight-500 text-gray-light mb-3">1421 San Pedro St, Los Angeles</p>
                            <div classname="position-relative d-block rounded-lg hover-change-image bg-hover-overlay card-img">
                                <img src="images/properties-grid-62.jpg" alt="Home in Metric Way" />
                                <div classname="card-img-overlay d-flex flex-column">
                                <div><span classname="badge badge-orange">Featured</span></div>
                                <div classname="mt-auto d-flex hover-image">
                                    <ul classname="list-inline mb-0 d-flex align-items-end mr-auto">
                                    <li classname="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                        <a href="#" classname="text-white hover-primary">
                                        <i classname="far fa-images" /><span classname="pl-1">9</span>
                                        </a>
                                    </li>
                                    <li classname="list-inline-item" data-toggle="tooltip" title="2 Video">
                                        <a href="#" classname="text-white hover-primary">
                                        <i classname="far fa-play-circle" /><span classname="pl-1">2</span>
                                        </a>
                                    </li>
                                    </ul>
                                    <ul classname="list-inline mb-0 d-flex align-items-end mr-n3">
                                    <li classname="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                        <a href="#" classname="text-white fs-20 hover-primary">
                                        <i classname="far fa-heart" />
                                        </a>
                                    </li>
                                    <li classname="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                        <a href="#" classname="text-white fs-20 hover-primary">
                                        <i classname="fas fa-exchange-alt" />
                                        </a>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div classname="d-flex justify-content-between align-items-center pt-3">
                                <p classname="fs-17 font-weight-bold text-heading mb-0 lh-1">
                                $1.250.000
                                </p>
                                <span classname="badge badge-primary">For Sale</span>
                            </div>
                            </div>
                            <div classname="card-body py-2">
                            <p classname="mb-0">Lorem ipsum dolor sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem</p>
                            </div>
                            <div classname="card-footer bg-transparent pt-3 pb-4 pb-3">
                            <ul classname="list-inline d-flex mb-0 flex-wrap mr-n5">
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                <svg classname="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                </svg>
                                3 Br
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                                <svg classname="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                </svg>
                                3 Ba
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                                <svg classname="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                </svg>
                                2300 Sq.Ft
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                                <svg classname="icon icon-Garage fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-Garage" />
                                </svg>
                                1 Gr
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div classname="col-lg-4 col-md-6 pb-6">
                        <div classname="card shadow-hover-xs-4" data-animate="fadeInUp">
                            <div classname="card-header bg-transparent px-4 pt-4 pb-3">
                            <h2 classname="fs-16 lh-2 mb-0">
                                <a href="single-property-1.html" classname="text-dark hover-primary">Home in Metric Way</a>
                            </h2>
                            <p classname="font-weight-500 text-gray-light mb-3">1421 San Pedro St, Los Angeles</p>
                            <div classname="position-relative d-block rounded-lg hover-change-image bg-hover-overlay card-img">
                                <img src="images/properties-grid-63.jpg" alt="Home in Metric Way" />
                                <div classname="card-img-overlay d-flex flex-column">
                                <div><span classname="badge badge-orange">Featured</span></div>
                                <div classname="mt-auto d-flex hover-image">
                                    <ul classname="list-inline mb-0 d-flex align-items-end mr-auto">
                                    <li classname="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                        <a href="#" classname="text-white hover-primary">
                                        <i classname="far fa-images" /><span classname="pl-1">9</span>
                                        </a>
                                    </li>
                                    <li classname="list-inline-item" data-toggle="tooltip" title="2 Video">
                                        <a href="#" classname="text-white hover-primary">
                                        <i classname="far fa-play-circle" /><span classname="pl-1">2</span>
                                        </a>
                                    </li>
                                    </ul>
                                    <ul classname="list-inline mb-0 d-flex align-items-end mr-n3">
                                    <li classname="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                        <a href="#" classname="text-white fs-20 hover-primary">
                                        <i classname="far fa-heart" />
                                        </a>
                                    </li>
                                    <li classname="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                        <a href="#" classname="text-white fs-20 hover-primary">
                                        <i classname="fas fa-exchange-alt" />
                                        </a>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div classname="d-flex justify-content-between align-items-center pt-3">
                                <p classname="fs-17 font-weight-bold text-heading mb-0 lh-1">
                                $1.250.000
                                </p>
                                <span classname="badge badge-primary">For Sale</span>
                            </div>
                            </div>
                            <div classname="card-body py-2">
                            <p classname="mb-0">Lorem ipsum dolor sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem</p>
                            </div>
                            <div classname="card-footer bg-transparent pt-3 pb-4 pb-3">
                            <ul classname="list-inline d-flex mb-0 flex-wrap mr-n5">
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                <svg classname="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                </svg>
                                3 Br
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                                <svg classname="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                </svg>
                                3 Ba
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                                <svg classname="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                </svg>
                                2300 Sq.Ft
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                                <svg classname="icon icon-Garage fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-Garage" />
                                </svg>
                                1 Gr
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div classname="col-lg-4 col-md-6 pb-6">
                        <div classname="card shadow-hover-xs-4" data-animate="fadeInUp">
                            <div classname="card-header bg-transparent px-4 pt-4 pb-3">
                            <h2 classname="fs-16 lh-2 mb-0">
                                <a href="single-property-1.html" classname="text-dark hover-primary">Home in Metric Way</a>
                            </h2>
                            <p classname="font-weight-500 text-gray-light mb-3">1421 San Pedro St, Los Angeles</p>
                            <div classname="position-relative d-block rounded-lg hover-change-image bg-hover-overlay card-img">
                                <img src="images/properties-grid-64.jpg" alt="Home in Metric Way" />
                                <div classname="card-img-overlay d-flex flex-column">
                                <div classname="mt-auto d-flex hover-image">
                                    <ul classname="list-inline mb-0 d-flex align-items-end mr-auto">
                                    <li classname="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                        <a href="#" classname="text-white hover-primary">
                                        <i classname="far fa-images" /><span classname="pl-1">9</span>
                                        </a>
                                    </li>
                                    <li classname="list-inline-item" data-toggle="tooltip" title="2 Video">
                                        <a href="#" classname="text-white hover-primary">
                                        <i classname="far fa-play-circle" /><span classname="pl-1">2</span>
                                        </a>
                                    </li>
                                    </ul>
                                    <ul classname="list-inline mb-0 d-flex align-items-end mr-n3">
                                    <li classname="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                        <a href="#" classname="text-white fs-20 hover-primary">
                                        <i classname="far fa-heart" />
                                        </a>
                                    </li>
                                    <li classname="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                        <a href="#" classname="text-white fs-20 hover-primary">
                                        <i classname="fas fa-exchange-alt" />
                                        </a>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div classname="d-flex justify-content-between align-items-center pt-3">
                                <p classname="fs-17 font-weight-bold text-heading mb-0 lh-1">
                                $5.700
                                <span classname="text-gray-light font-weight-500 fs-14"> / year</span>
                                </p>
                                <span classname="badge badge-indigo">for Rent</span>
                            </div>
                            </div>
                            <div classname="card-body py-2">
                            <p classname="mb-0">Lorem ipsum dolor sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem sit amet, sectetur cing elit uspe ndisse suscorem ipsum dolor sitorem</p>
                            </div>
                            <div classname="card-footer bg-transparent pt-3 pb-4 pb-3">
                            <ul classname="list-inline d-flex mb-0 flex-wrap mr-n5">
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                <svg classname="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                </svg>
                                3 Br
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                                <svg classname="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                </svg>
                                3 Ba
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                                <svg classname="icon icon-square fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-square" />
                                </svg>
                                2300 Sq.Ft
                                </li>
                                <li classname="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                                <svg classname="icon icon-Garage fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-Garage" />
                                </svg>
                                1 Gr
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <nav classname="pt-4">
                        <ul classname="pagination rounded-active justify-content-center mb-0">
                        <li classname="page-item"><a classname="page-link" href="#"><i classname="far fa-angle-double-left" /></a>
                        </li>
                        <li classname="page-item"><a classname="page-link" href="#">1</a></li>
                        <li classname="page-item active"><a classname="page-link" href="#">2</a></li>
                        <li classname="page-item d-none d-sm-block"><a classname="page-link" href="#">3</a></li>
                        <li classname="page-item">...</li>
                        <li classname="page-item"><a classname="page-link" href="#">6</a></li>
                        <li classname="page-item"><a classname="page-link" href="#"><i classname="far fa-angle-double-right" /></a></li>
                        </ul>
                    </nav>
                    </div>
                </section>
                <div id="compare" classname="compare">
                    <button classname="btn shadow btn-open bg-white bg-hover-accent text-secondary rounded-right-0 d-flex justify-content-center align-items-center w-30px h-140 p-0">
                    </button>
                    <div classname="list-group list-group-no-border bg-dark py-3">
                    <a href="#" classname="list-group-item bg-transparent text-white fs-22 text-center py-0">
                        <i classname="far fa-bars" />
                    </a>
                    <div classname="list-group-item card bg-transparent">
                        <div classname="position-relative hover-change-image bg-hover-overlay">
                        <img src="images/compare-01.jpg" classname="card-img" alt="properties" />
                        <div classname="card-img-overlay">
                            <a href="#" classname="text-white hover-image fs-16 lh-1 pos-fixed-top-right position-absolute m-2"><i classname="fal fa-minus-circle" /></a>
                        </div>
                        </div>
                    </div>
                    <div classname="list-group-item card bg-transparent">
                        <div classname="position-relative hover-change-image bg-hover-overlay">
                        <img src="images/compare-02.jpg" classname="card-img" alt="properties" />
                        <div classname="card-img-overlay">
                            <a href="#" classname="text-white hover-image fs-16 lh-1 pos-fixed-top-right position-absolute m-2"><i classname="fal fa-minus-circle" /></a>
                        </div>
                        </div>
                    </div>
                    <div classname="list-group-item card card bg-transparent">
                        <div classname="position-relative hover-change-image bg-hover-overlay ">
                        <img src="images/compare-03.jpg" classname="card-img" alt="properties" />
                        <div classname="card-img-overlay">
                            <a href="#" classname="text-white hover-image fs-16 lh-1 pos-fixed-top-right position-absolute m-2"><i classname="fal fa-minus-circle" /></a>
                        </div>
                        </div>
                    </div>
                    <div classname="list-group-item bg-transparent">
                        <a href="compare-details.html" classname="btn btn-lg btn-primary w-100 px-0 d-flex justify-content-center">
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

export default Wishlist;
