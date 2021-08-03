import React, { useEffect, useRef } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export const MapDisplay = ({longitude, latitude, setMapData, mapData}) => {
    const googleMapMarker = useRef()

    useEffect(() => {
    }, [mapData])

    return (
        <Map 
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBYmJujloM3zNdxMpokW1G_Qo5Qo_05_A&libraries=geometry,drawing,places&v=weekly"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        longitude={longitude} 
        latitude={latitude} 
        isMarkerShown={true}
        setMapData={setMapData}
        markerRef={googleMapMarker}
        zoom={mapData.zoom}
        />
    )
}

const handleDragEnd = (e) => {
    const position = {
        lat: e.latLng.lat(),
        long: e.latLng.lng()
    }
    console.log(position)
}

const Map = withScriptjs(withGoogleMap(({longitude, latitude, isMarkerShown, zoom}) =>     

    <GoogleMap
        defaultZoom={zoom}
        zoom={zoom}
        defaultCenter={{ lat: latitude, lng: longitude }}
        center={{ lat: latitude, lng: longitude } }
        >            
            {isMarkerShown && 
                <Marker onDragEnd={handleDragEnd} position={{ lat: latitude, lng: longitude }} animation  draggable/>}
    </GoogleMap>
))