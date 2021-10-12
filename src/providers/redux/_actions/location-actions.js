import { LocationService } from "providers/services"
import { _LOCATION } from "../_contants/location-constants"


const {
    FETCH_LOCATION_REQUEST, FETCH_LOCATION_SUCCESS, FETCH_LOCATION_FAILURE    
} = _LOCATION

export const SearchForLocation = (query) => (dispatch) => {
    console.log("Searching for Loaction...")

    dispatch({
        type: FETCH_LOCATION_REQUEST
    })

    LocationService.searchGoogleLocation(query)
                .then((response) => {
                    console.log(response.data)
                    dispatch({
                        type: FETCH_LOCATION_SUCCESS,
                        payload: response.data
                    })
                })
                .catch((error) => {
                    console.log(error.response)
                    dispatch({
                        type: FETCH_LOCATION_FAILURE,
                        payload: error.response
                    })
                })
} 