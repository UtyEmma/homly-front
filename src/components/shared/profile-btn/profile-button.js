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
                <a className="nav-link px-2 position-relative mr-md-2 pr-2 pl-0 pl-lg-2" href="wishlist">
                    <i className="fal fa-heart fs-large-4" />
                    <span className="badge badge-primary badge-circle badge-absolute">1</span>
                </a>
            </li>

            <li className="nav-item mr-2 d-flex hover bg-hover-overlay-gradient-2 hover-primary rounded p-1">
                <div className="w-46px">
                    <img src={user.avatar ? user.avatar : "images/testimonial-5.jpg"} alt={user.firstname} className="rounded-circle" />
                </div>
                <a href="" className="nav-link px-2 dropdown-toggle " data-toggle="dropdown">{user.firstname} {user.lastname}</a>
                <div className="dropdown-menu px-3 dropdown-menu-right dropdown-menu-lg">
                    <div className="row">
                        <div className="col-6">
                            <a className="dropdown-item rounded py-2 align-middle" href="/profile">
                                <i className="fa fa-user mr-2"></i>
                                My Profile
                            </a>
                            <a className="dropdown-item  btn btn-secondary rounded py-2 align-middle" href="/logout">
                                <i className="mr-2"></i>
                                Logout
                            </a>
                        </div>

                        <div className="col-6">

                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )

}

function loggedOut(params) {
    return (           
        <ul className="navbar-nav flex-row justify-content-lg-end align-items-center d-flex flex-wrap text-body py-2">
            <li className="nav-item ">
                <a className="nav-link pl-3 pr-2 mr-2" href="/login">Login</a>
            </li>
            <li class="nav-item ml-auto w-100 w-sm-auto">
                <a class="btn btn-primary btn-lg d-flex align-items-center" href="/signup">
                    Get Started
                    <img src="images/add-listing-icon.png" alt="Add listing" class="ml-2" />
                </a>
            </li>
        </ul>
    )
}
