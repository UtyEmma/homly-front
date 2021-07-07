import React, {Component} from 'react'

import Sidebar from '../shared/sidebar'
import Header from '../shared/header'
import AddListingForm from '../layouts/listings/add-listing-form'

export default class NewListing extends Component {
    render(){

        return (
            <div className="wrapper dashboard-wrapper">
                <div className="d-flex flex-wrap flex-xl-nowrap">
                    <Sidebar />
    
                    <div className="page-content">
                        <Header />
    
                        <main id="content" className="bg-gray-01">
                            <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10 my-profile">
                                <div className="mb-6">
                                <h2 className="mb-0 text-heading fs-22 lh-15">Add new property
                                </h2>
                                <p className="mb-1">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                                </div>
                                <div className="collapse-tabs new-property-step">
                                <ul className="nav nav-pills border py-2 px-3 mb-6 d-none d-md-flex mb-6" role="tablist">
                                    <li className="nav-item col">
                                    <a className="nav-link active bg-transparent shadow-none py-2 font-weight-500 text-center lh-214 d-block" id="description-tab" data-toggle="pill" data-number={1.} href="#description" role="tab" aria-controls="description" aria-selected="true"><span className="number">1.</span> Description</a>
                                    </li>
                                    <li className="nav-item col">
                                    <a className="nav-link bg-transparent shadow-none py-2 font-weight-500 text-center lh-214 d-block" id="media-tab" data-toggle="pill" data-number={2.} href="#media" role="tab" aria-controls="media" aria-selected="false"><span className="number">2.</span> Media</a>
                                    </li>
                                    <li className="nav-item col">
                                    <a className="nav-link bg-transparent shadow-none py-2 font-weight-500 text-center lh-214 d-block" id="location-tab" data-toggle="pill" data-number={3.} href="#location" role="tab" aria-controls="location" aria-selected="false"><span className="number">3.</span> Location</a>
                                    </li>
                                    <li className="nav-item col">
                                    <a className="nav-link bg-transparent shadow-none py-2 font-weight-500 text-center lh-214 d-block" id="detail-tab" data-toggle="pill" data-number={4.} href="#detail" role="tab" aria-controls="detail" aria-selected="false"><span className="number">4.</span> Detail</a>
                                    </li>
                                    <li className="nav-item col">
                                    <a className="nav-link bg-transparent shadow-none py-2 font-weight-500 text-center lh-214 d-block" id="amenities-tab" data-toggle="pill" data-number={5.} href="#amenities" role="tab" aria-controls="amenities" aria-selected="false"><span className="number">5.</span> Amenities</a>
                                    </li>
                                </ul>
                                <div className="tab-content shadow-none p-0">
                                    <AddListingForm />
                                </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        )

    }
}
