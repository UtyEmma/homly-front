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

function AddListingForm({setIsLoading}) {
    const dispatch = useDispatch();

    const [files, setFiles] = useState([]) 

    const store_listing = useSelector((state) => state.store_listing);
    const {store} = store_listing;

    const listing = useSelector((state) => state.new_listing);
    const {loading, listing_success} = listing
    

    const fetchDetails = useSelector(state => state.details)
    const {details} = fetchDetails

    const loadDetails = () => { dispatch(FetchDetails()) }

    useEffect(() => {
        !details && loadDetails()
        listing_success && toast.success(listing_success.data.message)
        setIsLoading(loading)
    }, [listing_success, loading])

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

        formData.delete('undefined')
        formData.delete('images')
        formData.delete('extra-details')
        formData.delete('filepond')
        files.map(file => formData.append('images[]', file))


        dispatch(CreateListing(formData))
    }

    return (
        <form id="listing-form" onSubmit={handleFormData} encType="multipart/form-data" >
            <div id="collapse-tabs-accordion">
                <ListingDescription />

                <ListingMedia files={files} setFiles={setFiles} />

                <ListingLocation />

                <ListingDetails features={details && details.features} />

                <ListingFeatures amenities={details && details.amenities}/>
            </div>
        </form>
    )
}

export default AddListingForm
