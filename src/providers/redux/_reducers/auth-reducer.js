import _AUTH from "../_contants/auth-constants";

const { 
    SOCIAL_AUTH_REQUEST, SOCIAL_AUTH_SUCCESS, SOCIAL_AUTH_FAILURE,
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_SUCCESS_VERIFY_EMAIL, LOGIN_FAILURE,
    PASSWORD_RECOVERY_REQUEST, PASSWORD_RECOVERY_SUCCESS, PASSWORD_RECOVERY_FAILURE,
    PASSWORD_RESET_REQUEST, PASSWORD_RESET_SUCCESS, PASSWORD_RESET_FAILURE 
} = _AUTH;

const initialState = {}

export function SetUserReducer (state = {}, action){
    switch(action.type) {
        case 'SET_USER_DATA':
            return {...state, user: action.payload.user, type: action.payload.type, token: action.payload.token}
        case 'UPDATE_USER_DATA':
            return {...state, user: action.payload}
        case 'UNSET_USER_DATA':
            return initialState
        default:
            return state
    }
}


export function LoginReducer (state = {}, action){
    let payload = action?.payload
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, loading: true}
        case LOGIN_SUCCESS:
            return {...state, loading:false, email: payload.verified_email, user: payload.user, token: payload.token, type: payload.type }
        case LOGIN_SUCCESS_VERIFY_EMAIL:
            return {...state, loading: false, email: payload.verified_email, user: payload.user, token: payload.token, type: payload.type}
        case LOGIN_FAILURE:
            return {...state, loading:false, error: action.payload.error, formError: action.payload.formErrors,}
        default:
            return state;
    }
}

export function RecoverPasswordReducer(state={}, action){
    switch (action.type) {
        case PASSWORD_RECOVERY_REQUEST:
            return {...state, loading: true}
        case PASSWORD_RECOVERY_SUCCESS:
            return {state, loading: false, success: action.payload}
        case PASSWORD_RECOVERY_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export function ResetPasswordReducer(state={}, action){
    switch (action.type) {
        case PASSWORD_RESET_REQUEST:
            return {...state, loading: true}
        case PASSWORD_RESET_SUCCESS:
            return {state, loading : false, success: action.payload}
        case PASSWORD_RESET_FAILURE:
            return {...state, loading : false, error: action.payload}
        default:
            return state;
    }
}

export function GetLoggedInUserReducer(state={}, action){
    switch (action.type) {
        case 'GET_USER_REQUEST':
            return {...state, loading: true}
        case 'GET_USER_SUCCESS':
            return {...state, loading: false, auth_user: action.payload.user }
        case 'GET_USER_VERIFY_EMAIL':
            return {...state, loading: false, verify_email: action.payload.user}
        case 'GET_USER_FAILURE':
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export function ResendEmailReducer(state={}, action){
    switch (action.type) {
        case 'RESEND_EMAIL_REQUEST':
            return {...state, loading: true}
        case 'RESEND_EMAIL_SUCCESS':
            return {...state, loading: false, success: action.payload.user}
        case 'RESEND_EMAIL_FAILURE':
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export function VerifyEmailReducer(state={}, action){
    switch (action.type) {
        case 'VERIFY_EMAIL_REQUEST':
            return {...state,  loading: true}
        case 'VERIFY_EMAIL_SUCCESS':
            return {...state, loading: false, success: action.payload}
        case 'VERIFY_EMAIL_FAILURE':
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export function SocialAuthReducer(state={}, action){
    switch (action.type) {
        case SOCIAL_AUTH_REQUEST:
            return {...state, loading: true}
        case SOCIAL_AUTH_SUCCESS:
            return {...state, loading: false}
        case SOCIAL_AUTH_FAILURE:
            return {...state, loading: false}    
        default:
            return state;
    }
}