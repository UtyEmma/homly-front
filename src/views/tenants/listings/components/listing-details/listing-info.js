import React, { useEffect, useState } from 'react'

export default function ListingInfo({listing}) {
    
    return (
        <>
            <section className="rounded-lg">
                <ul className="list-inline d-sm-flex align-items-sm-center mb-2">
                <li className={`list-inline-item badge mr-3 text-capitalize ${listing.status === 'active' ? 'badge-success' : 'badge-warning'}`}>{listing.status}</li>
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
                    <p className="fs-22 text-heading font-weight-bold mb-0">&#8358; {listing.rent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    <p className="mb-0">{listing.tenure}</p>
                </div>
                </div>
                <h4 className="fs-22 text-heading mt-6 mb-2">Description</h4>
                <p className="mb-0 lh-214">{listing.description}</p>
            </section>
        </>
    )
}
