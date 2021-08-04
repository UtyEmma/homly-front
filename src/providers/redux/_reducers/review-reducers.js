import { _REVIEWS } from "../_contants/reviews-constants";

const { SUBMIT_REVIEW_REQUEST, SUBMIT_REVIEW_SUCCESS, SUBMIT_REVIEW_FAILURE } = _REVIEWS

export function SubmitReviewReducer (state = {}, action) {
    switch (action.type) {
        case SUBMIT_REVIEW_REQUEST:
            return {...state, loading: true}
        case SUBMIT_REVIEW_SUCCESS:
            return {...state, laoding: false, reviews: action.payload}
        case SUBMIT_REVIEW_FAILURE: 
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}