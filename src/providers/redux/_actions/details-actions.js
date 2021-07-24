import { DetailsConstants } from "../_contants/details-constants";

const { FETCH_DETAILS_REQUEST, FETCH_DETAILS_SUCCESS, FECTH_DETAILS_FAILURE} = DetailsConstants;

export const FetchDetails = () => (dispatch) => {
    console.log('fetching_details...')

    dispatch({
        type: FETCH_DETAILS_REQUEST
    })

    
}