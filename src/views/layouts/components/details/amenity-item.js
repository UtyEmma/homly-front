import React, { useEffect, useState } from 'react'
import * as $ from 'jquery'

export const AmenityItem = ({classes, amenity, selected}) => {
    let item = amenity.toLowerCase().replace(/ /g,'_')
    let isChecked = selected?.includes(item);
    
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        setChecked(isChecked)
    }, [selected])

    const handleChecked = (e) => {
        setChecked(e.target.checked)
    } 

    return (
        <div className="col-sm-6 col-lg-3">
            <li className={`list-group-item px-0 pt-0 pb-2 ${classes}`}>
                <div className="custom-control custom-checkbox ">
                    <input type="checkbox" className="custom-control-input" checked={checked} onChange={handleChecked} name={`amenities[${item}]`} id={item} />
                    <label className="custom-control-label text-capitalize" htmlFor={item} >{amenity}</label>
                </div>
            </li>
        </div>
    )
}
