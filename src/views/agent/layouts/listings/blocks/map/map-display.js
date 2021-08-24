import React, { useEffect, useRef } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export const MapDisplay = ({longitude, latitude, zoom, setLong, setLat}) => {
    const googleMapMarker = useRef()

    const handleDragEnd = (e) => {
        setLong(e.latLng.lng)
        setLat(e.latLng.lat)
    }

    return (
        <Map 
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBYmJujloM3zNdxMpokW1G_Qo5Qo_05_A&libraries=geometry,drawing,places&v=weekly"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            longitude={longitude} 
            latitude={latitude} 
            isMarkerShown={true}
            handleMarkerDrag={handleDragEnd}
            markerRef={googleMapMarker}
            zoom={zoom}
        />
    )
}

const Map = withScriptjs(withGoogleMap(({longitude, latitude, isMarkerShown, zoom, handleMarkerDrag}) =>     

    <GoogleMap
        defaultZoom={zoom}
        zoom={zoom}
        center={{ lat: latitude, lng: longitude } } 
        >            
            {isMarkerShown && 
                <Marker    
                icon={{
                    url: 'images/googlle-market-02.png',
                    anchor: new window.google.maps.Point(17, 46),
                    scaledSize: new window.google.maps.Size(42, 42)
                }}
                onDragEnd={handleMarkerDrag} 
                position={{ lat: latitude, lng: longitude }} 
                animation  
                draggable/>}
    </GoogleMap>
))