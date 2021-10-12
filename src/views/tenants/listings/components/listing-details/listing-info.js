import React from 'react'

export default function ListingInfo({listing}) {
    
    return (
        <>
            <section className="rounded-lg">
                <ul className="list-inline d-sm-flex align-items-sm-center mb-2">
                <li className={`list-inline-item badge mr-3 text-capitalize ${listing.status === 'active' ? 'badge-success' : 'badge-warning'}`}>{listing.status}</li>
                <li className="list-inline-item mr-2 mt-2 mt-sm-0"><i className="fal fa-clock mr-1" />{listing.period}</li>
                {/* <li className="list-inline-item mt-2 mt-sm-0"><i className="fal fa-eye mr-1" />{listing.views} views</li> */}
                </ul>
                <div className="d-sm-flex justify-content-sm-between">
                <div className="col-md-9 px-0">
                    <h2 className="fs-24 fs-md-28 font-weight-600 lh-15 text-heading">{listing.title}</h2>
                    <p className="mb-0"><i className="fal fa-map-marker-alt mr-2" />
                            {listing.address}, {listing.city}, {listing.state}</p>
                </div>
                <div className="col-md-3 px-0 mt-2 mt-md-0 text-lg-right">
                    <p className="fs-22 text-heading font-weight-bold mb-0">&#8358; {listing.rent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    <p className="mb-0">{listing.tenure}</p>
                </div>
                </div>
                <h4 className="fs-22 text-heading mt-6 mb-2">Description</h4>
                <p className="mb-0 lh-214" dangerouslySetInnerHTML={{__html: listing.description}}></p>
            </section>

            <section className="mt-2 pb-3 pt-5 bg-white rounded-lg">
                <h4 className="fs-22 text-heading mb-6">Facts and Features</h4>
                <div className="row">
                <div className="col-6 col-md-3 mb-6">
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
                <div className="col-6 col-md-3 mb-6">
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
                <div className="col-6 col-md-3 mb-6">
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
                <div className="col-6 col-md-3 mb-6">
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
        </>
    )
}
