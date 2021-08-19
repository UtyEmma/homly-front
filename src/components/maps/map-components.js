import { createRef } from "react";
import { useState } from "react";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";
import Marker from "react-google-maps/lib/components/Marker"

export const MapMarker = ({latitude, longitude, listing}) => {

    const [isOpen, setIsOpen] = useState(false)

    const markerOnClick = () => {
        setIsOpen(!isOpen)
    }

    const closeInfoWindow = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            {
                isOpen
            
                &&

                (
                    <InfoBox visible={isOpen}  onCloseClick={closeInfoWindow} defaultPosition={new window.google.maps.LatLng(latitude, longitude)} options={{ closeBoxURL: ``, enableEventPropagation: true }} >
                        <ListingMapInfo listing={listing} />
                    </InfoBox>
                )
            }

            <Marker position={{ lat: latitude, lng: longitude }} animation 
                icon={{
                    url: 'images/googlle-market-02.png',
                    anchor: new window.google.maps.Point(17, 46),
                    scaledSize: new window.google.maps.Size(42, 42)
                }}
                onClick={markerOnClick}
            />
        </>
    )
}

export const ListingMapInfo = ({listing}) => {
    return (
        <div >
        <div className="media-item bg-white rounded" style={{maxWidth : '319px'}}>
            <div className="position-relative">
                <div className="media flex-row no-gutters align-items-center pb-2 border-bottom p-2">
                    <div className="col-3 mr-2 card border-0">
                        <img src={listing.images[0]} className="card-img" alt={listing.title} />
                    </div>
                        <div className="media-body col-9">
                            <h2 className="my-0"><a href={`listings/${listing.slug}`} className="fs-13 lh-2 text-dark hover-primary d-block">{listing.title}</a></h2>
                            <p className="mb-0 font-weight-500 text-gray-light">{listing.address}</p>
                            <p className="fs-17 font-weight-bold text-heading mb-0">$ {listing.rent} </p>
                        </div>
                    </div>
                    <ul className="list-inline d-flex mb-0 flex-wrap justify-content-around p-2">
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center">
                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-bedroom" />
                            </svg>
                            {listing.no_bedrooms} Br
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center">
                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-shower" />
                            </svg>
                            {listing.no_bathrooms} Ba
                        </li>
                    </ul>
            </div>
        </div>
        </div>
    )
}