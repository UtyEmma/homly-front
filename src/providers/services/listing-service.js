import { Request } from "./api/http";

export const ListingService = {
    newListing, getAgentListings, loadActiveListings, fetchListingDetails, fetchSingleListing
}

const options = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer ${localStorage.getItem('token')}`
}

async function newListing (data) {
    const params = {
        config: {
            headers: options
        },
        payload: data
    }

    return await Request.post('agent/listing/create', params)
}

async function getAgentListings(){
    const params = {
        headers: options
    }

    return await Request.get('agent/listing/agents-listings', params)
}

async function loadActiveListings(){
    const params = {
        headers: options
    }

    return await Request.get('agent/listing/active', params)
}

// Fetch Listing Features/Amenities
async function fetchListingDetails(){
    const params = {
        headers: options
    }
    return await Request.get('tenant/listings/details', params);
}

async function fetchSingleListing(slug){
    const params = {
        headers: options
    }
    return await Request.get(`listings/${slug}`, params);
}