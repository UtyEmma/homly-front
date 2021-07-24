import { DetailsConstants } from "../_contants/details-constants";

const { FETCH_DETAILS_REQUEST, FETCH_DETAILS_SUCCESS, FETCH_DETAILS_FAILURE} = DetailsConstants;

export function FetchDetailsReducer (state = {}, action) {
    switch (action.type) {
        case FETCH_DETAILS_REQUEST:
            return {...state, loading: true}
        case FETCH_DETAILS_SUCCESS:
            return {...state, loading: false, details: action.payload}
        case FETCH_DETAILS_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}