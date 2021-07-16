import React from 'react'

export default function ProfileButton({isloggedIn, user}) {

    return (
        <>
            {isloggedIn ? loggedIn(user) : loggedOut()}
        </>
    )
}

function loggedIn(user) {
    return (           
        <ul className="navbar-nav flex-row justify-content-lg-end align-items-center d-flex flex-wrap text-body py-2">
            <li className="nav-item mr-4">
                <a className="nav-link mr-md-2 pr-2 pl-0 pl-lg-2" href="wishlist" >
                    My Wishlist
                </a>
            </li>
            <li className="nav-item mr-2 d-flex hover bg-hover-overlay-gradient-2 hover-primary rounded p-1">
                <div className="w-46px">
                    <img src="images/testimonial-5.jpg" alt="Ronald Hunter" className="rounded-circle" />
                </div>
                <a href="" className="nav-link px-2 dropdown-toggle" data-toggle="dropdown">{user.firstname} {user.lastname}</a>
                <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="/agent-profile">My Profile</a>
                    <a className="dropdown-item" href="#">Logout</a>
                </div>
            </li>
            {/* <li className="nav-item">
            <a className="nav-link px-2 position-relative" href="#">
                <i className="fal fa-heart fs-large-4" />
                <span className="badge badge-primary badge-circle badge-absolute">1</span>
            </a>
            </li> */}
        </ul>
    )

}

function loggedOut(params) {
    return (           
        <ul className="navbar-nav flex-row justify-content-lg-end d-flex flex-wrap text-body py-2">
            <li className="nav-item">
            <a className="nav-link  px-2" data-toggle="modal" href="#login-register-modal">SIGN UP</a>
            </li>
        </ul>
    )

}
