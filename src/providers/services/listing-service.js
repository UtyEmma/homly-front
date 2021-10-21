import { authHeaders, headers } from "./api/headers";
import { Request } from "./api/http";

const options = (token = null) => {
    return {    
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
    }
}

const params = (token) => {
    return {
        headers: authHeaders(token)
    }
}

export const ListingService = {
    newListing : async (token, data) => {
        const params = {
            config: {
                headers: authHeaders(token)
            },
            payload: data
        }
        let response = await Request.post('agent/listing/create', params);
        // console.log(response)
        return response
    },

    getAgentListings : async (token) => {
        const params = { headers: options(token) }
        return await Request.get('agent/listing/agents-listings', params)
    },

    updateListing : async (token, data, id) => {
        const params = {
            config: {
                headers: options(token)
            },
            payload: data
        }
        return await Request.post(`agent/listing/update/${id}`, params)
    },

    loadActiveListings : async () => {
        return await Request.get('listings', headers)
    },

    fetchAllListings : async (token, query) => {
        const config = {
            headers: options(token),
            params: query
        }
        return await Request.get('listings', {...config})
    },

    fetchListingDetails : async () => {
        return await Request.get('tenant/listings/details', params);
    },
    
    fetchSingleListing : async (username, slug) => {
        return await Request.get(`listings/${username}/${slug}`, params);
    },

    fetchPopularListings: async () => {
        return await Request.get(`listings/popular`, params)
    },

    setAsRented: async (token, id) => {
        return await Request.get(`agent/listing/rented/${id}`, params(token))
    },

    updateViews : async (id) => {
        return await Request.get(`listings/update-views/${id}`, params)
    },

    deleteListing : async (id) => {
        return await Request.get(`listings/delete/${id}`, params)
    }

}