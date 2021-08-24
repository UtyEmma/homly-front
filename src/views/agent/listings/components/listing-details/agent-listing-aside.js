export const AgentListingAside = ({listing}) => {
    return (
        <>
            <div className="bg-white rounded-lg py-lg-6 pl-lg-6 pr-lg-3 p-4 position-sticky sticky-top"  style={{top: '50px'}}>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="badge badge-pill badge-success fs-12 px-3">{listing.status}</span>
                    <p className="mt-3"><i className="fal fa-clock mr-1" />{listing.period}</p>
                </div>
                <div className="row mt-5">
                    <div className="mb-3">
                    <div className="media">
                        <div className="p-2 shadow-xxs-1 rounded-lg mr-2 lh-1">
                            <i className="fs-18 text-primary fa fa-eye"></i>
                        </div>
                        <div className="media-body">
                        <h5 className="fs-13 font-weight-normal mb-0">Views</h5>
                        <p className="mb-0 fs-13 font-weight-bold text-dark">{listing.views}</p>
                        </div>
                    </div>
                    </div>
                    <div className="mb-3 ml-3">
                    <div className="media">
                        <div className="p-2 shadow-xxs-1 rounded-lg mr-2 lh-1">
                            <i className="fs-18 text-primary fa fa-star"></i>
                        </div>
                        <div className="media-body">
                        <h5 className="fs-13 font-weight-normal mb-0">Reviews</h5>
                        <p className="mb-0 fs-13 font-weight-bold text-dark">{listing.no_reviews}</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="mr-xl-2">
                {/* rounded border text-body bg-hover-white border-hover-primary hover-primary" */}
                    <button type="button" className="btn btn-outline-success btn-lg btn-block border-success rounded border bg-hover-success border-hover-0 hover-white">Set As Rented <i className="ml-1 fa fa-sign"></i></button>
                    <hr/>
                    <a href="#" className="btn btn btn-primary btn-lg btn-block rounded border-primary bg-hover-white border-hover-primary hover-primary">Preview Property <i className="ml-1 fa fa-external-link-alt"></i></a>
                    <button type="button" className="btn btn-outline-primary btn-lg btn-block rounded border text-body border-hover-primary hover-white mt-4" data-toggle="modal" data-target="#exampleModal">Edit Property Info <i className="ml-1 far fa-edit"></i></button>
                </div>
            </div>

        </>
    )
}
