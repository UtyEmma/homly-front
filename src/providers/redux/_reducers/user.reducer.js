import { userConstants } from "../_contants/user-constants";

const { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
        LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
} = userConstants;

export function signupReducer (state = {}, action) {

    switch (action.type) {
        case SIGNUP_REQUEST:
            return { ...state, loading: true }
        case SIGNUP_SUCCESS:
            return { ...state, success: action.payload, loading: false }
        case SIGNUP_FAILURE:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }
}

export function loginReducer (state = {}, action){
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, loading: true}
        case LOGIN_SUCCESS:
            return {...state, success: action.payload}
        case LOGIN_FAILURE:
            return {...state, error: action.payload}
        default:
            return state;
    }
}
