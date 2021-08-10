import { LocalGovt, State } from 'components/city-state/city-state'
import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { SearchbarSelectListing } from '../details/categories'

export default function Searchbar({parsed}) {
    
    const [selectedState, setSelectedState] = useState()
    const [query, setQuery] = useState({})
    const history = useHistory()

    const handleSearch = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        window.location.href = `/search?keyword=${formData.get('keyword')}&type=${formData.get('categories')}&price=${formData.get('price')}&bedrooms=${formData.get('bedrooms')}&bathrooms=${formData.get('bathrooms')}&areas=${formData.get('areas')}&features=${formData.get('features')}`
    }

    return (
        <>        
         <section className="bg-secondary">
            <div className="container">
            <form className="property-search d-none d-lg-block" onSubmit={handleSearch}>
                <div className="row align-items-lg-center" id="accordion-2">
                <div className="col-xl-2 col-lg-3 col-md-4">
                    <div className="property-search-status-tab d-flex flex-row">
                    <input className="search-field" type="hidden" defaultValue="for-rent" data-default-value />
                    <button type="button" data-value="for-rent" className="btn shadow-none btn-active-primary text-white rounded-0 hover-white text-uppercase h-lg-80 border-right-0 border-top-0 border-bottom-0 border-left border-white-opacity-03 active flex-md-1">
                        Rent
                    </button>
                    <button type="button" data-value="for-sale" className="btn shadow-none btn-active-primary text-white rounded-0 hover-white text-uppercase h-lg-80 border-left-0 border-top-0 border-bottom-0 border-right border-white-opacity-03 flex-md-1">
                        Sale
                    </button>
                    </div>
                </div>
                <div className="col-xl-8 col-lg-7 d-md-flex">
                    
                    <SearchbarSelectListing onChange={compileSearchQuery}/>

                    <div className="form-group mb-0 position-relative flex-md-3 mt-3 mt-md-0">
                    <input type="text" defaultValue={parsed && parsed.keyword} className="form-control form-control-lg border-0 shadow-none rounded-left-md-0 pr-8 bg-white placeholder-muted" onChange={compileSearchQuery} id="key-word-1" name="keyword" placeholder="Enter an address, neighbourhood..." />
                    <button type="submit" className="btn position-absolute pos-fixed-right-center p-0 text-heading fs-20 mr-4 shadow-none">
                        <i className="far fa-search" />
                    </button>
                    </div>
                </div>
                <div className="col-lg-2">
                    <a href="#advanced-search-filters-2" className="icon-primary btn advanced-search w-100 shadow-none text-white text-left rounded-0 fs-14 font-weight-600 position-relative collapsed px-0 d-flex align-items-center" data-toggle="collapse" data-target="#advanced-search-filters-2" aria-expanded="true" aria-controls="advanced-search-filters-2">
                    Advanced Search
                    </a>
                </div>
                <div id="advanced-search-filters-2" className="col-12 pb-6 pt-lg-2 collapse" data-parent="#accordion-2">
                    <div className="row mx-n2">
                    <div className="col-sm-6 col-md-4 col-lg-3 pt-4 px-2">
                        <select className="form-control border-0 shadow-none form-control-lg selectpicker bg-white" name="bedrooms" title="Bedrooms" onChange={compileSearchQuery} data-style="btn-lg py-2 h-52 bg-white">
                        <option>All Bedrooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pt-4 px-2">
                        <select className="form-control border-0 shadow-none form-control-lg selectpicker bg-white" name="bathrooms" title="Bathrooms" onChange={compileSearchQuery} data-style="btn-lg py-2 h-52 bg-white">
                        <option>All Bathrooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pt-4 px-2">
                        <State setSelectedState={setSelectedState} />
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3 pt-4 px-2">
                        <LocalGovt selectedState={selectedState} />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6 col-lg-5 pt-6 slider-range slider-range-primary">
                        <label htmlFor="price" className="mb-4 text-white">Price Range</label>
                        <div data-slider="true" data-slider-options="{&quot;min&quot;:0,&quot;max&quot;:1000000,&quot;values&quot;:[100000,700000],&quot;type&quot;:&quot;currency&quot;}" />
                        <div className="text-center mt-2">
                        <input id="price" type="text" readOnly className="border-0 amount text-center text-white bg-transparent font-weight-500" onChange={compileSearchQuery} name="price" />
                        </div>
                    </div>
                    <div className="col-12 pt-4 pb-2">
                        <a className="lh-17 d-inline-block other-feature collapsed" data-toggle="collapse" href="#other-feature-2" role="button" aria-expanded="false" aria-controls="other-feature-2">
                            <span className="fs-15 text-white font-weight-500 hover-primary">Other Features</span>
                        </a>
                    </div>
                    <div className="collapse row mx-0" id="other-feature-2">
                        <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="check16-2" onChange={compileSearchQuery} name="feature[]" />
                            <label className="custom-control-label text-white" htmlFor="check16-2">Refrigerator</label>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </form>
            <form className="property-search property-search-mobile d-lg-none py-6">
                <div className="row align-items-lg-center" id="accordion-2-mobile">
                <div className="col-12">
                    <div className="form-group mb-0 position-relative">
                    <a href="#advanced-search-filters-2-mobile" className="icon-primary btn advanced-search shadow-none pr-3 pl-0 d-flex align-items-center position-absolute pos-fixed-left-center py-0 h-100 border-right collapsed" data-toggle="collapse" data-target="#advanced-search-filters-2-mobile" aria-expanded="true" aria-controls="advanced-search-filters-2-mobile">
                    </a>
                    <input type="text" className="form-control form-control-lg border-0 shadow-none pr-9 pl-11 bg-white placeholder-muted" name="key-word" placeholder="Search..." />
                    <button type="submit" className="btn position-absolute pos-fixed-right-center p-0 text-heading fs-20 px-3 shadow-none h-100 border-left bg-white">
                        <i className="far fa-search" />
                    </button>
                    </div>
                </div>
                <div id="advanced-search-filters-2-mobile" className="col-12 pt-2 collapse" data-parent="#accordion-2-mobile">
                    <div className="row mx-n2">
                    <div className="col-sm-6 pt-4 px-2">
                        <select className="form-control border-0 shadow-none form-control-lg selectpicker bg-white" title="Select" data-style="btn-lg py-2 h-52 bg-white" name="type">
                        <option>All status</option>
                        <option>For Rent</option>
                        <option>For Sale</option>
                        </select>
                    </div>
                    <div className="col-sm-6 pt-4 px-2">
                        <select className="form-control border-0 shadow-none form-control-lg selectpicker bg-white" title="All Types" data-style="btn-lg py-2 h-52 bg-white" name="type">
                        <option>Condominium</option>
                        <option>Single-Family Home</option>
                        <option>Townhouse</option>
                        <option>Multi-Family Home</option>
                        </select>
                    </div>
                    <div className="col-sm-6 pt-4 px-2">
                        <select className="form-control border-0 shadow-none form-control-lg selectpicker bg-white" name="bedroom" title="Bedrooms" data-style="btn-lg py-2 h-52 bg-white">
                        <option>All Bedrooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        </select>
                    </div>
                    <div className="col-sm-6 pt-4 px-2">
                        <select className="form-control border-0 shadow-none form-control-lg selectpicker bg-white" name="bathrooms" title="Bathrooms" data-style="btn-lg py-2 h-52 bg-white">
                        <option>All Bathrooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        </select>
                    </div>
                    <div className="col-sm-6 pt-4 px-2">
                        <select className="form-control border-0 shadow-none form-control-lg selectpicker bg-white" title="All Cities" data-style="btn-lg py-2 h-52 bg-white" name="city">
                        <option>All Cities</option>
                        <option>New York</option>
                        <option>Los Angeles</option>
                        <option>Chicago</option>
                        <option>Houston</option>
                        <option>San Diego</option>
                        <option>Las Vegas</option>
                        <option>Las Vegas</option>
                        <option>Atlanta</option>
                        </select>
                    </div>
                    <div className="col-sm-6 pt-4 px-2">
                        <select className="form-control border-0 shadow-none form-control-lg selectpicker bg-white" name="areas" title="All Areas" data-style="btn-lg py-2 h-52 bg-white">
                        <option>All Areas</option>
                        <option>Albany Park</option>
                        <option>Altgeld Gardens</option>
                        <option>Andersonville</option>
                        <option>Beverly</option>
                        <option>Brickel</option>
                        <option>Central City</option>
                        <option>Coconut Grove</option>
                        </select>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6 pt-6 slider-range slider-range-primary">
                        <label htmlFor="price-2-mobile" className="mb-4 text-white">Price Range</label>
                        <div data-slider="true" data-slider-options="{&quot;min&quot;:0,&quot;max&quot;:1000000,&quot;values&quot;:[100000,700000],&quot;type&quot;:&quot;currency&quot;}" />
                        <div className="text-center mt-2">
                        <input id="price-2-mobile" type="text" readOnly className="border-0 amount text-center text-white bg-transparent font-weight-500" name="price" />
                        </div>
                    </div>
                    <div className="col-12 pt-4 pb-2">
                        <a className="lh-17 d-inline-block other-feature collapsed" data-toggle="collapse" href="#other-feature-2-mobile" role="button" aria-expanded="false" aria-controls="other-feature-2-mobile">
                        <span className="fs-15 text-white font-weight-500 hover-primary">Other Features</span>
                        </a>
                    </div>
                    <div className="collapse row mx-0" id="other-feature-2-mobile">
                        <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="check1-2-mobile" name="feature[]" />
                            <label className="custom-control-label text-white" htmlFor="check1-2-mobile">Air
                            Conditioning</label>
                        </div>
                        </div>
                        <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="check2-2-mobile" name="feature[]" />
                            <label className="custom-control-label text-white" htmlFor="check2-2-mobile">Laundry</label>
                        </div>
                        </div>
                        <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="check4-2-mobile" name="feature[]" />
                            <label className="custom-control-label text-white" htmlFor="check4-2-mobile">Washer</label>
                        </div>
                        </div>
                        <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="check5-2-mobile" name="feature[]" />
                            <label className="custom-control-label text-white" htmlFor="check5-2-mobile">Barbeque</label>
                        </div>
                        </div>
                        <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="check6-2-mobile" name="feature[]" />
                            <label className="custom-control-label text-white" htmlFor="check6-2-mobile">Lawn</label>
                        </div>
                        </div>
                        <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="check7-2-mobile" name="feature[]" />
                            <label className="custom-control-label text-white" htmlFor="check7-2-mobile">Sauna</label>
                        </div>
                        </div>
                        <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="check8-2-mobile" name="feature[]" />
                            <label className="custom-control-label text-white" htmlFor="check8-2-mobile">WiFi</label>
                        </div>
                        </div>
                        <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="check9-2-mobile" name="feature[]" />
                            <label className="custom-control-label text-white" htmlFor="check9-2-mobile">Dryer</label>
                        </div>
                        </div>
                        <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="check10-2-mobile" name="feature[]" />
                            <label className="custom-control-label text-white" htmlFor="check10-2-mobile">Microwave</label>
                        </div>
                        </div>
                        <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="check11-2-mobile" name="feature[]" />
                            <label className="custom-control-label text-white" htmlFor="check11-2-mobile">Swimming
                            Pool</label>
                        </div>
                        </div>
                        <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="check12-2-mobile" name="feature[]" />
                            <label className="custom-control-label text-white" htmlFor="check12-2-mobile">Window
                            Coverings</label>
                        </div>
                        </div>
                        <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="check13-2-mobile" name="feature[]" />
                            <label className="custom-control-label text-white" htmlFor="check13-2-mobile">Gym</label>
                        </div>
                        </div>
                        <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="check14-2-mobile" name="feature[]" />
                            <label className="custom-control-label text-white" htmlFor="check14-2-mobile">Outdoor
                            Shower</label>
                        </div>
                        </div>
                        <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="check15-2-mobile" name="feature[]" />
                            <label className="custom-control-label text-white" htmlFor="check15-2-mobile">TV
                            Cable</label>
                        </div>
                        </div>
                        <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="check16-2-mobile" name="feature[]" />
                            <label className="custom-control-label text-white" htmlFor="check16-2-mobile">Refrigerator</label>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </form>
            </div>
        </section>   
        </>
    )
}
