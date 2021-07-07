import ToastConstants from "../_contants/toast-contants";


const { ALERT_SUCCESS, ALERT_ERROR, ALERT_WARNING } = ToastConstants;

export function ToastReducer (state = {}, action) {

    switch (action.type) {
        case ALERT_SUCCESS:
            return { ...state, loading: true }
        case ALERT_ERROR:
            return { ...state, agent_success: action.payload }
        case SIGNUP_FAILURE:
            return { ...state, agent_error: action.payload }
        default:
            return state;
    }
}

export function AgentLoginReducer (state = {}, action){
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, loading: true}
        case LOGIN_SUCCESS:
            return {...state, agent_success: action.payload}
        case LOGIN_FAILURE:
            return {...state, agent_error: action.payload}
        default:
            return state;
    }
}