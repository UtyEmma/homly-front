import { _FAVOURTIES } from "../_contants/favourite-constants";

const { 
    FETCH_FAVOURTIES_REQUEST, FETCH_FAVOURTIES_SUCCESS, FETCH_FAVOURTIES_FAILURE, 
    ADD_FAVOURITES_REQUEST, ADD_FAVOURITES_SUCCESS, ADD_FAVOURITES_FAILURE, 
    REMOVE_FAVOURITES_REQUEST, REMOVE_FAVOURITES_SUCCESS, REMOVE_FAVOURITES_FAILURE
} = _FAVOURTIES

export function FetchFavouritesReducer (state = {}, {type, payload}){
    switch (type) {
        case FETCH_FAVOURTIES_REQUEST:
            return {...state, loading: true}
        case FETCH_FAVOURTIES_SUCCESS:
            return {...state, loading: false, listings: payload.listings}
        case FETCH_FAVOURTIES_FAILURE:
            return {...state, loading: false, error: payload}
        default:
            return state;
    }
}

export function RemoveFavouritesReducer (state = {}, {type, payload}){
    switch (type) {
        case REMOVE_FAVOURITES_REQUEST:
            return {...state, loading: true}
        case REMOVE_FAVOURITES_SUCCESS:
            return {...state, loading: false, listings: payload.listings }
        case REMOVE_FAVOURITES_FAILURE:
            return {...state, loading: false, error: payload}
        default:
            return state;
    }
}

export function AddFavouritesReducer (state = {}, {type, payload}){
    switch (type) {
        case ADD_FAVOURITES_REQUEST:
            return {...state, loading: true}
        case ADD_FAVOURITES_SUCCESS:
            return {...state, loading: false, status: payload.status}
        case ADD_FAVOURITES_FAILURE:
            return {...state, loading: false, error: payload}
        default:
            return state;
    }
}