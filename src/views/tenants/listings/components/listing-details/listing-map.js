import ListingMap from 'components/maps/googlemap'
import React from 'react'

export const MapItem = ({listing}) => {
    return (
        <>
            <section>
                <ListingMap longitude={Number(listing.longitude)} latitude={Number(listing.latitude)} />
            </section>   
        </>
    )
}
