import Response from "libraries/response/response";
import { ListingService } from "../../../services/listing-service";
import { ListingConstants } from "../../_contants/listing-constants";

const { NEW_LISTING_REQUEST, NEW_LISTING_SUCCESS, NEW_LISTING_FAILURE, 
        GETLISTINGS_SUCCESS, GETLISTINGS_FAILURE, GETLISTINGS_REQUEST,
        ACTIVE_LISTINGS_REQUEST, ACTIVE_LISTINGS_SUCCESS, ACTIVE_LISTINGS_FAILURE,
        UPDATE_LISTING_REQUEST, UPDATE_LISTING_SUCCESS,UPDATE_LISTING_FAILURE,
        FETCH_LISTING_DETAILS_REQUEST, FETCH_LISTING_DETAILS_SUCCESS, FETCH_LISTING_DETAILS_FAILURE,
        FETCH_SINGLE_LISTING_REQUEST, FETCH_SINGLE_LISTING_SUCCESS, FETCH_SINGLE_LISTING_FAILURE,
        FETCH_POPULAR_LISTINGS_REQUEST, FETCH_POPULAR_LISTINGS_SUCCESS, FETCH_POPULAR_LISTINGS_FAILURE, 
        SET_AS_RENTED_REQUEST, SET_AS_RENTED_SUCCESS, SET_AS_RENTED_FAILURE, 
        UPDATE_LISTING_VIEWS_REQUEST, UPDATE_LISTING_VIEWS_SUCCESS, UPDATE_LISTING_VIEWS_FAILURE,
        STORE_LISTING, 
    } = ListingConstants

    
export const StoreListing = (data) => (dispatch) => {
    let values = JSON.stringify(data);
    localStorage.setItem('listingData', values);
    dispatch({
        type: STORE_LISTING,
        payload: data
    })
}

export const CreateListing = (data) => (dispatch) =>{
    console.log('Create Listing')

    dispatch({ type: NEW_LISTING_REQUEST })

    ListingService.newListing(data)
                .then(response => {
                    Response.success(response.data)
                    dispatch({
                        type: NEW_LISTING_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(error => {
                    let errors = Response.error(error.response)
                    dispatch({
                        type: NEW_LISTING_FAILURE,
                        payload: {error: error.response, formError: errors}
                    })
                })
}

export const GetAgentListings = () => (dispatch) => {
    console.log("Fetching Agent's Listings...")

    dispatch({ type : GETLISTINGS_REQUEST })
    ListingService.getAgentListings()
                    .then(response => {
                        return dispatch({
                            type: GETLISTINGS_SUCCESS,
                            payload: response.data.data
                        })
                    })
                    .catch(error => {
                        Response.error(error.response)
                        return dispatch({
                            type: GETLISTINGS_FAILURE,
                            payload: error.response
                        })
                    })
}

export const UpdateListing = (data, id) => (dispatch) => {
    console.log('Updating Listing...')

    dispatch({ type: UPDATE_LISTING_REQUEST })

    ListingService.updateListing(data, id)
                    .then(response => {
                        Response.success(response.data)
                        return dispatch({
                            type: UPDATE_LISTING_SUCCESS,
                            payload: response.data.data
                        })
                    })
                    .catch(error => {
                        Response.error(error.response)
                        return dispatch({
                            type: UPDATE_LISTING_FAILURE,
                            payload: error
                        })
                    })
}

export const ShowAllListings = (params) => (dispatch) => {
    console.log('All Listings...')

    dispatch({ type: ACTIVE_LISTINGS_REQUEST })

    ListingService.fetchAllListings(params)
                    .then(response => {
                        return dispatch({
                            type: ACTIVE_LISTINGS_SUCCESS,
                            payload: response.data.data
                        })
                    })
                    .catch(error => {
                        !error && Response.error("");
                        Response.error(error.response)
                        return dispatch({
                            type: ACTIVE_LISTINGS_FAILURE,
                            payload: error
                        })
                    })
}


export const ShowActiveListings = () => (dispatch) => {
    console.log('loading_listings')

    dispatch({ type: ACTIVE_LISTINGS_REQUEST })

    ListingService.loadActiveListings()
                    .then(response => {
                        return dispatch({
                            type: ACTIVE_LISTINGS_SUCCESS,
                            payload: response.data.data
                        })
                    })
                    .catch(error => {
                        !error && Response.error("");
                        Response.error(error.response)
                        return dispatch({
                            type: ACTIVE_LISTINGS_FAILURE,
                            payload: error.response
                        })
                    })
}

export const FetchListingDetails = () => (dispatch) => {
    console.log('Fetching Listings...');
    
    dispatch({ type: FETCH_LISTING_DETAILS_REQUEST });

    ListingService.fetchListingDetails()
                    .then(response => {
                        return dispatch({
                            type : FETCH_LISTING_DETAILS_SUCCESS,
                            payload : response.data
                        });
                    })
                    .catch(error => {
                        !error && Response.error("");
                        Response.error(error.response)
                        return dispatch({
                            type : FETCH_LISTING_DETAILS_FAILURE,
                            payload : error.response
                        });
                    })

}


export const FetchSingleListing = (slug) => (dispatch) => {
    console.log('fetching...');
    
    dispatch({ type: FETCH_SINGLE_LISTING_REQUEST });

    ListingService.fetchSingleListing(slug)
                    .then(response => {
                        return dispatch({
                            type : FETCH_SINGLE_LISTING_SUCCESS,
                            payload : response.data.data
                        });
                    })
                    .catch(error => {
                        Response.error(error.response)
                        return dispatch({
                            type : FETCH_SINGLE_LISTING_FAILURE,
                            payload : error.response
                        });
                    })

}

export const FetchPopularListings = () => (dispatch) => {
    console.log('Fetching Popular Listings');

    dispatch({type: FETCH_POPULAR_LISTINGS_REQUEST});

    ListingService.fetchPopularListings()
                .then((response) => {
                    dispatch({
                        type: FETCH_POPULAR_LISTINGS_SUCCESS,
                        payload: response.data.data 
                    })
                })
                .catch((error) => {
                    dispatch({
                        type: FETCH_POPULAR_LISTINGS_FAILURE,
                        payload: error.response
                    })
                })
}

export const SetAsRented = (id) => (dispatch) => {
    console.log("Setting as Rented...")

    dispatch({type: SET_AS_RENTED_REQUEST})

    ListingService.setAsRented(id)
                    .then((response) => {
                        Response.success(response.data)
                        dispatch({
                            type: SET_AS_RENTED_SUCCESS,
                            payload: response.data.data 
                        })
                    })
                    .catch((error) => {
                        Response.error(error.response)
                        dispatch({
                            type: SET_AS_RENTED_FAILURE,
                            payload: error.response
                        })
                    })
}

export const UpdateListingViews = (id) => (dispatch) => {
    console.log("Updating Views...")

    dispatch({type: UPDATE_LISTING_VIEWS_REQUEST})

    ListingService.updateViews(id)
                    .then((response) => {
                        dispatch({
                            type: UPDATE_LISTING_VIEWS_SUCCESS,
                            payload: response.data.data 
                        })
                    })
                    .catch((error) => {
                        dispatch({
                            type: UPDATE_LISTING_VIEWS_FAILURE,
                            payload: error.response
                        })
                    })
}


