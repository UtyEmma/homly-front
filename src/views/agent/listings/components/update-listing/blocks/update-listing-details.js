import React, { useEffect, useState } from 'react'

export const UpdateListingDetails = ({listing}) => {
    
    let [amenities, setAmenities] = useState([]);
    let items = JSON.parse(listing.amenities);
    
    const parseAmenities = () => {
        let array = []
        for(let amenity in items){
            array.push(amenity)
        }
        setAmenities(array)
    }

    useEffect(() => {
        parseAmenities()
    }, [listing])

    return (
        <>
         <div className="card bg-transparent border-0">
                <div className="card-body py-4 py-md-0 px-0">
                    <div className="card mb-6">
                        <div className="card-body p-6">
                            <h3 className="card-title mb-0 text-heading fs-22 lh-15">Listing Detail</h3>
                            <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit</p>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="bedrooms" className="text-heading">Number of Bedrooms</label>
                                            <input type="number" defaultValue={listing.no_bedrooms} className="form-control form-control-lg border-0" id="bedrooms" min="1" name="no_bedrooms"></input>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="bedrooms" className="text-heading">Number of Bathrooms</label>
                                            <input type="number" defaultValue={listing.no_bathrooms} className="form-control form-control-lg border-0" id="bathrooms" min="1" name="no_bathrooms"></input>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="bedrooms" className="text-heading">Floor Number</label>
                                            <input type="number" defaultValue={listing.no_floors} className="form-control form-control-lg border-0" id="floors" name="no_floors" min="1"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                <label htmlFor="extra-details" className="text-heading">Extra details</label>
                                    <textarea className="form-control border-0" defaultValue={listing.extra_info} rows={5} id="extra_info" name="extra_info" />
                                </div>
                            </div>
                        </div>

                        <div className="card mb-6">
                            <div className="card-body p-6">
                                <h3 className="card-title mb-0 text-heading fs-22 lh-15">Select Amenities</h3>
                                <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit</p>
                                <div className="col-lg-12">
                                    <ul className="list-group list-group-no-border">
                                        <div className="row">
                                            {

                                            Array.isArray(amenities) && amenities.length > 0 
                                            
                                            && 

                                            amenities.map((item, index) => (
                                                <div key={index} className="col-sm-6 col-lg-3">
                                                    <li className="list-group-item px-0 pt-0 pb-2">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" name={`amenities[${item.toLowerCase().replace(/ /g,'_')}]`} id={item} />
                                                            <label className="custom-control-label" htmlFor={item} >{item}</label>
                                                        </div>
                                                    </li>
                                                </div>
                                            )) 
                                            
                                            }

                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
