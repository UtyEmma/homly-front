import React, { useEffect, useState } from 'react'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import Geocode from 'react-geocode'
import { useDispatch, useSelector } from 'react-redux';
import usePlacesAutocomplete, { getGeocode } from 'use-places-autocomplete';
import './css/map-address.css'

export default function InputAddress({compileData, setMapData, mapData, setLatLong, name}) {
    const [isLoading, setIsLoading] = useState(false)
    const [options, setOptions] = useState([])
    const { ready, value, suggestions, setValue, clearSuggestions, } = usePlacesAutocomplete();
    
    const handleSelection = (query) => {
        setLatLong(query)
        compileData('landmark', query)
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
                name={name}
                className="form-control form-control-lg border-0 p-0"
                placeholder="Provide a popular location"
            />
        </div>
    )
}
