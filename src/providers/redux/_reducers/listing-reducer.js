import { ListingConstants } from "../_contants/listing-constants";

const { STORE_LISTING, 
        NEW_LISTING_REQUEST, NEW_LISTING_SUCCESS, NEW_LISTING_FAILURE, 
        GETLISTINGS_REQUEST, GETLISTINGS_SUCCESS, GETLISTINGS_FAILURE,
        ACTIVE_LISTINGS_REQUEST, ACTIVE_LISTINGS_SUCCESS, ACTIVE_LISTINGS_FAILURE,
        FETCH_LISTING_DETAILS_REQUEST, FETCH_LISTING_DETAILS_SUCCESS, FETCH_LISTING_DETAILS_FAILURE,
    } = ListingConstants;



export function StoreListingReducer (state = {}, actions){
    switch (actions.type) {
        case STORE_LISTING:
            return {...state, store: actions.payload}
        default:
            return state;
    }
}

export function NewListingReducer(state = {}, actions){
    switch(actions.type){
        case NEW_LISTING_REQUEST: 
            return {...state, loading: true}
        case NEW_LISTING_SUCCESS:
            return {...state, loading: false, listing_success: actions.payload}
        case NEW_LISTING_FAILURE:
            return {...state, loading: false, listing_failure: actions.payload }
        default:
            return state
    }
}

export function AgentsListingsReducer(state={}, actions){
    switch(actions.type){
        case GETLISTINGS_REQUEST: 
            return {...state, loading: true}
        case GETLISTINGS_SUCCESS:
            return {...state, loading: false, agents_listings: actions.payload}
        case GETLISTINGS_FAILURE:
            return {...state, loading: false, get_listing_failure: actions.payload }
        default:
            return state
    }
}

export function ActiveListingsReducer(state={}, actions){
    switch(actions.type){
        case ACTIVE_LISTINGS_REQUEST: 
            return {...state, loading: true}
        case ACTIVE_LISTINGS_SUCCESS:
            return {...state, loading: false, active_listings: actions.payload}
        case ACTIVE_LISTINGS_FAILURE:
            return {...state, loading: false, active_listings_failed: actions.payload }
        default:
            return state
    }
}


export function FetchListingDetails(state={}, actions){
    switch(actions.type){
        case FETCH_LISTING_DETAILS_REQUEST: 
            return {...state, loading: true}
        case FETCH_LISTING_DETAILS_SUCCESS:
            return {...state, loading: false, 
                    amenities: actions.payload.amenities, 
                    features : actions.payload.features}
        case FETCH_LISTING_DETAILS_FAILURE:
            return {...state, loading: false, error: actions.payload }
        default:
            return state
    }
}