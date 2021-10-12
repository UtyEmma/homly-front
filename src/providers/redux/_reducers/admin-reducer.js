import { _ADMIN } from "../_contants/admin-constants";

const {
    SUSPEND_ITEM_REQUEST, SUSPEND_ITEM_SUCCESS, SUSPEND_ITEM_FAILURE,
    VERIFY_AGENT_REQUEST, VERIFY_AGENT_SUCCESS, VERIFY_AGENT_FAILURE
} = _ADMIN

export function SetAdminModeReducer(state= false, action){
    switch (action.type) {
        case 'ADMIN_MODE_ON':
            return {...state, adminMode: action.payload}
        case 'ADMIN_MODE_OFF':
            return {...state, adminMode: action.payload}    
        default:
            return state;
    }
}

export function SuspendItemReducer(state={}, action){
    switch (action.type) {
        case SUSPEND_ITEM_REQUEST:
            return {...state, loading: true}
        case SUSPEND_ITEM_SUCCESS:
            return {...state, loading: false, data: action.payload}
        case SUSPEND_ITEM_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export function DeleteItemReducer(state={}, action){
    switch (action.type) {
        case SUSPEND_ITEM_REQUEST:
            return {...state, loading: true}
        case SUSPEND_ITEM_SUCCESS:
            return {...state, loading: false, data: action.payload}
        case SUSPEND_ITEM_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export function verifyAgentReducer(state={}, action){
    switch (action.type) {
        case VERIFY_AGENT_REQUEST:
            return {...state, loading: true}
        case VERIFY_AGENT_SUCCESS:
            return {...state, loading: false, verifiedAgent: action.payload}
        case VERIFY_AGENT_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}