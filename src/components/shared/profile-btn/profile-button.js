import { AgentLogout } from 'providers/redux/_actions/agent-actions'
import { TenantLogout } from 'providers/redux/_actions/user-actions'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export default function ProfileButton({isloggedIn, user}) {

    const [status, setStatus] = useState()

    useEffect(() => {
        setStatus(localStorage.getItem('type'))
    })

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
                        <Link className="nav-link px-2 position-relative mr-md-2 pr-2 pl-0 pl-lg-2" to="/wishlist">
                            <i className="fal fa-gift fs-large-4" title="Wishlists" />
                            {
                                user.wishlists 
                                
                                &&

                                <span className="badge badge-primary badge-circle badge-absolute p-1">{user.wishlists}</span>   
                            }
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/favourites" className="nav-link px-2 position-relative mr-md-2 pr-2 pl-0 pl-lg-2" >
                            <i className="fal fa-heart fs-large-4" title="Favourites" />
                            {
                                user.wishlists 
                                
                                &&

                                <span className="badge badge-primary badge-circle badge-absolute p-1">{user.wishlists}</span>   
                            }
                        </Link>
                    </li>
                </>
            }
            
            <li className="nav-item mr-md-2 d-flex align-items-center hover bg-hover-overlay-gradient-2 hover-primary rounded p-1 " >

                <div className="dropdown px-md-3">
                    <Link to="#" className="dropdown-toggle d-flex align-items-center justify-content-end text-heading" data-toggle="dropdown">
                    {    
                        user.avatar 
                    ? 
                        <div className="w-46px h-46 overflow-hidden">
                            <img src={user.avatar} className="rounded-circle w-46px h-46" style={{objectFit: 'cover'}} alt={`${user.firstname}`} />
                        </div> 
                    : 
                        <div className="d-inline-block w-46px h-46 bg-gray-01 rounded-circle fs-18 font-weight-500 text-muted d-flex align-items-center justify-content-center text-uppercase mx-auto">
                            {`${user.firstname.charAt(0).toUpperCase()}${user.lastname.charAt(0).toUpperCase()}`}
                        </div>
                    }
                    <span className="fs-13 ml-2 font-weight-500 d-none d-sm-inline ml-0">
                        Hello {user.firstname}
                    </span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right" style={{width: "200px"}}>
                        {
                            status === 'tenant'

                            ?

                            <TenantNavItems />

                            :

                            <AgentNavItems/>
                        }

                        <button className="dropdown-item btn btn-secondary rounded py-2 align-middle" type="button" onClick={logout} >
                            <i className="fa fa-door-open mr-3 text-primary"></i>
                            Logout
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    )

}

export function TenantNavItems () {
    return (
        <>
            <Link to="/profile" className="dropdown-item rounded py-2 align-middle">
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
            <Link  to="/dashboard" className="dropdown-item rounded py-2 align-middle">
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
