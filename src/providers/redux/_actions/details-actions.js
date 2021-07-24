import { DetailService } from "providers/services/details-service";
import { DetailsConstants } from "../_contants/details-constants";

const { FETCH_DETAILS_REQUEST, FETCH_DETAILS_SUCCESS, FETCH_DETAILS_FAILURE} = DetailsConstants;

export const FetchDetails = () => (dispatch) => {
    console.log('fetching_details...')

    dispatch({
        type: FETCH_DETAILS_REQUEST
    })

    DetailService.fetchDetails()
                    .then((response) => {
                        dispatch({
                            type: FETCH_DETAILS_SUCCESS,
                            payload: response.data.data
                        })
                    })
                    .catch((error) => {
                        dispatch({
                            type: FETCH_DETAILS_FAILURE,
                            payload: error.response
                        })
                    })
}