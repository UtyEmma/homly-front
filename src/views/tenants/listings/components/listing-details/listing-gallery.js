import React from 'react'
import { Link } from 'react-router-dom'
import { FacebookShareButton, InstapaperShareButton, TwitterShareButton } from 'react-share'
import { FavouriteListingButton } from 'views/tenants/favourites/components/favourite-listing-btn'
import GalleryDisplay from '../gallery-display'
import { ListingShareBtn } from '../listing-share-btn'

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
                                     listing.hasOwnProperty('isFavourite')

                                    &&

                                    <FavouriteListingButton listing={listing} />   
                                }
                            </li>
                            <li className="list-inline-item mr-2">
                                <ListingShareBtn listing={listing} />
                            </li>
                        </ul>
                    </div>

                    <GalleryDisplay images={listing.images} title={listing.title} />
 
                </div>
            </div>
        </section>
    )
}
