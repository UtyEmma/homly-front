import React from 'react'

export default function AgentListingItem({listing}) {

    const deleteListing = () => {
        let unique_id = listing.unique_id;
    }

    return (
        <tr className="shadow-hover-xs-2 bg-hover-white">
            <td className="align-middle pt-6 pb-4 px-6">
            <div className="media">
                <div className="w-120px mr-4 position-relative">
                <a href="single-property-1.html">
                    <img src="images/my-properties-03.jpg" alt="Explore Old Barcelon" />
                </a>
                <span className="badge badge-indigo position-absolute pos-fixed-top">for rent</span>
                </div>
                <div className="media-body">
                <a href="single-property-1.html" className="text-dark hover-primary">
                    <h5 className="fs-16 mb-0 lh-18">{listing.title}</h5>
                </a>
                <p className="mb-1 font-weight-500">1421 San Pedro St, Los Angeles</p>
                <span className="text-heading lh-15 font-weight-bold fs-17">N {listing.initial_price}</span>
                <span className="text-gray-light">/month</span>
                </div>
            </div>
            </td>
            <td className="align-middle">30 December, 2019</td>
            <td className="align-middle">
            <span className="badge text-capitalize font-weight-normal fs-12 badge-yellow">pending</span>
            </td>
            <td className="align-middle">2049</td>
            <td className="align-middle">
            <a href="#" data-toggle="tooltip" title="Edit" className="d-inline-block fs-18 text-muted hover-primary mr-5"><i className="fal fa-pencil-alt" /></a>
            <a href="#" data-toggle="tooltip" onClick={deleteListing} title="Delete" className="d-inline-block fs-18 text-muted hover-primary"><i className="fal fa-trash-alt" /></a>
            </td>
        </tr>
    )
}
