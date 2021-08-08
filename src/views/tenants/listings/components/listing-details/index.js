import React from 'react'
import ListingInfo from './listing-info'
import ListingReviews from './listing-reviews'
import ListingStats from './listing-stats'
import ListingVideo from './listing-video'
import ListingLocation from './listing-location'
import SimilarListings from './similar-listings'

export default function ListingComponents({listing, status}) {
    return (
        <>
            <ListingInfo listing={listing}/>
            <ListingVideo video={listing.video_link}/>
            <ListingLocation listing={listing}/>
            <ListingReviews status={status} listing_id={listing.unique_id}/>
            <ListingStats />
            <SimilarListings/>
        </>
    )
}
