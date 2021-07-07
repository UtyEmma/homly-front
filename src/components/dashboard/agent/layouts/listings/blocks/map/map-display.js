import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

export const MapDisplay = withScriptjs(withGoogleMap((props) => 
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: props.latitude, lng: props.longitude }}>
            {props.isMarkerShown && 
                <Marker position={{ lat: props.latitude, lng: props.longitude }} draggable/>}
    </GoogleMap>
))


export const MapAutoComplete = () => {
    return (
        <div>
            <GooglePlacesAutocomplete 
                apiKey="AIzaSyBBYmJujloM3zNdxMpokW1G_Qo5Qo_05_A" 
                apiOptions={{ language: 'en'}}
                autocompletionRequest={{
                    componentRestrictions: {
                        country: ['ng'],
                    }
                }}
                debounce={500}
                minLengthAutocomplete={2}
            />
        </div>
    )
}