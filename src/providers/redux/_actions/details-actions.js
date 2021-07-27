import Response from "libraries/response/response";
import { DetailService } from "providers/services/details-service";
import { DetailsConstants } from "../_contants/details-constants";

const { FETCH_DETAILS_REQUEST, FETCH_DETAILS_SUCCESS, FETCH_DETAILS_FAILURE,
        FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_FAILURE
        } = DetailsConstants;

export const FetchDetails = () => (dispatch) => {
    console.log('Fetching Details...')

    dispatch({ type: FETCH_DETAILS_REQUEST })

    DetailService.fetchDetails()
                    .then((response) => {
                        dispatch({
                            type: FETCH_DETAILS_SUCCESS,
                            payload: response.data.data
                        })
                    })
                    .catch((error) => {
                        Response.error(error.response)
                        dispatch({
                            type: FETCH_DETAILS_FAILURE,
                            payload: error.response
                        })
                    })
}

