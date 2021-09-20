import { authHeaders } from "./api/headers";
import { Request } from "./api/http";

export const ReviewsService = {
    submitReview : async (token, data, id) => {
        const option = {
            config: {
                headers: authHeaders(token)
            },
            payload: data
        }
        return await Request.post(`tenant/reviews/create/${id}`, option);
    },

    agentReviews : async (token) => {
        const config = { 
            headers: authHeaders(token) 
        }
        return await Request.get('agent/reviews', config);
    },

    listingReviews: async (token, id) => {
        const config = {
                headers: authHeaders(token)
            }
        return await Request.get(`reviews/fetch/${id}`, config)
    },

    reportUser: async (token, id, data) => {
        const option = {
            config : {
                headers: authHeaders(token)
            },
            payload : data
        }
        return await Request.post(`agent/reviews/report/${id}`, option)
    },

    editReviews: async (token, data) => {
        const option = {
            config : {
                headers: authHeaders(token)
            },
            payload : data
        }

        return await Request.post('tenant/reviews/edit', option)
    },

    deleteReviews: async (token, id) => {
        const config = {
            headers: authHeaders(token)
        }
        return await Request.get(`tenant/reviews/delete/${id}`, config)
    }

}