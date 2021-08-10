import { Request } from "./api/http";

const options = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer ${localStorage.getItem('token')}`
}

export const ReviewsService = {
    submitReview : async (data, id) => {
        const option = {
            config: {
                headers: options
            },
            payload: data
        }
        return await Request.post(`tenant/reviews/create/${id}`, option);
    },

    agentReviews : async () => {
        const config = { 
            headers: options 
        }
        return await Request.get('agent/reviews', config);
    },

    listingReviews: async (id) => {
        const config = {
                headers: options
            }
        return await Request.get(`reviews/fetch/${id}`, config)
    },

    reportUser: async(id, data) => {
        const options = {
            config : {
                headers: options
            },
            payload : data
        }
        return await Request.post(`agent/reviews/report/${id}`, options)
    }

}