import Response from "libraries/response/response";
import {CategoryConstants} from "providers/redux/_contants/category-constants";
import { CategoryService } from "providers/services/categories-service";

const { FETCH_CATEGORY_REQUEST,
        FETCH_CATEGORY_SUCCESS,
        FETCH_CATEGORY_FAILURE } = CategoryConstants;

export const FetchCategories = () => (dispatch) => {
    console.log("Fetching Categories...")
    dispatch({ type : FETCH_CATEGORY_REQUEST })

    CategoryService.FetchAll()
                .then((res) => {
                    dispatch({
                        type: FETCH_CATEGORY_SUCCESS,
                        payload: res.data.data
                    })
                })
                .catch((err) => {
                    dispatch({
                        type: FETCH_CATEGORY_FAILURE,
                        payload: err.response
                    })
                })
}