import React from 'react'

const  WishlistItem = () => {
    return (
        <div className="col-xxl-3 col-lg-4 col-md-6 px-2 h-100">
            <div className="card p-2 border">
                <div className="card-body">
                <h2 className="fs-16 mb-1">Self Contained</h2>
                <p className="font-weight-500 text-gray-light mb-1">Independence Layout, Enugu North, Enugu</p>
                <p className="fs-17 font-weight-bold text-heading mb-1">
                    <i className="fa"></i> $1.250.000
                </p>
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
                    <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-4" data-toggle="tooltip" title="Size">
                    <svg className="icon icon-square fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-square" />
                    </svg>
                    2300 Sq.Ft
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="1 Garage">
                    <svg className="icon icon-Garage fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-Garage" />
                    </svg>
                    1 Gr
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default WishlistItem;

