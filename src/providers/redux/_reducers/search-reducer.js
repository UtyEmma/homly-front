import { _SEARCH } from 'providers/redux/_contants/search-constants'

const {
    SEARCH_LISTINGS_REQUEST, SEARCH_LISTINGS_SUCCESS, SEARCH_LISTINGS_FAILURE
} = _SEARCH;


export const SearchListingsReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_LISTINGS_REQUEST:
            return {loading: true}
        case SEARCH_LISTINGS_SUCCESS:
            return {loading: false, result: action.payload }
        case SEARCH_LISTINGS_FAILURE: 
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}