import React from 'react'

const  WishlistItem = ({item}) => {
    return (
        <div className="col-xxl-3 col-lg-4 col-md-6 px-2 h-100 mb-2">
            <div className="card p-2 border">
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                            <div className="wishlist-icon-container">
                                
                            </div>
                        </div>

                        <div className="col-8">
                            <p className="font-weight-500">{item.desc}</p>
                            <p className="text-gray-light mb-1 fs-14">{item.category} | {item.area} {item.city}, {item.state}</p>
                            <p className="fs-17 font-weight-bold text-heading mb-1"><i className="fa"></i> &#8358; {item.budget}.00 </p>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-around">
                        <div className="col-6">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-4" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-4" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                            </ul>
                        </div>

                        <div className="col-6 d-flex justify-content-end">
                            {/* <button className="btn btn-sm hover hover-flash bg-gray-03 "><i className="fa fa-eye"></i></button> */}
                            {/* <button className="btn btn-sm hover hover-flash bg-gray-03 px-2 ml-2 "><i className="fa fa-trash-alt"></i></button> */}
                            <a href="" className="mr-2">Edit</a>
                            <a href="">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishlistItem;

