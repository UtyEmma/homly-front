import React, { useEffect, useState } from 'react'

export default function ListingInfo({listing}) {
    
    let [amenities, setAmenities] = useState([]);
    let items = JSON.parse(listing.amenities);
    // let amenities = []
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
            <section className="pb-8 px-6 pt-6 bg-white rounded-lg">
                <ul className="list-inline d-sm-flex align-items-sm-center mb-2">
                <li className="list-inline-item badge badge-orange mr-2">Featured</li>
                <li className="list-inline-item badge badge-primary mr-3">For Sale</li>
                <li className="list-inline-item mr-2 mt-2 mt-sm-0"><i className="fal fa-clock mr-1" />{listing.period}</li>
                <li className="list-inline-item mt-2 mt-sm-0"><i className="fal fa-eye mr-1" />{listing.views} views</li>
                </ul>
                <div className="d-sm-flex justify-content-sm-between">
                <div>
                    <h2 className="fs-35 font-weight-600 lh-15 text-heading">{listing.title}</h2>
                    <p className="mb-0"><i className="fal fa-map-marker-alt mr-2" />
                            {listing.address}, {listing.city}, {listing.state}</p>
                </div>
                <div className="mt-2 text-lg-right">
                    <p className="fs-22 text-heading font-weight-bold mb-0">&#8358; {listing.rent}</p>
                    <p className="mb-0">{listing.tenure}</p>
                </div>
                </div>
                <h4 className="fs-22 text-heading mt-6 mb-2">Description</h4>
                <p className="mb-0 lh-214">{listing.description}</p>
            </section>
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
                    <dd>&#8358; {listing.rent}</dd>
                </dl>
                <dl className="col-sm-6 mb-0 d-flex">
                    <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">First Payment</dt>
                    <dd>&#8358; {listing.initial_fees}</dd>
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
