import Response from "libraries/response/response"
import { ReviewsService } from "providers/services/reviews-service"
import { _REVIEWS } from "../_contants/reviews-constants"

const {
    SUBMIT_REVIEW_REQUEST, SUBMIT_REVIEW_SUCCESS, SUBMIT_REVIEW_FAILURE,
    FETCH_AGENT_REVIEWS_REQUEST, FETCH_AGENT_REVIEWS_SUCCESS, FETCH_AGENT_REVIEWS_FAILURE,
    FETCH_REVIEWS_REQUEST, FETCH_REVIEWS_SUCCESS, FETCH_REVIEWS_FAILURE,
} = _REVIEWS

export const SubmitReview = (data, id) => (dispatch) => {
    console.log("Submiting Reviews...")

    dispatch({ type: SUBMIT_REVIEW_REQUEST })

    ReviewsService.submitReview(data, id)
                    .then((response) => {
                        Response.success(response.data)
                        dispatch({
                            type: SUBMIT_REVIEW_SUCCESS,
                            payload: response.data.data
                        })
                    })
                    .catch((error) => {
                        Response.error(error.response)
                        dispatch({
                            type: SUBMIT_REVIEW_FAILURE,
                            payload: error.response.data
                        })
                    })
}

export const FetchAgentReview = () => (dispatch) => {
    console.log("Fetching Agents Reviews...")
    dispatch({type: FETCH_AGENT_REVIEWS_REQUEST})

    ReviewsService.agentReviews()
                    .then((response) => {
                        dispatch({
                            type: FETCH_AGENT_REVIEWS_SUCCESS,
                            payload: response.data.data
                        })
                    })
                    .catch((error) => {
                        Response.error(error.response)
                        dispatch({
                            type: FETCH_AGENT_REVIEWS_FAILURE,
                            payload: error.response
                        })
                    })
} 

export const FetchReview = (id) => (dispatch) => {
    
    console.log("Fetching Reviews...")
    dispatch({type: FETCH_REVIEWS_REQUEST})

    ReviewsService.listingReviews(id)
                    .then((response) => {
                        dispatch({
                            type: FETCH_REVIEWS_SUCCESS,
                            payload: response.data.data
                        })
                    })
                    .catch((error) => {
                        Response.error(error.response)
                        dispatch({
                            type: FETCH_REVIEWS_FAILURE,
                            payload: error.response
                        })
                    })
} 

