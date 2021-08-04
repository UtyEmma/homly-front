import Response from "libraries/response/response"
import { ReviewsService } from "providers/services/reviews-service"
import { _REVIEWS } from "../_contants/reviews-constants"

const {
    SUBMIT_REVIEW_REQUEST, SUBMIT_REVIEW_SUCCESS, SUBMIT_REVIEW_FAILURE
} = _REVIEWS

export const SubmitReview = (data, id) => (dispatch) => {
    console.log("Submiting Reviews...")
    dispatch({ type: SUBMIT_REVIEW_REQUEST })

    ReviewsService.submitReview(data, id)
                    .then((response) => {
                        Response.success(response.data.data)
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