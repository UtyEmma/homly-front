import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreateListing } from '../../../../providers/redux/_actions/listing/listing-actions';
import ListingLocation from './blocks/listing-location'
import ListingDescription from './blocks/listing-description'
import ListingMedia from './blocks/listing-media'
import ListingAmenities from './blocks/listing-amenities'
import ListingDetails from './blocks/listing-details'
import { FetchDetails } from 'providers/redux/_actions/details-actions';
import { MapFormErrors, __createlisting } from 'libraries/validation';
import Validator from 'validatorjs';
import toast from 'react-hot-toast';

function AddListingForm({setIsLoading}) {

    const dispatch = useDispatch();

    const [files, setFiles] = useState([])
    const [formErrors, setFormErrors] = useState({})

    const {loading, listing_success, formError} = useSelector((state) => state.new_listing);
    const {token} = useSelector(state => state.user_data)
    
    const {amenities} = useSelector(state => state.details)

    const {rules, attributes} = __createlisting

    const loadAmenities = useCallback(() => {
        dispatch(FetchDetails()) 
    }, [dispatch]) 

    const resetFormData = () => {
        setFormErrors({})
        setFiles([])
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
        !amenities && loadAmenities()
    }, [amenities, loadAmenities])

    useEffect(() => {
        formError && setFormErrors(formError)
    }, [formError])

    useEffect(() => {
        listing_success && resetFormData()
    }, [listing_success])

    useEffect(() => {
        setIsLoading(loading)
    }, [loading, setIsLoading])

    return (
        <form id="listing-form" onSubmit={handleFormData} encType="multipart/form-data" >
            <div id="collapse-tabs-accordion" className="bg-gray-01">
                <ListingDescription formErrors={formErrors} />

                <ListingMedia files={files} setFiles={setFiles} formErrors={formErrors} />

                <ListingLocation formErrors={formErrors} />

                <ListingDetails formErrors={formErrors} />

                <ListingAmenities amenities={amenities} formErrors={formErrors}/>
            </div>
        </form>
    )
}

export default AddListingForm
