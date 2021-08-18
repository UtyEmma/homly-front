import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { MapMarker } from "./map-components";

export const SearchListingsMap = ({longitude, latitude, zoom, listings}) => {
    return (
        <MapItem 
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBYmJujloM3zNdxMpokW1G_Qo5Qo_05_A&libraries=geometry,drawing,places&v=weekly"
            loadingElement={<div style={{ height: `100vh` }} />}
            containerElement={<div style={{ height: `100vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            longitude={longitude}
            latitude={latitude}
            zoom={zoom}
            listings={listings}
        />
    )
};

const MapItem = withScriptjs(withGoogleMap(({listings, zoom}) =>     
        <GoogleMap
            defaultZoom={zoom}
            zoom={zoom}
            defaultCenter={{ lat: parseInt(listings[0].latitude), lng: parseInt(listings[0].longitude) }}
            center={{ lat: parseInt(listings[0].latitude), lng: parseInt(listings[0].longitude) } }
            >            
                {
                    listings

                    &&

                    listings.map((listing, index) => {
                        return (
                            <MapMarker key={index} listing={listing} latitude={parseInt(listing.latitude)} longitude={parseInt(listing.longitude)} />
                        )
                    })
                }
        </GoogleMap>
))
