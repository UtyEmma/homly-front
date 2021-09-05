import React, { useEffect, useState } from 'react'

export default function ListingDetails({formErrors}) {
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
                                    <label htmlFor="bedrooms" className="text-heading">Number of Bedrooms</label>
                                    <input type="number" className="form-control form-control-lg border-0" id="bedrooms" min="1" name="no_bedrooms" />
                                    <p className="text-danger fs-12 mt-1">{formErrors.no_bedrooms?.message}</p>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="bedrooms" className="text-heading">Number of Bathrooms</label>
                                    <input type="number" className="form-control form-control-lg border-0" id="bathrooms" min="1" name="no_bathrooms" />
                                    <p className="text-danger fs-12 mt-1">{formErrors.no_bathrooms?.message}</p>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="bedrooms" className="text-heading">Floor Number</label>
                                        <input type="number" className="form-control form-control-lg border-0" id="floors" name="no_floors" min="1" />
                                        <p className="text-danger fs-12 mt-1">{formErrors.no_floor?.message}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                            <label htmlFor="extra-details" className="text-heading">Extra details</label>
                                <textarea className="form-control border-0" rows={5} id="extra_info" name="extra_info" />
                                <p className="text-danger fs-12 mt-1">{formErrors.extra_info?.message}</p>
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
