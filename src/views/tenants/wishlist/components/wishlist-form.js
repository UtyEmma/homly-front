import { yupResolver } from '@hookform/resolvers/yup';
import Tagify from 'libraries/tagify/tagify'
import { __createwishlist } from 'libraries/validation';
import { FetchListingDetails } from 'providers/redux/_actions/listing/listing-actions';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const WishlistForm = () => {

    const dispatch = useDispatch();

    const details = useSelector(state => state.fetch_details);
    const {error, loading, amenities, features} = details;

    useEffect(() => {
        dispatch(FetchListingDetails());
    }, [])

    const listingFeatures = ['features'];

    const listingAmenities = [ "apple", "banana", "cucumber", "dewberries", "elderberry", "farkleberry",
        "grapes", "hackberry", "imbe", "jambolan"];

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(__createwishlist)
    });

    const handleSignup = () => {

    }

    const handleErrors = () => {

    }
    
    return (
        <div className="card border-0 col-12">
            <div className="col-12 px-2">
                <h3>Create a Wishlist</h3>
            </div>
            <div className="card-body">
                <form className="form" onSubmit={handleSubmit(handleSignup, handleErrors)}>
                    <div className="row mx-n2">
                        <div className="col-12 px-4">
                            <p className="font-weight-bold">Accomodation Specifications</p>
                        </div>
    
                        <div className="col-sm-6 px-2">
                            <div className="form-group">
                                <label htmlFor="category" className="text-heading">What type of accomodation are you looking for?</label>
                                <select className="form-control border-0 shadow-none form-control-lg selectpicker" {...register('category')} title="Select" data-style="btn-lg py-2 h-52" id="type" name="category">
                                    <option>Select</option>
                                    <option>Self-Contained</option>
                                    <option>Flat</option>
                                </select>
                                <p className="text-danger fs-14">{errors.category?.message}</p>
                            </div>
                        </div>

                        {/* <div className="col-sm-6 px-2">
                            <div className="form-group">
                                <label htmlFor="lastName" className="text-heading">Custom</label>
                                <input type="text" name="lastname" className="form-control form-control-lg border-0" id="lastName" placeholder="Doe" />
                                <p className="text-danger fs-14"></p>
                            </div>
                        </div> */}

                        <div className="col-md-6 px-2">
                            <div className="form-group">
                                <label htmlFor="firstName" className="text-heading">Number of Rooms</label>
                                <input type="number" {...register('no_of_rooms')} name="no_of_rooms" className="form-control form-control-lg border-0" id="lastName" placeholder="Doe" />
                                <p className="text-danger fs-14">{errors.no_of_rooms?.message}</p>
                            </div>
                        </div>

                        <div className="col-md-12 px-2">
                            <div className="form-group">
                                <label htmlFor="features" className="text-heading">Select Features</label>
                                <Tagify suggestions={listingFeatures} {...register('features')}  name="features" label="Features" />
                                <p className="text-danger fs-14">{errors.features?.message}</p>
                            </div>
                        </div>


                        <div className="col-md-12 px-2">
                            <div className="form-group">
                                <label htmlFor="amenities" className="text-heading">Select Amenities</label>
                                <Tagify suggestions={listingAmenities} {...register('amenities')} name="amenities" label="Amenities" />
                                <p className="text-danger fs-14">{errors.amenities?.message}</p>
                            </div>
                        </div>

                        <div className="col-sm-6 px-2">
                            <div className="form-group">
                                <div className="form-group slider-range slider-range-secondary">
                                    <label for="price" className="mb-4 text-gray-light">Budget Range</label>
                                    <div data-slider="true" data-slider-options='{"min":0,"max":8000000,"values":[1000000,5000000],"type":"currency"}'></div>
                                    <div className="text-center mt-2">
                                    <input id="price" {...register('budget')} type="text" readonly name="budget" className="border-0 amount text-center text-body font-weight-500"/>
                                    <p className="text-danger fs-14">{errors.budget?.message}</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-danger fs-14"></p>
                        </div>


                        <div className="col-sm-6 px-2">
                            <div className="form-group">
                                <label htmlFor="lastName" className="text-heading">Custom Budget</label>
                                <input type="number" name="lastname" className="form-control form-control-lg border-0" id="lastName" placeholder="Doe" />
                                <p className="text-danger fs-14"></p>
                            </div>
                        </div>
    
                        <div className="col-12 p-0">
                            <p className="font-weight-bold">Location</p>
                        </div>
    
                        <div className="col-sm-6 px-2">
                            <div className="form-group">
                                <label htmlFor="state" className="text-heading">State</label>
                                <select className="form-control border-0 shadow-none form-control-lg selectpicker" default title="Select State" data-style="btn-lg py-2 h-52" id="type" {...register('state')} name="state">
                                    <option>Enugu</option>
                                    <option>Flat</option>
                                </select>
                                <p className="text-danger fs-14">{errors.state?.message}</p>
                            </div>
                        </div>

                        <div className="col-sm-6 px-2">
                            <div className="form-group">
                                <label htmlFor="state" className="text-heading">Local Government</label>
                                <select className="form-control border-0 shadow-none form-control-lg selectpicker" title="Select LGA" data-style="btn-lg py-2 h-52" id="type" {...register('lga')} name="lga">
                                    <option>Self-Contained</option>
                                    <option>Flat</option>
                                </select>
                                <p className="text-danger fs-14">{errors.lga?.message}</p>
                            </div>
                        </div>

                        <div className="col-sm-6 px-2">
                            <div className="form-group">
                                <label htmlFor="area" className="text-heading">Area</label>
                                <input type="text" name="custom" {...register('area')} className="form-control form-control-lg border-0" id="area" placeholder="Independence Layout" name="area"/>
                                <p className="text-danger fs-14">{errors.area?.message}</p>
                            </div>
                        </div>

                        <div className="col-sm-6 px-2">
                            <div className="form-group">
                                <label htmlFor="area" className="text-heading">Nearest Landmark</label>
                                <input type="text" name="custom" {...register('landmark')} className="form-control form-control-lg border-0" id="area" placeholder="University of Nigeria" />
                                <p className="text-danger fs-14">{errors.landmark?.message}</p>
                            </div>
                        </div>

                        <div className="col-sm-12 px-2">
                            <div className="form-group">
                                <label htmlFor="area" className="text-heading">Additional Instructions</label>
                                <textarea type="text" name="custom" rows="5" {...register('additional')} className="form-control form-control-lg border-0" id="area" placeholder="University of Nigeria"></textarea>
                                <p className="text-danger fs-14">{errors.additional?.message}</p>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <button type="submit" className="btn btn-primary btn-lg btn-block">Submit Wishlist</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default WishlistForm;