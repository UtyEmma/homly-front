import Tagify from 'libraries/tagify/tagify'
import React from 'react'

export default function WishlistForm() {

    const suggestions = [ "apple", "banana", "cucumber", "dewberries", "elderberry", "farkleberry",
        "grapes", "hackberry", "imbe", "jambolan"];

    const initialValue= ["foo", "brazil"];

    
    
    return (
        <div className="card border-0 col-12">
            <div className="col-12 px-2">
                <h3>Create a Wishlist</h3>
            </div>
            <div className="card-body">
                <form className="form">
                    <div className="row mx-n2">
                        <div className="col-12 px-4">
                            <p className="font-weight-bold">Accomodation Specifications</p>
                        </div>
    
                        <div className="col-sm-6 px-2">
                            <div className="form-group">
                                <label htmlFor="firstName" className="text-heading">What type of accomodation are you looking for?</label>
                                <select className="form-control border-0 shadow-none form-control-lg selectpicker" title="Select" data-style="btn-lg py-2 h-52" id="type" name="tenure">
                                    <option>Select</option>
                                    <option>Self-Contained</option>
                                    <option>Flat</option>
                                </select>
                                <p className="text-danger fs-14"></p>
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
                                <input type="number" name="no_of_rooms" className="form-control form-control-lg border-0" id="lastName" placeholder="Doe" />
                                <p className="text-danger fs-14"></p>
                            </div>
                        </div>

                        <div className="col-md-12 px-2">
                            <div className="form-group">
                                <label htmlFor="features" className="text-heading">Select Features</label>
                                <Tagify suggestions={suggestions}  value={initialValue} name="features" label="Features" />
                            </div>
                        </div>


                        <div className="col-md-12 px-2">
                            <div className="form-group">
                                <label htmlFor="features" className="text-heading">Select Details</label>
                                <Tagify suggestions={suggestions}  value={initialValue} name="details" label="Features" />
                            </div>
                        </div>

                        <div className="col-sm-6 px-2">
                            <div className="form-group">
                                <div className="form-group slider-range slider-range-secondary">
                                    <label for="price" className="mb-4 text-gray-light">Budget Range</label>
                                    <div data-slider="true" data-slider-options='{"min":0,"max":8000000,"values":[1000000,5000000],"type":"currency"}'></div>
                                    <div className="text-center mt-2">
                                    <input id="price" type="text" readonly name="price" className="border-0 amount text-center text-body font-weight-500"/>
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
                                <select className="form-control border-0 shadow-none form-control-lg selectpicker" default title="Select State" data-style="btn-lg py-2 h-52" id="type" name="state">
                                    <option>Enugu</option>
                                    <option>Flat</option>
                                </select>
                                <p className="text-danger fs-14"></p>
                            </div>
                        </div>

                        <div className="col-sm-6 px-2">
                            <div className="form-group">
                                <label htmlFor="state" className="text-heading">Local Government</label>
                                <select className="form-control border-0 shadow-none form-control-lg selectpicker" title="Select LGA" data-style="btn-lg py-2 h-52" id="type" name="tenure">
                                    <option>Self-Contained</option>
                                    <option>Flat</option>
                                </select>
                                <p className="text-danger fs-14"></p>
                            </div>
                        </div>

                        <div className="col-sm-6 px-2">
                            <div className="form-group">
                                <label htmlFor="area" className="text-heading">Area</label>
                                <input type="text" name="custom" className="form-control form-control-lg border-0" id="area" placeholder="Independence Layout" />
                                <p className="text-danger fs-14"></p>
                            </div>
                        </div>

                        <div className="col-sm-6 px-2">
                            <div className="form-group">
                                <label htmlFor="area" className="text-heading">Nearest Landmark</label>
                                <input type="text" name="custom" className="form-control form-control-lg border-0" id="area" placeholder="University of Nigeria" />
                                <p className="text-danger fs-14"></p>
                            </div>
                        </div>

                        <div className="col-sm-12 px-2">
                            <div className="form-group">
                                <label htmlFor="area" className="text-heading">Additional Instructions</label>
                                <textarea type="text" name="custom" rows="5" className="form-control form-control-lg border-0" id="area" placeholder="University of Nigeria"></textarea>
                                <p className="text-danger fs-14"></p>
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
