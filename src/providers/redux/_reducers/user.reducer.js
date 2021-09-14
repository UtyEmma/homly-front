import { _TENANT } from "../_contants/user-constants";

const { SIGNUP_REQUEST, SIGNUP_SUCCESS, LOGIN_SUCCESS_VERIFY_EMAIL, SIGNUP_FAILURE,
        LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
        UPDATE_REQUEST, UPDATE_SUCCESS, UPDATE_FAILURE
} = _TENANT;

export function signupReducer (state = {}, action) {

    switch (action.type) {
        case SIGNUP_REQUEST:
            return { ...state, loading: true }
        case SIGNUP_SUCCESS:
            return { ...state, success: action.payload, loading: false }
        case SIGNUP_FAILURE:
            return { ...state, error: action.payload.error, formError: action.payload.formErrors, loading: false }
        default:
            return state;
    }
}

export function loginReducer (state = {}, action){
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, loading: true}
        case LOGIN_SUCCESS:
            return {...state, loading:false, success: action.payload}
        case LOGIN_SUCCESS_VERIFY_EMAIL:
            return {...state, loading: false, verify_email: action.payload}
        case LOGIN_FAILURE:
            return {...state, loading:false, error: action.payload.error, formError: action.payload.formErrors,}
        default:
            return state;
    }
}

export function UpdateTenantProfileReducer(state={}, action){
    switch(action.type){
        case UPDATE_REQUEST:
            return {...state, loading: true}
        case UPDATE_SUCCESS:
            return {...state, loading:false, tenant: action.payload.tenant}
        case UPDATE_FAILURE:
            return {...state, loading:false, error: action.payload}
    }
}
