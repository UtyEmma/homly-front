import { LocalGovt, State } from 'components/city-state/city-state';
import React, { useState } from 'react'
import { SelectTypes } from 'views/layouts/components/details/categories';

export default function ListingFilter({params, setParams}) {

    const parseQueryParams = (e) => {
        setParams({
            ...params,
            [e.target.name] : e.target.value
        });
    }

    const [selectedState, setSelectedState] = useState();

    return (
        <nav aria-label="breadcrumb">
            <div className="form-search-01">
                <div className="mb-0 pl-1">
                    <p className="mb-0">Filter Properties</p>
                </div>
                <form className="form-inline" id="accordion-5">
                    <div className="form-group p-1">
                        <label htmlFor="state"  className="sr-only">State</label>
                        <State setSelectedState={setSelectedState} title="State" onChange={parseQueryParams} styles="bg-white" classes="form-control border-0 bg-white shadow-none shadow-xxs-1 font-weight-600" name="state"/>
                    </div>
                    <div className="form-group p-1">
                        <label htmlFor="city"  className="sr-only">Local Govt</label>
                        <LocalGovt name="city" onChange={parseQueryParams} styles={"bg-white"} classes="form-control border-0 shadow-none shadow-xxs-1 bg-white font-weight-600" selectedState={selectedState}/>
                    </div>
                    <div className="form-group p-1">
                        <label htmlFor="any-price" className="sr-only">Any Price</label>
                        <select className="form-control border-0 shadow-none shadow-xxs-1 bg-white font-weight-600" title="Any Price" onChange={parseQueryParams} name="price" data-style="bg-white" id="any-price">
                            <option selected disabled>Price</option>
                            <option defaultValue="0">Under &#8358;200k</option>
                            <option defaultValue="1">&#8358;200k - &#8358;400k</option>
                            <option defaultValue="2">&#8358;400k - &#8358;800k</option>
                            <option defaultValue="3">&#8358;800k - &#8358;2M</option>
                            <option defaultValue="4">Over &#8358;2M</option>
                        </select>
                    </div>
                    <div className="form-group p-1">
                        <SelectTypes name="type" styles="bg-white" classes="form-control border-0 shadow-none shadow-xxs-1 font-weight-600 bg-white" onChange={parseQueryParams} id="type"/>
                    </div>
                    <div className="form-group p-1">
                        <label htmlFor="room" className="sr-only">Room</label>
                        <select className="form-control border-0 shadow-xxs-1 bg-white font-weight-600" title="Rooms" data-style="bg-white" onChange={parseQueryParams} name="rooms" id="room">
                            <option selected defaultValue="">Bedrooms</option>
                            <option defaultValue="1" >1</option>
                            <option defaultValue="2" >2</option>
                            <option defaultValue="3">3</option>
                            <option defaultValue="4">4</option>
                            <option defaultValue="5">5</option>
                            <option defaultValue="6">6</option>
                            <option defaultValue="7">7</option>
                            <option defaultValue="8">8</option>
                            <option defaultValue="9">9</option>
                            <option defaultValue="10">10+</option>
                        </select>
                    </div>

                    <div className="form-group p-1">
                        <label htmlFor="room" className="sr-only">Bathrooms</label>
                        <select className="form-control border-0 shadow-xxs-1 bg-white font-weight-600" title="Rooms" data-style="bg-white" onChange={parseQueryParams} name="rooms" id="room">
                            <option selected defaultValue="">Bathrooms</option>
                            <option defaultValue="1" >1</option>
                            <option defaultValue="2" >2</option>
                            <option defaultValue="3">3</option>
                            <option defaultValue="4">4</option>
                            <option defaultValue="5">5</option>
                            <option defaultValue="6">6</option>
                            <option defaultValue="7">7</option>
                            <option defaultValue="8">8</option>
                            <option defaultValue="9">9</option>
                            <option defaultValue="10">10+</option>
                        </select>
                    </div>
                </form>
            </div>
        </nav>
    )
}
