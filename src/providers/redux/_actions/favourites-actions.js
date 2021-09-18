import Response from "libraries/response/response";
import { FavouriteService } from "providers/services/favorites-service";
import { _FAVOURTIES } from "../_contants/favourite-constants";
import { UpdateUser } from "./auth-action";

const { 
    FETCH_FAVOURTIES_REQUEST, FETCH_FAVOURTIES_SUCCESS, FETCH_FAVOURTIES_FAILURE, 
    ADD_FAVOURITES_REQUEST, ADD_FAVOURITES_SUCCESS, ADD_FAVOURITES_FAILURE, 
    REMOVE_FAVOURITES_REQUEST, REMOVE_FAVOURITES_SUCCESS, REMOVE_FAVOURITES_FAILURE
} = _FAVOURTIES


export const AddListingToFavourites = (token, listing_id) => (dispatch) => {
    console.log("Adding to Favourites...")

    dispatch({type: ADD_FAVOURITES_REQUEST})

    FavouriteService.addFavourites(token, listing_id)
                    .then((response) => {
                        const res = response.data
                        Response.success(res)
                        
                        dispatch(UpdateUser(res.data.user))

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

export const RemoveListingFromFavourites = (token, listing_id) => (dispatch) => {
    console.log("Removing from Favourites...")

    dispatch({type: REMOVE_FAVOURITES_REQUEST})

    FavouriteService.removeFavourites(token, listing_id)
                    .then((response) => {
                        Response.success(response.data)
                        localStorage.setItem('user', response.data.data.user)
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

export const FetchFavourites = (token) => (dispatch) => {
    console.log("Fetching Favourites...")
    
    dispatch({type: FETCH_FAVOURTIES_REQUEST})


    FavouriteService.fetchFavourites(token)
                    .then((response) => {
                        dispatch({
                            type: FETCH_FAVOURTIES_SUCCESS,
                            payload: response.data.data
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