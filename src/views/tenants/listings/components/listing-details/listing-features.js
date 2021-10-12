import React, { useCallback, useEffect, useState } from 'react'

export const ListingFeatures = ({listing}) => {
    let [amenities, setAmenities] = useState([]);
    let items = JSON.parse(listing.amenities);
    
    const parseAmenities = useCallback(() => {
        let array = []
        for(let amenity in items) array.push(amenity) 
        setAmenities(array)
    }, [listing])

    useEffect(() => {
        parseAmenities()
    }, [listing])

    return (
        <>
            <section className="mt-2 pt-5 bg-white rounded-lg">
                <h4 className="fs-22 text-heading mb-4">Property Amenities</h4>
                <ul className="list-unstyled mb-0 row no-gutters">
                    {
                        amenities && amenities.length > 0

                        ?

                        amenities.map((amenity, index) => {
                            return (
                                <li className="col-sm-3 col-6 mb-2 text-capitalize" key={index}><i className="far fa-check mr-2 text-primary" />{amenity.replace(/_/g," ")}</li>
                            )
                        })
                        
                        :

                        <div></div>
                    }
                </ul>
            </section>  
            <section className="mt-2 pt-5 bg-white rounded-lg">
                <h4 className="fs-22 text-heading mb-4">Additional Details</h4>
                <div className="row">
                    <dl className="col-sm-6 mb-0 d-flex">
                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Rent</dt>
                        <dd>&#8358; {listing.rent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</dd>
                    </dl>
                    <dl className="col-6 col-sm-6 mb-0 d-flex">
                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">First Payment</dt>
                        <dd>&#8358; {listing.initial_fees.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</dd>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex">
                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Property type</dt>
                        <dd>{listing.type}</dd>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex">
                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Property status</dt>
                        <dd className="text-capitalize">{listing.status}</dd>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex">
                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Bedrooms</dt>
                        <dd>{listing.no_bedrooms}</dd>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex">
                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Bathrooms</dt>
                        <dd>{listing.no_bathrooms}</dd>
                    </dl>
                </div>
            </section>
            <section className="mt-2 pt-5 bg-white rounded-lg">
                <h4 className="fs-22 text-heading mb-2">Extra Info</h4>
                <p className="mb-0 lh-214" dangerouslySetInnerHTML={{__html: listing?.extra_info}}></p>
            </section>  
        </>
    )
}
