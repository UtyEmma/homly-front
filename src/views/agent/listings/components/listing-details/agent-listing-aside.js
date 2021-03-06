import RatingStar from "components/rating/rating-star";
import { badgeStatus } from "libraries/status-parser/status-parser";
import { DeleteListing } from "providers/redux/_actions/agent-actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ConfirmActionDialog } from "views/layouts/components/modals/confirm-action-dialog";
import { ListingRentedComponent } from "../listing-rented-component";

export const AgentListingAside = ({agent, listingItem, setIsLoading, setListingItem}) => {
    
    const dispatch = useDispatch()

    const [show, setShow] = useState()

    const user_data = useSelector(state => (state.user_data))
    const {token} = user_data

    const {loading} = useSelector(state => (state.delete_listing))

    const deleteListing = () => {
        setShow(true)
    }

    const callBack = () => {
        dispatch(DeleteListing(token, listingItem.unique_id))
    }

    useEffect(() => {
        setIsLoading(loading)
    }, [loading, setIsLoading])

    return (
        <>
            <div className="bg-white rounded-lg py-lg-6 pl-lg-6 pr-lg-3 p-4 position-sticky sticky-top"  style={{top: '50px', zIndex: '9'}}>
                <div className="d-flex justify-content-between align-items-center">
                    <span className={`badge badge-pill ${badgeStatus(listingItem.status)} rounded text-white fs-12 px-3`}>{listingItem.status}</span>
                    <p className="mt-3 fs-13"><i className="fal fa-clock mr-1" />{listingItem.period}</p>
                </div>
                <div className="row mt-5">
                    <div className="col-auto">
                        <div className="mb-3">
                            <div className="media">
                                <div className="p-2 shadow-xxs-1 rounded-lg mr-2 lh-1">
                                    <i className="fs-18 text-primary fa fa-star"></i>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-13 font-weight-normal mb-0">Rating</h5>

                                    {
                                        listingItem.reviews

                                        ?
                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item fs-13 text-heading font-weight-500">{listingItem.rating ? listingItem.rating : 1}/5</li>
                                                <li className="list-inline-item text-heading font-weight-500">
                                                    <ul className="list-inline mb-0">
                                                        <RatingStar rating={listingItem.rating ? listingItem.rating : 1 }/>
                                                    </ul>
                                                </li>
                                            <li className="list-inline-item fs-13 text-gray-light">({listingItem.reviews} reviews)</li>
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
                    
                    <ListingRentedComponent listing={listingItem} />

                    <a href={`/${agent.username}/${listingItem.slug}`} target="_blank" className="btn btn btn-primary btn-lg btn-block rounded border-primary bg-hover-white border-hover-primary hover-primary" rel="noreferrer">Preview Property <i className="ml-1 fa fa-external-link-alt"></i></a>
                    <button type="button" className="btn btn-outline-primary btn-lg btn-block rounded border text-body border-hover-primary hover-white mt-4" data-toggle="modal" data-target="#exampleModal">Edit Property Info <i className="ml-1 far fa-edit"></i></button>
                    <button type="button" onClick={deleteListing} className="btn btn-link btn-lg btn-block text-body mt-4">Delete Property <i className="ml-1 far fa-trash"></i></button>
                </div>
            </div>

            <ConfirmActionDialog callback={callBack} show={show} setShow={setShow} />

        </>
    )
}
