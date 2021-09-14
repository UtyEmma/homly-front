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

export function GetLoggedInUserReducer(state={}, action){
    switch (action.type) {
        case 'LOGGED_IN_USER_REQUEST':
            return {...state, loading: true}
        case 'LOGGED_IN_USER_SUCCESS':
            return {state, auth_user: action.payload.user}
        case 'LOGGED_IN_USER_SUCCESS_VERIFY_EMAIL':
            return {state, verify_email: action.payload.user}
        case 'LOGGED_IN_USER_FAILURE':
            return {...state, error: action.payload}
        default:
            return state;
    }
}

export function ResendEmailReducer(state={}, action){
    switch (action.type) {
        case 'RESEND_EMAIL_REQUEST':
            return {...state, loading: true}
        case 'RESEND_EMAIL_SUCCESS':
            return {state, success: action.payload.user}
        case 'RESEND_EMAIL_FAILURE':
            return {...state, error: action.payload}
        default:
            return state;
    }
}

export function VerifyEmailReducer(state={}, action){
    switch (action.type) {
        case 'VERIFY_EMAIL_REQUEST':
            return {...state, loading: true}
        case 'VERIFY_EMAIL_SUCCESS':
            return {state, success: action.payload.user}
        case 'VERIFY_EMAIL_FAILURE':
            return {...state, error: action.payload}
        default:
            return state;
    }
}