import { DeleteListing, RemoveListing } from 'providers/redux/_actions/agent-actions';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function AgentListingItem({listing_item}) {
    const dispatch = useDispatch()

    const {loading, listing, error} = useSelector(state => (state.delete_listing))

    const deleteListing = (e) => {
        e.preventDefault()
        dispatch(DeleteListing(listing_item.unique_id));
    }

    const removeListing = (e) => {
        e.preventDefault()
        dispatch(RemoveListing(listing_item.unique_id));
    }

    useEffect(() => {
        
    }, listing)

    return (
        <tr className="shadow-hover-xs-2 bg-hover-white">
            <td className="align-middle pt-6 pb-4 px-6">
            <div className="media">
                <div className="w-120px mr-4 position-relative">
                    <a href={`listings/${listing_item.slug}`} >
                        <img src={listing_item.image} alt={listing_item.title} />
                    </a>
                    <span className="badge badge-indigo position-absolute pos-fixed-top">{listing_item.category}</span>
                </div>
                <div className="media-body">
                    <a href={`listings/${listing_item.slug}`} className="text-dark hover-primary">
                        <h5 className="fs-16 mb-0 lh-18">{listing_item.title}</h5>
                    </a>
                    <p className="mb-1 font-weight-500" style={{textOverflow: 'ellipsis'}}>{listing_item.description}</p>
                    <span className="text-heading lh-15 font-weight-bold fs-17">&#8358; {listing_item.initial_fees}</span>
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
            <td className="align-middle">{listing_item.views}</td>
            <td className="align-middle">
            <a href={`listings/${listing_item.slug}`} data-toggle="tooltip" title="Edit" className="d-inline-block fs-18 text-muted hover-primary mr-5"><i className="fal fa-pencil-alt" /></a>
            <a href="" data-toggle="tooltip" onClick={removeListing} title={listing_item.status === 'active' ? 'Set as Inactive' : 'Set as Active'} className="d-inline-block fs-18 text-muted hover-primary mr-5"><i className={listing_item.status === 'active' ? 'fal fa-eye-slash' : 'fal fa-eye'} /></a>
            <a href="" data-toggle="tooltip" onClick={deleteListing} title="Delete" className="d-inline-block fs-18 text-muted hover-primary"><i className="fal fa-trash-alt" /></a>
            </td>
        </tr>
    )
}
