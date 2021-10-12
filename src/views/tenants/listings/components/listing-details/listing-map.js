import ListingMap from 'components/maps/googlemap'
import React from 'react'

export const MapItem = ({listing}) => {
    return (
        <>
            <section>
                <ListingMap longitude={parseFloat(listing.longitude)} latitude={parseFloat(listing.latitude)} />
            </section>   
        </>
    )
}
