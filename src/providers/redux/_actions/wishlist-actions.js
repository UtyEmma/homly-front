import { WISHLIST } from "providers/redux/_contants/wishlist-constants";
import { WishlistService } from "providers/services/wishlist-service";

const { CREATE_WISHLIST_REQUEST, CREATE_WISHLIST_SUCCESS, CREATE_WISHLIST_FAILURE,
        FETCH_WISHLIST_REQUEST, FETCH_WISHLIST_SUCCESS, FETCH_WISHLIST_FAILURE } = WISHLIST;


export const CreateWishlist = (data) => (dispatch) => {
    console.log('creating_wishlist');

    dispatch({
        type: CREATE_WISHLIST_REQUEST
    });
    
    WishlistService.create(data)
                .then(response => {
                    dispatch({
                        type : CREATE_WISHLIST_SUCCESS,
                        payload : response.data
                    })
                })
                .catch(error => {
                    dispatch({
                        type : CREATE_WISHLIST_FAILURE,
                        payload: error.response.data 
                    })
                })

}