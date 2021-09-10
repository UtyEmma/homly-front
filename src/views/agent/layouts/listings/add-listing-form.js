import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreateListing, StoreListing } from '../../../../providers/redux/_actions/listing/listing-actions';
import ListingLocation from './blocks/listing-location'
import ListingDescription from './blocks/listing-description'
import ListingMedia from './blocks/listing-media'
import ListingAmenities from './blocks/listing-amenities'
import ListingDetails from './blocks/listing-details'
import { FetchDetails } from 'providers/redux/_actions/details-actions';
import { MapFormErrors, __createlisting } from 'libraries/validation';
import Validator from 'validatorjs';
import { NewListingStepper } from './listing-function';

function AddListingForm({setIsLoading}) {
    const dispatch = useDispatch();

    const [files, setFiles] = useState([]) //Set Files

    const store_listing = useSelector((state) => state.store_listing);
    const {store} = store_listing; 

    const listing = useSelector((state) => state.new_listing);
    const {loading, listing_success, formError} = listing
    
    const {rules, messages, attributes} = __createlisting
    const [formErrors, setFormErrors] = useState({})

    const fetchDetails = useSelector(state => state.details)
    const {amenities} = fetchDetails

    const loadAmenities = () => { dispatch(FetchDetails()) }

    useEffect(() => {
        !amenities && loadAmenities()
        listing_success && resetFormData()
        setIsLoading(loading)
        formError && setFormErrors(formError)
    }, [listing_success, loading])

    const resetFormData = () => {
        setFormErrors({})
        document.getElementById('listing-form').reset()
    }

    const handleFormData = (e) => {
        e.preventDefault()
        let formData = new FormData(e.target);
        files.map(file => formData.append('images[]', file))

        const values = Object.fromEntries(formData.entries());
        let validation = new Validator(values, rules)
        validation.setAttributeNames(attributes);
        validation.fails(() => {setFormErrors(MapFormErrors(validation.errors.errors))})

        if (validation.passes()) {
            setFormErrors({}); 
            dispatch(CreateListing(formData))
        }
    }

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
