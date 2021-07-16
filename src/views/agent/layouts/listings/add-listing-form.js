import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreateListing, StoreListing } from '../../../../providers/redux/_actions/listing/listing-actions';
import ListingLocation from './blocks/listing-location'
import ListingDescription from './blocks/listing-description'
import ListingMedia from './blocks/listing-media'
import ListingFeatures from './blocks/listing-features'
import ListingDetails from './blocks/listing-details'

function AddListingForm() {
    const dispatch = useDispatch();

    const listing = useSelector((state) => state.store_listing);
    const {store, listing_failure, listing_success} = listing;
    // const [files, setFiles] = useState([]); 
    let formData = new FormData();

    const handleFormData = (e) => {
        e.preventDefault()
        dispatch(CreateListing(formData))
    }

    return (
        <form id="listing-form" onSubmit={handleFormData} encType="multipart/form-data" >
            <div id="collapse-tabs-accordion">
                <ListingDescription formData={formData}/>

                <ListingMedia formData={formData}/>

                <ListingLocation formData={formData}/>

                <ListingDetails formData={formData}/>

                <ListingFeatures formData={formData}/>
            </div>
        </form>
    )
}

export default AddListingForm
