import GoogleMapReact from 'google-map-react';
import React from 'react'

export default function MapContainer() {
    const handleMapLoaded = (map, maps) =>{
        console.log(map)
    }
    return (
        <div className="col-12" style={{height: '400px'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ 
                    language: 'en',
                    region: 'ng',
                    key: 'AIzaSyBBYmJujloM3zNdxMpokW1G_Qo5Qo_05_A' 
                }}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleMapLoaded(map, maps)}
                defaultCenter={{lat: 59.95, lng: 30.33}}
                defaultZoom={11}
                >
                {/* <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                /> */}
            </GoogleMapReact>
            {/* <GoogleMap
                bootstrapURLKeys={{
                    key: API_KEY,
                    language: 'ru',
                    region: 'ru',
                    libraries:['places'],
                    ...otherUrlParams,
                }}
            /> */}
        </div>
    )
}
