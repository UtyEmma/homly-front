import React from 'react'
import ListingInfo from './listing-info'
import ListingReviews from './listing-reviews'
import ListingStats from './listing-stats'
import ListingVideo from './listing-video'
import ListingMap from './location-map'
import SimilarListings from './similar-listings'

export default function ListingComponents({listing}) {
    return (
        <>
            <ListingInfo listing={listing}/>
            <ListingVideo video={listing.video_link}/>
            <ListingReviews listing_id={listing.unique_id}/>
            <ListingStats/>
            <ListingMap/>
            <SimilarListings/>
        </>
    )
}
