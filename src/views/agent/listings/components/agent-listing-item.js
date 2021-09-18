import { DeleteListing, RemoveListing } from 'providers/redux/_actions/agent-actions';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function AgentListingItem({listing_item}) {
    const dispatch = useDispatch()

    const {loading, listing, error} = useSelector(state => (state.delete_listing))
    
    const user_data = useSelector(state => (state.user_data))
    const {token} = user_data

    const deleteListing = (e) => {
        e.preventDefault()
        dispatch(DeleteListing(token, listing_item.unique_id));
    }

    const removeListing = (e) => {
        e.preventDefault()
        dispatch(RemoveListing(token, listing_item.unique_id));
    }

    useEffect(() => {
        
    }, listing)

    return (
        <tr className="shadow-hover-xs-2 bg-hover-white filter-row">
            <td className="align-middle pt-6 pb-4 px-6" style={{minWidth: '300px'}}>
                <div className="media">
                    <div className="w-120px mr-4 position-relative">
                        <a href={`my-listings/${listing_item.slug}`} >
                            <img className="img-fluid" src={listing_item.image[0]} alt={listing_item.title} />
                        </a>
                        <span className="badge badge-indigo position-absolute pos-fixed-top">{listing_item.category}</span>
                    </div>
                    <div className="media-body" style={{width: '350px'}}>
                        <a href={`my-listings/${listing_item.slug}`} className="text-dark hover-primary">
                            <h5 className="fs-16 mb-0 lh-18 filter-item">{listing_item.title}</h5>
                        </a>
                        <p className="mb-1 font-weight-500">{`${listing_item.description.split(" ").splice(0,15).join(" ")} ...`}</p>
                        <span className="text-heading lh-15 font-weight-bold fs-17">&#8358; {listing_item.initial_fees.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                        <span className="text-gray-light">/{listing_item.tenure}</span>
                    </div>
                </div>
            </td>
            <td className="align-middle">{listing_item.created_at}</td>
            <td className="align-middle">
            <span className={`badge text-capitalize font-weight-normal fs-12 ${listing_item.status === 'active' ? 'badge-green' : 'badge-yellow'}`}>
                {listing_item.status}
            </span>
            </td>
            <td className="align-middle"><p className="text-center">{listing_item.views}</p></td>
            <td className="align-middle">
                <a href={`my-listings/${listing_item.slug}`} data-toggle="tooltip" title="Edit" className="d-inline-block fs-18 text-muted hover-primary mr-5"><i className="fal fa-eye" /></a>
                <a href="" data-toggle="tooltip" onClick={removeListing} title={listing_item.status === 'active' ? 'Suspend' : 'Restore'} className="d-inline-block fs-18 text-muted hover-primary mr-5"><i className={listing_item.status === 'active' ? 'fal fa-eye-slash' : 'fal fa-eye'} /></a>
                <a href="" data-toggle="tooltip" onClick={deleteListing} title="Delete" className="d-inline-block fs-18 text-muted hover-primary"><i className="fal fa-trash-alt" /></a>
            </td>
        </tr>
    )
}
