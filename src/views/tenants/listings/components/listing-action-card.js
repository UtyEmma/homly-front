import RatingStar from 'components/rating/rating-star'
import { DeleteItem, SuspendItem } from 'providers/redux/_actions/admin-actions'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ConfirmActionDialog } from 'views/layouts/components/modals/confirm-action-dialog'

export default function ListingAction({agent, listing}) {
    
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const {adminMode} = useSelector((state) => state.admin_mode)

    const suspendListing = () => {
        setShow(true)
    }

    const callback = () => {
        dispatch(SuspendItem('listing', listing.unique_id))
    }

    const deleteListing = () => {
        return (
            <ConfirmActionDialog callback={dispatch(DeleteItem('listing', listing.unique_id, `/listings`))} />
        )
    }
    
    return (
        <>
            <div className="card border-0 shadow-hover-3 px-6 position-stick sticky-top mt-4 mt-md-0" style={{top: '50px', zIndex: '0'}}>
                <div className="card-body text-center pt-6 pb-2 px-0">
                    <a href={"agent-details-1.html"} className="d-inline-block mb-2">
                        {   
                            agent.avatar 
                            
                            ? 
                            
                            <div className="rounded-circle w-120px h-120 d-flex align-items-center justify-content-center overflow-hidden"><img src={agent.avatar} className="w-120px h-120" style={{objectFit: 'cover'}} alt={`${agent.firstname} ${agent.lastname}`} /></div> 
                            
                            : 
                            <div className="d-inline-block mb-2 w-120px h-120 bg-gray-01 rounded-circle fs-30 font-weight-500 text-muted d-flex align-items-center justify-content-center text-uppercase mb-4 mb-sm-0">
                                {`${agent.firstname.charAt(0).toUpperCase()}${agent.lastname.charAt(0).toUpperCase()}`}
                            </div>
                        }
                    </a>

                    <Link to={`/${agent.username}`} className="d-block fs-16 lh-214 text-dark mb-0 font-weight-500 hover-primary">{agent.firstname} {agent.lastname}</Link>
                    
                    <p className="mb-0">{agent.title}</p>
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item fs-13 text-heading font-weight-500">{agent.rating}/5</li>
                        <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                            <ul className="list-inline mb-0">
                                <RatingStar rating={agent.rating ? agent.rating : 1}/>
                            </ul>
                        </li>
                        <li className="list-inline-item fs-13 text-gray-light">({agent.no_reviews ? agent.no_reviews : 0} reviews)</li>
                    </ul>
                </div>
                <div className="card-footer bg-white px-0 pt-1 pb-6">
                <ul className="list-group list-group-no-border pb-1">
                    <li className="list-group-item d-flex align-items-sm-center lh-114 row m-0 px-0 pt-3 pb-0">
                    <span className="col-sm-4 p-0 fs-13 mb-1 mb-sm-0">Phone</span>
                    <span className="col-sm-8 p-0 text-heading font-weight-500">{agent.phone_number}</span>
                    </li>
                    <li className="list-group-item d-flex align-items-sm-center row m-0 px-0 pt-2 pb-0">
                    <span className="col-sm-4 p-0 fs-13 lh-114">Email</span>
                    <span className="col-sm-8 p-0">{agent.email}</span>
                    </li>
                    <li className="list-group-item d-flex align-items-sm-center lh-114 row m-0 px-0 pt-3 pb-0">
                    <span className="col-sm-4 p-0 fs-13 mb-1 mb-sm-0">Social</span>
                    <ul className={`list-inline mb-0 ${agent.twitter || agent.facebook || agent.instagram || agent.website ? "" : "h-30"}`}>
                        {
                            agent.twitter 
                            
                            &&

                            <li className="list-inline-item mr-6">
                                <a href={agent.twitter} target="_blank" className="text-muted hover-primary" rel="noreferrer">
                                    <i className="fab fa-twitter" /></a>
                            </li>
                        }

                        {
                            agent.facebook

                            &&

                            <li className="list-inline-item mr-6">
                                <a href={agent.facebook} target="_blank" className="text-muted hover-primary" rel="noreferrer"><i className="fab fa-facebook-f"/></a>
                            </li>
                        }
                        

                        {
                            agent.instagram

                            && 

                            <li className="list-inline-item mr-6">
                                <a href={agent.instagram} target="_blank" className="text-muted hover-primary" rel="noreferrer"><i className="fab fa-instagram" /></a>
                            </li>
                        }


                        {
                            agent.website

                            && 

                            <li className="list-inline-item">
                                <a href={agent.website} target="_blank" className="text-muted hover-primary" rel="noreferrer"><i className="fa fa-globe-africa" /></a>
                            </li>
                        }
                    </ul>
                    </li>
                </ul>

                <div className="mt-5" >
                    <Link to={`/${agent.username}`} className="btn btn-block btn-lg btn-outline-primary">View Profile</Link>
                </div>


                {
                    adminMode

                    &&

                    <>
                        <hr/>
                    
                        <div className="">
                            {
                                listing.status === 'rented'

                                ?

                                <button type="button" disabled className="btn btn-block btn-lg btn-success hover-white text-capitalize">Property Rented</button>

                                :
                                <button type="button" onClick={suspendListing} className="btn btn-block btn-lg btn-outline-warning hover-white text-capitalize">{listing.status === 'active' ? 'Suspend' : 'Unsuspend'} Listing</button>
                            }
                            <button type="button" onClick={deleteListing} className="btn btn-block btn-lg btn-danger">Delete Listing</button>
                        </div>
                    </>
                }
                </div>

                <ConfirmActionDialog show={show} setShow={setShow} callback={callback} />
            </div> 
        </>
    )
}
