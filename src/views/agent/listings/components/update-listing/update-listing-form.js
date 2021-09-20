import { useCallback, useEffect, useState } from "react";
import 'bs-stepper/dist/css/bs-stepper.min.css'
import Stepper from 'bs-stepper'
import { UpdateListingDescription } from "./blocks/update-listing-description";
import { UpdateListingMedia } from "./blocks/update-listing-media";
import { UpdateListingLocation } from "./blocks/update-listing-location";
import { UpdateListingDetails } from "./blocks/update-listing-details";
import { useDispatch, useSelector } from "react-redux";
import { UpdateListing } from "providers/redux/_actions/listing/listing-actions";
import { MapFormErrors, __createlisting } from "libraries/validation";
import Validator from "validatorjs";
import { useHistory } from "react-router-dom";

export const UpdateListingForm = ({listing, setListing, setIsLoading}) => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [stepper, setStepper] = useState();
    const [files, setFiles] = useState(listing.images)

    const [update, setUpdate] = useState(false)

    const user_data = useSelector(state => (state.user_data))
    const {token} = user_data

    const {rules, attributes} = __createlisting
    const [formErrors, setFormErrors] = useState({})

    const update_listing = useSelector((state) => state.update_listing);
    const {loading, success, formError} = update_listing


    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData(e.target);
        files.map(file => formData.append('images[]', file))

        const values = Object.fromEntries(formData.entries());
        let validation = new Validator(values, rules)
        validation.setAttributeNames(attributes);
        validation.fails(() => {setFormErrors(MapFormErrors(validation.errors.errors))})
        if (validation.passes()) {
            setFormErrors({}); 
            dispatch(UpdateListing(token, formData, listing.unique_id))
            setUpdate(true)
        }
    }

    const handleUpdateSuccess = useCallback(() => {
        setFormErrors({})
        history.push(`/my-listings/${success.listing.slug}`)
        setListing(success.listing)
    }, [success])

    useEffect(() => {
        !stepper && setStepper(new Stepper(document.getElementById('wishlist-stepper'), {
            linear: false,
            animation: true
        }));
    }, [stepper])

    useEffect(() => {
        setIsLoading(loading)
    }, [loading, setIsLoading])

    useEffect(() => {
        formError && setFormErrors(formError)
    }, [formError])

    useEffect(() => {
        success && update && handleUpdateSuccess()
    }, [handleUpdateSuccess, success, update])

    return (
        <>
         <div className="bs-stepper" id='wishlist-stepper'>
                <div className="bs-stepper-header px-5 d-block d-md-flex" role="tablist">
                    <div className="step" data-target="#description">
                        <button type="button" className="step-trigger bs-stepper-trigger" role="tab" aria-controls="property-info" id="property-info-trigger">
                            <span className="bg-primary bs-stepper-item"></span>
                            <span className="bs-stepper-label">Property Info</span>
                        </button>
                    </div>
                    <div className="line" />
                    <div className="step" data-target="#media">
                        <button type="button" className="step-trigger bs-stepper-trigger" role="tab" aria-controls="location-info" id="location-info-trigger">
                            <span className="bg-primary bs-stepper-item"></span>
                            <span className="bs-stepper-label">Media</span>
                        </button>
                    </div>
                    <div className="line" />
                    <div className="step" data-target="#location">
                        <button type="button" className="step-trigger bs-stepper-trigger" role="tab" aria-controls="extra-details" id="extra-details-trigger">
                            <span className="bg-primary bs-stepper-item"></span>
                            <span className="bs-stepper-label">Location</span>
                        </button>
                    </div>
                    <div className="line" />
                    <div className="step" data-target="#details">
                        <button type="button" className="step-trigger bs-stepper-trigger" role="tab" aria-controls="extra-details" id="extra-details-trigger">
                            <span className="bg-primary bs-stepper-item"></span>
                            <span className="bs-stepper-label">Property Details</span>
                        </button>
                    </div>
                </div>
                <div className="bs-stepper-content">
                    <form className="form" onSubmit={handleSubmit} id="create_wishlist_form" encType="multipart/form-data">
                        <div id="description" className="content p-md-4" role="tabpanel" aria-labelledby="property-info-trigger" >
                            
                            <UpdateListingDescription listing={listing} formErrors={formErrors} />

                            <div className='row d-flex justify-content-end px-3'>
                                <button type="button" className="btn" data-dismiss="modal" aria-label="Close">Close</button>
                                <button type="button" onClick={() => {stepper.next()}} className="btn btn-primary">Next</button>
                            </div>
                        </div>

                        <div id="media" className="content p-md-4" role="tabpanel" aria-labelledby="location-info-trigger">
                            
                            <UpdateListingMedia listing={listing} files={files} setFiles={setFiles} formErrors={formErrors} />

                            <div className='row d-flex justify-content-end px-3'>
                                <button type="button" onClick={() => {stepper.previous()}} className="btn">Previous</button>
                                <button type="button" onClick={() => {stepper.next()}} className="btn btn-primary">Next</button>
                            </div>
                        </div>

                        <div id="location" className="content p-md-4" role="tabpanel" aria-labelledby="location-info-trigger">
                            <UpdateListingLocation listing={listing} formErrors={formErrors} />

                            <div className='row d-flex justify-content-end px-3'>
                                <button type="button" onClick={() => {stepper.previous()}} className="btn">Previous</button>
                                <button type="button" onClick={() => {stepper.next()}} className="btn btn-primary">Next</button>
                            </div>
                        </div>

                        <div id="details" className="content p-md-4" role="tabpanel" aria-labelledby="extra-details-trigger">
                            <UpdateListingDetails listing={listing} formErrors={formErrors} />
                            
                            <div className='row d-flex justify-content-end px-3'>
                                <button type="button" onClick={() => {stepper.previous()}} className="btn">Previous</button>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>   
        </>
    )
}
