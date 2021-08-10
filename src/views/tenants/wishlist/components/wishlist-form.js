import { yupResolver } from '@hookform/resolvers/yup';
import { LocalGovt, State } from 'components/city-state/city-state';
import { __createwishlist } from 'libraries/validation';
import { CreateWishlist } from 'providers/redux/_actions/wishlist-actions';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import 'bs-stepper/dist/css/bs-stepper.min.css'
import Stepper from 'bs-stepper'
import { TagifyAmenities } from 'views/layouts/components/details/amenities';
import SelectListingCategory from 'views/layouts/components/details/categories';
import Error from 'libraries/response/http-error';

const WishlistForm = () => {
    const dispatch = useDispatch();
    const [selectedState, setSelectedState] = useState("Enugu");
    const [amenity, setAmenity] = useState([]);
    const [stepper, setStepper] = useState();

    const wishlist = useSelector(state => state.wishlist);
    const {loading} = wishlist;

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(__createwishlist)
    });

    const handleSuccess = () => {
        const form = document.getElementById("create_wishlist_form")
        let formData = new FormData(form)
        formData.append('amenities', amenity)
        formData.append('state', selectedState)
        
        dispatch(CreateWishlist(formData))
    }  
    
    const handleErrors = () => {
        Error("Sshhdjsjd")
    }

    useEffect(() => {
        setStepper(new Stepper(document.getElementById('wishlist-stepper'), {
            linear: false,
            animation: true
        }));
    }, [])
    
    return (
        <div className="card border-0">
            <div className="card-body">
            <div className="bs-stepper" id='wishlist-stepper'>
                <div className="bs-stepper-header" role="tablist">
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
                    <form className="form" onSubmit={handleSubmit(handleSuccess, handleErrors)} id="create_wishlist_form">
                        <div id="property-info" className="content p-0" role="tabpanel" aria-labelledby="property-info-trigger" >
                            <div className="row p-0">
                                
                                <div className="col-sm-12 px-2">
                                    <div className="form-group">
                                        <label htmlFor="desc">I am looking for...</label>
                                        <input className="form-control border-0" name="desc" register={{...register('desc')}} id="desc" type="text" placeholder="What you are looking for?" />
                                    </div>
                                </div>

                                <div className="col-sm-12 px-2">
                                    <div className="form-group">
                                        <SelectListingCategory 
                                            title="Accomodation Type"
                                            register={{...register('category')}}
                                            name="category"
                                            formError={errors.category?.message}
                                            id="category"
                                            classes="form-control border-0"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6 px-2">
                                    <div className="form-group">
                                        <label htmlFor="no_bedrooms" className="text-heading">Number of Rooms</label>
                                        <input type="number" {...register('no_bedrooms')} name="no_bedrooms" className="form-control  border-0" id="no_bedrooms" placeholder="0" />
                                        <p className="text-danger fs-14">{errors.no_bedrooms?.message}</p>
                                    </div>
                                </div>

                                <div className="col-md-6 px-2">
                                    <div className="form-group">
                                        <label htmlFor="no_bathrooms" className="text-heading">Number of Bathrooms</label>
                                        <input type="number" {...register('no_bathrooms')} name="no_bathrooms" className="form-control  border-0" id="no_bathrooms" placeholder="0" />
                                        <p className="text-danger fs-14">{errors.no_bathrooms?.message}</p>
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
                                        <State setSelectedState={setSelectedState} classes="form-control  border-0 selectpicker" register={{...register('state')}} name="state" />
                                        <p className="text-danger fs-14">{errors.state?.message}</p>
                                    </div>
                                </div>

                                <div className="col-sm-12 px-2">
                                    <div className="form-group">
                                        <label htmlFor="city" className="text-heading">Local Government</label>
                                        <LocalGovt name="city" selectedState={selectedState} register={{...register('city')}} classes="form-control  border-0" />
                                        <p className="text-danger fs-14">{errors.lga?.message}</p>
                                    </div>
                                </div>

                                <div className="col-sm-12 px-2">
                                    <div className="form-group">
                                        <label htmlFor="area" className="text-heading">Area</label>
                                        <input type="text" name="area" {...register('area')} className="form-control  border-0" id="area" placeholder="Independence Layout" name="area"/>
                                        <p className="text-danger fs-14">{errors.area?.message}</p>
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
                                        <input type="number" name="budget" {...register('budget')} className="form-control  border-0" id="budget" placeholder="10000" />
                                        <p className="text-danger fs-14">{errors.budget?.message}</p>
                                    </div>
                                </div>

                                <div className="col-md-12 px-2">
                                    <div className="form-group">
                                        <label htmlFor="amenities" className="text-heading">Select Amenities</label>
                                        <TagifyAmenities validate={{...register('amenities')}} message="Type Amenities" name="amenities[]" val={amenity} setValue={setAmenity} label="Amenities" />   
                                        <p className="text-danger fs-14">{errors.amenities?.message}</p>
                                    </div>
                                </div>

                                <div className="col-sm-12 px-2">
                                    <div className="form-group">
                                        <label htmlFor="area" className="text-heading">Additional Instructions</label>
                                        <textarea type="text" name="custom" rows="3" {...register('additional')} className="form-control form-control-lg border-0" id="area" placeholder="University of Nigeria"></textarea>
                                        <p className="text-danger fs-14">{errors.additional?.message}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='row d-flex justify-content-end'>
                                <button type="button" onClick={() => {stepper.previous()}} className="btn">Previous</button>
                                <button type="submit" className="btn btn-primary">
                                    {loading ? 
                                        <div className="spinner-border text-white fs-22" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    : "Submit"}
                                </button>
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