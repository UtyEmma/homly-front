import React from 'react'

export default function NavBar() {
    return (
        <header className="main-header navbar-light header-sticky header-sticky-smart header-mobile-lg">
            <div className="sticky-area">
                <div className="container">
                    <nav className="navbar navbar-expand-lg px-0">
                        <a className="navbar-brand" href="index.html">
                        <img src="images/logo.png" alt="HomeID" className="d-none d-lg-inline-block" />
                        <img src="images/logo-white.png" alt="HomeID" className="d-inline-block d-lg-none" />
                        </a>
                        <div className="d-flex d-lg-none ml-auto">
                        <a className="mr-4 position-relative text-white p-2" href="#">
                            <i className="fal fa-heart fs-large-4" />
                            <span className="badge badge-primary badge-circle badge-absolute">1</span>
                        </a>
                        <button className="navbar-toggler border-0 px-0" type="button" data-toggle="collapse" data-target="#primaryMenu01" aria-controls="primaryMenu01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="text-white fs-24"><i className="fal fa-bars" /></span>
                        </button>
                        </div>
                        <div className="collapse navbar-collapse mt-3 mt-lg-0 mx-auto flex-grow-0" id="primaryMenu01">
                        <ul className="navbar-nav hover-menu main-menu px-0 mx-lg-n4">
                            <li id="navbar-item-home" aria-haspopup="true" aria-expanded="false" className="nav-item dropdown py-2 py-lg-5 px-0 px-lg-4">
                            <a className="nav-link dropdown-toggle p-0" href="index.html" data-toggle="dropdown">
                                Home
                                <span className="caret" />
                            </a>
                            <ul className="dropdown-menu pt-3 pb-0 pb-lg-3" aria-labelledby="navbar-item-home">
                                <li className="dropdown-item">
                                <a id="navbar-link-home-01" className="dropdown-link" href="home-01.html">
                                    Home 01
                                </a>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-home-02" className="dropdown-link" href="home-02.html">
                                    Home 02
                                </a>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-home-03" className="dropdown-link" href="home-03.html">
                                    Home 03
                                </a>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-home-04" className="dropdown-link" href="home-04.html">
                                    Home 04
                                </a>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-home-05" className="dropdown-link" href="home-05.html">
                                    Home 05
                                </a>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-home-06" className="dropdown-link" href="home-06.html">
                                    Home 06
                                </a>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-home-07" className="dropdown-link" href="home-07.html">
                                    Home 07
                                </a>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-home-08" className="dropdown-link" href="home-08.html">
                                    Home 08
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li id="navbar-item-property" aria-haspopup="true" aria-expanded="false" className="nav-item dropdown py-2 py-lg-5 px-0 px-lg-4">
                            <a className="nav-link dropdown-toggle p-0" href="listing.html" data-toggle="dropdown">
                                Property
                                <span className="caret" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-xxl px-0 py-3 dropdown-menu-listing" aria-labelledby="navbar-item-property">
                                <div className="row no-gutters">
                                <div className="col-lg-3">
                                    <h4 className="dropdown-header text-dark fs-16 mb-2">
                                    List view
                                    </h4>
                                    <a className="dropdown-item" href="listing-full-width-list.html">
                                    Full width list
                                    </a>
                                    <a className="dropdown-item" href="listing-with-left-filter.html">
                                    List with left filter
                                    </a>
                                    <a className="dropdown-item" href="listing-with-right-filter.html">
                                    List with right filter
                                    </a>
                                    <a className="dropdown-item" href="listing-with-left-sidebar.html">
                                    List with left sidebar
                                    </a>
                                    <a className="dropdown-item" href="listing-with-right-sidebar.html">
                                    List with right sidebar
                                    </a>
                                </div>
                                <div className="col-lg-3">
                                    <h4 className="dropdown-header text-dark fs-16 mb-2">
                                    Grid view
                                    </h4>
                                    <a className="dropdown-item" href="listing-full-width-grid-1.html">
                                    Full width grid 1
                                    </a>
                                    <a className="dropdown-item" href="listing-full-width-grid-2.html">
                                    Full width grid 2
                                    </a>
                                    <a className="dropdown-item" href="listing-full-width-grid-3.html">
                                    Full width grid 3
                                    </a>
                                    <a className="dropdown-item" href="listing-grid-with-left-filter.html">
                                    Grid with left filter
                                    </a>
                                    <a className="dropdown-item" href="listing-grid-with-right-filter.html">
                                    Grid with right filter
                                    </a>
                                    <a className="dropdown-item" href="listing-grid-with-left-sidebar.html">
                                    Grid with left sidebar
                                    </a>
                                    <a className="dropdown-item" href="listing-grid-with-right-sidebar.html">
                                    Grid with right sidebar
                                    </a>
                                </div>
                                <div className="col-lg-3">
                                    <h4 className="dropdown-header text-dark fs-16 mb-2">
                                    Map style
                                    </h4>
                                    <a className="dropdown-item" href="listing-half-map-list-layout-1.html">
                                    Half map list layout 1
                                    </a>
                                    <a className="dropdown-item" href="listing-half-map-list-layout-2.html">
                                    Half map list layout 2
                                    </a>
                                    <a className="dropdown-item" href="listing-half-map-grid-layout-1.html">
                                    Half map grid layout 1
                                    </a>
                                    <a className="dropdown-item" href="listing-half-map-grid-layout-2.html">
                                    Half map grid layout 2
                                    </a>
                                    <a className="dropdown-item" href="listing-full-map-1.html">
                                    Full map 1
                                    </a>
                                    <a className="dropdown-item" href="listing-full-map-2.html">
                                    Full map 2
                                    </a>
                                    <a className="dropdown-item" href="listing-full-map-with-sidebar.html">
                                    Full Map with sidebar
                                    </a>
                                </div>
                                <div className="col-lg-3">
                                    <h4 className="dropdown-header text-dark fs-16 mb-2">
                                    Single Property
                                    </h4>
                                    <a className="dropdown-item" href="single-property-1.html">
                                    Single Property 1
                                    </a>
                                    <a className="dropdown-item" href="single-property-2.html">
                                    Single Property 2
                                    </a>
                                    <a className="dropdown-item" href="single-property-3.html">
                                    Single Property 3
                                    </a>
                                    <a className="dropdown-item" href="single-property-4.html">
                                    Single Property 4
                                    </a>
                                    <a className="dropdown-item" href="single-property-5.html">
                                    Single Property 5
                                    </a>
                                    <a className="dropdown-item" href="single-property-6.html">
                                    Single Property 6
                                    </a>
                                    <a className="dropdown-item" href="single-property-7.html">
                                    Single Property 7
                                    </a>
                                    <a className="dropdown-item" href="single-property-8.html">
                                    Single Property 8
                                    </a>
                                    <a className="dropdown-item" href="single-property-9.html">
                                    Single Property 9
                                    </a>
                                </div>
                                </div>
                            </div>
                            </li>
                            <li id="navbar-item-dashboard" aria-haspopup="true" aria-expanded="false" className="nav-item dropdown py-2 py-lg-5 px-0 px-lg-4">
                            <a className="nav-link dropdown-toggle p-0" href="#" data-toggle="dropdown">
                                Dashboard
                                <span className="caret" />
                            </a>
                            <ul className="dropdown-menu pt-3 pb-0 pb-lg-3" aria-labelledby="navbar-item-dashboard">
                                <li className="dropdown-item">
                                <a id="navbar-link-dashboard" className="dropdown-link" href="dashboard.html">
                                    Dashboard
                                </a>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-add-new-property" className="dropdown-link" href="dashboard-add-new-property.html">
                                    Add New Property
                                </a>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-my-properties" className="dropdown-link" href="dashboard-my-properties.html">
                                    My Properties
                                </a>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-my-favorites" className="dropdown-link" href="dashboard-my-favorites.html">
                                    My Favorites
                                </a>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-save-search" className="dropdown-link" href="dashboard-save-search.html">
                                    Save Search
                                </a>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-reviews" className="dropdown-link" href="dashboard-reviews.html">
                                    Reviews
                                </a>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-my-package" className="dropdown-link" href="dashboard-my-packages.html">
                                    My Package
                                </a>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-my-profile" className="dropdown-link" href="dashboard-my-profiles.html">
                                    My Profile
                                </a>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-signup-and-login" className="dropdown-link" href="signup-and-login.html">
                                    Signup and login
                                </a>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-password-recovery" className="dropdown-link" href="password-recovery.html">
                                    Password Recovery
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li id="navbar-item-pages" aria-haspopup="true" aria-expanded="false" className="nav-item dropdown py-2 py-lg-5 px-0 px-lg-4">
                            <a className="nav-link dropdown-toggle p-0" href="#" data-toggle="dropdown">
                                Pages
                                <span className="caret" />
                            </a>
                            <ul className="dropdown-menu pt-3 pb-0 pb-lg-3" aria-labelledby="navbar-item-pages">
                                <li className="dropdown-item dropdown dropright">
                                <a id="navbar-link-news" className="dropdown-link dropdown-toggle" href="#" data-toggle="dropdown">
                                    News
                                </a>
                                <ul className="dropdown-menu dropdown-submenu pt-3 pb-0 pb-lg-3" aria-labelledby="navbar-link-news">
                                    <li className="dropdown-item">
                                    <a className="dropdown-link" href="blog-classic.html">Blog classic</a>
                                    </li>
                                    <li className="dropdown-item">
                                    <a className="dropdown-link" href="blog-grid.html">Blog grid</a>
                                    </li>
                                    <li className="dropdown-item">
                                    <a className="dropdown-link" href="blog-grid-with-sidebar.html">Blog grid with sidebar</a>
                                    </li>
                                    <li className="dropdown-item">
                                    <a className="dropdown-link" href="blog-list-width-sidebar.html">Blog list with sidebar</a>
                                    </li>
                                    <li className="dropdown-item">
                                    <a className="dropdown-link" href="blog-details-1.html">Blog details 1</a>
                                    </li>
                                    <li className="dropdown-item">
                                    <a className="dropdown-link" href="blog-details-2.html">Blog details 2</a>
                                    </li>
                                </ul>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-about-us" className="dropdown-link" href="about-us.html">
                                    About us
                                </a>
                                </li>
                                <li className="dropdown-item dropdown dropright">
                                <a id="navbar-link-service" className="dropdown-link dropdown-toggle" href="#" data-toggle="dropdown">
                                    Service
                                </a>
                                <ul className="dropdown-menu dropdown-submenu pt-3 pb-0 pb-lg-3" aria-labelledby="navbar-link-service">
                                    <li className="dropdown-item">
                                    <a className="dropdown-link" href="services.html">Services</a>
                                    </li>
                                    <li className="dropdown-item">
                                    <a className="dropdown-link" href="services-with-sidebar.html">Services with sidebar</a>
                                    </li>
                                </ul>
                                </li>
                                <li className="dropdown-item dropdown dropright">
                                <a id="navbar-link-contact-us" className="dropdown-link dropdown-toggle" href="#" data-toggle="dropdown">
                                    Contact us
                                </a>
                                <ul className="dropdown-menu dropdown-submenu pt-3 pb-0 pb-lg-3" aria-labelledby="navbar-link-contact-us">
                                    <li className="dropdown-item">
                                    <a className="dropdown-link" href="contact-us-1.html">Contact us 1</a>
                                    </li>
                                    <li className="dropdown-item">
                                    <a className="dropdown-link" href="contact-us-2.html">Contact us 2</a>
                                    </li>
                                </ul>
                                </li>
                                <li className="dropdown-item dropdown dropright">
                                <a id="navbar-link-agent" className="dropdown-link dropdown-toggle" href="#" data-toggle="dropdown">
                                    Agent
                                </a>
                                <ul className="dropdown-menu dropdown-submenu pt-3 pb-0 pb-lg-3" aria-labelledby="navbar-link-agent">
                                    <li className="dropdown-item">
                                    <a className="dropdown-link" href="agents-grid-1.html">Agents grid 1</a>
                                    </li>
                                    <li className="dropdown-item">
                                    <a className="dropdown-link" href="agents-grid-2.html">Agents grid 2</a>
                                    </li>
                                    <li className="dropdown-item">
                                    <a className="dropdown-link" href="agents-grid-with-sidebar.html">Agents grid with sidebar</a>
                                    </li>
                                    <li className="dropdown-item">
                                    <a className="dropdown-link" href="agents-list.html">Agents list</a>
                                    </li>
                                    <li className="dropdown-item">
                                    <a className="dropdown-link" href="agent-details-1.html">Agent detais 1</a>
                                    </li>
                                    <li className="dropdown-item">
                                    <a className="dropdown-link" href="agent-details-2.html">Agent detais 2</a>
                                    </li>
                                </ul>
                                </li>
                                <li className="dropdown-item dropdown dropright">
                                <a id="navbar-link-agency" className="dropdown-link dropdown-toggle" href="#" data-toggle="dropdown">
                                    Agency
                                </a>
                                <ul className="dropdown-menu dropdown-submenu pt-3 pb-0 pb-lg-3" aria-labelledby="navbar-link-agency">
                                    <li className="dropdown-item">
                                    <a className="dropdown-link" href="agency-grid.html">Agency grid</a>
                                    </li>
                                    <li className="dropdown-item">
                                    <a className="dropdown-link" href="agency-list.html">Agency list</a>
                                    </li>
                                    <li className="dropdown-item">
                                    <a className="dropdown-link" href="agency-details-1.html">Agency details 1</a>
                                    </li>
                                    <li className="dropdown-item">
                                    <a className="dropdown-link" href="agency-details-2.html">Agency details 2</a>
                                    </li>
                                </ul>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-faqs" className="dropdown-link" href="faqs.html">
                                    FAQs
                                </a>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-page-404" className="dropdown-link" href="page-404.html">
                                    Page 404
                                </a>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-checkout" className="dropdown-link" href="checkout-complete-1.html">
                                    Checkout
                                </a>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-payment-completed" className="dropdown-link" href="checkout-complete-2.html">
                                    Payment Completed
                                </a>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-compare" className="dropdown-link" href="compare-details.html">
                                    Compare
                                </a>
                                </li>
                                <li className="dropdown-item">
                                <a id="navbar-link-packages" className="dropdown-link" href="packages.html">
                                    Packages
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li id="navbar-item-docs" aria-haspopup="true" aria-expanded="false" className="nav-item dropdown py-2 py-lg-5 px-0 px-lg-4">
                            <a className="nav-link dropdown-toggle p-0" href="#" data-toggle="dropdown">
                                Docs
                                <span className="caret" />
                            </a>
                            <div className="dropdown-menu px-0 pt-3 dropdown-menu-docs">
                                <div className="dropdown-body">
                                <a className="dropdown-item py-1" href="docs/getting-started/dev-environment-setup.html">
                                    <div className="media">
                                    <div className="fs-20 mr-3">
                                        <i className="fal fa-file-alt" />
                                    </div>
                                    <div className="media-body">
                                        <span className="d-block lh-15">Documentation</span>
                                        <small className="d-block">Kick-start customization</small>
                                    </div>
                                    </div>
                                </a>
                                <div className="dropdown-divider m-0" />
                                <a className="dropdown-item py-1" href="docs/content/typography.html">
                                    <div className="media">
                                    <div className="fs-20 mr-3">
                                        <i className="fal fa-layer-group" />
                                    </div>
                                    <div className="media-body">
                                        <span className="d-block lh-15">UI Kit<span className="badge badge-danger ml-2">50+</span></span>
                                        <small className="d-block">Flexible components</small>
                                    </div>
                                    </div>
                                </a>
                                <div className="dropdown-divider m-0" />
                                <a className="dropdown-item py-1" href="docs/getting-started/changelog.html">
                                    <div className="media">
                                    <div className="fs-20 mr-3">
                                        <i className="fal fa-edit" />
                                    </div>
                                    <div className="media-body">
                                        <span className="d-block lh-15">Changelog<span className="badge badge-success ml-2">v1.0.1</span></span>
                                        <small className="d-block">Regular updates</small>
                                    </div>
                                    </div>
                                </a>
                                <div className="dropdown-divider m-0" />
                                <a className="dropdown-item py-1" href="https://sp.g5plus.net/" target="_blank">
                                    <div className="media">
                                    <div className="fs-20 mr-3">
                                        <i className="fal fa-life-ring" />
                                    </div>
                                    <div className="media-body">
                                        <span className="d-block lh-15">Support</span>
                                        <small className="d-block">https://sp.g5plus.net/</small>
                                    </div>
                                    </div>
                                </a>
                                </div>
                            </div>
                            </li>
                        </ul>
                        <div className="d-block d-lg-none">
                            <ul className="navbar-nav flex-row justify-content-lg-end d-flex flex-wrap py-2">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle mr-md-2 pr-2 pl-0 pl-lg-2" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                ENG
                                </a>
                                <div className="dropdown-menu dropdown-sm dropdown-menu-left">
                                <a className="dropdown-item" href="#">VN</a>
                                <a className="dropdown-item active" href="#">ENG</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">ARB</a>
                                <a className="dropdown-item" href="#">KR</a>
                                <a className="dropdown-item" href="#">JN</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  px-2" data-toggle="modal" href="#login-register-modal">SIGN IN</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="d-none d-lg-block">
                        <ul className="navbar-nav flex-row justify-content-lg-end d-flex flex-wrap text-body py-2">
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle mr-md-2 pr-2 pl-0 pl-lg-2" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                ENG
                            </a>
                            <div className="dropdown-menu dropdown-sm dropdown-menu-right">
                                <a className="dropdown-item" href="#">VN</a>
                                <a className="dropdown-item active" href="#">ENG</a>
                                <a className="dropdown-item" href="#">ARB</a>
                                <a className="dropdown-item" href="#">KR</a>
                                <a className="dropdown-item" href="#">JN</a>
                            </div>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link  px-2" data-toggle="modal" href="#login-register-modal">SIGN IN</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link px-2 position-relative" href="#">
                                <i className="fal fa-heart fs-large-4" />
                                <span className="badge badge-primary badge-circle badge-absolute">1</span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
