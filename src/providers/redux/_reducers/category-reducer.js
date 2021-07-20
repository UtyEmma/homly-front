import { CategoryConstants } from "../_contants/dist/category-constants.dev";

const { FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_FAILURE } = CategoryConstants;

export function FetchCategoriesReducer (state = {}, action){
    switch (action.type) {
        case FETCH_CATEGORY_REQUEST:
            return { ...state, loading: true }
        case FETCH_CATEGORY_SUCCESS:
            return { ...state, loading: false, categories: action.payload }
        case FETCH_CATEGORY_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}