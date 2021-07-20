import { ShowAllListings } from 'providers/redux/_actions/listing/listing-actions';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

export default function ListingFilter({params, setParams}) {

    const parseQueryParams = (e) => {
        setParams({
            ...params,
            [e.target.name] : e.target.value
        });
    }

    return (
        <section className="pb-4 page-title shadow">
            <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb pt-6 pt-lg-2 lh-15 pb-5">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Listing</li>
                </ol>
                <h1 className="fs-30 lh-1 mb-0 text-heading font-weight-600">Available Properties</h1>
                <div className="mt-6 form-search-01">
                <form className="form-inline mx-n1" id="accordion-5">
                    <div className="form-group p-1">
                    <label htmlFor="location" className="sr-only">State</label>
                    <select className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker" title="State" name="state" onChange={parseQueryParams} data-style="bg-white" id="location">
                        <option>Austin</option>
                        <option>Boston</option>
                        <option>Chicago</option>
                        <option>Denver</option>
                        <option>Los Angeles</option>
                        <option>New York</option>
                        <option>San Francisco</option>
                    </select>
                    </div>
                    <div className="form-group p-1">
                        <label htmlFor="lga" className="sr-only">Local Govt</label>
                        <select className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker" title="Local Govt" onChange={parseQueryParams} name="lga"  data-style="bg-white" id="lga">
                            <option>Austin</option>
                            <option>Boston</option>
                            <option>Chicago</option>
                            <option>Denver</option>
                            <option>Los Angeles</option>
                            <option>New York</option>
                            <option>San Francisco</option>
                        </select>
                    </div>
                    <div className="form-group p-1">
                    <label htmlFor="any-price" className="sr-only">Any Price</label>
                    <select className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker" title="Any Price" onChange={parseQueryParams} name="price" data-style="bg-white" id="any-price">
                        <option>High</option>
                        <option>Low</option>
                        <option>Medium</option>
                    </select>
                    </div>
                    <div className="form-group p-1">
                    <label htmlFor="type" className="sr-only">Type</label>
                    <select className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker" title="Type" data-style="bg-white" onChange={parseQueryParams} name="type" id="type">
                        <option selected>Self Contained</option>
                        <option>Duplex</option>
                        <option>motel</option>
                    </select>
                    </div>
                    <div className="form-group p-1">
                    <label htmlFor="area" className="sr-only">Area</label>
                    <select className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker" title="Area" data-style="bg-white" onChange={parseQueryParams} name="area" id="area">
                        <option>Albany Park</option>
                        <option>Altgeld Gardens</option>
                        <option>Andersonville</option>
                        <option>Beverly</option>
                        <option>Brickel</option>
                        <option>Brooklyn</option>
                        <option>Brookside</option>
                    </select>
                    </div>
                    <div className="form-group p-1">
                    <label htmlFor="room" className="sr-only">Room</label>
                    <select className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker" title="Rooms" data-style="bg-white" onChange={parseQueryParams} name="rooms" id="room">
                        <option selected>2+ Beds</option>
                        <option>3+ Beds</option>
                    </select>
                    </div>
                    <div className="form-group p-1">
                    <a href="#advanced-search-filters-5" className="btn bg-transparent border-0 shadow-xxs-1 text-gray-light" data-toggle="collapse" data-target="#advanced-search-filters-5" aria-expanded="true" aria-controls="advanced-search-filters-5">
                        <span>More</span>
                        <span className="ml-auto">...</span>
                    </a>
                    </div>
                    <div id="advanced-search-filters-5" className="row pt-2 collapse p-1 w-100" data-parent="#accordion-5">
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="check1-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check1-5">Air
                            Conditioning</label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="check2-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check2-5">Laundry</label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="check4-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check4-5">Washer</label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="check5-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check5-5">Barbeque</label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="check6-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check6-5">Lawn</label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="check7-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check7-5">Sauna</label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="check8-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check8-5">WiFi</label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="check9-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check9-5">Dryer</label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="check10-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check10-5">Microwave</label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="check11-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check11-5">Swimming
                            Pool</label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="check12-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check12-5">Window
                            Coverings</label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="check13-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check13-5">Gym</label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="check14-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check14-5">Outdoor
                            Shower</label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="check15-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check15-5">TV
                            Cable</label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="check16-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check16-5">Refrigerator</label>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </nav>
            </div>
        </section>
    )
}
