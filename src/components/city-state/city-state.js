import React from 'react'
import naijaStateLocalGovernment from 'naija-state-local-government'


export function State({name, title, setSelectedState, register, classes, styles, defaultValue, onChange}){
    const states = naijaStateLocalGovernment.states();

    const setState = (e) => {
        setSelectedState(e.target.value)
        onChange && onChange(e)
    }

    return (
        <>
            <select className={classes} id="state" defaultValue={defaultValue} default title={title} data-style={styles} data-live-search="true" onChange={setState} id="type"  name={name}>
                <option value="" selected>Select State</option>
                {states ? states.map((state, index) => (
                    <option key={index} defaultValue={state} >{state}</option>
                )) : <option>Select State</option>}
            </select>
        </>
    )
}

export function LocalGovt({selectedState, setCity, name, onChange, classes, styles, defaultValue}){
    const stateData = selectedState && naijaStateLocalGovernment.lgas(selectedState);
    const lgas = stateData ? stateData.lgas : null;
    return (
        <>
            <select className={classes} onChange={onChange} defaultValue={defaultValue} data-live-search="true" data-style={styles} title="Local Govt" id="lga" name={name}>
                {lgas 
                    
                    ? 
                        <>
                            <option value="" selected>Select City</option>
                            {
                                lgas.map((lga, index) => (
                                    <option key={index} defaultValue={lga}>{lga}</option>
                                ))
                            } 
                        </>            
                    : 
                    
                    <option selected>Select LGA</option>            
                }
            </select>
        </>
    )
}
