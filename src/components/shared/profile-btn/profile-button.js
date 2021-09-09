import { AgentLogout } from 'providers/redux/_actions/agent-actions'
import { TenantLogout } from 'providers/redux/_actions/user-actions'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'

export default function ProfileButton({isloggedIn, user, status}) {

    return (
        <>
            {isloggedIn ? LoggedIn(user, status) : loggedOut()}
        </>
    )
}

function LoggedIn(user, status) {

    const dispatch = useDispatch()
    const type = localStorage.getItem('type');

    const logout = () => {
        type === 'tenant' ? dispatch(TenantLogout()) : dispatch(AgentLogout())
    }

    return (           
        <ul className="navbar-nav flex-row justify-content-lg-end align-items-center d-flex flex-wrap text-body py-2">            
            
            {
                status === "tenant"

                &&


                <>
                    <li className="nav-item">
                        <NavLink className="nav-link px-2 position-relative mr-md-2 pr-2 pl-0 pl-lg-2" to="/wishlist">
                            <i className="fal fa-gift fs-large-4" title="Wishlists" />
                            {
                                user.wishlists 
                                
                                &&

                                <span className="badge badge-primary badge-circle badge-absolute p-1">{user.wishlists}</span>   
                            }
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/favourites" className="nav-link px-2 position-relative mr-md-2 pr-2 pl-0 pl-lg-2" >
                            <i className="fal fa-heart fs-large-4" title="Favourites" />
                            {
                                user.wishlists 
                                
                                &&

                                <span className="badge badge-primary badge-circle badge-absolute p-1">{user.wishlists}</span>   
                            }
                        </NavLink>
                    </li>
                </>
            }

            <li className="nav-item mr-2 d-flex align-items-center hover bg-hover-overlay-gradient-2 hover-primary rounded p-1 dropdown-toggle" data-toggle="dropdown" >
                <div className="w-46px">
                    {   
                        user.avatar 
                        ? 
                        <div className="rounded-circle w-46px h-46 overflow-hidden">
                            <img src={user.avatar} className="w-46px h-46" style={{objectFit: 'cover'}} alt={`${user.firstname}`} />
                        </div> 
                        : 
                        <div className="d-inline-block mb-md-2 w-46px h-46 mr-2 bg-gray-01 rounded-circle fs-18 font-weight-500 text-muted d-flex align-items-center justify-content-center text-uppercase mr-sm-8 mb-4 mb-sm-0 mx-auto">
                            {`${user.firstname.charAt(0).toUpperCase()}${user.lastname.charAt(0).toUpperCase()}`}
                        </div>
                    }
                </div>
                
                <button className="nav-link btn d-none d-lg-block">Hello {user.firstname}</button>

                <div className="dropdown-menu px-2 dropdown-lg dropdown-menu-right" style={{width: "250px"}}>
                    {
                        status === 'tenant'

                        ?

                        <TenantNavItems />

                        :

                        <AgentNavItems/>
                    }

                    <button className="dropdown-item  btn btn-secondary rounded py-2 align-middle" type="button" onClick={logout} >
                        <i className="fa fa-door-open mr-3 text-primary"></i>
                        Logout
                    </button>
                </div>
            </li>
        </ul>
    )

}

export function TenantNavItems () {
    return (
        <>
            <Link className="dropdown-item rounded py-2 align-middle" to="/profile">
                <i className="fa fa-user mr-3 text-primary"></i>
                My Profile
            </Link>

            <Link className="dropdown-item rounded py-2 align-middle" to="/favourites">
                <i className="fa fa-heart mr-3 text-primary"></i>
                Favourites
            </Link>


            <Link className="dropdown-item rounded py-2 align-middle" to="/wishlists">
                <i className="fa fa-gifts mr-3 text-primary"></i>
                Wishlists
            </Link>
        </>
    )
}


export function AgentNavItems () {
    return (
        <>
            <Link className="dropdown-item rounded py-2 align-middle" to="/dashboard">
                <i className="fa fa-user mr-3 text-primary"></i>
                My Dashboard
            </Link>

            <Link className="dropdown-item rounded py-2 align-middle" to="/agent-profile">
                <i className="fa fa-heart mr-3 text-primary"></i>
                Profile
            </Link>


            <Link className="dropdown-item rounded py-2 align-middle" to="/support">
                <i className="fa fa-headset mr-3 text-primary"></i>
                Support
            </Link>
        </>
    )
}

function loggedOut(params) {
    return (           
        <ul className="navbar-nav flex-row justify-content-lg-end align-items-center d-flex flex-wrap text-body py-2">
            <li className="nav-item d-none d-md-inline">
                <Link className="nav-link pl-md-3 pr-md-2 mr-1 mr-md-0" to="/login">Login</Link>
                <span>|</span>
                <Link className="nav-link pl-3 pr-2 mr-1 mr-md-auto" to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item ml-md-auto w-auto w-sm-auto mr-2 mr-md-auto">
                <Link className="btn btn-primary d-md-none d-flex align-items-center" to="/agent-signup">
                    For Agents
                    <img src="/images/add-listing-icon.png" alt="Add listing" className="ml-2" />
                </Link>

                <Link className="btn btn-primary d-none btn-lg d-md-flex align-items-center" to="/agent-signup">
                    For Agents
                    <img src="/images/add-listing-icon.png" alt="Add listing" className="ml-2" />
                </Link>
            </li>
        </ul>
    )
}
