import React from 'react'
import { Link } from 'react-router-dom'
import ProfileButton from './profile-btn/profile-button'

export default function NavBar({user, isloggedIn}) {
    return (
        <header className="main-header navbar-light header-sticky header-sticky-smart header-mobile-lg">
            <div className="sticky-area">
                <div className="container">
                    <nav className="navbar navbar-expand-lg px-0">
                        <a className="navbar-brand" href="/">
                        <img src="/images/logo/main.png" width="156px" height="40px" alt="Bayof Logo" className="d-none d-lg-inline-block" />
                        <img src="/images/logo/white.png" width="156px" height="40px" alt="Bayof Logo" className="d-inline-block d-lg-none" />
                        </a>

                        <div className="d-flex d-lg-none ml-auto">
                            {
                                isloggedIn

                                &&

                                <a className="mr-4 position-relative text-white p-2" href="#">
                                    <i className="fal fa-heart fs-large-4" />
                                    <span className="badge badge-primary badge-circle badge-absolute p-1">{user.wishlists}</span>
                                </a>
                            }
                        
                            <button className="navbar-toggler border-0 px-0" type="button" data-toggle="collapse" data-target="#primaryMenu01" aria-controls="primaryMenu01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="text-white fs-24"><i className="fal fa-bars" /></span>
                            </button>
                        </div>
                        
                        <div className="collapse navbar-collapse mt-3 mt-lg-0 mx-auto flex-grow-0" id="primaryMenu01">
                            <ul className="navbar-nav hover-menu main-menu px-0 mx-lg-n4">
                                <li id="navbar-item-home" className="nav-item py-2 py-lg-5 px-0 px-lg-4">
                                <Link className="nav-link p-0" to="/">
                                    Home
                                </Link>
                                </li>
                                <li id="navbar-item-property" className="nav-item py-2 py-lg-5 px-0 px-lg-4">
                                <Link className="nav-link p-0" to="/about">
                                    About</Link>
                                </li>
                                <li id="navbar-item-property" className="nav-item py-2 py-lg-5 px-0 px-lg-4">
                                <Link className="nav-link p-0" to="/listings">
                                    Rent a Property</Link>
                                </li>
                                <li id="navbar-item-dashboard"className="nav-item py-2 py-lg-5 px-0 px-lg-4">
                                    <Link className="nav-link p-0" to="/agents">
                                        Find an Agent
                                    </Link>
                                </li>                     
                            </ul>
                        </div>
                        <div className="d-none d-lg-block">
                            <ProfileButton isloggedIn={isloggedIn} user={user} />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
