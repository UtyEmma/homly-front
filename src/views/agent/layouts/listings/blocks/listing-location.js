import React, { useState, useEffect } from 'react'
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from 'react-geocode'
import {MapDisplay, MapAutoComplete} from './map/map-display'
import { useDispatch, useSelector } from 'react-redux';
import { StoreListing } from 'providers/redux/_actions/listing/listing-actions';
import InputAddress from './map/map-address-search';
import MapContainer from './map/display'

export default function ListingLocation() {
    const dispatch = useDispatch();
     
    const [mapData, setmapData] = useState({
        address: "",
        city: 'Enugu',
        country: '',
        area: '',
        state: '',
        mapPosition: {
            lat: 6.459964,
            long: 7.548949
        },
        markerPosition: {
            lat: '',
            long: ''
        }
    })

    const listing = useSelector((state) => state.store_listing.store);

    const compileData = (e) => {
        dispatch(StoreListing({
                        ...listing,
                        [e.target.name] : e.target.value
                    }))
    }

    const getLoadLocation = () => {
        // Geocode.setApiKey( "AIzaSyBBYmJujloM3zNdxMpokW1G_Qo5Qo_05_A" )
        // Geocode.setRegion("ng");
        // Geocode.setLocationType("ROOFTOP");
        // Geocode.enableDebug();
        Geocode.fromAddress(mapData.address).then(
            (response) => {
                let latitude = response.results.[0].geometry.location.lat;
                let longitude = response.results.[0].geometry.location.long;
                setmapData({
                    mapPosition: {
                        lat : latitude,
                        long: longitude
                    }
                })
            },
            (error) => {
                console.error(error);
            });
    }

    const updateMapData = (e) => {
        setmapData({
            ...mapData,
            [e.target.name] : e.target.value
        })
    }

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
                        <h3 className="card-title mb-0 text-heading fs-22 lh-15">Listing
                        Location</h3>
                        <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit</p>
                        <div className="form-row mx-n2">
                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                            <div className="form-group">
                            <label htmlFor="state"  className="text-heading">State</label>
                            <input type="text"  onChange={compileData} className="form-control form-control-lg border-0" id="state" name="state" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                            <div className="form-group">
                            <label htmlFor="city" className="text-heading">City</label>
                            <input type="text" onChange={compileData} className="form-control form-control-lg border-0" id="city" name="city" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                            <div className="form-group">
                            <label htmlFor="address" className="text-heading">Address</label>
                            <input type="text" onChange={compileData} className="form-control form-control-lg border-0" id="address" name="address"/>
                            </div>
                        </div>
                        </div>
                        <div className="form-row mx-n2">
                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                            <div className="form-group">
                            <label htmlFor="landmark" className="text-heading">Landmark / Nearest Bus Stop</label>
                            <InputAddress mapData={mapData} setMapData={setmapData} compileData={compileData}/>
                            <input type="text" onChange={compileData} className="form-control form-control-lg border-0" id="landmark" name="landmark" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card mb-6">
                    <div className="card-body p-6">
                        <h3 className="card-title mb-6 text-heading fs-22 lh-15">Place the
                        listing pin on the map</h3>
                        
                        <MapDisplay 
                            latitude={mapData.mapPosition.lat}
                            longitude={mapData.mapPosition.long}
                            mapData={mapData}
                            setMapData={setmapData}
                        />

                        <div className="form-row mx-n2">
                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                            <div className="form-group mb-md-0">
                            <label htmlFor="latitude" className="text-heading">Latitude </label>
                            <input type="text" value={mapData.mapPosition.lat} className="form-control form-control-lg border-0" id="latitude" name="latitude" onChange={compileData} disabled/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                            <div className="form-group mb-md-0">
                            <label htmlFor="longitude" className="text-heading">Longitude</label>
                            <input type="text" value={mapData.mapPosition.lat} className="form-control form-control-lg border-0" id="longitude" name="longitude" onChange={compileData} disabled/>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="d-flex flex-wrap">
                <a href="#" className="btn btn-lg bg-hover-white border rounded-lg mb-3 mr-auto prev-button">
                    <span className="d-inline-block text-primary mr-2 fs-16"><i className="fal fa-long-arrow-left" /></span>Prev step
                </a>
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
