import { LocalGovt, State } from 'components/city-state/city-state';
import { ShowAllListings } from 'providers/redux/_actions/listing/listing-actions';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import SelectListingCategory, { SelectTypes } from 'views/layouts/components/details/categories';

export default function ListingFilter({params, setParams}) {

    const parseQueryParams = (e) => {
        setParams({
            ...params,
            [e.target.name] : e.target.value
        });
    }

    const [selectedState, setSelectedState] = useState("Enugu");

    return (
        <nav aria-label="breadcrumb">
            <div className="form-search-01">
                <div className="mb-0 pl-1">
                    <p className="mb-0">Filter Properties</p>
                </div>
                <form className="form-inline" id="accordion-5">
                    <div className="form-group p-1">
                        <label htmlFor="state"  className="sr-only">State</label>
                        <State setSelectedState={setSelectedState} title="State" onChange={parseQueryParams} styles="bg-white" classes="form-control border-0 shadow-none shadow-xxs-1 font-weight-600 selectpicker" name="state"/>
                    </div>
                    <div className="form-group p-1">
                        <label htmlFor="city"  className="sr-only">Local Govt</label>
                        <LocalGovt name="city" onChange={parseQueryParams} styles={"bg-white"} classes="form-control border-0 shadow-none shadow-xxs-1 font-weight-600 selectpicker" selectedState={selectedState}/>
                    </div>
                    <div className="form-group p-1">
                        <label htmlFor="any-price" className="sr-only">Any Price</label>
                        <select className="form-control border-0 shadow-none shadow-xxs-1 bg-transparent font-weight-600 selectpicker" title="Any Price" onChange={parseQueryParams} name="price" data-style="bg-white" id="any-price">
                            <option>High</option>
                            <option>Low</option>
                            <option>Medium</option>
                        </select>
                    </div>
                    <div className="form-group p-1">
                        <SelectTypes name="type" styles="bg-white" classes="form-control border-0 shadow-none shadow-xxs-1 font-weight-600 bg-white" onChange={parseQueryParams} id="type"/>
                    </div>
                    <div className="form-group p-1">
                    <label htmlFor="room" className="sr-only">Room</label>
                    <select className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker" title="Rooms" data-style="bg-white" onChange={parseQueryParams} name="rooms" id="room">
                        <option defaultValue="2" >2+ Beds</option>
                        <option>3+ Beds</option>
                    </select>
                    </div>
                    <div className="form-group p-1">
                    <a href="#advanced-search-filters-5" className="btn bg-white border-0 shadow-xxs-1 text-gray-light" data-toggle="collapse" data-target="#advanced-search-filters-5" aria-expanded="true" aria-controls="advanced-search-filters-5">
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
                        <input type="checkbox" className="custom-control-input" id="check16-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check16-5">Refrigerator</label>
                        </div>
                    </div>
                    </div>
                </form>
            </div>
        </nav>
    )
}
