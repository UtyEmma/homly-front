import Tagify from 'libraries/tagify/tagify';
import { FetchDetails } from 'providers/redux/_actions/details-actions';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function SelectFeatures({features, setFeatures, name, validate, message}) {

    const dispatch = useDispatch();

    const [details, setDetails] = useState({})

}

export function TagifyFeatures({val, setValue, name, validate, message}){
    
    const dispatch = useDispatch();
    const fetchDetails = useSelector(state => state.details)
    const {loading, details, error} = fetchDetails

    const loadDetails = () => { dispatch(FetchDetails()) }

    useEffect(() => {
        if(!details){
            loadDetails()
        }
    }, [details])

    return (
        <>
            {
                details 
            && 
                <Tagify suggestions={[...details.features]} message={message} validate val={val} setValue={setValue}  id="features"  name={name} /> 
            }
        </>
    )
}
