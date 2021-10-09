import Tagify from 'libraries/tagify/tagify';
import { FetchDetails } from 'providers/redux/_actions/details-actions';
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
                        <div key={index} className="col-sm-6 col-lg-3">
                            <li className={`list-group-item px-0 pt-0 pb-2 ${classes}`}>
                                <div className="custom-control custom-checkbox ">
                                    <input type="checkbox" className="custom-control-input" checked={selected?.includes(item.toLowerCase().replace(/ /g,'_'))} defaultChecked={selected?.includes(item.toLowerCase().replace(/ /g,'_'))} name={`amenities[${item.toLowerCase().replace(/ /g,'_')}]`} id={item} />
                                    <label className="custom-control-label text-capitalize" htmlFor={item} >{item}</label>
                                </div>
                            </li>
                        </div>
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
