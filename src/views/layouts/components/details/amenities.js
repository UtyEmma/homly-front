import Tagify from 'libraries/tagify/tagify';
import { FetchDetails } from 'providers/redux/_actions/details-actions';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function SelectAmenities({features, setFeatures, name, validate, message}) {

    const dispatch = useDispatch();

    const [details, setDetails] = useState({})

    useEffect(() => {
        if(!details){
            setDetails(dispatch(FetchDetails())) 
        }
    }, [details])
    return (
        <>
            <div className="col-sm-6 col-lg-3">
                <li className="list-group-item px-0 pt-0 pb-2">
                    <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" name="kitchen" id="kitchen" />
                    <label className="custom-control-label" htmlFor={name} >{}</label>
                    </div>
                </li>                      
            </div>
        </>
    )
}

export function TagifyAmenities({val, setValue, name, validate, message}){
    
    const dispatch = useDispatch();
    const fetchDetails = useSelector(state => state.details)
    const {loading, amenities, error} = fetchDetails

    const loadDetails = () => { dispatch(FetchDetails()) }

    useEffect(() => {
        if(!amenities){
            loadDetails()
        }
    }, [amenities])

    return (
        <>
            {

            amenities 
            
            && 
            
            <Tagify suggestions={[...amenities]} message={message} validate val={val} setValue={setValue}  id="features"  name={name} />}
        </>
    )
}
