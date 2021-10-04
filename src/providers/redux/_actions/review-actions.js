import Response from "libraries/response/response"
import { ReviewsService } from "providers/services/reviews-service"
import { _REVIEWS } from "../_contants/reviews-constants"

const {
    SUBMIT_REVIEW_REQUEST, SUBMIT_REVIEW_SUCCESS, SUBMIT_REVIEW_FAILURE,
    FETCH_AGENT_REVIEWS_REQUEST, FETCH_AGENT_REVIEWS_SUCCESS, FETCH_AGENT_REVIEWS_FAILURE,
    FETCH_REVIEWS_REQUEST, FETCH_REVIEWS_SUCCESS, FETCH_REVIEWS_FAILURE,
    REPORT_USER_REQUEST, REPORT_USER_SUCCESS, REPORT_USER_FAILURE,
    EDIT_REVIEW_REQUEST, EDIT_REVIEW_SUCCESS, EDIT_REVIEW_FAILURE,
    DELETE_REVIEW_REQUEST, DELETE_REVIEW_SUCCESS, DELETE_REVIEW_FAILURE
} = _REVIEWS

export const SubmitReview = (token, data, id) => (dispatch) => {
    dispatch({ type: SUBMIT_REVIEW_REQUEST })

    ReviewsService.submitReview(token, data, id)
                    .then((response) => {
                        Response.success(response.data)
                        dispatch({
                            type: FETCH_REVIEWS_SUCCESS,
                            payload: response.data.data
                        })

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

export const SubmitAgentReview = (token, data, id) => (dispatch) => {
    dispatch({ type: SUBMIT_REVIEW_REQUEST })

    ReviewsService.submitAgentReview(token, data, id)
                    .then((response) => {
                        Response.success(response.data)
                        dispatch({
                            type: 'FETCH_SINGLE_AGENT_SUCCESS',
                            payload: response.data.data
                        })

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

export const FetchAgentReview = (token) => (dispatch) => {
    dispatch({type: FETCH_AGENT_REVIEWS_REQUEST})

    ReviewsService.agentReviews(token)
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


export const FetchReview = (token, id, type) => (dispatch) => {
    
    console.log("Fetching Reviews...")
    dispatch({type: FETCH_REVIEWS_REQUEST})

    ReviewsService.listingReviews(token, id, type)
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

export const ReportUser = (token, id, data) => (dispatch) => {
    console.log("Reporting User...")
    dispatch({type: REPORT_USER_REQUEST})

    ReviewsService.reportUser(token, id, data)
                    .then((response) => {
                        Response.success(response.data)
                        dispatch({
                            type: REPORT_USER_SUCCESS,
                            payload: response.data.data
                        })
                    })
                    .catch((error) => {
                        Response.error(error.response)
                        dispatch({
                            type: REPORT_USER_FAILURE,
                            payload: error.response
                        })
                    })
}

export const EditReview = (token, data) => (dispatch) => {
    console.log("Submitting Edited Review...")

    dispatch({type: EDIT_REVIEW_REQUEST})
    ReviewsService.editReviews(token, data)
                    .then((response) => {
                        Response.success(response.data)
                        dispatch({
                            type: EDIT_REVIEW_SUCCESS,
                            payload: response.data.data
                        })

                        dispatch({
                            type: FETCH_REVIEWS_SUCCESS,
                            payload: response.data.data
                        })
                    })
                    .catch((error) => {
                        Response.error(error.response)
                        dispatch({
                            type: EDIT_REVIEW_FAILURE,
                            payload: error.response
                        })
                    })
}

export const DeleteReview = (token, id, data, role) => (dispatch) => {
    dispatch({type: DELETE_REVIEW_REQUEST})

    ReviewsService.deleteReviews(token, id, data, role)
                    .then((response) => {
                        Response.success(response.data)
                        dispatch({
                            type: DELETE_REVIEW_SUCCESS,
                            payload: response.data.data
                        })

                        dispatch({
                            type: FETCH_REVIEWS_SUCCESS,
                            payload: response.data.data
                        })
                    })
                    .catch((error) => {
                        Response.error(error.response)
                        dispatch({
                            type: DELETE_REVIEW_FAILURE,
                            payload: error.response
                        })
                    })
}


export const DeleteAgentReview = (token, id, data, role) => (dispatch) => {
    dispatch({type: DELETE_REVIEW_REQUEST})

    ReviewsService.deleteAgentReviews(token, id, data, role)
                    .then((response) => {
                        Response.success(response.data)
                        dispatch({
                            type: 'FETCH_SINGLE_AGENT_SUCCESS',
                            payload: response.data.data
                        })
                    })
                    .catch((error) => {
                        Response.error(error.response)
                        dispatch({
                            type: DELETE_REVIEW_FAILURE,
                            payload: error.response
                        })
                    })
}

