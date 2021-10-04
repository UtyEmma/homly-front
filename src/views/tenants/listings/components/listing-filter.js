import { LocalGovt, State } from 'components/city-state/city-state';
import React, { useCallback, useEffect, useState } from 'react'
import { SelectTypes } from 'views/layouts/components/details/categories';

export default function ListingFilter({params, setParams}) {

    const parseQueryParams = (e) => {
        setParams({
            ...params,
            [e.target.name] : e.target.value
        });
    }

    const [selectedState, setSelectedState] = useState();

    
    useEffect(() => {
        window.$('select').selectpicker('refresh')
    }, [selectedState])


    return (
        <nav aria-label="breadcrumb">
            <div className="form-search-01 px-0">
                <div className="col-12 pl-1">
                    <button className="btn btn-link w-100 text-left text-md-right pr-0 pl-0 float-md-right fs-14 text-decoration-none" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                        <i className="fa fa-filter mr-2"></i>
                        Fliter Properties
                    </button>
                </div>
                <div className="collapse w-100" id="multiCollapseExample2">
                    <form className="form-inline w-100">
                        <div className="form-group p-1">
                            <label htmlFor="state"  className="sr-only">State</label>
                            <State styles={"position: absolute;"} setSelectedState={setSelectedState} title="State" onChange={parseQueryParams} classes="form-control border-0 bg-white shadow-none shadow-xxs-1 font-weight-600" name="state"/>
                        </div>
                        <div className="form-group p-1">
                            <label htmlFor="city"  className="sr-only">Local Govt</label>
                            <LocalGovt name="city" onChange={parseQueryParams} styles={"bg-white"} classes="form-control border-0 shadow-none shadow-xxs-1 bg-white font-weight-600" selectedState={selectedState}/>
                        </div>
                        <div className="form-group p-1">
                            <label htmlFor="any-price" className="sr-only">Any Price</label>
                            <select className="form-control border-0 shadow-none shadow-xxs-1 bg-white font-weight-600" title="Price" onChange={parseQueryParams} name="price" data-style="bg-white" id="any-price">
                                <option value="1">Under &#8358;200k</option>
                                <option value="2">&#8358;200k - &#8358;400k</option>
                                <option value="3">&#8358;400k - &#8358;800k</option>
                                <option value="4">&#8358;800k - &#8358;2M</option>
                                <option value="5">Over &#8358;2M</option>
                            </select>
                        </div>
                        <div className="form-group p-1">
                            <SelectTypes name="type" styles="bg-white" classes="form-control border-0 shadow-none shadow-xxs-1 font-weight-600 bg-white" onChange={parseQueryParams} id="type"/>
                        </div>
                        <div className="form-group p-1">
                            <label htmlFor="room" className="sr-only">Room</label>
                            <select className="form-control border-0 shadow-xxs-1 bg-white font-weight-600" title="Rooms" data-style="bg-white" onChange={parseQueryParams} name="rooms" id="room">
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
            </div>
        </nav>
    )
}
