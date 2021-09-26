export const AgentListingAmenities = ({listing}) => {

    return (
        <>
            <section className="mt-2 pb-3 px-6 pt-5 bg-white rounded-lg">
                <h4 className="fs-22 text-heading">Facts and Features</h4>
                <span className="heading-divider mb-6"></span>
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
        </>
    )
}
