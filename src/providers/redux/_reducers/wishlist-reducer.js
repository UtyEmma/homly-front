import { WISHLIST } from "../_contants/wishlist-constants";

const { CREATE_WISHLIST_REQUEST, CREATE_WISHLIST_SUCCESS, CREATE_WISHLIST_FAILURE,
        FETCH_WISHLIST_REQUEST, FETCH_WISHLIST_SUCCESS, FETCH_WISHLIST_FAILURE } = WISHLIST;

export function CreateWishlistReducer(state = {}, action){
    switch (action.type) {
        case CREATE_WISHLIST_REQUEST:
            return {...state, loading : true}
        case CREATE_WISHLIST_SUCCESS:
            return {...state, loading: false, wishlist: action.payload}
        case CREATE_WISHLIST_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return {state};
    }
}

export function FetchWishlistReducer(state = {}, action){
    switch (action.type) {
        case FETCH_WISHLIST_REQUEST:
            return {...state, loading : true}
        case FETCH_WISHLIST_SUCCESS:
            return {...state, loading: false, wishlists: action.payload}
        case FETCH_WISHLIST_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return {state};
    }
}

