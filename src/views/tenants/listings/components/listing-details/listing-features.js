import React, { useEffect, useState } from 'react'

export const ListingFeatures = ({listing}) => {
    let [amenities, setAmenities] = useState([]);
    let items = JSON.parse(listing.amenities);
    
    const parseAmenities = () => {
        let array = []
        for(let amenity in items){
            array.push(amenity)
        }
        setAmenities(array)
    }

    useEffect(() => {
        parseAmenities()
    }, [listing])

    return (
        <>
            <section className="mt-2 pb-3 px-6 pt-5 bg-white rounded-lg">
                <h4 className="fs-22 text-heading mb-6">Facts and Features</h4>
                <div className="row">
                <div className="col-lg-3 col-sm-4 mb-6">
                    <div className="media">
                    <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                        <svg className="icon icon-family fs-32 text-primary"><use xlinkHref="#icon-family" /></svg>
                    </div>
                    <div className="media-body">
                        <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">Type</h5>
                        <p className="mb-0 fs-13 font-weight-bold text-heading">{listing.type}</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-4 mb-6">
                    <div className="media">
                    <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                        <svg className="icon icon-status fs-32 text-primary"><use xlinkHref="#icon-status" /></svg>
                    </div>
                    <div className="media-body">
                        <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">Status</h5>
                        <p className="mb-0 fs-13 font-weight-bold text-heading text-capitalize">{listing.status}</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-4 mb-6">
                    <div className="media">
                    <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                        <svg className="icon icon-bedroom fs-32 text-primary"><use xlinkHref="#icon-bedroom" /></svg>
                    </div>
                    <div className="media-body">
                        <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">Bedrooms</h5>
                        <p className="mb-0 fs-13 font-weight-bold text-heading">{listing.no_bedrooms}</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-4 mb-6">
                    <div className="media">
                    <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                        <svg className="icon icon-sofa fs-32 text-primary"><use xlinkHref="#icon-sofa" /></svg>
                    </div>
                    <div className="media-body">
                        <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">bathrooms</h5>
                        <p className="mb-0 fs-13 font-weight-bold text-heading">{listing.no_bathrooms}</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="mt-2 pb-6 px-6 pt-5 bg-white rounded-lg">
                <h4 className="fs-22 text-heading mb-4">Additional Details</h4>
                <div className="row">
                <dl className="col-sm-6 mb-0 d-flex">
                    <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Rent</dt>
                    <dd>&#8358; {listing.rent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</dd>
                </dl>
                <dl className="col-sm-6 mb-0 d-flex">
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
            <section className="mt-2 pb-7 px-6 pt-5 bg-white rounded-lg">
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
        </>
    )
}
