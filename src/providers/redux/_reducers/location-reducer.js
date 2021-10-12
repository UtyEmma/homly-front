import { _LOCATION } from "../_contants/location-constants"

const { FETCH_LOCATION_REQUEST, FETCH_LOCATION_SUCCESS, FETCH_LOCATION_FAILURE } = _LOCATION

export function searchForLocationReducer(state = {}, action){
    switch (action.type) {
        case FETCH_LOCATION_REQUEST:
            return {...state, loading: true}
        case FETCH_LOCATION_SUCCESS: 
            return {...state, loading: false, location: action.payload}
        case FETCH_LOCATION_FAILURE:
            return {...state, loading: false, error: action.payload }
        default:
            return state;
    }
}