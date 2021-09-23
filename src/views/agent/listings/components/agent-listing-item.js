import React from 'react'
import { Link } from 'react-router-dom';

export default function AgentListingItem({listing_item}) {
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
                        <a href={`my-listings/${listing_item.slug}`}>
                            <h5 className="fs-16 mb-0 lh-18 filter-item hover-primary">{listing_item.title}</h5>
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
            <td className="align-middle">
                <Link to={`my-listings/${listing_item.slug}`} data-toggle="tooltip" title="Edit" className="btn btn-sm btn-primary d-inline-block fs-14">
                    View Details
                </Link>
            </td>
        </tr>
    )
}
