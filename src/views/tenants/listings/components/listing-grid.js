import React from 'react'
import '../css/listing.css'

export default function ListingGrid({listing}) {
    return (
        <div className="col-md-6 mb-6 listing-grid">
            <div className="card border-0" >
                <div className="position-relative hover-change-image bg-hover-overlay rounded-lg card-img listing-image-container">
                <img className="listing-image" style={{minHeight: '100%'}} src={listing.images[0]} alt={listing.title} />
                <div className="card-img-overlay d-flex flex-column">
                    <div>
                        <span className="badge badge-indigo">for Rent</span>
                    </div>
                    <div className="mt-auto d-flex hover-image">
                    <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                        <li className="list-inline-item mr-2" data-toggle="tooltip" title={`${listing.images.length} Images`}>
                            <a href="#" className="text-white hover-primary">
                                <i className="far fa-images" /><span className="pl-1">{listing.images.length}</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                        <a href="#" className="text-white fs-20 hover-primary">
                            <i className="far fa-heart" />
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="card-body pt-3 px-0 pb-1">
                    <h2 className="fs-16 mb-1">
                        <a href={`listings/${listing.slug}`} className="text-dark hover-primary">{listing.title}</a>
                    </h2>
                    
                    <p className="font-weight-500 text-gray-light mb-0">{listing.address}, {listing.city}, {listing.state}</p>
                
                    <p className="card-text mb-2 ml-0" style={{textOverflow: 'ellipsis'}} >{listing.description}</p>
                
                    <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                        &#8358; {listing.initial_fees.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>

                </div>
                <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                <ul className="list-inline mb-0">
                    <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bedroom">
                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-bedroom" />
                    </svg>
                    {listing.no_bedrooms} Br
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bathrooms">
                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                        <use xlinkHref="#icon-shower" />
                    </svg>
                    {listing.no_bathrooms} Ba
                    </li>
                </ul>
                </div>
            </div>
            </div>
    )
}
