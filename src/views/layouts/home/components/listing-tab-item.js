import React from 'react'

export default function ListingTabItem({listing}) {
    return (
        <div className="col-xxl-3 col-lg-4 col-md-6 mb-6" >
            <div className="card border-0 bg-overlay-gradient-3 rounded-lg hover-change-image">
                <img src={listing.images[0]} style={{minHeight: '100%', objectFit: 'cover', objectPosition: 'center'}} className="card-img" alt={listing.title} />
               
                <div className="card-img-overlay d-flex flex-column">
                    <div className="d-flex">
                        <div className="mr-auto h-24 d-flex">
                            <span className="badge badge-primary mr-2">For Sale</span>
                        </div>
                        <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                            <li className="list-inline-item">
                            <a href="#" className="w-40px h-40 rounded-circle d-inline-flex align-items-center justify-content-center text-white bg-dark-opacity-03 bg-hover-primary hover-white" data-toggle="tooltip" title="Wishlist">
                                <i className="far fa-heart" />
                            </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto px-2">
                        <p className="fs-17 font-weight-bold text-white mb-0 lh-13">&#8358; {listing.initial_fees.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        <h4 className="mt-0 mb-2 lh-1"><a href={`listings/${listing.slug}`} className="fs-16 text-white">{listing.title}</a></h4>
                        <div className="border-top border-white-opacity-03 pt-2">
                            <ul className="list-inline d-flex mb-0 flex-wrap mt-2 mt-lg-0 mr-n5">
                            <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                <i className="fa fa-bed mr-1" /> 
                                {listing.no_bedrooms} Br
                            </li>
                            <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                <i className="fa fa-shower mr-1" /> 
                                {listing.no_bathrooms} Ba
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
