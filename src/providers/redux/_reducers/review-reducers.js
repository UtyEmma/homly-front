import { _REVIEWS } from "../_contants/reviews-constants";

const { 
    SUBMIT_REVIEW_REQUEST, SUBMIT_REVIEW_SUCCESS, SUBMIT_REVIEW_FAILURE,
    FETCH_AGENT_REVIEWS_REQUEST, FETCH_AGENT_REVIEWS_SUCCESS, FETCH_AGENT_REVIEWS_FAILURE,
    FETCH_REVIEWS_REQUEST, FETCH_REVIEWS_SUCCESS, FETCH_REVIEWS_FAILURE,
    REPORT_USER_REQUEST, REPORT_USER_SUCCESS, REPORT_USER_FAILURE,
    EDIT_REVIEW_REQUEST, EDIT_REVIEW_SUCCESS, EDIT_REVIEW_FAILURE,
    DELETE_REVIEW_REQUEST, DELETE_REVIEW_SUCCESS, DELETE_REVIEW_FAILURE
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
            return {...state, loading: false, reviews: action.payload.reviews}
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

export function ReportUserReducer (state={}, action){
    switch (action.type) {
        case REPORT_USER_REQUEST:
            return {...state, loading: true}
        case REPORT_USER_SUCCESS:
            return {...state, loading: false, report: action.payload}
        case REPORT_USER_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export function EditReviewReducer (state={}, action){
    switch (action.type) {
        case EDIT_REVIEW_REQUEST:
            return {...state, loading: true}
        case EDIT_REVIEW_SUCCESS:
            return {...state, loading: false, reviews: action.payload}
        case EDIT_REVIEW_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export function DeleteReviewReducer (state={}, action){
    switch (action.type) {
        case DELETE_REVIEW_REQUEST:
            return {...state, loading: true}
        case DELETE_REVIEW_SUCCESS:
            return {...state, loading: false, reviews: action.payload}
        case DELETE_REVIEW_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}