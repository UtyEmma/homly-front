import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export const PropertiesSliderItem = ({listing}) => {
    
    return (
        <ScrollAnimation className="box px-0" animateIn="fadeInUp">
            <div className="card border-0 hover-change-image">
                <div className="bg-overlay-gradient-1 bg-hover-overlay-gradient-3 rounded-lg card-img h-120">
                    <img src={listing.images[0]} alt={listing.title} />
                    
                    <div className="card-img-overlay d-flex flex-column justify-content-between">
                        <div>
                            <span className="badge mr-2 badge-primary">{listing.tenure === 'sale' ? "For Sale" : "For Rent"}</span>
                        </div>

                        <ul className="list-inline d-flex mb-0 flex-wrap px-2 mr-n5">
                            <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title={`${listing.no_bedrooms} Bedroom"`}>
                                <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                </svg>
                                {listing.no_bedrooms} Br
                            </li>
                            <li className="list-inline-item text-white font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title={`${listing.no_bathrooms} Bathrooms`}>
                                <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                </svg>
                                {listing.no_bathrooms} Ba
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card-body p-0">
                    <h2 className="my-0 mt-1"><a href="single-property-1.html" className="fs-16 text-dark hover-primary lh-2">{listing.title}</a>
                    </h2>
                    <p className="text-gray-light font-weight-500 mb-1">{listing.address}, {listing.city}, {listing.state} </p>
                    <p className="fs-17 font-weight-bold text-heading mb-0">$ {listing.rent}</p>
                </div>
            </div>
        </ScrollAnimation>
    )
}