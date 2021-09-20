import { LocalGovt, State } from 'components/city-state/city-state'
import React, { useEffect, useState } from 'react'
import { SearchbarSelectListing } from '../details/categories'
import { useHistory, useLocation } from 'react-router-dom';

export default function Searchbar({parsed}) {

    const [selectedState, setSelectedState] = useState()
    
    const handleSearch = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        let query = buildSearchQuery(formData);
        window.location.href = query
    }

    const buildSearchQuery = (formData) => {
        const keyword = formData.get('keyword') ? `keyword=${formData.get('keyword')}` : "";
        const type = formData.get('type') ? `&type=${formData.get('type')}` : "";
        const price = formData.get('price') ? `&price=${formData.get('price')}` : "";
        const bedrooms = formData.get('bedrooms') ? `&bedrooms=${formData.get('bedrooms')}` : "";
        const bathrooms = formData.get('bathrooms') ? `&bathrooms=${formData.get('bathrooms')}` : "";
        const features = formData.get('features') ? `&features=${formData.get('features')}` : "";
        const minprice = formData.get('minprice') && `&minprice=${formData.get('minprice')}`
        const maxprice = formData.get('maxprice') && `&maxprice=${formData.get('maxprice')}`

        return `/search?${keyword}${type}${price}${bedrooms}${bathrooms}${features}${minprice}${maxprice}`;
    }

    useEffect(() => {
        window.$('select').selectpicker('refresh')
    })

    return (
        <>        
         <section className="bg-secondary">
            <div className="container">
            <form className="property-search d-none d-lg-block" onSubmit={handleSearch}>
                <div className="row align-items-lg-center py-2" id="accordion-2">
                <div className="col-xl-8 offset-xl-1 col-lg-7 d-md-flex">
                    
                    <SearchbarSelectListing name="type" />

                    <div className="form-group mb-0 position-relative flex-md-3 mt-3 mt-md-0">
                    <input type="text" defaultValue={parsed && parsed.keyword} className="form-control form-control-lg border-0 shadow-none rounded-left-md-0 pr-8 bg-white placeholder-muted" id="key-word-1" name="keyword" placeholder="Enter an address, neighbourhood..." />
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
                        <select className="form-control border-0 shadow-none selectpicker bg-white" name="bedrooms" title="Select Bedrooms" data-style="btn-lg py-2 h-52 bg-white">
                            <option defaultValue="">All Bedrooms</option>
                            <option defaultValue="1" >1</option>
                            <option defaultValue="2" >2</option>
                            <option defaultValue="3">3</option>
                            <option defaultValue="4">4</option>
                            <option defaultValue="5">5</option>
                            <option defaultValue="6">6 +</option>
                        </select>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pt-4 px-2">
                        <select className="form-control border-0 shadow-none selectpicker bg-white" name="bathrooms" title="Select Bathrooms" data-style="btn-lg py-2 h-52 bg-white">
                            <option defaultValue="">All Bathrooms</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6+</option>
                        </select>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pt-4 px-2">
                        <State classes="form-control form-control-lg border-0 shadow-none bg-white" setSelectedState={setSelectedState} dataStyle="btn-lg py-2 h-52 bg-white"/>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3 pt-4 px-2">
                        <LocalGovt classes="form-control form-control-lg border-0 shadow-none bg-white" dataStyle="btn-lg py-2 h-52 bg-white" selectedState={selectedState} />
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className='row'>
                                <div className="col-md-6 col-md-6 col-lg-6 pt-6">
                                    <div className="text-center mt-2">
                                        <input type="text" className="form-control form-control-lg border-0" id="price" placeholder="Min Price (&#8358;)" dataStyle="btn-lg py-2 h-52 bg-white" name="minprice" />
                                    </div>
                                </div>

                                <div className="col-md-6 col-md-6 col-lg-6 pt-6">
                                    <div className="text-center mt-2">
                                        <input type="text" className="form-control form-control-lg border-0" id="price" placeholder="Max Price (&#8358;)" dataStyle="btn-lg py-2 h-52 bg-white" name="maxprice" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </form>
            <form className="property-search property-search-mobile d-lg-none py-6" onSubmit={handleSearch}>
                <div className="row align-items-lg-center" id="accordion-2-mobile">
                <div className="col-12">
                    <div className="form-group mb-0 position-relative">
                    <a href="#advanced-search-filters-2-mobile" className="icon-primary btn advanced-search shadow-none pr-3 pl-0 d-flex align-items-center position-absolute pos-fixed-left-center py-0 h-100 border-right collapsed" data-toggle="collapse" data-target="#advanced-search-filters-2-mobile" aria-expanded="true" aria-controls="advanced-search-filters-2-mobile">
                    </a>
                        <input type="text" defaultValue={parsed && parsed.keyword} className="form-control form-control-lg border-0 shadow-none pr-9 pl-11 bg-white placeholder-muted" name="keyword" placeholder="Search..." />
                        <button type="submit" className="btn position-absolute pos-fixed-right-center p-0 text-heading fs-20 px-3 shadow-none h-100 border-left bg-white">
                            <i className="far fa-search" />
                        </button>
                    </div>
                </div>
                <div id="advanced-search-filters-2-mobile" className="col-12 pt-2 collapse" data-parent="#accordion-2-mobile">
                    <div className="row mx-n2">
                    <div className="col-sm-6 pt-4 px-2">
                        <SearchbarSelectListing name="type"/>
                    </div>
                    <div className="col-sm-6 pt-4 px-2">
                        <select className="form-control border-0 shadow-none form-control-lg selectpicker bg-white" name="bedrooms" title="All Bedrooms" data-style="btn-lg py-2 h-52 bg-white">
                            <option defaultValue="1" >1</option>
                            <option defaultValue="2" >2</option>
                            <option defaultValue="3">3</option>
                            <option defaultValue="4">4</option>
                            <option defaultValue="5">5</option>
                            <option defaultValue="6">6 +</option>
                        </select>
                    </div>
                    <div className="col-sm-6 pt-4 px-2">
                        <select className="form-control border-0 shadow-none form-control-lg selectpicker bg-white" name="bathrooms" title="All Bathrooms" data-style="btn-lg py-2 h-52 bg-white">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6+</option>
                        </select>
                    </div>
                    <div className="col-sm-6 pt-4 px-2">
                        <State classes="form-control border-0 shadow-none form-control-lg bg-white" setSelectedState={setSelectedState} />
                    </div>
                    <div className="col-sm-6 pt-4 px-2">
                        <LocalGovt classes="form-control border-0 shadow-none form-control-lg bg-white" selectedState={selectedState} />
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-lg-6 pt-2">
                            <div className="text-center mt-2">
                                <input type="text" className="form-control form-control-lg border-0" id="price" placeholder="Min Price (&#8358;)" name="minprice" />
                            </div>
                        </div>

                        <div className="col-6 col-lg-6 pt-2">
                            <div className="text-center mt-2">
                                <input type="text" className="form-control form-control-lg border-0" id="price" placeholder="Max Price (&#8358;)" name="maxprice" />
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
