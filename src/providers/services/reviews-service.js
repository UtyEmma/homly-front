import { Request } from "./api/http";

const options = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer ${localStorage.getItem('token')}`
}

export const ReviewsService = {
    submitReview : (data, id) => {
        const option = {
            config: {
                headers: options
            },
            payload: data
        }
        return Request.post(`tenant/reviews/create/${id}`, option);
    },

    agentReviews : () => {
        const option = {
            config: {
                headers: options
            }
        }

        return Request.get('reviews/agent', option);
    }

}