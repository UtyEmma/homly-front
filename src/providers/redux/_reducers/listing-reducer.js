import { ListingConstants } from "../_contants/listing-constants";

const { STORE_LISTING, 
        NEW_LISTING_REQUEST, NEW_LISTING_SUCCESS, NEW_LISTING_FAILURE, 
        GETLISTINGS_REQUEST, GETLISTINGS_SUCCESS, GETLISTINGS_FAILURE,
        ACTIVE_LISTINGS_REQUEST, ACTIVE_LISTINGS_SUCCESS, ACTIVE_LISTINGS_FAILURE,
        UPDATE_LISTING_REQUEST, UPDATE_LISTING_SUCCESS,UPDATE_LISTING_FAILURE,
        FETCH_LISTING_DETAILS_REQUEST, FETCH_LISTING_DETAILS_SUCCESS, FETCH_LISTING_DETAILS_FAILURE,
        FETCH_SINGLE_LISTING_REQUEST, FETCH_SINGLE_LISTING_SUCCESS, FETCH_SINGLE_LISTING_FAILURE,
        DELETE_LISTING_REQUEST, DELETE_LISTING_SUCCESS, DELETE_LISTING_FAILURE,
        FETCH_POPULAR_LISTINGS_REQUEST, FETCH_POPULAR_LISTINGS_SUCCESS, FETCH_POPULAR_LISTINGS_FAILURE,
        SET_AS_RENTED_REQUEST, SET_AS_RENTED_SUCCESS, SET_AS_RENTED_FAILURE
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
            return {...state, loading: false, error: actions.payload.error, formError : actions.payload.formError }
        default:
            return state
    }
}

export function UpdateListingReducer(state={}, actions){
    switch(actions.type){
        case UPDATE_LISTING_REQUEST: 
            return {...state, loading: true}
        case UPDATE_LISTING_SUCCESS:
            return {...state, loading: false, success: actions.payload}
        case UPDATE_LISTING_FAILURE:
            return {...state, loading: false, error: actions.payload.error, formError: actions.payload.formErrors  }
        default:
            return state
    }
}

export function AgentsListingsReducer(state={}, actions){
    switch(actions.type){
        case GETLISTINGS_REQUEST: 
            return {...state, loading: true}
        case GETLISTINGS_SUCCESS:
            return {...state, loading: false, listings: actions.payload.listings}
        case GETLISTINGS_FAILURE:
            return {...state, loading: false, error: actions.payload }
        default:
            return state
    }
}

export function ActiveListingsReducer(state={}, actions){
    switch(actions.type){
        case ACTIVE_LISTINGS_REQUEST: 
            return {...state, loading: true }
        case ACTIVE_LISTINGS_SUCCESS:
            return {...state, loading: false, listings: actions.payload.listings, featured: actions.payload.featured}
        case ACTIVE_LISTINGS_FAILURE:
            return {...state, loading: false, error: actions.payload }
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

export function FetchSingleListing(state={}, actions){
    switch(actions.type){
        case FETCH_SINGLE_LISTING_REQUEST: 
            return {...state, loading: true}
        case FETCH_SINGLE_LISTING_SUCCESS:
            return {...state, loading: false, listing: actions.payload.listing, agent: actions.payload.agent}
        case FETCH_SINGLE_LISTING_FAILURE:
            return {...state, loading: false, error: actions.payload }
        default:
            return state
    }
}

export function FetchPopularListingsReducer(state={}, action){
    switch (action.type) {
        case FETCH_POPULAR_LISTINGS_REQUEST:
            return {...state, loading: true}
        case FETCH_POPULAR_LISTINGS_SUCCESS:
            return {...state, loading: false, popular: action.payload.popular, rented: action.payload.for_rent, onsale: action.payload.for_sale}
        case FETCH_POPULAR_LISTINGS_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export function SetAsRentedReducer(state={}, action){
    switch (action.type) {
        case SET_AS_RENTED_REQUEST:
            return {...state, loading: true}
        case SET_AS_RENTED_SUCCESS:
            return {...state, loading: false, listing: action.payload.listing}
        case SET_AS_RENTED_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

