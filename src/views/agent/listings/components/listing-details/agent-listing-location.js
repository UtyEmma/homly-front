import ListingMap from "components/maps/googlemap"

export const AgentListingLocation = ({listing}) => {
    return (
        <>
            <section className="pb-8 px-6 pt-6 bg-white rounded-lg my-3">
            <h4 className="fs-22 text-heading">Property Location</h4>
            <span className="heading-divider mb-6"></span>
                <div className="col-12 mb-3 bg-gray-01 p-3 rounded">
                    <div className="row d-flex justify-content-between">
                        <div className="col-auto mb-6">
                            <div className="media">
                                <div className="p-2 bg-white shadow-xxs-1 rounded-lg mr-2">
                                  <i className="fs-30 text-primary fa fa-map"></i>
                                </div>
                                <div className="media-body">
                                    <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">State</h5>
                                    <p className="mb-0 fs-13 font-weight-bold text-heading">{listing.state}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-auto mb-6">
                            <div className="media">
                                <div className="p-2 bg-white shadow-xxs-1 rounded-lg mr-2">
                                <i className="fs-30 text-primary fa fa-road"></i>
                                </div>
                                <div className="media-body">
                                    <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">City</h5>
                                    <p className="mb-0 fs-13 font-weight-bold text-heading">{listing.city}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-auto mb-6">
                            <div className="media">
                                <div className="p-2 px-3 bg-white shadow-xxs-1 rounded-lg mr-2">
                                    <i className="fs-30 text-primary fa fa-map-marker-alt"></i>
                                </div>
                                <div className="media-body">
                                    <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">Address</h5>
                                    <p className="mb-0 fs-13 font-weight-bold text-heading">{listing.address}</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-auto mb-6">
                            <div className="media">
                                <div className="p-2 bg-white shadow-xxs-1 rounded-lg mr-2">
                                <i className="fs-30 text-primary fa fa-map-marked-alt"></i>
                                </div>
                                <div className="media-body">
                                    <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">Landmark</h5>
                                    <p className="mb-0 fs-13 font-weight-bold text-heading">{listing.landmark}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <ListingMap longitude={Number(listing.longitude)} latitude={Number(listing.latitude)} />


            </section>
        </>
    )
}
