import { Request } from "./api/http";

export const ListingService = {
    newListing, getAgentListings, loadActiveListings
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

    return await Request.post('listing/create', params)
}

async function getAgentListings(){
    const params = {
        headers: options
    }

    return await Request.get('listing/agents-listings', params)
}

async function loadActiveListings(){
    const params = {
        headers: options
    }

    return await Request.get('listing/active', params)
}