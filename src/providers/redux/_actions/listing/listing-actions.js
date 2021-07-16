import { ListingService } from "../../../services/listing-service";
import { ListingConstants } from "../../_contants/listing-constants";

const { NEW_LISTING_REQUEST, NEW_LISTING_SUCCESS, NEW_LISTING_FAILURE, 
        GETLISTINGS_SUCCESS, GETLISTINGS_FAILURE, GETLISTINGS_REQUEST,
        ACTIVE_LISTINGS_REQUEST, ACTIVE_LISTINGS_SUCCESS, ACTIVE_LISTINGS_FAILURE,
        FETCH_LISTING_DETAILS_REQUEST, FETCH_LISTING_DETAILS_SUCCESS, FETCH_LISTING_DETAILS_FAILURE, 
        STORE_LISTING, 
    } = ListingConstants

export const StoreListing = (data) => (dispatch) => {
    let values = JSON.stringify(data);
    console.log(values)
    localStorage.setItem('listingData', values);

    dispatch({
        type: STORE_LISTING,
        payload: data
    })

}

export const CreateListing = (data) => (dispatch) =>{
    console.log('Create Listing')

    dispatch({
        type: NEW_LISTING_REQUEST
    })

    ListingService.newListing(data)
                .then(response => {
                    dispatch({
                        type: NEW_LISTING_SUCCESS,
                        payload: response
                    })
                })
                .catch(error => {
                    dispatch({
                        type: NEW_LISTING_FAILURE,
                        payload: error.response
                    })
                })
}

export const GetAgentListings = () => (dispatch) => {
    console.log('get_listings')

    dispatch({
        type: GETLISTINGS_REQUEST
    })

    ListingService.getAgentListings()
                    .then(response => {
                        return dispatch({
                            type: GETLISTINGS_SUCCESS,
                            payload: response.data
                        })
                    })
                    .catch(error => {
                        return dispatch({
                            type: GETLISTINGS_FAILURE,
                            payload: error.response
                        })
                    })

}


export const ShowActiveListings = () => (dispatch) => {
    console.log('loading_listings')

    dispatch({
        type: ACTIVE_LISTINGS_REQUEST
    })

    ListingService.loadActiveListings()
                    .then(response => {
                        return dispatch({
                            type: ACTIVE_LISTINGS_SUCCESS,
                            payload: response.data.data
                        })
                    })
                    .catch(error => {
                        return dispatch({
                            type: ACTIVE_LISTINGS_FAILURE,
                            payload: error.response
                        })
                    })
}

export const FetchListingDetails = () => (dispatch) => {
    console.log('fetching...');
    
    dispatch({
        type: FETCH_LISTING_DETAILS_REQUEST
    });

    ListingService.fetchListingDetails()
                    .then(response => {
                        return dispatch({
                            type : FETCH_LISTING_DETAILS_SUCCESS,
                            payload : response.data
                        });
                    })
                    .catch(error => {
                        return dispatch({
                            type : FETCH_LISTING_DETAILS_FAILURE,
                            payload : error.response
                        });
                    })

}