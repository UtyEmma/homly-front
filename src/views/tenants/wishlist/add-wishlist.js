import React from 'react'
import { ToastContainer } from 'react-toastify'
import Searchbar from 'views/layouts/components/search/searchbar'
import Footer from 'views/layouts/footer'
import NavBar from 'views/layouts/nav-bar'
import WishlistForm from './components/wishlist-form'

const AddWishlist = ({isLoggedIn, user}) => {
    return (
        <div>
            <NavBar isloggedIn={isLoggedIn} user={user}/>

            <main id="content">
            <ToastContainer position="bottom-right"/>
                <Searchbar />
                <section className="position-relative">
                    <div className="container-fluid px-0">
                        <div className="row no-gutters">
                            <div className="col-12 d-flex justify-content-center pt-7 pb-11">
                                <WishlistForm/>
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
                    <div className="marker-item" data-icon-marker="images/googlle-market-02.png" data-position="[-73.9893691, 40.6751204]" data-marker-style="{&quot;className&quot;:&quot;marker&quot;,&quot;style&quot;:{&quot;width&quot;:&quot;45px&quot;,&quot;height&quot;:&quot;48px&quot;},&quot;popup&quot;:{&quot;className&quot;:&quot;popup-map-property&quot;,&quot;maxWidth&quot;:&quot;269px&quot;}}">
                    <div className="card border-0">
                        <div className="position-relative hover-change-image bg-hover-overlay card-img-top"><img src="images/properties-grid-73.jpg" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column">
                            <div><span className="badge badge-primary">For Sale</span></div>
                            <div className="mt-auto d-flex hover-image">
                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto fs-14">
                                <li className="list-inline-item mr-2"><a href="#" className="text-white hover-primary"><i className="far fa-images" /><span className="pl-1">9</span></a></li>
                                <li className="list-inline-item" title="2 Video"><a href="#" className="text-white hover-primary"><i className="far fa-play-circle" /><span className="pl-1">2</span></a></li>
                            </ul>
                            <ul className="list-inline mb-0 mr-n3 d-flex">
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="far fa-heart" /></a></li>
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="fas fa-exchange-alt" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="card-body px-2 py-1">
                        <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                        </h2>
                        <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles</p>
                        <p className="fs-17 pt-1 font-weight-bold text-heading mb-0 lh-16">$1.250.000</p>
                        </div>
                        <div className="card-footer bg-transparent px-2 py-2">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-bedroom" />
                            </svg>
                            3 Br
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-shower" />
                            </svg>
                            3 Ba
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13">
                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-square" />
                            </svg>
                            2300 Sq.Ft
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="marker-item" data-icon-marker="images/googlle-market-02.png" data-position="[-73.9934889, 40.6743149]" data-marker-style="{&quot;className&quot;:&quot;marker&quot;,&quot;style&quot;:{&quot;width&quot;:&quot;45px&quot;,&quot;height&quot;:&quot;48px&quot;},&quot;popup&quot;:{&quot;className&quot;:&quot;popup-map-property&quot;,&quot;maxWidth&quot;:&quot;269px&quot;}}">
                    <div className="card border-0">
                        <div className="position-relative hover-change-image bg-hover-overlay card-img-top"><img src="images/properties-grid-69.jpg" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column">
                            <div><span className="badge badge-primary">For Sale</span></div>
                            <div className="mt-auto d-flex hover-image">
                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto fs-14">
                                <li className="list-inline-item mr-2"><a href="#" className="text-white hover-primary"><i className="far fa-images" /><span className="pl-1">9</span></a></li>
                                <li className="list-inline-item" title="2 Video"><a href="#" className="text-white hover-primary"><i className="far fa-play-circle" /><span className="pl-1">2</span></a></li>
                            </ul>
                            <ul className="list-inline mb-0 mr-n3 d-flex">
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="far fa-heart" /></a></li>
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="fas fa-exchange-alt" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="card-body px-2 py-1">
                        <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                        </h2>
                        <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles</p>
                        <p className="fs-17 pt-1 font-weight-bold text-heading mb-0 lh-16">$1.250.000</p>
                        </div>
                        <div className="card-footer bg-transparent px-2 py-2">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-bedroom" />
                            </svg>
                            3 Br
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-shower" />
                            </svg>
                            3 Ba
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13">
                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-square" />
                            </svg>
                            2300 Sq.Ft
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="marker-item" data-icon-marker="images/googlle-market-03.png" data-position="[-73.9947227, 40.6734035]" data-marker-style="{&quot;className&quot;:&quot;marker&quot;,&quot;style&quot;:{&quot;width&quot;:&quot;45px&quot;,&quot;height&quot;:&quot;48px&quot;},&quot;popup&quot;:{&quot;className&quot;:&quot;popup-map-property&quot;,&quot;maxWidth&quot;:&quot;269px&quot;}}">
                    <div className="card border-0">
                        <div className="position-relative hover-change-image bg-hover-overlay card-img-top"><img src="images/properties-grid-71.jpg" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column">
                            <div><span className="badge badge-indigo">for Rent</span></div>
                            <div className="mt-auto d-flex hover-image">
                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto fs-14">
                                <li className="list-inline-item mr-2"><a href="#" className="text-white hover-primary"><i className="far fa-images" /><span className="pl-1">9</span></a></li>
                                <li className="list-inline-item"><a href="#" className="text-white hover-primary"><i className="far fa-play-circle" /><span className="pl-1">2</span></a></li>
                            </ul>
                            <ul className="list-inline mb-0 d-flex mr-n3">
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="far fa-heart" /></a></li>
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="fas fa-exchange-alt" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="card-body px-2 py-1">
                        <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                        </h2>
                        <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles</p>
                        <p className="fs-17 pt-1 font-weight-bold text-heading mb-0 lh-16">$2500<span className="fs-14 font-weight-500 text-gray-light"> /month</span></p>
                        </div>
                        <div className="card-footer bg-transparent px-2 py-2">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-bedroom" />
                            </svg>
                            3 Br
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-shower" />
                            </svg>
                            3 Ba
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13">
                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-square" />
                            </svg>
                            2300 Sq.Ft
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="marker-item" data-icon-marker="images/googlle-market-02.png" data-position="[-73.9968864, 40.6747657]" data-marker-style="{&quot;className&quot;:&quot;marker&quot;,&quot;style&quot;:{&quot;width&quot;:&quot;45px&quot;,&quot;height&quot;:&quot;48px&quot;},&quot;popup&quot;:{&quot;className&quot;:&quot;popup-map-property&quot;,&quot;maxWidth&quot;:&quot;269px&quot;}}">
                    <div className="card border-0">
                        <div className="position-relative hover-change-image bg-hover-overlay card-img-top"><img src="images/properties-grid-72.jpg" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column">
                            <div><span className="badge badge-primary">For Sale</span></div>
                            <div className="mt-auto d-flex hover-image">
                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto fs-14">
                                <li className="list-inline-item mr-2"><a href="#" className="text-white hover-primary"><i className="far fa-images" /><span className="pl-1">9</span></a></li>
                                <li className="list-inline-item"><a href="#" className="text-white hover-primary"><i className="far fa-play-circle" /><span className="pl-1">2</span></a></li>
                            </ul>
                            <ul className="list-inline mb-0 d-flex mr-n3">
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="far fa-heart" /></a></li>
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="fas fa-exchange-alt" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="card-body px-2 py-1">
                        <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                        </h2>
                        <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles</p>
                        <p className="fs-17 pt-1 font-weight-bold text-heading mb-0 lh-16">$1.250.000</p>
                        </div>
                        <div className="card-footer bg-transparent px-2 py-2">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-bedroom" />
                            </svg>
                            3 Br
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-shower" />
                            </svg>
                            3 Ba
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13">
                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-square" />
                            </svg>
                            2300 Sq.Ft
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="marker-item" data-icon-marker="images/googlle-market-02.png" data-position="[-73.9929114, 40.6731454]" data-marker-style="{&quot;className&quot;:&quot;marker&quot;,&quot;style&quot;:{&quot;width&quot;:&quot;45px&quot;,&quot;height&quot;:&quot;48px&quot;},&quot;popup&quot;:{&quot;className&quot;:&quot;popup-map-property&quot;,&quot;maxWidth&quot;:&quot;269px&quot;}}">
                    <div className="card border-0">
                        <div className="position-relative hover-change-image bg-hover-overlay card-img-top"><img src="images/properties-grid-70.jpg" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column">
                            <div><span className="badge badge-primary">For Sale</span></div>
                            <div className="mt-auto d-flex hover-image">
                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto fs-14">
                                <li className="list-inline-item mr-2"><a href="#" className="text-white hover-primary"><i className="far fa-images" /><span className="pl-1">9</span></a></li>
                                <li className="list-inline-item"><a href="#" className="text-white hover-primary"><i className="far fa-play-circle" /><span className="pl-1">2</span></a></li>
                            </ul>
                            <ul className="list-inline mb-0 d-flex mr-n3">
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="far fa-heart" /></a></li>
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="fas fa-exchange-alt" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="card-body px-2 py-1">
                        <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                        </h2>
                        <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles</p>
                        <p className="fs-17 pt-1 font-weight-bold text-heading mb-0 lh-16">$1.250.000</p>
                        </div>
                        <div className="card-footer bg-transparent px-2 py-2">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-bedroom" />
                            </svg>
                            3 Br
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-shower" />
                            </svg>
                            3 Ba
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13">
                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-square" />
                            </svg>
                            2300 Sq.Ft
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="marker-item" data-icon-marker="images/googlle-market-03.png" data-position="[-73.9927934, 40.674364]" data-marker-style="{&quot;className&quot;:&quot;marker&quot;,&quot;style&quot;:{&quot;width&quot;:&quot;45px&quot;,&quot;height&quot;:&quot;48px&quot;},&quot;popup&quot;:{&quot;className&quot;:&quot;popup-map-property&quot;,&quot;maxWidth&quot;:&quot;269px&quot;}}">
                    <div className="card border-0">
                        <div className="position-relative hover-change-image bg-hover-overlay card-img-top"><img src="images/properties-grid-68.jpg" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column">
                            <div><span className="badge badge-indigo">for Rent</span></div>
                            <div className="mt-auto d-flex hover-image">
                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto fs-14">
                                <li className="list-inline-item mr-2"><a href="#" className="text-white hover-primary"><i className="far fa-images" /><span className="pl-1">9</span></a></li>
                                <li className="list-inline-item" title="2 Video"><a href="#" className="text-white hover-primary"><i className="far fa-play-circle" /><span className="pl-1">2</span></a></li>
                            </ul>
                            <ul className="list-inline mb-0 mr-n3 d-flex">
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="far fa-heart" /></a></li>
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="fas fa-exchange-alt" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="card-body px-2 py-1">
                        <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                        </h2>
                        <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles</p>
                        <p className="fs-17 pt-1 font-weight-bold text-heading mb-0 lh-16">$2500<span className="fs-14 font-weight-500 text-gray-light"> /month</span></p>
                        </div>
                        <div className="card-footer bg-transparent px-2 py-2">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-bedroom" />
                            </svg>
                            3 Br
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-shower" />
                            </svg>
                            3 Ba
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13">
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
                </main>

            
            <Footer/>
        </div>
    )
}

export default AddWishlist;
