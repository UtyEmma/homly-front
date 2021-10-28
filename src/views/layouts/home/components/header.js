import ProfileButton from 'components/shared/profile-btn/profile-button'
import React from 'react'
import { Link } from 'react-router-dom'

export const HomePageHeader = ({isloggedIn, user, status}) => {
    return (
        <header className="main-header position-absolute fixed-top m-0 navbar-dark header-sticky header-sticky-smart header-mobile-xl">
        <div className="sticky-area">
            <div className="container container-xxl">
            <div className="d-flex align-items-center">
                <div className="navbar navbar-expand-xl bg-transparent px-0 w-100">
                <Link className="navbar-brand mr-7 w-25 w-100px" href="/">
                {/* width="102px" height="80px" */}
                    <img src="/images/logo/white.png" alt="bayof-logo" alt="Bayof Logo" className=" normal-logo" /> 
                    <img src="/images/logo/bayof-logo.png" alt="bayof-logo" className="sticky-logo" />
                </Link>
                
                <div className="d-lg-none ml-auto">
                    <ProfileButton isloggedIn={isloggedIn} user={user} status={status} home={true} />
                </div>
                
                <button className="navbar-toggler border-0 px-0" type="button" data-toggle="collapse" data-target="#primaryMenu02" aria-controls="primaryMenu02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="text-white fs-10"><i className="fal fa-bars" /></span>
                </button>



                <div className="collapse navbar-collapse mt-3 mt-xl-0 " id="primaryMenu02">
                    <ul className="navbar-nav hover-menu main-menu px-0 mx-xl-n4">
                        <li id="navbar-item-home" className="nav-item py-2 py-lg-5 px-0 px-lg-4">
                            <Link className="nav-link p-0" to="/">Home</Link>
                        </li>
                        {/* <li id="navbar-item-property" className="active nav-item py-2 py-lg-5 px-0 px-lg-4">
                            <Link className="nav-link p-0" to="/about">About</Link>
                        </li> */}
                        <li id="navbar-item-property" className="nav-item py-2 py-lg-5 px-0 px-lg-4">
                            <Link className="nav-link p-0" to="/listings">Find a Property</Link>
                        </li>
                        <li id="navbar-item-dashboard" className="nav-item py-2 py-lg-5 px-0 px-lg-4">
                            <Link className="nav-link p-0" to="/agents">Find an Agent</Link>
                        </li> 

                        {
                            !isloggedIn

                            &&

                            <>
                                <li id="navbar-item-dashboard" className="nav-item py-2 py-lg-5 px-0 px-lg-4 d-md-none">
                                    <Link className="nav-link btn btn-block btn-primary btn-lg" to="/login">
                                        Login
                                    </Link>
                                </li> 
                                <li id="navbar-item-dashboard" className="nav-item py-2 py-lg-5 px-0 px-lg-4 d-md-none">
                                    <Link className="nav-link btn btn-block btn-outline-primary btn-lg" to="/signup">
                                        Sign Up
                                    </Link>
                                </li>
                            </>
                        }

                    </ul>
                    <div className="d-none d-lg-block ml-auto">
                        <ProfileButton isloggedIn={isloggedIn} user={user} status={status} home={true} />
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </header>

    )
}
