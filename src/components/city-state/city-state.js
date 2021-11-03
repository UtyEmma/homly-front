import React, { useEffect, useRef, useState } from 'react'
import naijaStateLocalGovernment from 'naija-state-local-government'

export function State({name, title, setSelectedState, dataStyle, classes, defaultValue, onChange}){
    const states = naijaStateLocalGovernment.states();

    const setState = (e) => {
        setSelectedState(e.target.value)
        onChange && onChange(e)
    }

    const state = useRef()
    const picker = window.$(state.current)

    useEffect(() => {
        picker.selectpicker('refresh')
    })

    return (
        <>
            <select className={`${classes} selectpicker`}  ref={state} id="state" defaultValue={defaultValue} default title={title} data-style={dataStyle} data-live-search="true" onChange={setState} id="type" title="Select State"  name={name}>
                {states ? states.map((state, index) => (
                    <option key={index} defaultValue={state} >{state}</option>
                )) : <option>Select State</option>}
            </select>
        </>
    )
}

export function LocalGovt({selectedState, name, onChange, dataStyle, classes, defaultValue}){
    
    const select_city = useRef()
    let picker = window.$(select_city.current)

    const [lgas, setLgas] = useState();
    const handlePicker = () => {
        picker.selectpicker('refresh')
    }

    useEffect(() => {
        handlePicker()
    }, [lgas])

    useEffect(() => {
        const stateData = selectedState && naijaStateLocalGovernment.lgas(selectedState);
        setLgas(stateData?.lgas)
    }, [selectedState])

    return (
        <>
            <select className={`${classes} selectpicker`} data-style={dataStyle} ref={select_city} onChange={onChange} defaultValue={defaultValue} data-live-search="true" title="Select City" id="lga" name={name}>
                {
                
                    lgas 
                    
                    &&
                        <>
                            {
                                lgas.map((lga, index) => (
                                    <option key={index} defaultValue={lga}>{lga}</option>
                                ))
                            } 
                        </>                        
                }
            </select>
        </>
    )
}
