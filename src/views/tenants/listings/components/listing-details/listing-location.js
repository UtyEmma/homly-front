import ListingMap from 'components/maps/googlemap'
import React from 'react'

export default function ListingLocation({listing}) {
    return (
        <>
            <section className="mt-2 pb-6 px-6 pt-6 bg-white rounded-lg">
                <h4 className="fs-22 text-heading mb-6">Location</h4>
                <div className="position-relative">
                <ListingMap longitude={Number(listing.longitude)} latitude={Number(listing.latitude)} />
                <p className="mb-0 p-3 bg-white shadow rounded-lg position-absolute pos-fixed-bottom mb-4 ml-4 lh-17 z-index-2">
                    {listing.address} <br /> {listing.city}, {listing.state}</p>
                </div>
            </section>
        </>
    )
}
