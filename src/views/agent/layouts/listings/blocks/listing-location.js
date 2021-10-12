import React, { useState, useEffect, useCallback } from 'react'
import Geocode from 'react-geocode'
import InputAddress from './map/map-address-search';
import { LocalGovt, State } from 'components/city-state/city-state';
import { MapDisplay } from './map/map-display';
import * as $ from 'jquery'

export default function ListingLocation({formErrors}) {

    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [landmark, setLandmark] = useState()
    const [long, setLong] = useState(6.4584)
    const [lat, setLat] = useState(7.5464)
    const [zoom, setZoom] = useState(11)

    const updateMapData = (e) => {
        e.target.name === 'city' && setCity(e.target.value)
    }

    const setLatLong = (address) => {
        Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY)
        Geocode.setRegion("ng");
        Geocode.setLocationType("ROOFTOP");

        Geocode.fromAddress(address)
                .then((response) => {
                    const results = response.results
                    results.forEach((result) => {
                        setLat(result.geometry.location.lat)
                        setLong(result.geometry.location.lng)
                    })
                    setZoom(15)
                },
                (error) => {
                    console.log(error);
                });        
    }

    const mapViewUpdate = useCallback(() => {
        setLatLong(`${state}, ${city}, ${landmark}`)
    }, [state, city, landmark])

    useEffect(() => {
        mapViewUpdate()
    }, [state, city, landmark, mapViewUpdate])

    useEffect(() => {
        $('#location-tab').on('click', function(){
          const $ = window.jQuery
          $('#location-collapse').collapse('show')
        });
      }, [])

    return (
        <div className="tab-pane tab-pane-parent fade px-0" id="location" role="tabpanel" aria-labelledby="location-tab">
        <div className="card bg-transparent border-0">
            <div className="card-header d-block d-md-none bg-transparent px-0 py-1 border-bottom-0" id="heading-location">
            <h5 className="mb-0">
                <button className="btn btn-block collapse-parent collapsed border shadow-none" data-toggle="collapse" data-number={3.} data-target="#location-collapse" aria-expanded="true" aria-controls="location-collapse">
                <span className="number">3.</span> Location
                </button>
            </h5>
            </div>
            <div id="location-collapse" className="collapse collapsible" aria-labelledby="heading-location" data-parent="#collapse-tabs-accordion">
                <div className="card-body py-4 py-md-0 px-0">
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="card mb-6">
                        <div className="card-body p-6">
                            <h3 className="card-title mb-0 text-heading fs-22 lh-15">Property Location</h3>
                            <p className="card-text mb-5">Alright, lets see exactly where your property is located</p>
                            <div className="form-row mx-n2">
                                <div className="col-12 px-2">
                                    <div className="form-group">
                                        <label htmlFor="state"  className="text-heading">State<span class="text-danger">*</span></label>
                                        <State setSelectedState={setState} classes="form-control form-control-lg border-0 selectpicker" id="state" name="state" />
                                        <p className="text-danger fs-12 mt-1">{formErrors.state?.message}</p>
                                    </div>
                                </div>
                                <div className="col-12 px-2">
                                    <div className="form-group">
                                        <label htmlFor="city" className="text-heading">City<span class="text-danger">*</span></label>
                                        <LocalGovt selectedState={state} onChange={updateMapData} classes="form-control form-control-lg border-0" id="city" name="city" />
                                        <p className="text-danger fs-12 mt-1">{formErrors.city?.message}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row mx-n2">
                                <div className="col-12 px-2">
                                    <div className="form-group">
                                        <label htmlFor="address" className="text-heading">Address<span class="text-danger">*</span></label>
                                        <input type="text" onChange={updateMapData} className="form-control form-control-lg border-0" id="address" name="address"/>
                                        <p className="text-danger fs-12 mt-1">{formErrors.address?.message}</p>
                                    </div>
                                </div>
                                <div className="col-12 px-2">
                                    <div className="form-group">
                                        <label htmlFor="landmark" className="text-heading">Landmark / Nearest Bus Stop<span class="text-danger">*</span> <br/>
                                        <span className="text-muted">
                                        Enter the most popular location in that area, this could even be the closest market around.
                                        </span>
                                        </label>
                                        <InputAddress setLandmark={setLandmark} setLatLong={setLatLong} id="landmark"/>
                                        <input hidden name="landmark" value={landmark} type="text"/>
                                        <p className="text-danger fs-12 mt-1">{formErrors.landmark?.message}</p>    
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card mb-6">
                        <div className="card-body p-6">
                            <h3 className="card-title  text-heading fs-22 lh-15">Place the
                            listing pin on the map</h3>
                            <p className="card-text mb-5">If you cant find the property exact location, leave the pin at its current approx. location</p>
                            
                            <MapDisplay 
                                latitude={lat}
                                longitude={long}
                                setLat={setLat}
                                setLong={setLong}
                                zoom={zoom}
                            />

                            <div className="form-row mx-n2">
                            <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                <div className="form-group mb-md-0">
                                <label htmlFor="latitude" className="text-heading">Latitude </label>
                                <input type="text" value={lat} className="form-control form-control-lg border-0" id="latitude" name="latitude" readOnly />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                <div className="form-group mb-md-0">
                                    <label htmlFor="longitude" className="text-heading">Longitude</label>
                                    <input type="text" value={long} className="form-control form-control-lg border-0" id="longitude" name="longitude" readOnly/>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="d-flex flex-wrap">
                        <button className="btn btn-lg bg-hover-white border rounded-lg mb-3 mr-auto prev-button" type="button">
                            <span className="d-inline-block text-primary mr-2 fs-16"><i className="fal fa-long-arrow-left" /></span>Prev step
                        </button>
                        <button className="btn btn-lg btn-primary next-button mb-3">Next step
                            <span className="d-inline-block ml-2 fs-16"><i className="fal fa-long-arrow-right" /></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
