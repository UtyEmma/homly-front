import { AgentConstants } from "../_contants/agent-constants";


const { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
        LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
} = AgentConstants;

export function AgentSignupReducer (state = {}, action) {

    switch (action.type) {
        case SIGNUP_REQUEST:
            return { ...state, loading: true }
        case SIGNUP_SUCCESS:
            return { ...state, agent_success: action.payload, loading: false }
        case SIGNUP_FAILURE:
            return { ...state, agent_error: action.payload, loading: false }
        default:
            return state;
    }
}

export function AgentLoginReducer (state = {}, action){
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, loading: true}
        case LOGIN_SUCCESS:
            return {...state, agent_success: action.payload, loading: false}
        case LOGIN_FAILURE:
            return {...state, agent_error: action.payload, loading: false}
        default:
            return state;
    }
}

export function GetCurrentUserData(state={}, action){
    
}

