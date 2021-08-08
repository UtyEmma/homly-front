import { _REVIEWS } from "../_contants/reviews-constants";

const { 
    SUBMIT_REVIEW_REQUEST, SUBMIT_REVIEW_SUCCESS, SUBMIT_REVIEW_FAILURE,
    FETCH_AGENT_REVIEWS_REQUEST, FETCH_AGENT_REVIEWS_SUCCESS, FETCH_AGENT_REVIEWS_FAILURE,
    FETCH_REVIEWS_REQUEST, FETCH_REVIEWS_SUCCESS, FETCH_REVIEWS_FAILURE,
} = _REVIEWS

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

export function FetchAgentReviewsReducer (state = {}, action) {
    switch (action.type) {
        case FETCH_AGENT_REVIEWS_REQUEST:
            return {...state, loading: true}
        case FETCH_AGENT_REVIEWS_SUCCESS:
            return {...state, loaing: false, reviews: action.payload}
        case FETCH_AGENT_REVIEWS_FAILURE: 
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export function FetchReviewsReducer (state = {}, action) {
    switch (action.type) {
        case FETCH_REVIEWS_REQUEST:
            return {...state, loading: true}
        case FETCH_REVIEWS_SUCCESS:
            return {...state, loading: false, reviews: action.payload}
        case FETCH_REVIEWS_FAILURE: 
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}