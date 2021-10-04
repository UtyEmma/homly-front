import React from 'react'

export const AgentWishlistItem = ({wishlist, user, setShow, setDetails}) => {
    const details = {
        desc: wishlist.desc,
        area: wishlist.area,
        city: wishlist.city,
        state: wishlist.state,
        category: wishlist.category,
        budget: wishlist.budget,
        additional: wishlist.additional,
        id: wishlist.unique_id,
        phone: user.phone,
        email: user.email
    }

    const viewDetails = () => {
        setDetails(details)
        setShow(true)
    }


    return (
        <>
            <div className="col-md-4 col-xxl-3 mb-6" >
                    <div className="card shadow-hover-1">
                        <div className="card-header bg-white d-flex justify-content-between align-content-center">
                            <div className="col-12 p-0">
                                <div className="row d-flex align-content-center justify-content-between">
                                    <div className="col-auto d-flex align-items-center">
                                        {   user.avatar 
                                            ? 
                                            <div className="rounded-circle h-40 w-40px overflow-hidden">
                                                <img src={user.avatar} className="h-40 w-40px" style={{objectFit: 'cover'}} alt={`${user.firstname}`} />
                                            </div> 
                                            : 
                                            <div className="d-inline-block mb-2 h-40 w-40px  mr-2 bg-gray-01 rounded-circle fs-25 font-weight-500 text-muted d-flex align-items-center justify-content-center text-uppercase mb-4 mb-sm-0 mx-auto">
                                                {`${user.firstname.charAt(0).toUpperCase()}${user.lastname.charAt(0).toUpperCase()}`}
                                            </div>
                                        }

                                        <div className="ml-2">
                                            <p className="font-weight-bold mb-0">{user.firstname} {user.lastname}</p>
                                            <p className="mb-0">{user.email}</p>
                                        </div>
                                    </div>

                                    <div className="col-auto h-100 pt-5">
                                        {
                                            user.phone

                                            &&

                                            <a href={`tel:${user.phone}`} ><i className="fa fa-phone-alt mr-4"></i></a>

                                        }
                                        <a href={`mailto:${user.email}`} ><i className="fa fa-envelope"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-3">
                            <h2 className="card-title fs-16 mb-0 text-truncate">{wishlist.desc}
                        </h2>
                            <p className="card-text font-weight-500 text-gray-light mb-2">{wishlist.state}, {wishlist.city}</p>
                            <ul className="list-inline d-flex mb-0 flex-wrap">
                                <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2 " data-toggle="tooltip" title="3 Br">
                                <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                </svg>
                                {wishlist.no_bedrooms} Br
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="3 Ba">
                                <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                </svg>
                                {wishlist.no_bathrooms} Ba
                                </li>
                            </ul>
                        </div>
                    <div className="card-footer bg-transparent border-0 d-flex justify-content-between align-items-center pb-3 pt-0">
                        <div className="mr-auto">
                            <p className="mb-0 font-weight-bold">Budget</p>
                            <span className="text-heading lh-15 font-weight-bold fs-17">&#8358; {wishlist.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                            <span className="text-gray-light">/year</span>
                        </div>
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <button onClick={viewDetails} title="View" className="btn btn-sm btn-outline-primary">View Details</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
