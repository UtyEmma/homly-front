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
                            <li id="navbar-item-home" className="nav-item py-2 py-lg-5 px-0 px-lg-4">
                            <a className="nav-link p-0" href="/">
                                Home
                            </a>
                            </li>
                            <li id="navbar-item-property" className="nav-item py-2 py-lg-5 px-0 px-lg-4">
                            <a className="nav-link p-0" href="about">
                                About</a>
                            </li>
                            <li id="navbar-item-property" className="nav-item py-2 py-lg-5 px-0 px-lg-4">
                            <a className="nav-link p-0" href="listings">
                                Properties</a>
                            </li>
                            <li id="navbar-item-dashboard"className="nav-item py-2 py-lg-5 px-0 px-lg-4">
                                <a className="nav-link p-0" href="agents">
                                    Agents
                                </a>
                            </li>                     
                        </ul>

                        <div className="d-block d-lg-none">
                            <ul className="navbar-nav flex-row justify-content-lg-end d-flex flex-wrap py-2">
                            <li className="nav-item dropdown">
                                <a className="nav-link mr-md-2 pr-2 pl-0 pl-lg-2" href="./wishlist">
                                My Wishlist
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  px-2" data-toggle="modal" href="#login-register-modal">SIGN IN</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="d-none d-lg-block">
                        <ul className="navbar-nav flex-row justify-content-lg-end d-flex flex-wrap text-body py-2">
                            <li className="nav-item">
                                <a className="nav-link mr-md-2 pr-2 pl-0 pl-lg-2" href="wishlist" >
                                    My Wishlist
                                </a>
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
