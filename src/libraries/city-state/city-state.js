import React, { useEffect, useState } from 'react'
import naijaStateLocalGovernment from 'naija-state-local-government'
import $ from 'jquery';

export function State({name, title, setSelectedState}){
    const states = naijaStateLocalGovernment.states();
    const setState = (e) => {
        setSelectedState(e.target.value)
    }

    return (
        <>
            <select className="form-control border-0 shadow-none form-control-lg selectpicker" default title="Select State" data-style="btn-lg py-2 h-52" data-live-search="true" onChange={setState} id="type"  name={name}>
                {states ? states.map((state, i) => (
                    <option key={i} value={state}>{state}</option>
                )) : <option>Select State</option>}
            </select>
        </>
    )
}

export function LocalGovt({selectedState, name}){
    const stateData = naijaStateLocalGovernment.lgas(selectedState);
    const lgas = stateData.lgas;

    return (
        <>
            <select className="form-control border-0 shadow-none form-control-lg" data-live-search="true" default title="Select Local Govt" data-style="btn-lg py-2 h-52" id="lga" name={name}>
                {lgas ? lgas.map((lga, i) => (
                    <option key={i} value={lga}>{lga}</option>
                )) : <option>Select LGA</option>}
            </select>
        </>
    )
}
