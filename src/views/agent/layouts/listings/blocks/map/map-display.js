import React, { useEffect } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

export const MapDisplay = ({longitude, latitude, setMapData, mapData}) => {
    let long = longitude;
    let lat = latitude;
    useEffect(() => {
        long = longitude;
        lat = latitude;
    }, [mapData])

    return (
        <Map 
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBYmJujloM3zNdxMpokW1G_Qo5Qo_05_A&libraries=geometry,drawing,places&v=weekly"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        longitude={long} 
        latitude={lat} 
        isMarkerShown={true}
        setMapData={setMapData} />
    )
}

const handlePositionChanged = (e) => {
    console.log(e)
}

const Map = withScriptjs(withGoogleMap(({longitude, latitude, isMarkerShown, setMapData}) => 
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: latitude, lng: longitude }}
        center={{ lat: latitude, lng: longitude } }
        >            
            {isMarkerShown && 
                <Marker position={{ lat: latitude, lng: longitude }} animation onPositionChanged={handlePositionChanged} draggable/>}
    </GoogleMap>
))