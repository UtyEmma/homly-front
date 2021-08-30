import { _ADMIN } from "../_contants/admin-constants";

const {
    SUSPEND_ITEM_REQUEST, SUSPEND_ITEM_SUCCESS, SUSPEND_ITEM_FAILURE
} = _ADMIN

export function SuspendItemReducer(state={}, action){
    switch (action.type) {
        case SUSPEND_ITEM_REQUEST:
            return {...state, loading: true}
        case SUSPEND_ITEM_SUCCESS:
            return {...state, loading: false, listing: action.payload}
        case SUSPEND_ITEM_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}