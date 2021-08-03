import { LocalGovt, State } from 'components/city-state/city-state';
import React, { useState } from 'react'
import SelectListingCategory from 'views/layouts/components/details/categories';

export default function ListingFilter1({params, setParams}) {
    const parseQueryParams = (e) => {
        setParams({
            ...params,
            [e.target.name] : e.target.value
        });
    }

    const [selectedState, setSelectedState] = useState("Enugu");

    return (
        <div className="card border-0 mb-4">
            <div className="card-body pl-0 pl-lg-6 pr-0 pt-2 pb-4">
                <h4 className="card-title fs-16 lh-2 text-dark mb-3">Find your next home</h4>
                <form>
                    <div className="form-group">
                        <label for="keyword" className="sr-only">Key Word</label>
                        <input type="text" className="form-control form-control-lg border-0 shadow-none" name="keyword" id="keyword" placeholder="Enter keyword..." />
                    </div>
                    <div className="form-group">
                        <label for="state" className="sr-only">State</label>
                        <State setSelectedState={setSelectedState} name="state"/>
                    </div>
                    <div className="form-group">
                        <label for="local_govt" className="sr-only">Local Govt</label>
                        <LocalGovt selectedState={selectedState} name="lga"/>
                    </div>
                    <div className="form-group">
                        <label for="type" className="sr-only">Type</label>
                        <SelectListingCategory />
                    </div>
                    <div className="form-group">
                        <label for="status" className="sr-only">Status</label>
                        <select className="form-control border-0 shadow-none form-control-lg selectpicker" title="All Status" data-style="btn-lg py-2 h-52" id="status">
                            <option>For Rent</option>
                            <option>For Sale</option>
                        </select>
                    </div>
                    <div className="form-row mb-4">
                        <div className="col">
                            <label for="bed" className="sr-only">Beds</label>
                            <select className="form-control border-0 shadow-none form-control-lg selectpicker" title="Beds" data-style="btn-lg py-2 h-52" id="bed">
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div className="col">
                            <label for="baths" className="sr-only">Baths</label>
                            <select className="form-control border-0 shadow-none form-control-lg selectpicker" title="Baths" data-style="btn-lg py-2 h-52" id="baths">
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group slider-range slider-range-secondary">
                        <label for="price" className="mb-4 text-gray-light">Price Range</label>
                        <div data-slider="true" data-slider-options='{"min":0,"max":8000000,"values":[1000000,5000000],"type":"currency"}'></div>
                        <div className="text-center mt-2">
                        <input id="price" type="text" readonly name="price" className="border-0 amount text-center text-body font-weight-500" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block shadow-none mt-4">Search</button>
                </form>
            </div>
        </div>
    )
}
