import _AUTH from "../_contants/auth-constants";

const { 
    SOCIAL_AUTH_REQUEST, SOCIAL_AUTH_SUCCESS, SOCIAL_AUTH_FAILURE,
    PASSWORD_RECOVERY_REQUEST, PASSWORD_RECOVERY_SUCCESS, PASSWORD_RECOVERY_FAILURE,
    PASSWORD_RESET_REQUEST, PASSWORD_RESET_SUCCESS, PASSWORD_RESET_FAILURE 
} = _AUTH;

export function RecoverPasswordReducer(state={}, action){
    switch (action.type) {
        case PASSWORD_RECOVERY_REQUEST:
            return {...state, loading: true}
        case PASSWORD_RECOVERY_SUCCESS:
            return {state, success: action.payload}
        case PASSWORD_RECOVERY_FAILURE:
            return {...state, error: action.payload}
        default:
            return state;
    }
}

export function ResetPasswordReducer(state={}, action){
    switch (action.type) {
        case PASSWORD_RESET_REQUEST:
            return {...state, loading: true}
        case PASSWORD_RESET_SUCCESS:
            return {state, success: action.payload}
        case PASSWORD_RESET_FAILURE:
            return {...state, error: action.payload}
        default:
            return state;
    }
}