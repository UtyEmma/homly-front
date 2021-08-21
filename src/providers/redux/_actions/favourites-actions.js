import Response from "libraries/response/response";
import { FavouriteService } from "providers/services/favorites-service";
import { _FAVOURTIES } from "../_contants/favourite-constants";

const { 
    FETCH_FAVOURTIES_REQUEST, FETCH_FAVOURTIES_SUCCESS, FETCH_FAVOURTIES_FAILURE, 
    ADD_FAVOURITES_REQUEST, ADD_FAVOURITES_SUCCESS, ADD_FAVOURITES_FAILURE, 
    REMOVE_FAVOURITES_REQUEST, REMOVE_FAVOURITES_SUCCESS, REMOVE_FAVOURITES_FAILURE
} = _FAVOURTIES


export const AddListingToFavourites = (listing_id) => (dispatch) => {
    console.log("Adding to Favourites...")

    dispatch({type: ADD_FAVOURITES_REQUEST})

    FavouriteService.addFavourites(listing_id)
                    .then((response) => {
                        Response.success(response.data)
                        dispatch({
                            type: ADD_FAVOURITES_SUCCESS,
                            payload: response.data
                        })
                    })
                    .catch((error) => {
                        Response.error(error.response)
                        dispatch({
                            type: ADD_FAVOURITES_FAILURE,
                            payload: error.response
                        })
                    })
}

export const RemoveListingFromFavourites = (listing_id) => (dispatch) => {
    console.log("Removing from Favourites...")

    dispatch({type: REMOVE_FAVOURITES_REQUEST})

    FavouriteService.removeFavourites(listing_id)
                    .then((response) => {
                        Response.success(response.data)
                        dispatch({
                            type: REMOVE_FAVOURITES_SUCCESS,
                            payload: response.data
                        })
                    })
                    .catch((error) => {
                        Response.error(error.response)
                        dispatch({
                            type: REMOVE_FAVOURITES_FAILURE,
                            payload: error.response
                        })
                    })
}

export const FetchFavourites = () => (dispatch) => {
    console.log("Fetching Favourites...")
    
    dispatch({type: FETCH_FAVOURTIES_REQUEST})

    console.log("E Dey Work")

    FavouriteService.fetchFavourites()
                    .then((response) => {
                        dispatch({
                            type: FETCH_FAVOURTIES_SUCCESS,
                            payload: response.data
                        })
                    })
                    .catch((error) => {
                        Response.error(error.response)
                        dispatch({
                            type: FETCH_FAVOURTIES_FAILURE,
                            payload: error.response
                        })
                    })
}