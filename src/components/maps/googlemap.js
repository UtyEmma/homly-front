import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export default function ListingMap({longitude, latitude}) {
    return (
        <Map 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=geometry,drawing,places&v=weekly`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `500px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            longitude={longitude} 
            latitude={latitude} 
        />
    )
}

const Map = withScriptjs(withGoogleMap(({longitude, latitude}) =>     

    <GoogleMap   
        defaultZoom={16}
        zoom={16}
        center={{ lat: latitude, lng: longitude } } 
        >
        <Marker 
            icon={{
                url: '../images/googlle-market-02.png',
                anchor: new window.google.maps.Point(17, 46),
                scaledSize: new window.google.maps.Size(42, 42)
            }}
            position={{ lat: latitude, lng: longitude }} 
            animation />
    </GoogleMap>

))
