import { LocalGovt, State } from 'components/city-state/city-state';
import { MapFormErrors, __createwishlist } from 'libraries/validation';
import { CreateWishlist } from 'providers/redux/_actions/wishlist-actions';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Stepper from 'bs-stepper'
import 'bs-stepper/dist/css/bs-stepper.min.css'
import { TagifyAmenities } from 'views/layouts/components/details/amenities';
import SelectListingCategory from 'views/layouts/components/details/categories';
import Validator from 'validatorjs';

const WishlistForm = ({setIsLoading}) => {

    const dispatch = useDispatch();
    const [selectedState, setSelectedState] = useState();
    const [amenity, setAmenity] = useState([]);
    const [stepper, setStepper] = useState();

    const {rules, attributes} = __createwishlist
    const [formErrors, setFormErrors] = useState({})

    const {loading, wishlist} = useSelector(state => state.wishlist);
    const {token} = useSelector(state => state.user_data)

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target);
        data.append('amenities', amenity)
        
        const values = Object.fromEntries(data.entries());
        let validation = new Validator(values, rules)
        
        validation.setAttributeNames(attributes);
        validation.fails(() => {setFormErrors(MapFormErrors(validation.errors.errors))})
        
        if (validation.passes()) {
            setFormErrors({}); 
            dispatch(CreateWishlist(token, data))
        }
    }  

    useEffect(() => {
        wishlist && window.location.reload()
        wishlist && document.getElementById('create_wishlist_form').reset()
        // wishlist && setStepper(new Stepper(document.getElementById('wishlist-stepper'), { linear: false, animation: true }));
    }, [wishlist])    

    useEffect(() => {
        setStepper(new Stepper(document.getElementById('wishlist-stepper'), { linear: false, animation: true }));
        setIsLoading(loading)
    }, [loading, setIsLoading])

    
    return (
        <div className="card border-0 mb-4">
            <div className="card-body px-3 pt-0 px-md-4 py-md-4 pb-5">
            <div className="bs-stepper" id='wishlist-stepper'>
                <div className="bs-stepper-header mb-3 d-block d-md-flex" role="tablist">
                    <div className="step" data-target="#property-info">
                        <button type="button" className="step-trigger bs-stepper-trigger" role="tab" aria-controls="property-info" id="property-info-trigger">
                            <span className="bg-primary bs-stepper-item"></span>
                            <span className="bs-stepper-label">Property Info</span>
                        </button>
                    </div>
                    
                    <div className="line" />
                    
                    <div className="step" data-target="#location-info">
                        <button type="button" className="step-trigger bs-stepper-trigger" role="tab" aria-controls="location-info" id="location-info-trigger">
                            <span className="bg-primary bs-stepper-item"></span>
                            <span className="bs-stepper-label">Location</span>
                        </button>
                    </div>
                    <div className="line" />
                    <div className="step" data-target="#extra-details">
                        <button type="button" className="step-trigger bs-stepper-trigger" role="tab" aria-controls="extra-details" id="extra-details-trigger">
                            <span className="bg-primary bs-stepper-item"></span>
                            <span className="bs-stepper-label">Extra Details</span>
                        </button>
                    </div>
                </div>
                <div className="bs-stepper-content">
                    <form className="form" onSubmit={handleSubmit} id="create_wishlist_form">
                        <div id="property-info" className="content p-0" role="tabpanel" aria-labelledby="property-info-trigger" >
                            <div className="row p-0">
                                
                                <div className="col-sm-12 px-2">
                                    <div className="form-group">
                                        <label htmlFor="desc">I am looking for...</label>
                                        <input className="form-control border-0" name="desc" id="desc" type="text" placeholder="I am looking for..." />
                                        <p className="text-danger fs-12 mt-1">{formErrors.desc?.message}</p>
                                    </div>
                                </div>

                                <div className="col-sm-12 px-2">
                                    <div className="form-group">
                                        <SelectListingCategory 
                                            title="Accomodation Type"
                                            name="category"
                                            formError={formErrors.category?.message}
                                            id="category"
                                            classes="form-control border-0"
                                        />
                                        <p className="text-danger fs-12 mt-1">{formErrors.category?.message}</p>
                                    </div>
                                </div>

                                <div className="col-md-6 px-2">
                                    <div className="form-group">
                                        <label htmlFor="no_bedrooms" className="text-heading">Number of Rooms</label>
                                        <input type="number" name="no_bedrooms" className="form-control  border-0" id="no_bedrooms" placeholder="0" />
                                        <p className="text-danger fs-12 mt-1">{formErrors.no_bedrooms?.message}</p>
                                    </div>
                                </div>

                                <div className="col-md-6 px-2">
                                    <div className="form-group">
                                        <label htmlFor="no_bathrooms" className="text-heading">Number of Bathrooms</label>
                                        <input type="number" name="no_bathrooms" className="form-control  border-0" id="no_bathrooms" placeholder="0" />
                                        <p className="text-danger fs-12 mt-1">{formErrors.no_bathrooms?.message}</p>
                                    </div>
                                </div>
                                    
                            </div>


                            <div className='row d-flex justify-content-end'>
                                    <button type="button" onClick={() => {stepper.next()}} className="btn btn-primary">Next</button>
                            </div>
                        </div>

                        <div id="location-info" className="content" role="tabpanel" aria-labelledby="location-info-trigger">
                            <div className="row">
            
                                <div className="col-sm-12 px-2">
                                    <div className="form-group">
                                        <label htmlFor="state" className="text-heading">State</label>
                                        <State setSelectedState={setSelectedState} classes="form-control border-0" name="state" />
                                        <p className="text-danger fs-12 mt-1">{formErrors.state?.message}</p>
                                    </div>
                                </div>

                                <div className="col-sm-12 px-2">
                                    <div className="form-group">
                                        <label htmlFor="city" className="text-heading">Local Government</label>
                                        <LocalGovt name="city" selectedState={selectedState} classes="form-control  border-0" />
                                        <p className="text-danger fs-12 mt-1">{formErrors.lga?.message}</p>
                                    </div>
                                </div>

                                <div className="col-sm-12 px-2">
                                    <div className="form-group">
                                        <label htmlFor="area" className="text-heading">Area</label>
                                        <input type="text" name="area" className="form-control  border-0" id="area" placeholder="Which locality would you prefer"/>
                                        <p className="text-danger fs-12 mt-1">{formErrors.area?.message}</p>
                                    </div>
                                </div>
                                </div>

                                <div className='row d-flex justify-content-end'>
                                    <button type="button" onClick={() => {stepper.previous()}} className="btn">Previous</button>
                                    <button type="button" onClick={() => {stepper.next()}} className="btn btn-primary">Next</button>
                                </div>
                        </div>

                        <div id="extra-details" className="content" role="tabpanel" aria-labelledby="extra-details-trigger">
                            <div className="row">
                                <div className="col-sm-12 px-2">
                                    <div className="form-group">
                                        <label htmlFor="budget" className="text-heading">Budget</label>
                                        <input type="number" name="budget" className="form-control  border-0" id="budget" placeholder="10000" />
                                        <p className="text-danger fs-12 mt-1">{formErrors.budget?.message}</p>
                                    </div>
                                </div>

                                <div className="col-md-12 px-2">
                                    <div className="form-group">
                                        <label htmlFor="amenities" className="text-heading">Select Amenities</label>
                                        <TagifyAmenities message="Amenities" name="amenities[]" val={amenity} setValue={setAmenity} label="Amenities" />   
                                        <p className="text-danger fs-12 mt-1">{formErrors.amenities?.message}</p>
                                    </div>
                                </div>

                                <div className="col-sm-12 px-2">
                                    <div className="form-group">
                                        <label htmlFor="area" className="text-heading">Additional Instructions</label>
                                        <textarea type="text" name="additional" rows="3" className="form-control form-control-lg border-0" id="additional" placeholder="Please provide any extra details here"></textarea>
                                        <p className="text-danger fs-12 mt-1">{formErrors.additional?.message}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='row d-flex justify-content-end'>
                                <button type="button" onClick={() => {stepper.previous()}} className="btn">Previous</button>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default WishlistForm;