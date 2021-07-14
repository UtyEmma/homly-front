import React from 'react'
import { MapDisplay } from 'views/agent/layouts/listings/blocks/map/map-display'
import Footer from 'views/layouts/shared/footer'
import NavBar from 'views/layouts/shared/nav-bar'
import WishlistForm from './components/wishlist-form'

export default function Wishlist () {
    return (
        <div>
            <NavBar/>

            <main id="content">
                <section className="bg-secondary">
                    <div className="container">
                    <form className="property-search d-none d-lg-block">
                        <div className="row align-items-lg-center" id="accordion-2">
                        <div className="col-xl-2 col-lg-3 col-md-4">
                            <div className="property-search-status-tab d-flex flex-row">
                            <input className="search-field" type="hidden" name="status" defaultValue="for-rent" data-default-value />
                            <button type="button" data-value="for-rent" className="btn shadow-none btn-active-primary text-white rounded-0 hover-white text-uppercase h-lg-80 border-right-0 border-top-0 border-bottom-0 border-left border-white-opacity-03 active flex-md-1">
                                Rent
                            </button>
                            <button type="button" data-value="for-sale" className="btn shadow-none btn-active-primary text-white rounded-0 hover-white text-uppercase h-lg-80 border-left-0 border-top-0 border-bottom-0 border-right border-white-opacity-03 flex-md-1">
                                Sale
                            </button>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 d-md-flex">
                            <select className="form-control shadow-none form-control-lg selectpicker rounded-right-md-0 rounded-md-top-left-0 rounded-lg-top-left flex-md-1 mt-3 mt-md-0" title="All Types" data-style="btn-lg py-2 h-52 border-right bg-white" id="type-1" name="type">
                            <option>Condominium</option>
                            <option>Single-Family Home</option>
                            <option>Townhouse</option>
                            <option>Multi-Family Home</option>
                            </select>
                            <div className="form-group mb-0 position-relative flex-md-3 mt-3 mt-md-0">
                            <input type="text" className="form-control form-control-lg border-0 shadow-none rounded-left-md-0 pr-8 bg-white placeholder-muted" id="key-word-1" name="key-word" placeholder="Enter an address, neighbourhood..." />
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
                                <select className="form-control border-0 shadow-none form-control-lg selectpicker bg-white" name="status" title="Status" data-style="btn-lg py-2 h-52 bg-white">
                                <option>All status</option>
                                <option>For Rent</option>
                                <option>For Sale</option>
                                </select>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 pt-4 px-2">
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
                            <div className="col-sm-6 col-md-4 col-lg-3 pt-4 px-2">
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
                            <div className="col-sm-6 col-md-4 col-lg-3 pt-4 px-2">
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
                            <div className="col-sm-6 col-md-4 col-lg-3 pt-4 px-2">
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
                            <div className="col-sm-6 col-md-4 col-lg-3 pt-4 px-2">
                                <input type="text" className="form-control form-control-lg border-0 shadow-none bg-white" placeholder="Property ID" name="property-id" />
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-6 col-lg-5 pt-6 slider-range slider-range-primary">
                                <label htmlFor="price-2" className="mb-4 text-white">Price Range</label>
                                <div data-slider="true" data-slider-options="{&quot;min&quot;:0,&quot;max&quot;:1000000,&quot;values&quot;:[100000,700000],&quot;type&quot;:&quot;currency&quot;}" />
                                <div className="text-center mt-2">
                                <input id="price-2" type="text" readOnly className="border-0 amount text-center text-white bg-transparent font-weight-500" name="price" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5 pt-6 slider-range slider-range-primary offset-lg-1">
                                <label htmlFor="area-size-2" className="mb-4 text-white">Area Size</label>
                                <div data-slider="true" data-slider-options="{&quot;min&quot;:0,&quot;max&quot;:15000,&quot;values&quot;:[0,12000],&quot;type&quot;:&quot;currency&quot;}" />
                                <div className="text-center mt-2">
                                <input id="area-size-2" type="text" readOnly className="border-0 amount text-center text-white bg-transparent font-weight-500" name="area" />
                                </div>
                            </div>
                            <div className="col-12 pt-4 pb-2">
                                <a className="lh-17 d-inline-block other-feature collapsed" data-toggle="collapse" href="#other-feature-2" role="button" aria-expanded="false" aria-controls="other-feature-2">
                                <span className="fs-15 text-white font-weight-500 hover-primary">Other Features</span>
                                </a>
                            </div>
                            <div className="collapse row mx-0" id="other-feature-2">
                                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check1-2" name="feature[]" />
                                    <label className="custom-control-label text-white" htmlFor="check1-2">Air
                                    Conditioning</label>
                                </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check2-2" name="feature[]" />
                                    <label className="custom-control-label text-white" htmlFor="check2-2">Laundry</label>
                                </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check4-2" name="feature[]" />
                                    <label className="custom-control-label text-white" htmlFor="check4-2">Washer</label>
                                </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check5-2" name="feature[]" />
                                    <label className="custom-control-label text-white" htmlFor="check5-2">Barbeque</label>
                                </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check6-2" name="feature[]" />
                                    <label className="custom-control-label text-white" htmlFor="check6-2">Lawn</label>
                                </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check7-2" name="feature[]" />
                                    <label className="custom-control-label text-white" htmlFor="check7-2">Sauna</label>
                                </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check8-2" name="feature[]" />
                                    <label className="custom-control-label text-white" htmlFor="check8-2">WiFi</label>
                                </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check9-2" name="feature[]" />
                                    <label className="custom-control-label text-white" htmlFor="check9-2">Dryer</label>
                                </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check10-2" name="feature[]" />
                                    <label className="custom-control-label text-white" htmlFor="check10-2">Microwave</label>
                                </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check11-2" name="feature[]" />
                                    <label className="custom-control-label text-white" htmlFor="check11-2">Swimming
                                    Pool</label>
                                </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check12-2" name="feature[]" />
                                    <label className="custom-control-label text-white" htmlFor="check12-2">Window
                                    Coverings</label>
                                </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check13-2" name="feature[]" />
                                    <label className="custom-control-label text-white" htmlFor="check13-2">Gym</label>
                                </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check14-2" name="feature[]" />
                                    <label className="custom-control-label text-white" htmlFor="check14-2">Outdoor
                                    Shower</label>
                                </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check15-2" name="feature[]" />
                                    <label className="custom-control-label text-white" htmlFor="check15-2">TV Cable</label>
                                </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check16-2" name="feature[]" />
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
                            <div className="col-md-6 pt-6 slider-range slider-range-primary">
                                <label htmlFor="area-size-2-mobile" className="mb-4 text-white">Area Size</label>
                                <div data-slider="true" data-slider-options="{&quot;min&quot;:0,&quot;max&quot;:15000,&quot;values&quot;:[0,12000],&quot;type&quot;:&quot;sqrt&quot;}" />
                                <div className="text-center mt-2">
                                <input id="area-size-2-mobile" type="text" readOnly className="border-0 amount text-center text-white bg-transparent font-weight-500" name="area" />
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
                <section className="position-relative">
                    <div className="container-fluid px-0">
                        <div className="row no-gutters">
                            <div className="col-xl-6 col-xxl-7 primary-map map-sticky" id="map-sticky">
                            <div className="primary-map-inner">

                            <MapDisplay 
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBYmJujloM3zNdxMpokW1G_Qo5Qo_05_A&libraries=geometry,drawing,places&v=weekly"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `100%` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                                style={{height: "100%"}}
                                // latitude={mapData.mapPosition.lat}
                                // longitude={mapData.mapPosition.long}
                                isMarkerShown={true}
                            />
                            </div>
                            </div>
                            <div className="col-xl-6  pt-7 pb-11">
                                <WishlistForm/>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="compare" className="compare">
                    <button className="btn shadow btn-open bg-white bg-hover-accent text-secondary rounded-right-0 d-flex justify-content-center align-items-center w-30px h-140 p-0">
                    </button>
                    <div className="list-group list-group-no-border bg-dark py-3">
                    <a href="#" className="list-group-item bg-transparent text-white fs-22 text-center py-0">
                        <i className="far fa-bars" />
                    </a>
                    <div className="list-group-item card bg-transparent">
                        <div className="position-relative hover-change-image bg-hover-overlay">
                        <img src="images/compare-01.jpg" className="card-img" alt="properties" />
                        <div className="card-img-overlay">
                            <a href="#" className="text-white hover-image fs-16 lh-1 pos-fixed-top-right position-absolute m-2"><i className="fal fa-minus-circle" /></a>
                        </div>
                        </div>
                    </div>
                    <div className="list-group-item card bg-transparent">
                        <div className="position-relative hover-change-image bg-hover-overlay">
                        <img src="images/compare-02.jpg" className="card-img" alt="properties" />
                        <div className="card-img-overlay">
                            <a href="#" className="text-white hover-image fs-16 lh-1 pos-fixed-top-right position-absolute m-2"><i className="fal fa-minus-circle" /></a>
                        </div>
                        </div>
                    </div>
                    <div className="list-group-item card card bg-transparent">
                        <div className="position-relative hover-change-image bg-hover-overlay ">
                        <img src="images/compare-03.jpg" className="card-img" alt="properties" />
                        <div className="card-img-overlay">
                            <a href="#" className="text-white hover-image fs-16 lh-1 pos-fixed-top-right position-absolute m-2"><i className="fal fa-minus-circle" /></a>
                        </div>
                        </div>
                    </div>
                    <div className="list-group-item bg-transparent">
                        <a href="compare-details.html" className="btn btn-lg btn-primary w-100 px-0 d-flex justify-content-center">
                        Compare
                        </a>
                    </div>
                    </div>
                </div>
                <div className="d-none" id="template-properties">
                    <div className="marker-item" data-icon-marker="images/googlle-market-02.png" data-position="[-73.9893691, 40.6751204]" data-marker-style="{&quot;className&quot;:&quot;marker&quot;,&quot;style&quot;:{&quot;width&quot;:&quot;45px&quot;,&quot;height&quot;:&quot;48px&quot;},&quot;popup&quot;:{&quot;className&quot;:&quot;popup-map-property&quot;,&quot;maxWidth&quot;:&quot;269px&quot;}}">
                    <div className="card border-0">
                        <div className="position-relative hover-change-image bg-hover-overlay card-img-top"><img src="images/properties-grid-73.jpg" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column">
                            <div><span className="badge badge-primary">For Sale</span></div>
                            <div className="mt-auto d-flex hover-image">
                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto fs-14">
                                <li className="list-inline-item mr-2"><a href="#" className="text-white hover-primary"><i className="far fa-images" /><span className="pl-1">9</span></a></li>
                                <li className="list-inline-item" title="2 Video"><a href="#" className="text-white hover-primary"><i className="far fa-play-circle" /><span className="pl-1">2</span></a></li>
                            </ul>
                            <ul className="list-inline mb-0 mr-n3 d-flex">
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="far fa-heart" /></a></li>
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="fas fa-exchange-alt" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="card-body px-2 py-1">
                        <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                        </h2>
                        <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles</p>
                        <p className="fs-17 pt-1 font-weight-bold text-heading mb-0 lh-16">$1.250.000</p>
                        </div>
                        <div className="card-footer bg-transparent px-2 py-2">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-bedroom" />
                            </svg>
                            3 Br
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-shower" />
                            </svg>
                            3 Ba
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13">
                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-square" />
                            </svg>
                            2300 Sq.Ft
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="marker-item" data-icon-marker="images/googlle-market-02.png" data-position="[-73.9934889, 40.6743149]" data-marker-style="{&quot;className&quot;:&quot;marker&quot;,&quot;style&quot;:{&quot;width&quot;:&quot;45px&quot;,&quot;height&quot;:&quot;48px&quot;},&quot;popup&quot;:{&quot;className&quot;:&quot;popup-map-property&quot;,&quot;maxWidth&quot;:&quot;269px&quot;}}">
                    <div className="card border-0">
                        <div className="position-relative hover-change-image bg-hover-overlay card-img-top"><img src="images/properties-grid-69.jpg" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column">
                            <div><span className="badge badge-primary">For Sale</span></div>
                            <div className="mt-auto d-flex hover-image">
                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto fs-14">
                                <li className="list-inline-item mr-2"><a href="#" className="text-white hover-primary"><i className="far fa-images" /><span className="pl-1">9</span></a></li>
                                <li className="list-inline-item" title="2 Video"><a href="#" className="text-white hover-primary"><i className="far fa-play-circle" /><span className="pl-1">2</span></a></li>
                            </ul>
                            <ul className="list-inline mb-0 mr-n3 d-flex">
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="far fa-heart" /></a></li>
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="fas fa-exchange-alt" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="card-body px-2 py-1">
                        <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                        </h2>
                        <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles</p>
                        <p className="fs-17 pt-1 font-weight-bold text-heading mb-0 lh-16">$1.250.000</p>
                        </div>
                        <div className="card-footer bg-transparent px-2 py-2">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-bedroom" />
                            </svg>
                            3 Br
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-shower" />
                            </svg>
                            3 Ba
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13">
                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-square" />
                            </svg>
                            2300 Sq.Ft
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="marker-item" data-icon-marker="images/googlle-market-03.png" data-position="[-73.9947227, 40.6734035]" data-marker-style="{&quot;className&quot;:&quot;marker&quot;,&quot;style&quot;:{&quot;width&quot;:&quot;45px&quot;,&quot;height&quot;:&quot;48px&quot;},&quot;popup&quot;:{&quot;className&quot;:&quot;popup-map-property&quot;,&quot;maxWidth&quot;:&quot;269px&quot;}}">
                    <div className="card border-0">
                        <div className="position-relative hover-change-image bg-hover-overlay card-img-top"><img src="images/properties-grid-71.jpg" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column">
                            <div><span className="badge badge-indigo">for Rent</span></div>
                            <div className="mt-auto d-flex hover-image">
                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto fs-14">
                                <li className="list-inline-item mr-2"><a href="#" className="text-white hover-primary"><i className="far fa-images" /><span className="pl-1">9</span></a></li>
                                <li className="list-inline-item"><a href="#" className="text-white hover-primary"><i className="far fa-play-circle" /><span className="pl-1">2</span></a></li>
                            </ul>
                            <ul className="list-inline mb-0 d-flex mr-n3">
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="far fa-heart" /></a></li>
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="fas fa-exchange-alt" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="card-body px-2 py-1">
                        <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                        </h2>
                        <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles</p>
                        <p className="fs-17 pt-1 font-weight-bold text-heading mb-0 lh-16">$2500<span className="fs-14 font-weight-500 text-gray-light"> /month</span></p>
                        </div>
                        <div className="card-footer bg-transparent px-2 py-2">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-bedroom" />
                            </svg>
                            3 Br
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-shower" />
                            </svg>
                            3 Ba
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13">
                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-square" />
                            </svg>
                            2300 Sq.Ft
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="marker-item" data-icon-marker="images/googlle-market-02.png" data-position="[-73.9968864, 40.6747657]" data-marker-style="{&quot;className&quot;:&quot;marker&quot;,&quot;style&quot;:{&quot;width&quot;:&quot;45px&quot;,&quot;height&quot;:&quot;48px&quot;},&quot;popup&quot;:{&quot;className&quot;:&quot;popup-map-property&quot;,&quot;maxWidth&quot;:&quot;269px&quot;}}">
                    <div className="card border-0">
                        <div className="position-relative hover-change-image bg-hover-overlay card-img-top"><img src="images/properties-grid-72.jpg" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column">
                            <div><span className="badge badge-primary">For Sale</span></div>
                            <div className="mt-auto d-flex hover-image">
                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto fs-14">
                                <li className="list-inline-item mr-2"><a href="#" className="text-white hover-primary"><i className="far fa-images" /><span className="pl-1">9</span></a></li>
                                <li className="list-inline-item"><a href="#" className="text-white hover-primary"><i className="far fa-play-circle" /><span className="pl-1">2</span></a></li>
                            </ul>
                            <ul className="list-inline mb-0 d-flex mr-n3">
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="far fa-heart" /></a></li>
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="fas fa-exchange-alt" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="card-body px-2 py-1">
                        <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                        </h2>
                        <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles</p>
                        <p className="fs-17 pt-1 font-weight-bold text-heading mb-0 lh-16">$1.250.000</p>
                        </div>
                        <div className="card-footer bg-transparent px-2 py-2">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-bedroom" />
                            </svg>
                            3 Br
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-shower" />
                            </svg>
                            3 Ba
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13">
                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-square" />
                            </svg>
                            2300 Sq.Ft
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="marker-item" data-icon-marker="images/googlle-market-02.png" data-position="[-73.9929114, 40.6731454]" data-marker-style="{&quot;className&quot;:&quot;marker&quot;,&quot;style&quot;:{&quot;width&quot;:&quot;45px&quot;,&quot;height&quot;:&quot;48px&quot;},&quot;popup&quot;:{&quot;className&quot;:&quot;popup-map-property&quot;,&quot;maxWidth&quot;:&quot;269px&quot;}}">
                    <div className="card border-0">
                        <div className="position-relative hover-change-image bg-hover-overlay card-img-top"><img src="images/properties-grid-70.jpg" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column">
                            <div><span className="badge badge-primary">For Sale</span></div>
                            <div className="mt-auto d-flex hover-image">
                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto fs-14">
                                <li className="list-inline-item mr-2"><a href="#" className="text-white hover-primary"><i className="far fa-images" /><span className="pl-1">9</span></a></li>
                                <li className="list-inline-item"><a href="#" className="text-white hover-primary"><i className="far fa-play-circle" /><span className="pl-1">2</span></a></li>
                            </ul>
                            <ul className="list-inline mb-0 d-flex mr-n3">
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="far fa-heart" /></a></li>
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="fas fa-exchange-alt" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="card-body px-2 py-1">
                        <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                        </h2>
                        <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles</p>
                        <p className="fs-17 pt-1 font-weight-bold text-heading mb-0 lh-16">$1.250.000</p>
                        </div>
                        <div className="card-footer bg-transparent px-2 py-2">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-bedroom" />
                            </svg>
                            3 Br
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-shower" />
                            </svg>
                            3 Ba
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13">
                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-square" />
                            </svg>
                            2300 Sq.Ft
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="marker-item" data-icon-marker="images/googlle-market-03.png" data-position="[-73.9927934, 40.674364]" data-marker-style="{&quot;className&quot;:&quot;marker&quot;,&quot;style&quot;:{&quot;width&quot;:&quot;45px&quot;,&quot;height&quot;:&quot;48px&quot;},&quot;popup&quot;:{&quot;className&quot;:&quot;popup-map-property&quot;,&quot;maxWidth&quot;:&quot;269px&quot;}}">
                    <div className="card border-0">
                        <div className="position-relative hover-change-image bg-hover-overlay card-img-top"><img src="images/properties-grid-68.jpg" alt="Home in Metric Way" />
                        <div className="card-img-overlay d-flex flex-column">
                            <div><span className="badge badge-indigo">for Rent</span></div>
                            <div className="mt-auto d-flex hover-image">
                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto fs-14">
                                <li className="list-inline-item mr-2"><a href="#" className="text-white hover-primary"><i className="far fa-images" /><span className="pl-1">9</span></a></li>
                                <li className="list-inline-item" title="2 Video"><a href="#" className="text-white hover-primary"><i className="far fa-play-circle" /><span className="pl-1">2</span></a></li>
                            </ul>
                            <ul className="list-inline mb-0 mr-n3 d-flex">
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="far fa-heart" /></a></li>
                                <li className="list-inline-item mr-3 h-32 d-flex align-items-end"><a href="#" className="text-white fs-20 hover-primary"><i className="fas fa-exchange-alt" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="card-body px-2 py-1">
                        <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                        </h2>
                        <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles</p>
                        <p className="fs-17 pt-1 font-weight-bold text-heading mb-0 lh-16">$2500<span className="fs-14 font-weight-500 text-gray-light"> /month</span></p>
                        </div>
                        <div className="card-footer bg-transparent px-2 py-2">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-bedroom" />
                            </svg>
                            3 Br
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-5">
                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-shower" />
                            </svg>
                            3 Ba
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13">
                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-square" />
                            </svg>
                            2300 Sq.Ft
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </main>

            
            <Footer/>
        </div>
    )
}
