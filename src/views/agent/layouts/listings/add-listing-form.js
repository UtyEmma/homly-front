import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreateListing } from '../../../../providers/redux/_actions/listing/listing-actions';
import ListingLocation from './blocks/listing-location'
import ListingDescription from './blocks/listing-description'
import ListingMedia from './blocks/listing-media'
import ListingAmenities from './blocks/listing-amenities'
import ListingDetails from './blocks/listing-details'
import { MapFormErrors, ToastFormErrors, __createlisting } from 'libraries/validation';
import Validator from 'validatorjs';
import toast from 'react-hot-toast';
import { processingStepAddProperty } from './handleFormStepper';

function AddListingForm({setIsLoading}) {


    const dispatch = useDispatch();

    const [files, setFiles] = useState([])
    const [formErrors, setFormErrors] = useState({})
    const [resetEditor, setResetEditor] = useState(false)

    const {loading, listing_success, formError} = useSelector((state) => state.new_listing);
    const {token} = useSelector(state => state.user_data)
    
    const {rules, attributes} = __createlisting

    const resetFormData = () => {
        setFormErrors({})
        setFiles([])
        setResetEditor(true)
        document.getElementById('listing-form').reset()
    }

    const handleFormData = (e) => {
        e.preventDefault()
        let formData = new FormData(e.target);
        files.map(file => formData.append('images[]', file))

        const values = Object.fromEntries(formData.entries());
        let validation = new Validator(values, rules)
        validation.setAttributeNames(attributes);
        validation.fails(() => {
            toast.error("Some fields are Invalid")
            setFormErrors(MapFormErrors(validation.errors.errors))
        })

        if (validation.passes()) {
            setFormErrors({}); 
            dispatch(CreateListing(token, formData))
        }
    }


    useEffect(() => {
        formError && setFormErrors(formError)
    }, [formError])

    useEffect(() => {
        formErrors && ToastFormErrors(formErrors)
    }, [formErrors])

    useEffect(() => {
        listing_success && resetFormData()
    }, [listing_success])

    useEffect(() => {
        processingStepAddProperty()
    }, [])

    useEffect(() => {
        setIsLoading(loading)
    }, [loading, setIsLoading])

    return (
        <form id="listing-form" onSubmit={handleFormData} encType="multipart/form-data" >
            <div id="collapse-tabs-accordion" className="bg-gray-01">
                <ListingDescription collapse={processingStepAddProperty} reset={resetEditor}  formErrors={formErrors} />

                <ListingMedia collapse={processingStepAddProperty} files={files} setFiles={setFiles} formErrors={formErrors} />

                <ListingLocation formErrors={formErrors} />

                <ListingDetails reset={resetEditor} formErrors={formErrors} />

                <ListingAmenities formErrors={formErrors}/>
            </div>
        </form>
    )
}

export default AddListingForm
