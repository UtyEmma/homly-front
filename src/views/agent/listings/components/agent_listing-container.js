import { FilterResults } from 'libraries/search/filter'
import React from 'react'
import AgentListingItem from './agent-listing-item'

export default function AgentListingContainer({listings}) {
    return (
        <>
            <div className="table-responsive">
                <table className="table table-hover bg-white border rounded-lg ">
                    <thead className="thead-sm thead-black">
                        <tr>
                            <th scope="col" className="border-top-0 px-6 pt-5 pb-4">Listing title</th>
                            <th scope="col" className="border-top-0 pt-5 pb-4">Date Published</th>
                            <th scope="col" className="border-top-0 pt-5 pb-4">Status</th>
                            <th scope="col" className="border-top-0 pt-5 pb-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {               
                            listings.map((listing) => (        
                                <AgentListingItem listing_item={listing} key={listing.unique_id}/>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <nav className="mt-6">
                <ul className="pagination rounded-active justify-content-center">
                    <li className="page-item"><a className="page-link" href="#"><i className="far fa-angle-double-left" /></a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item active"><a className="page-link" href="#">2</a></li>
                    <li className="page-item d-none d-sm-block"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">...</li>
                    <li className="page-item"><a className="page-link" href="#">6</a></li>
                    <li className="page-item"><a className="page-link" href="#"><i className="far fa-angle-double-right" /></a></li>
                </ul>
            </nav>

            <div className="text-center mt-2">6-10 of 29 Results</div>  
        </>
    )
}
