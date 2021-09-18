import React from 'react'
import { Link } from 'react-router-dom'
import { FacebookShareButton } from 'react-share'
import { FavouriteListingButton } from 'views/tenants/favourites/components/favourite-listing-btn'
import GalleryDisplay from '../gallery-display'

export default function ListingGallery({listing}) {
    return (
        <section className="bg-white shadow-5 pb-1">
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb py-3">
                    <li className="breadcrumb-item fs-12 letter-spacing-087">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item fs-12 letter-spacing-087">
                        <Link to="/listings">Listing</Link>
                    </li>
                    <li className="breadcrumb-item fs-12 letter-spacing-087 active">{listing.title}</li>
                    </ol>
                </nav>
                <div className="galleries position-relative" >
                    <div className="position-absolute pos-fixed-top-right z-index-3">
                        <ul className="list-inline pt-4 pr-5">
                            <li className="list-inline-item mr-2">
                                {
                                    listing.isFavourite

                                    &&

                                    <FavouriteListingButton listing={listing} />   
                                }
                            </li>
                            <li className="list-inline-item mr-2">
                            <button type="button" className="btn btn-white p-0 d-flex align-items-center justify-content-center w-40px h-40 text-heading bg-hover-primary hover-white rounded-circle border-0 shadow-none" data-container="body" data-toggle="popover" data-placement="top" data-html="true">
                                {/* <FacebookShareButton 
                                    url={window.location}
                                    quote={"CampersTribe - World is yours to explore"}
                                    hashtag="#camperstribe"
                                    className="">
                                        <i className="fab fa-facebook fs-26 text-white" ></i>
                                </FacebookShareButton> */}
                                <i className="far fa-share-alt" />
                            </button>
                            </li>
                        </ul>
                    </div>

                    <GalleryDisplay images={listing.images} title={listing.title} />
 
                </div>
            </div>
        </section>
    )
}
