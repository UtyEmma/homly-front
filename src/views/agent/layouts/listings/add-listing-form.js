import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreateListing, StoreListing } from '../../../../providers/redux/_actions/listing/listing-actions';
import ListingLocation from './blocks/listing-location'
import ListingDescription from './blocks/listing-description'
import ListingMedia from './blocks/listing-media'
import ListingFeatures from './blocks/listing-features'
import ListingDetails from './blocks/listing-details'
import { toast } from 'react-toastify';
import { FetchDetails } from 'providers/redux/_actions/details-actions';

function AddListingForm() {
    const dispatch = useDispatch();

    const listing = useSelector((state) => state.store_listing);
    const {store, listing_failure, listing_success} = listing;

    const fetchDetails = useSelector(state => state.details)
    const {loading, details, error} = fetchDetails

    const loadDetails = () => { dispatch(FetchDetails()) }
    let features = [];

    useEffect(() => {
        !details && loadDetails()
        listing_success && toast.success(listing_success.data.message)        
        listing_failure && toast.error(listing_failure.data.message)
    }, [listing_success, listing_failure])

    const handleFormData = (e) => {
        e.preventDefault()
        let formData = new FormData(e.target);
        if (store) {
            formData.set('features', JSON.stringify(store.features))
            details.features.map((feature) => (
                formData.delete(feature.toLowerCase().replace(/ /g,'-'))
            ))
        }

        if (store) {
            details.amenities.map((amenity) => (
                formData.delete(amenity.toLowerCase().replace(/ /g,'-'))
            ))
            formData.set('details', JSON.stringify(store.details))
        }

        dispatch(CreateListing(formData))
    }

    return (
        <form id="listing-form" onSubmit={handleFormData} encType="multipart/form-data" >
            <div id="collapse-tabs-accordion">
                <ListingDescription />

                <ListingMedia />

                <ListingLocation />

                <ListingDetails features={details && details.features} />

                <ListingFeatures amenities={details && details.amenities}/>
            </div>
        </form>
    )
}

export default AddListingForm
