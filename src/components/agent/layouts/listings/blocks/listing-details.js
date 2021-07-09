import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import store from '../../../../../../providers/redux/store';
import { StoreListing } from '../../../../../../providers/redux/_actions/listing/listing-actions';

export default function ListingDetails() {
    const dispatch = useDispatch();
    const listing = useSelector((state) => state.store_listing.store);

    const compileDetails = (e) => {
        dispatch(StoreListing({
            ...listing,
            details: {
                ...listing.details,
                [e.target.name] : e.target.value
            }
        }))
    }

    return (
        <div className="tab-pane tab-pane-parent fade px-0" id="detail" role="tabpanel" aria-labelledby="detail-tab">
            <div className="card bg-transparent border-0">
                <div className="card-header d-block d-md-none bg-transparent px-0 py-1 border-bottom-0" id="heading-detail">
                <h5 className="mb-0">
                    <button className="btn btn-block collapse-parent collapsed border shadow-none" data-toggle="collapse" data-number={4.} data-target="#detail-collapse" aria-expanded="true" aria-controls="detail-collapse">
                    <span className="number">4.</span> Detail
                    </button>
                </h5>
                </div>
                <div id="detail-collapse" className="collapse collapsible" aria-labelledby="heading-detail" data-parent="#collapse-tabs-accordion">
                <div className="card-body py-4 py-md-0 px-0">
                    <div className="card mb-6">
                    <div className="card-body p-6">
                        <h3 className="card-title mb-0 text-heading fs-22 lh-15">Listing Detail</h3>
                        <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit</p>
                        <div className="row">
                        <div className="col-lg-4">
                            <div className="form-group">
                            <label htmlFor="size-in-ft" className="text-heading">Number of Bedrooms <span className="text-muted">(only numbers)</span></label>
                            <select className="form-control border-0 shadow-none form-control-lg selectpicker" title="Select" data-style="btn-lg py-2 h-52" id="category" onChange={compileDetails} name="no-of-bedrooms">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">Above 10</option>
                            </select>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="form-group">
                            <label htmlFor="number-of-bathrooms" className="text-heading">Number of Bathrooms <span className="text-muted">(only numbers)</span></label>
                            <input type="text" onChange={compileDetails} className="form-control form-control-lg border-0" id="number-of-bathrooms" name="number-of-bathrooms" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="form-group">
                            <label htmlFor="room" className="text-heading">Average Room Size</label>
                            <input type="text" className="form-control form-control-lg border-0" onChange={compileDetails} id="room" name="rooms" />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                            <label htmlFor="extra-details" className="text-heading">Extra details</label>
                            <textarea className="form-control border-0" rows={5} id="extra-details" name="extra-details" onChange={compileDetails} defaultValue={""} />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="d-flex flex-wrap">
                    <a href="#" className="btn btn-lg bg-hover-white border rounded-lg mb-3 mr-auto prev-button">
                        <span className="d-inline-block text-primary mr-2 fs-16"><i className="fal fa-long-arrow-left" /></span>Prev step
                    </a>
                    <button className="btn btn-lg btn-primary next-button mb-3">Next step
                        <span className="d-inline-block ml-2 fs-16"><i className="fal fa-long-arrow-right" /></span>
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
