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
        return await Request.post(`reviews/create/${id}`, option);
    },

    submitAgentReview : async (token, data, id) => {
        const option = {
            config: {
                headers: authHeaders(token)
            },
            payload: data
        }
        return await Request.post(`reviews/agent/create/${id}`, option);
    },

    agentReviews : async (token) => {
        const config = { 
            headers: authHeaders(token) 
        }
        return await Request.get('agent/reviews', config);
    },

    listingReviews: async (token, id, type) => {
        const config = {
                headers: authHeaders(token)
            }
        return await Request.get(`reviews/fetch/${id}?role=${type}`, config)
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

        return await Request.post('reviews/edit', option)
    },

    deleteReviews: async (token, id, role) => {
        const config = {
            headers: authHeaders(token)
        }
        return await Request.get(`reviews/delete/${id}?role=${role}`, config)
    },

    deleteAgentReviews : async (token, id, role) => {
        const config = {
            headers: authHeaders(token)
        }
        return await Request.get(`reviews/agent/delete/${id}?role=${role}`, config)
    }

}