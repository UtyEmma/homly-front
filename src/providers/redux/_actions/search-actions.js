import { _SEARCH } from 'providers/redux/_contants/search-constants'
import { ListingService } from 'providers/services/listing-service';
import { SearchService } from 'providers/services/search-service';

const {
    SEARCH_LISTINGS_REQUEST, SEARCH_LISTINGS_SUCCESS, SEARCH_LISTINGS_FAILURE
} = _SEARCH;

export const SearchListings = (params) => (dispatch) => {
    console.log('Searching...')

    dispatch({ type: SEARCH_LISTINGS_REQUEST })

    SearchService.searchListings(params)
                    .then(response => {
                        return dispatch({
                            type: SEARCH_LISTINGS_SUCCESS,
                            payload: response.data.data
                        })
                    })
                    .catch(error => {
                        !error && Response.error("");
                        Response.error(error.response)
                        return dispatch({
                            type: SEARCH_LISTINGS_FAILURE,
                            payload: error
                        })
                    })
}

