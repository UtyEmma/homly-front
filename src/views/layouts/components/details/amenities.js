import Tagify from 'libraries/tagify/tagify';
import { FetchDetails } from 'providers/redux/_actions/details-actions';
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AmenityItem } from './amenity-item';

export function SelectAmenities({features, setFeatures, name, validate, message, color, selected, classes}) {

    const dispatch = useDispatch();

    const {amenities} = useSelector((state) => state.details)

    useEffect(() => {
        !amenities && dispatch(FetchDetails())
    }, [amenities, dispatch])



    return (
        <>
            {
                Array.isArray(amenities) && amenities.length > 0 

                && 

                amenities.map((item, index) => {
                    return (
                        <AmenityItem selected={selected} amenity={item} key={item} classes={classes} />
                    )
                }) 
            }
        </>
    )
}

export function TagifyAmenities({val, setValue, name, validate, message}){
    
    const dispatch = useDispatch();
    const fetchDetails = useSelector(state => state.details)
    const {amenities} = fetchDetails

    const loadDetails = useCallback(() => { 
        dispatch(FetchDetails()) 
    }, [dispatch])

    useEffect(() => {
        !amenities && loadDetails()
    }, [amenities, loadDetails])

    return (
        <>
            {

            amenities 
            
            && 
            
            <Tagify  suggestions={[...amenities]} message={message} validate val={val} setValue={setValue}  id="features"  name={name} />}
        </>
    )
}
