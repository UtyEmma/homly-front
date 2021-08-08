import React from 'react'

export default function ListingAmenities({amenities}) {

    return (
        <div className="tab-pane tab-pane-parent fade px-0" id="amenities" role="tabpanel" aria-labelledby="amenities-tab">
            <div className="card bg-transparent border-0">
                <div className="card-header d-block d-md-none bg-transparent px-0 py-1 border-bottom-0" id="heading-amenities">
                <h5 className="mb-0">
                    <button className="btn btn-block collapse-parent collapsed border shadow-none" data-toggle="collapse" data-number={5.} data-target="#amenities-collapse" aria-expanded="true" aria-controls="amenities-collapse">
                    <span className="number">5.</span> Amenities
                    </button>
                </h5>
                </div>
                <div id="amenities-collapse" className="collapse collapsible" aria-labelledby="heading-amenities" data-parent="#collapse-tabs-accordion">
                <div className="card-body py-4 py-md-0 px-0">
                    <div className="card mb-6">
                    <div className="card-body p-6">
                        <h3 className="card-title mb-0 text-heading fs-22 lh-15">Select Amenities</h3>
                        <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit</p>
                        <div className="col-lg-12">
                            <ul className="list-group list-group-no-border">
                                <div className="row">
                                    {

                                    Array.isArray(amenities) && amenities.length > 0 
                                    
                                    && 

                                    amenities.map((item, index) => (
                                        <div key={index} className="col-sm-6 col-lg-3">
                                            <li className="list-group-item px-0 pt-0 pb-2">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" name={`amenities[${item.toLowerCase().replace(/ /g,'_')}]`} id={item} />
                                                    <label className="custom-control-label" htmlFor={item} >{item}</label>
                                                </div>
                                            </li>
                                        </div>
                                    )) 
                                    
                                    }

                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    <a href="#" className="btn btn-lg bg-hover-white border rounded-lg mb-3 mr-auto prev-button">
                        <span className="d-inline-block text-primary mr-2 fs-16"><i className="fal fa-long-arrow-left" /></span>Prev step
                    </a>
                    <button className="btn btn-lg btn-primary mb-3" type="submit">Create property
                    </button>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}
