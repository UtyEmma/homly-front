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
                    {
                        user.wishlists 
                        
                        &&

                        <span className="badge badge-primary badge-circle badge-absolute p-1">{user.wishlists}</span>   
                    }
                </a>
            </li>

            <li className="nav-item mr-2 d-flex hover bg-hover-overlay-gradient-2 hover-primary rounded p-1">
                <div className="w-46px">
                    {   
                        user.avatar 
                        ? 
                        <div className="rounded-circle w-46px h-46 overflow-hidden">
                            <img src={user.avatar} className="w-46px h-46" style={{objectFit: 'cover'}} alt={`${user.firstname}`} />
                        </div> 
                        : 
                        <div className="d-inline-block mb-2 w-46px h-46 mr-2 bg-gray-01 rounded-circle fs-18 font-weight-500 text-muted d-flex align-items-center justify-content-center text-uppercase mr-sm-8 mb-4 mb-sm-0 mx-auto">
                            {`${user.firstname.charAt(0).toUpperCase()}${user.lastname.charAt(0).toUpperCase()}`}
                        </div>
                    }
                </div>
                <a href="" className="nav-link px-2 dropdown-toggle " data-toggle="dropdown">Hello {user.firstname}</a>
                <div className="dropdown-menu px-3 dropdown-menu-right dropdown-menu-lg">
                    <div className="row">
                        <div className="col-6">
                            <a className="dropdown-item rounded py-2 align-middle" href="/profile">
                                <i className="fa fa-user mr-2"></i>
                                My Profile
                            </a>

                            <a className="dropdown-item rounded py-2 align-middle" href="/profile">
                                <i className="fa fa-heart mr-2"></i>
                                Favourites
                            </a>


                            <a className="dropdown-item rounded py-2 align-middle" href="/wishlists">
                                <i className="fa fa-heart mr-2"></i>
                                Wishlists
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
                <a class="btn btn-primary btn-lg d-flex align-items-center" href="/agent-signup">
                    For Agents
                    <img src="images/add-listing-icon.png" alt="Add listing" class="ml-2" />
                </a>
            </li>
        </ul>
    )
}