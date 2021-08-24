export const AgentListingDescription = ({listing}) => {
    return (
        <>
         <section className="pb-8 px-6 pt-6 bg-white rounded-lg">
            <div className="d-sm-flex justify-content-sm-between">
                <div>
                    <h2 className="fs-30 font-weight-600 lh-15 text-heading">{listing.title}</h2>
                    <p className="mb-0"><i className="fal fa-map-marker-alt mr-2" />{listing.address}, {listing.city}, {listing.state}</p>
                </div>
                <div className="mt-2 text-lg-right">
                    <p className="fs-22 text-heading font-weight-bold mb-0">&#8358; {listing.initial_fees.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </div>
            </div>
            <h4 className="fs-22 text-heading mt-6">Description</h4>
            <span className="heading-divider mb-2"></span>
            <p className="mb-0 lh-214">{listing.description}</p>
            </section>
        </>
    )
}
