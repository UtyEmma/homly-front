import React, { useEffect, useRef } from 'react'
import naijaStateLocalGovernment from 'naija-state-local-government'

export function State({name, title, setSelectedState, register, classes, styles, defaultValue, onChange}){
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
            <select className={`${classes} selectpicker`} ref={state} id="state" defaultValue={defaultValue} default title={title} data-style={styles} data-live-search="true" onChange={setState} id="type" title="Select State"  name={name}>
                {states ? states.map((state, index) => (
                    <option key={index} defaultValue={state} >{state}</option>
                )) : <option>Select State</option>}
            </select>
        </>
    )
}

export function LocalGovt({selectedState, name, onChange, classes, styles, defaultValue}){
    const stateData = selectedState && naijaStateLocalGovernment.lgas(selectedState);
    const lgas = stateData ? stateData.lgas : null;
    const select_city = useRef()
    let picker = window.$(select_city.current)
    
    const handlePicker = () => {
        picker.selectpicker('refresh')
    }

    useEffect(() => {
        handlePicker()
    }, [lgas])

    return (
        <>
            <select className={`${classes} selectpicker`} ref={select_city} onChange={onChange} defaultValue={defaultValue} data-live-search="true" data-style={styles} title="Select City" id="lga" name={name}>
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
