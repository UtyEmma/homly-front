import Tagify from 'libraries/tagify/tagify';
import { FetchDetails } from 'providers/redux/_actions/details-actions';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function SelectAmenities({features, setFeatures, name, validate, message, color, selected, classes}) {

    const dispatch = useDispatch();

    const details = useSelector((state) => state.details)
    const {loading, amenities} = details

    useEffect(() => {
        !amenities && dispatch(FetchDetails())
    }, [amenities])

    return (
        <>
            {
                Array.isArray(amenities) && amenities.length > 0 

                && 

                amenities.map((item, index) => (
                    <div key={index} className="col-sm-6 col-lg-3">
                        <li className={`list-group-item px-0 pt-0 pb-2 ${classes}`}>
                            <div className="custom-control custom-checkbox ">
                                <input type="checkbox" className="custom-control-input" defaultChecked={selected.includes(item.toLowerCase().replace(/ /g,'_'))} name={`amenities[${item.toLowerCase().replace(/ /g,'_')}]`} id={item} />
                                <label className="custom-control-label" htmlFor={item} >{item}</label>
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

    const loadDetails = useCallback(() => { dispatch(FetchDetails()) }, [dispatch])

    useEffect(() => {
        if(!amenities){
            loadDetails()
        }
        amenities && console.log(amenities)
    }, [amenities, loadDetails])

    return (
        <>
            {

            amenities 
            
            && 
            
            <Tagify suggestions={[...amenities]} message={message} validate val={val} setValue={setValue}  id="features"  name={name} />}
        </>
    )
}
