export const ListingToast = ({listing}) => {
    return (
        <div className="card border-0 hover-change-image">
            <div className="bg-hover-overlay rounded-lg card-img">
                <img src={listing.images[0]} alt="Home in Metric Way" />
            </div>
            <div className="card-body pt-3 px-0 pb-1">
                <h2 className="fs-16 mb-1"><p className="text-dark hover-primary">{listing.title}</p></h2>
                <p className="font-weight-500 text-gray-light mb-1">{listing.address}, {listing.city} </p>
                <p className="fs-17 font-weight-bold text-heading mb-1">&#8358; {listing.rent}</p>
                <ul className="list-inline mb-0">
                    <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5" data-toggle="tooltip" title={listing.no_bedrooms+' bedroom'} >
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1"><use xlinkHref="#icon-bedroom" /></svg>{listing.no_bedrooms} Br
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5" data-toggle="tooltip" title={listing.no_bathrooms+" bathrooms"}>
                        <svg className="icon icon-shower fs-18 text-primary mr-1"><use xlinkHref="#icon-shower" /></svg>{listing.no_bathrooms} Ba
                    </li>
                </ul>
            </div>

            <div className="card-footer">
                <a className="btn btn-primary" href={`/listing/${listing.slug}`}>Preview</a>
            </div>
        </div>

    )
}