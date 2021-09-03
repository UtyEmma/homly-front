import { AgentLogout } from 'providers/redux/_actions/agent-actions'
import { TenantLogout } from 'providers/redux/_actions/user-actions'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function ProfileButton({isloggedIn, user}) {

    return (
        <>
            {isloggedIn ? LoggedIn(user) : loggedOut()}
        </>
    )
}

function LoggedIn(user) {

    const dispatch = useDispatch()
    
    const logout = () => {
        let type = localStorage.getItem('type');
        type === 'tenant' ? dispatch(TenantLogout()) : dispatch(AgentLogout())
    }

    return (           
        <ul className="navbar-nav flex-row justify-content-lg-end align-items-center d-flex flex-wrap text-body py-2">            
            <li className="nav-item mr-4">
                <a className="nav-link px-2 position-relative mr-md-2 pr-2 pl-0 pl-lg-2" href="/wishlist">
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
                <div className="dropdown-menu px-3 dropdown-menu-right">
                    <div className="row">
                        <div className="col-12">
                            <a className="dropdown-item rounded py-2 align-middle" href="/profile">
                                <i className="fa fa-user mr-2"></i>
                                My Profile
                            </a>

                            <a className="dropdown-item rounded py-2 align-middle" href="/favourites">
                                <i className="fa fa-heart mr-2"></i>
                                Favourites
                            </a>


                            <a className="dropdown-item rounded py-2 align-middle" href="/wishlists">
                                <i className="fa fa-heart mr-2"></i>
                                Wishlists
                            </a>


                            <button className="dropdown-item  btn btn-secondary rounded py-2 align-middle" type="button" onClick={logout} >
                                <i className="mr-2"></i>
                                Logout
                            </button>
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
                <a className="nav-link pl-3 pr-2 mr-1" href="/login">Login</a>
                |
                <a className="nav-link pl-3 pr-2 mr-1" href="/signup">Sign Up</a>
            </li>
            <li className="nav-item ml-auto w-100 w-sm-auto">
                <a className="btn btn-primary btn-lg d-flex align-items-center" href="/agent-signup">
                    For Agents
                    <img src="/images/add-listing-icon.png" alt="Add listing" className="ml-2" />
                </a>
            </li>
        </ul>
    )
}
