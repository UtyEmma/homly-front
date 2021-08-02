import React, { useEffect, useState } from 'react'
import naijaStateLocalGovernment from 'naija-state-local-government'

export function State({name, title, setSelectedState, register, onChange, classes, styles}){
    const states = naijaStateLocalGovernment.states();

    const setState = (e) => {
        setSelectedState(e.target.value)
    }

    return (
        <>
            <select className={classes} {...register} default title={title} data-style={styles} data-live-search="true" onChange={setState} id="type"  name={name}>
                {states ? states.map((state, i) => (
                    <option key={i} value={state}>{state}</option>
                )) : <option>Select State</option>}
            </select>
        </>
    )
}

export function LocalGovt({selectedState, setCity, name, register, onChange, classes, styles}){
    const stateData = selectedState && naijaStateLocalGovernment.lgas(selectedState);
    const lgas = stateData ? stateData.lgas : null;

    return (
        <>
            <select className={classes} onChange={onChange} data-live-search="true" {...register} data-style={styles} title="Local Govt" id="lga" name={name}>
                {lgas ? lgas.map((lga, i) => (
                    <option key={i} value={lga}>{lga}</option>
                )) : <option>Select LGA</option>}
            </select>
        </>
    )
}
