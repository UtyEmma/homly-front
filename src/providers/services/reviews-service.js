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

    reportUser: async (id, data) => {
        const option = {
            config : {
                headers: options
            },
            payload : data
        }
        return await Request.post(`agent/reviews/report/${id}`, option)
    },

    editReviews: async (data) => {
        const option = {
            config : {
                headers: options
            },
            payload : data
        }

        return await Request.post('tenant/reviews/edit', option)
    },

    deleteReviews: async (id) => {
        const config = {
            headers: options
        }
        return await Request.get(`tenant/reviews/delete/${id}`, config)
    }

}