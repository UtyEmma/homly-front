import Tagify from 'libraries/tagify/tagify';
import { FetchDetails } from 'providers/redux/_actions/details-actions';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function SelectAmenities({features, setFeatures, name, validate, message, color}) {

    const dispatch = useDispatch();

    const details = useSelector((state) => state.details)
    const {loading, amenities} = details

    useEffect(() => {
        if(!amenities){
            dispatch(FetchDetails())
        }
    }, [amenities])

    return (
        <>
            {
                Array.isArray(amenities) && amenities.length > 0 

                && 

                amenities.map((amenity, index) => (
                    <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                        <li className={`list-group-item px-0 pt-0 pb-2 bg-transparent border-0 ${color ? color : 'text-white'}`}>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name={`amenities[${amenity.toLowerCase().replace(/ /g,'_')}]`} id={amenity} />
                                <label className="custom-control-label " htmlFor={amenity} >{amenity}</label>
                            </div>
                        </li>
                    </div>
                )) 
            }
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
