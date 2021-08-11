import { DetailsConstants } from "../_contants/details-constants";

const { FETCH_DETAILS_REQUEST, FETCH_DETAILS_SUCCESS, FETCH_DETAILS_FAILURE,
        FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_FAILURE
        } = DetailsConstants;

export function FetchDetailsReducer (state = {}, action) {
    switch (action.type) {
        case FETCH_DETAILS_REQUEST:
            return {...state, loading: true}
        case FETCH_DETAILS_SUCCESS:
            return {...state, 
                loading: false, 
                amenities: action.payload.amenities, 
                // features: action.payload.features
            }
        case FETCH_DETAILS_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}