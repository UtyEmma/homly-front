import { AgentLogout } from 'providers/redux/_actions/agent-actions'
import { TenantLogout } from 'providers/redux/_actions/user-actions'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function ProfileButton({setIsLoading, isloggedIn, user, status}) {
    return (
        <>
            {isloggedIn ? <LoggedIn user={user} status={status} setIsLoading={setIsLoading} /> : loggedOut()}
        </>
    )
}

function LoggedIn({setIsLoading, user, status}) {

    return (           
        <ul className="navbar-nav flex-row justify-content-lg-end align-items-center d-flex flex-wrap text-body py-2">            
            <li className="nav-item mr-md-2 d-flex align-items-center hover bg-hover-overlay-gradient-2 hover-primary rounded p-1 " >

                <div className="dropdown px-md-3">
                    <button className="btn px-0 py-0 dropdown-toggle d-flex align-items-center justify-content-end text-heading" data-toggle="dropdown">
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
                        <span className="fs-13 ml-2 d-none d-md-inline font-weight-500 ml-0">
                            <b>Hi, {user.firstname}</b>
                        </span>
                        <span className="fs-13 ml-2 font-weight-500 d-none d-sm-block d-md-none text-white ml-0">
                            <b>Hi, {user.firstname}</b>
                        </span>
                    </button>
                    <div className="dropdown-menu mt-2 dropdown-menu-right" style={{width: "200px"}}>
                        {
                            status === 'tenant'

                            ?

                            <TenantNavItems />

                            :

                            <AgentNavItems/>
                        }
                    </div>
                </div>
            </li>
        </ul>
    )

}

export function TenantNavItems () {
    
    const dispatch = useDispatch()
    const {token} = useSelector(state => state.user_data)

    const logout = () => {
        dispatch(TenantLogout(token))
    }

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


            <Link className="dropdown-item rounded py-2 align-middle" to="/wishlist">
                <i className="fa fa-gifts mr-3 text-primary"></i>
                Wishlists
            </Link>

            <button className="dropdown-item btn btn-secondary rounded py-2 align-middle" type="button" onClick={logout} >
                <i className="fa fa-door-open mr-3 text-primary"></i>
                Logout
            </button>
        </>
    )
}


export function AgentNavItems () {
    const dispatch = useDispatch()
    const {token} = useSelector(state => state.user_data)

    const logout = () => {
        dispatch(AgentLogout(token))
    }

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

            <button className="dropdown-item btn btn-secondary rounded py-2 align-middle" type="button" onClick={logout} >
                <i className="fa fa-door-open mr-3 text-primary"></i>
                Logout
            </button>
        </>
    )
}

function loggedOut(params) {
    return (           
        <ul className="navbar-nav flex-row justify-content-lg-end align-items-center d-flex flex-wrap text-body py-2">
            <li className="nav-item d-none d-md-inline">
                <Link className="nav-link pl-md-3 pr-md-2 mr-1 mr-md-4" to="/login">Login</Link>                
            </li>
            <li className="nav-item ml-md-auto w-auto w-sm-auto mr-2 mr-md-auto">
                <Link className="btn btn-primary d-none btn-lg d-md-flex align-items-center" to="/signup">
                    Get Started
                    <img src="/images/add-listing-icon.png" alt="Add listing" className="ml-2" />
                </Link>
            </li>
        </ul>
    )
}
