import React from 'react'
import ListingGrid from 'views/tenants/listings/components/listing-grid'

export default function AgentsListings({listings}) {
    return (
        <>
          <h2 className="fs-22 text-heading lh-15 mb-6">My listing</h2>
                    <div className="collapse-tabs mb-10">
                        <ul className="nav nav-tabs text-uppercase d-none d-md-inline-flex agent-details-tabs" role="tablist">
                        <li className="nav-item">
                            <a href="#all" className="nav-link active shadow-none fs-13" data-toggle="tab" role="tab">
                            All (8)
                            </a>
                        </li>
                        </ul>
                        <div className="tab-content shadow-none pt-7 pb-0 px-6 bg-white">
                        <div id="collapse-tabs-accordion-01">
                            <div className="tab-pane tab-pane-parent fade show active" id="all" role="tabpanel">
                            <div className="card border-0 bg-transparent">
                                <div className="card-header border-0 d-block d-md-none bg-transparent px-0 py-1" id="headingAll-01">
                                <h5 className="mb-0">
                                    <button className="btn lh-2 fs-18 bg-white py-1 px-6 mb-4 shadow-none w-100 collapse-parent border" data-toggle="collapse" data-target="#all-collapse-01" aria-expanded="true" aria-controls="all-collapse-01">
                                    All (8)
                                    </button>
                                </h5>
                                </div>
                                <div id="all-collapse-01" className="collapse show collapsible" aria-labelledby="headingAll-01" data-parent="#collapse-tabs-accordion-01">
                                <div className="card-body p-0">
                                    <div className="row">

                                        {
                                            listings.map((listing, index) => (
                                                <ListingGrid listing={listing} key={index} />
                                            ))
                                        }

                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}
