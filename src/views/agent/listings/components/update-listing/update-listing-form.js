import { useEffect, useState } from "react";
import 'bs-stepper/dist/css/bs-stepper.min.css'
import Stepper from 'bs-stepper'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { UpdateListingDescription } from "./blocks/update-listing-description";
import { UpdateListingMedia } from "./blocks/update-listing-media";
import { UpdateListingLocation } from "./blocks/update-listing-location";
import { UpdateListingDetails } from "./blocks/update-listing-details";
import { useDispatch } from "react-redux";
import { UpdateListing } from "providers/redux/_actions/listing/listing-actions";
import { __updatelisting } from "libraries/validation";

export const UpdateListingForm = ({listing}) => {

    const dispatch = useDispatch()

    const [stepper, setStepper] = useState();
    const [files, setFiles] = useState(listing.images)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(__updatelisting)
    });

    const handleSuccess = () => {
        let form = document.getElementById('create_wishlist_form')
        let formData = new FormData(form);
        files.map(file => formData.append('images[]', file))

        dispatch(UpdateListing(formData, listing.unique_id))
    }

    const handleErrors = (e) => {
        console.log(e.target)
    }

    useEffect(() => {
        setStepper(new Stepper(document.getElementById('wishlist-stepper'), {
            linear: false,
            animation: true
        }));
    }, [])

    return (
        <>
         <div className="bs-stepper" id='wishlist-stepper'>
                <div className="bs-stepper-header px-5" role="tablist">
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
                    <form className="form" onSubmit={handleSubmit(handleSuccess, handleErrors)} id="create_wishlist_form" encType="multipart/form-data">
                        <div id="description" className="content p-4" role="tabpanel" aria-labelledby="property-info-trigger" >
                            
                            <UpdateListingDescription listing={listing} />

                            <div className='row d-flex justify-content-end'>
                                    <button type="button" onClick={() => {stepper.next()}} className="btn btn-primary">Next</button>
                            </div>
                        </div>

                        <div id="media" className="content p-4" role="tabpanel" aria-labelledby="location-info-trigger">
                            
                            <UpdateListingMedia listing={listing} files={files} setFiles={setFiles} />

                            <div className='row d-flex justify-content-end'>
                                <button type="button" onClick={() => {stepper.previous()}} className="btn">Previous</button>
                                <button type="button" onClick={() => {stepper.next()}} className="btn btn-primary">Next</button>
                            </div>
                        </div>

                        <div id="location" className="content p-4" role="tabpanel" aria-labelledby="location-info-trigger">
                            <UpdateListingLocation listing={listing} />

                            <div className='row d-flex justify-content-end'>
                                <button type="button" onClick={() => {stepper.previous()}} className="btn">Previous</button>
                                <button type="button" onClick={() => {stepper.next()}} className="btn btn-primary">Next</button>
                            </div>
                        </div>

                        <div id="details" className="content p-4" role="tabpanel" aria-labelledby="extra-details-trigger">
                            <UpdateListingDetails listing={listing}/>
                            
                            <div className='row d-flex justify-content-end'>
                                <button type="button" onClick={() => {stepper.previous()}} className="btn">Previous</button>
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>   
        </>
    )
}
