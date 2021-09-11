import React, { useState, useEffect } from 'react'
import Geocode, { setLanguage } from 'react-geocode'
import { useDispatch, useSelector } from 'react-redux';
import { LocalGovt, State } from 'components/city-state/city-state';
import InputAddress from 'views/agent/layouts/listings/blocks/map/map-address-search';
import { MapDisplay } from 'views/agent/layouts/listings/blocks/map/map-display';


export const UpdateListingLocation = ({listing, formErrors}) => {
    
    const [city, setCity] = useState(listing.city)
    const [state, setState] = useState(listing.state)
    const [landmark, setLandmark] = useState(listing.landmark)
    const [long, setLong] = useState(parseInt(listing.longitude))
    const [lat, setLat] = useState(parseInt(listing.latitude))
    const [zoom, setZoom] = useState(11)

    const updateMapData = (e) => {
        e.target.name === 'city' && setCity(e.target.value)
    }

    const setSelectedState = (state) => {
        setState(state)
    }

    const item = useSelector((state) => state.store_listing.store);

    const setLatLong = (address) => {
        Geocode.setApiKey( "AIzaSyBBYmJujloM3zNdxMpokW1G_Qo5Qo_05_A" )
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

    const mapViewUpdate = () => {
        setLatLong(`${state}, ${city}, ${landmark}`)
    }

    useEffect(() => {
        mapViewUpdate()
    }, [state, city, landmark])

    return (
        <div className="card bg-white border-0">
            <div className="card-body py-4 py-md-0 px-0">
                <div className="row">
                <div className="col-lg-6">
                    <div className="card mb-6">
                    <div className="card-body p-md-6">
                        <h3 className="card-title mb-0 text-heading fs-22 lh-15">Listing
                        Location</h3>
                        <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit</p>
                        <div className="form-row mx-n2">
                            <div className="col-12 px-2">
                                <div className="form-group">
                                <label htmlFor="state"  className="text-heading">State</label>
                                <State setSelectedState={setSelectedState} defaultValue={state} classes="form-control form-control-lg border-0 " id="state" name="state" />
                                <p className="text-danger fs-12">{formErrors.state?.message}</p>
                                </div>
                            </div>
                            <div className="col-12 px-2">
                                <div className="form-group">
                                <label htmlFor="city" className="text-heading">City</label>
                                <LocalGovt selectedState={state} defaultValue={city} onChange={updateMapData} classes="form-control form-control-lg border-0" id="city" name="city" />
                                <p className="text-danger fs-12">{formErrors.city?.message}</p>
                                </div>
                            </div>
                        </div>
                        <div className="form-row mx-n2">
                            <div className="col-12 px-2">
                                <div className="form-group">
                                <label htmlFor="address" className="text-heading">Address</label>
                                <input type="text"  defaultValue={listing.address} className="form-control form-control-lg border-0" id="address" name="address"/>
                                <p className="text-danger fs-12">{formErrors.address?.message}</p>
                                </div>
                            </div>
                            <div className="col-12 px-2">
                                <div className="form-group">
                                <label htmlFor="landmark" className="text-heading">Landmark / Nearest Bus Stop</label>
                                <InputAddress lat={lat} long={long} setLandmark={setLandmark} defaultValue={listing.landmark}  setLatLong={setLatLong} id="landmark"/>
                                <input hidden name="landmark" defaultValue={landmark} type="text"/>
                                <p className="text-danger fs-12">{formErrors.landmark?.message}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card mb-6">
                    <div className="card-body p-md-6">
                        <h3 className="card-title mb-6 text-heading fs-22 lh-15">Place the
                        listing pin on the map</h3>
                        
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
                            <input type="text" defaultValue={lat} className="form-control form-control-lg border-0" id="latitude" name="latitude" readOnly />
                            <p className="text-danger fs-12">{formErrors.latitude?.message}</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                            <div className="form-group mb-md-0">
                            <label htmlFor="longitude" className="text-heading">Longitude</label>
                            <input type="text" defaultValue={lat} className="form-control form-control-lg border-0" id="longitude" name="longitude" readOnly />
                            <p className="text-danger fs-12">{formErrors.longitude?.message}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
