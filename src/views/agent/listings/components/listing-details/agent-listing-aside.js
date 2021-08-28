import RatingStar from "components/rating/rating-star";
import { SetAsRented } from "providers/redux/_actions/listing/listing-actions";
import { useDispatch, useSelector } from "react-redux";

export const AgentListingAside = ({listing}) => {
    
    const dispatch = useDispatch()
    
    const set_as_rented = useSelector(state => state.set_as_rented)
    const {loading} = set_as_rented;

    const markAsRented = () => {
        dispatch(SetAsRented(listing.unique_id))    
    }

    return (
        <>
            <div className="bg-white rounded-lg py-lg-6 pl-lg-6 pr-lg-3 p-4 position-sticky sticky-top"  style={{top: '50px'}}>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="badge badge-pill badge-success fs-12 px-3">{listing.status}</span>
                    <p className="mt-3"><i className="fal fa-clock mr-1" />{listing.period}</p>
                </div>
                <div className="row mt-5">
                    <div className="col-auto">
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
                    </div>
                    
                    <div className="col-auto">
                        <div className="mb-3 ml-3">
                            <div className="media">
                                <div className="p-2 shadow-xxs-1 rounded-lg mr-2 lh-1">
                                    <i className="fs-18 text-primary fa fa-star"></i>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-13 font-weight-normal mb-0">Reviews</h5>

                                    {
                                        listing.reviews

                                        ?
                                        <ul class="list-inline mb-0">
                                            <li className="list-inline-item fs-13 text-heading font-weight-500">{listing.rating}/5</li>
                                                <li className="list-inline-item fs-13 text-heading font-weight-500">
                                                    <ul className="list-inline mb-0">
                                                        <RatingStar rating={listing.rating}/>
                                                    </ul>
                                                </li>
                                            <li className="list-inline-item fs-13 text-gray-light">({listing.reviews} reviews)</li>
                                        </ul>

                                        :

                                        <p>No Reviews</p>

                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mr-xl-2">
                    {
                        !listing.rented

                        &&

                        <>
                            <button type="button" onClick={markAsRented} className="btn btn-outline-success btn-lg btn-block border-success rounded border bg-hover-success border-hover-0 hover-white">Mark As Rented <i className="ml-1 fa fa-sign"></i></button>

                            <hr/>
                        </>
                    }

                    <a href={`../listings/${listing.slug}`} target="_blank" className="btn btn btn-primary btn-lg btn-block rounded border-primary bg-hover-white border-hover-primary hover-primary">Preview Property <i className="ml-1 fa fa-external-link-alt"></i></a>
                    <button type="button" className="btn btn-outline-primary btn-lg btn-block rounded border text-body border-hover-primary hover-white mt-4" data-toggle="modal" data-target="#exampleModal">Edit Property Info <i className="ml-1 far fa-edit"></i></button>
                    <button type="button" className="btn btn-link btn-lg btn-block text-body mt-4">Delete Property <i className="ml-1 far fa-trash"></i></button>
                </div>
            </div>

        </>
    )
}
