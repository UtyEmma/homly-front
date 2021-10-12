import React, { useEffect, useState } from 'react'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import usePlacesAutocomplete from 'use-places-autocomplete';
import './css/map-address.css'

export default function InputAddress({setLandmark, setLatLong, name, defaultValue}) {

    const [isLoading, setIsLoading] = useState(false)
    const [options, setOptions] = useState([])
    const { value, suggestions, setValue, clearSuggestions} = usePlacesAutocomplete(
        {
            requestOptions: {
                componentRestrictions: { country: 'ng' }
            }
        }
    );
    
    const handleSelection = (query) => {
        setLatLong(query)
        setLandmark(query)
        clearSuggestions();
    }

    const updateSuggestions = ({data}) => {
        const array = data.map((item, index) => {
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
    }, [suggestions, value])

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
                
                defaultInputValue={defaultValue}
                name={name}
                className="form-control form-control-lg border-0 p-0"
                placeholder="Provide a popular location"
            />
        </div>
    )
}
