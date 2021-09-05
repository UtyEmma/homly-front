import React from 'react'
import AgentListingItem from './agent-listing-item'

export default function AgentListingContainer({listings}) {
    return (
        <>
            <div className="d-flex flex-wrap flex-md-nowrap mb-6">

            <div className="mr-0 mr-md-auto">
                    <h2 className="mb-0 text-heading fs-22 lh-15">My Properties<span className="badge badge-white badge-pill text-primary fs-18 font-weight-bold ml-2">{listings.length}</span></h2>
                    <p>Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
            </div>
            <div className="form-inline justify-content-md-end mx-n2">
                <div className="p-2">
                    <div className="input-group input-group-lg bg-white border">
                        <div className="input-group-prepend">
                        <button className="btn pr-0 shadow-none" type="button"><i className="far fa-search" /></button>
                        </div>
                        <input type="text" className="form-control bg-transparent border-0 shadow-none text-body" placeholder="Search listing" name="search" />
                    </div>
                </div>
                <div className="p-2">
                    <div className="input-group input-group-lg bg-white border">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-transparent letter-spacing-093 border-0 pr-0"><i className="far fa-align-left mr-2" ></i> Sort by:</span>
                        </div>
                        <select className="form-control bg-transparent pl-0 selectpicker d-flex align-items-center sortby" name="sort-by" data-style="bg-transparent px-1 py-0 lh-1 font-weight-600 text-body" id="status" >
                            <option>Alphabet</option>
                            <option>Price - Low to High</option>
                            <option>Price - High to Low</option>
                            <option>Date - Old to New</option>
                            <option>Date - New to Old</option>
                        </select>
                    </div>
                </div>
            </div>
            </div>
            <div className="table-responsive">
                <table className="table table-hover bg-white border rounded-lg ">
                    <thead className="thead-sm thead-black">
                        <tr>
                            <th scope="col" className="border-top-0 px-6 pt-5 pb-4">Listing title</th>
                            <th scope="col" className="border-top-0 pt-5 pb-4">Date Published</th>
                            <th scope="col" className="border-top-0 pt-5 pb-4">Status</th>
                            <th scope="col" className="border-top-0 pt-5 pb-4">Views</th>
                            <th scope="col" className="border-top-0 pt-5 pb-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {               
                            listings.map((listing, index) => (        
                                <AgentListingItem listing_item={listing} key={index}/>
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
