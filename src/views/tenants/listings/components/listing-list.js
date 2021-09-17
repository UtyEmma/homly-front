import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { FavouriteListingButton } from 'views/tenants/favourites/components/favourite-listing-btn';

export default function ListingList({listing, status}) {

    return (
        <ScrollAnimation animateIn="fadeInUp">
            <div className="card mb-8 mb-lg-6 border-0 listing-list">
                <div className="row no-gutters">
                    <div className="col-md-6 mb-5 mb-md-0 pr-md-6">
                        <div className="position-relative hover-change-image bg-hover-overlay rounded-lg card-img listing-image-container">
                            <img className="listing-image" style={{minHeight: '100%'}} src={listing.images[0]} alt={listing.title} />
                            <div className="card-img-overlay p-2 d-flex flex-column">
                                <div>
                                    <span className="badge badge-indigo">for Rent</span>
                                </div>
                                <div className="mt-auto d-flex hover-image">
                                    <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                        <li className="list-inline-item mr-2" data-toggle="tooltip" title={`${listing.images.length} Images`}>
                                            <button className="btn p-0 text-white hover-primary">
                                            <i className="far fa-images" /><span className="pl-1">{listing.images.length}</span>
                                            </button>
                                        </li>
                                    </ul>

                                    {
                                        status === 'tenant'

                                        &&

                                        <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                            <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Favourites">
                                                <FavouriteListingButton listing={listing} />
                                            </li>
                                        </ul>
                                    }
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6 ">
                        <div className="card-body p-0">
                            <h2 className="card-title my-0"><a href={`/${listing.agent.username}/${listing.slug}`} className="fs-16 lh-2 text-dark hover-primary d-block">{listing.title}</a>
                            </h2>
                            <p className="card-text mb-1 font-weight-500 text-gray-light">{listing.address}, {listing.city}, {listing.state}</p>
                            <p className="card-text mb-2 ml-0" style={{textOverflow: 'ellipsis'}}>{listing.description.split(" ").splice(0,15).join(" ")}</p>
                            <p className="card-text fs-17 font-weight-bold text-heading mb-3">
                                &#8358; {listing.rent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </p>
                        </div>
                        <div className="card-footer pt-3 bg-transparent px-0 pb-0">
                            <ul className="list-inline d-flex mb-0 flex-wrap mr-n2">
                                <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    {listing.no_bedrooms} Br
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                    <use xlinkHref="#icon-shower" />
                                    </svg>
                                    {listing.no_bathrooms} Ba
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
}
