import Response from "libraries/response/response";
import { WISHLIST } from "providers/redux/_contants/wishlist-constants";
import { WishlistService } from "providers/services/wishlist-service";


const { CREATE_WISHLIST_REQUEST, CREATE_WISHLIST_SUCCESS, CREATE_WISHLIST_FAILURE,
        FETCH_WISHLIST_REQUEST, FETCH_WISHLIST_SUCCESS, FETCH_WISHLIST_FAILURE } = WISHLIST;


export const CreateWishlist = (data) => (dispatch) => {
    console.log('Creating Wishlist...');

    dispatch({
        type: CREATE_WISHLIST_REQUEST
    });
    
    WishlistService.create(data)
                .then((response) => {
                    Response.success(response.data)
                    return dispatch({
                        type : CREATE_WISHLIST_SUCCESS,
                        payload : response.data
                    })
                })
                .catch((error) => {
                    Response.error(error.response)
                    return dispatch({
                        type : CREATE_WISHLIST_FAILURE,
                        payload: error.response.data 
                    })
                })
}

export const FetchWishlist = () => (dispatch) => {
    console.log('Fetching Wishlists...')
    dispatch({ type: FETCH_WISHLIST_REQUEST })

    WishlistService.fetchTenantWishlist()
                .then((response) => {
                    console.log(response.data.data)
                    return dispatch({
                        type: FETCH_WISHLIST_SUCCESS,
                        payload: response.data.data
                    })
                })  
                .catch((error) => {
                    dispatch({
                        type: FETCH_WISHLIST_FAILURE,
                        payload: error.response
                    })
                    return Response.error(error.response)
                })  
}