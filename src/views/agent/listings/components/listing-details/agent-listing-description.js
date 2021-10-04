export const AgentListingDescription = ({listing}) => {
    return (
        <>
         <section className="pb-8 px-6 pt-6 bg-white rounded-lg">
            <div className="d-sm-flex justify-content-sm-between">
                <div className="col-md-9 px-0">
                    <h2 className="fs-25 font-weight-600 lh-15 text-heading">{listing.title}</h2>
                    <p className="mb-0"><i className="fal fa-map-marker-alt mr-2" />{listing.address}, {listing.city}, {listing.state}</p>
                </div>
                <div className="col-md-3 px-0 mt-2 mt-md-0 text-lg-right">
                    <p className="fs-22 text-heading font-weight-bold mb-0">&#8358; {listing.initial_fees.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </div>
            </div>
            <h4 className="fs-22 text-heading mt-6">Description</h4>
            <span className="heading-divider mb-2"></span>
            <p className="mb-0 lh-214" dangerouslySetInnerHTML={{__html: listing.description}}></p>
            </section>
        </>
    )
}
