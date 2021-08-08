import { Request } from "./api/http";

const options = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer ${localStorage.getItem('token')}`
}

const params = {
    headers: options
}


export const ListingService = {

    newListing : async (data) => {
        const params = {
            config: {
                headers: options
            },
            payload: data
        }
        return await Request.post('agent/listing/create', params)
    },

    getAgentListings : async () => {
        const params = { headers: options }
        return await Request.get('agent/listing/agents-listings', params)
    },

    loadActiveListings : async () => {
        const params = {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        }
        return await Request.get('listings', params)
    },

    fetchAllListings : async (query) => {
        const config = {
                headers: options, 
                params: query
            }
        return await Request.get('listings', {...config})
    },

    fetchListingDetails : async () => {
        return await Request.get('tenant/listings/details', params);
    },
    
    fetchSingleListing : async (slug) => {
        return await Request.get(`listings/${slug}`, params);
    },

    fetchPopularListings: async () => {
        return await Request.get(`listings/popular`, params)
    }

}