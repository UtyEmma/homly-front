import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreateListing, StoreListing } from '../../../../providers/redux/_actions/listing/listing-actions';
import ListingLocation from './blocks/listing-location'
import ListingDescription from './blocks/listing-description'
import ListingMedia from './blocks/listing-media'
import ListingAmenities from './blocks/listing-amenities'
import ListingDetails from './blocks/listing-details'
import { toast } from 'react-toastify';
import { FetchDetails } from 'providers/redux/_actions/details-actions';

function AddListingForm({setIsLoading}) {
    const dispatch = useDispatch();

    const [files, setFiles] = useState([]) //Set Files

    const store_listing = useSelector((state) => state.store_listing);
    const {store} = store_listing; 

    const listing = useSelector((state) => state.new_listing);
    const {loading, listing_success} = listing
    

    const fetchDetails = useSelector(state => state.details)
    const {amenities} = fetchDetails

    const loadAmenities = () => { dispatch(FetchDetails()) }

    useEffect(() => {
        !amenities && loadAmenities()
        listing_success && document.getElementById('listing-form').reset()
        setIsLoading(loading)
    }, [listing_success, loading])

    const handleFormData = (e) => {
        e.preventDefault()
        let formData = new FormData(e.target);

        formData.delete('undefined')
        formData.delete('images')
        formData.delete('filepond')
        files.map(file => formData.append('images[]', file))

        dispatch(CreateListing(formData))
    }

    return (
        <form id="listing-form" onSubmit={handleFormData} encType="multipart/form-data" >
            <div id="collapse-tabs-accordion">
                <ListingDescription setIsLoading={setIsLoading}/>

                <ListingMedia files={files} setFiles={setFiles} />

                <ListingLocation />

                <ListingDetails />

                <ListingAmenities amenities={amenities}/>
            </div>
        </form>
    )
}

export default AddListingForm
