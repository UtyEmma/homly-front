import React from 'react'
import ListingGallery from './listing-gallery'
import ListingInfo from './listing-info'
import ListingReviews from './listing-reviews'
import ListingStats from './listing-stats'
import ListingVideo from './listing-video'
import ListingMap from './location-map'
import SimilarListings from './similar-listings'

export default function ListingComponents({listing}) {
    return (
        <>
            <ListingInfo/>
            <ListingVideo/>
            <ListingReviews/>
            <ListingStats/>
            <ListingMap/>
            <SimilarListings/>
        </>
    )
}
