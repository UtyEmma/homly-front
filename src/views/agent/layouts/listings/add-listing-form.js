import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreateListing, StoreListing } from '../../../../providers/redux/_actions/listing/listing-actions';
import ListingLocation from './blocks/listing-location'
import ListingDescription from './blocks/listing-description'
import ListingMedia from './blocks/listing-media'
import ListingFeatures from './blocks/listing-features'
import ListingDetails from './blocks/listing-details'
import { toast } from 'react-toastify';

function AddListingForm() {
    const dispatch = useDispatch();

    const listing = useSelector((state) => state.store_listing);
    const {store, listing_failure, listing_success} = listing;

    useEffect(() => {
        if(listing_success){
            toast.success(listing_success.data.message);
        }
        if(listing_failure){
            toast.error(listing_failure.data.message)
        }
    }, [listing_success, listing_failure])

    const handleFormData = (e) => {
        e.preventDefault()
        let formData = new FormData(e.target);
        formData.set('features', JSON.stringify(store.features))
        formData.set('details', JSON.stringify(store.details))
        formData.delete('no-of-bedrooms')
        formData.delete('number-of-bathrooms')
        formData.delete('rooms')
        formData.delete('kitchen')
        formData.delete('extra-details')
        formData.delete('water')
        formData.delete('furnished')
        dispatch(CreateListing(formData))
    }

    return (
        <form id="listing-form" onSubmit={handleFormData} encType="multipart/form-data" >
            <div id="collapse-tabs-accordion">
                <ListingDescription />

                <ListingMedia />

                <ListingLocation />

                <ListingDetails />

                <ListingFeatures />
            </div>
        </form>
    )
}

export default AddListingForm
