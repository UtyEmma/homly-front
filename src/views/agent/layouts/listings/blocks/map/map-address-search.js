import axios from 'axios';
import { SearchForLocation } from 'providers/redux/_actions/location-actions';
import React, { useEffect, useState } from 'react'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import Geocode from 'react-geocode'
import { geocodeByAddress } from 'react-google-places-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import usePlacesAutocomplete, { getGeocode } from 'use-places-autocomplete';
import './css/map-address.css'

export default function InputAddress({compileData, setMapData, mapData}) {
    const [isLoading, setIsLoading] = useState(false)
    const [options, setOptions] = useState([])
    const { ready, value, suggestions, setValue, clearSuggestions, } = usePlacesAutocomplete();
    
    const handleSelection = (query) => {
        Geocode.setApiKey( "AIzaSyBBYmJujloM3zNdxMpokW1G_Qo5Qo_05_A" )
        Geocode.setRegion("ng");
        Geocode.setLocationType("ROOFTOP");

        Geocode.fromAddress(query)
                .then((response) => {
                    const results = response.results
                    results.forEach((result) => {
                        setMapData({
                            mapPosition: {
                                lat : result.geometry.location.lat,
                                long: result.geometry.location.lng
                            }
                        })
                        console.log(mapData)
                    })
                    console.log(response)
                },
                (error) => {
                    console.log(error);
                });

        clearSuggestions();
    }

    const updateSuggestions = (items) => {
        let array = [];
        array = items.data.map((item, index) => {
            return item.description;
        });
        setOptions(array)  
    }

    const handleSearch = (address) => {
        setIsLoading(true)
        setValue(address)
        setIsLoading(false)
    }

    useEffect(() => {
        suggestions && updateSuggestions(suggestions)
    }, [value])

    return (
        <div>
            <AsyncTypeahead
                filterBy={() => true}
                id="maps-autocomplete"
                isLoading={isLoading}
                labelKey="login"
                minLength={3}
                onSearch={handleSearch}
                onChange={handleSelection}
                options={options}
                // className="form-control form-control-lg border-0"
                placeholder="Type an address..."
            />
        </div>
    )
}
