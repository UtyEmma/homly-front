import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export default function ListingMap({longitude, latitude}) {
    return (
        <div>
            <Map 
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBYmJujloM3zNdxMpokW1G_Qo5Qo_05_A&libraries=geometry,drawing,places&v=weekly"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                longitude={longitude} 
                latitude={latitude} 
                />
        </div>
    )
}

const Map = withScriptjs(withGoogleMap(({longitude, latitude}) =>     

    <GoogleMap defaultZoom={15} defaultCenter={{ lat: latitude, lng: longitude }} >
        <Marker position={{ lat: latitude, lng: longitude }} animation />
    </GoogleMap>

))
