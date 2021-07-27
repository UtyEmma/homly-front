import React from 'react'

export default function SearchResultsFilter() {
    return (
        <section className="pt-6 pb-5 shadow-xs-1 bg-white position-relative z-index-2">
            <div className="container-fluid px-xxl-6">
                <form className="form-inline mx-n1" id="accordion-5">
                <div className="form-group p-1">
                    <label htmlFor="location-2" className="sr-only">Location</label>
                    <select className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker" title="Location" data-style="bg-white" id="location-2" name="location">
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
                    <select className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker" title="Any Price" data-style="bg-white" id="any-price" name="any-price">
                    <option>1</option>
                    <option>2</option>
                    </select>
                </div>
                <div className="form-group p-1">
                    <label htmlFor="type" className="sr-only">Type</label>
                    <select className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker" title="Type" data-style="bg-white" id="type" name="type">
                    <option selected>house</option>
                    <option>hotel</option>
                    <option>motel</option>
                    </select>
                </div>
                <div className="form-group p-1">
                    <label htmlFor="status" className="sr-only">All status</label>
                    <select className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker" title="All status" data-style="bg-white" id="status" name="status">
                    <option>All status</option>
                    <option>For Rent</option>
                    <option>For Sale</option>
                    </select>
                </div>
                <div className="form-group p-1">
                    <label htmlFor="area" className="sr-only">Area</label>
                    <select className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker" title="Area" data-style="bg-white" id="area" name="areas">
                    <option>hotel</option>
                    <option>motel</option>
                    </select>
                </div>
                <div className="form-group p-1">
                    <label htmlFor="room" className="sr-only">Room</label>
                    <select className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker" title="Room" data-style="bg-white" id="room" name="room">
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
                <div className="form-group p-1 custom-control custom-switch custom-switch-right ml-lg-auto">
                    <label className="fs-13 text-heading font-weight-500 custom-switch-right mr-7">Map</label>
                    <input type="checkbox" className="custom-control-input" name="features" id="customSwitch1" defaultChecked />
                    <label className="custom-control-label h-24" htmlFor="customSwitch1" />
                </div>
                <div id="advanced-search-filters-5" className="row pb-6 pt-2 collapse p-1 w-100" data-parent="#accordion-5">
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="features" id="check1-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check1-5">Air
                        Conditioning</label>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="features" id="check2-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check2-5">Laundry</label>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="features" id="check4-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check4-5">Washer</label>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="features" id="check5-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check5-5">Barbeque</label>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="features" id="check6-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check6-5">Lawn</label>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="features" id="check7-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check7-5">Sauna</label>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="features" id="check8-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check8-5">WiFi</label>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="features" id="check9-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check9-5">Dryer</label>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="features" id="check10-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check10-5">Microwave</label>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="features" id="check11-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check11-5">Swimming
                        Pool</label>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="features" id="check12-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check12-5">Window
                        Coverings</label>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="features" id="check13-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check13-5">Gym</label>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="features" id="check14-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check14-5">Outdoor
                        Shower</label>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="features" id="check15-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check15-5">TV
                        Cable</label>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="features" id="check16-5" />
                        <label className="custom-control-label justify-content-start" htmlFor="check16-5">Refrigerator</label>
                    </div>
                    </div>
                </div>
                </form>
            </div>
        </section>

    )
}
