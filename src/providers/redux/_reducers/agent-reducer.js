import { AgentConstants } from "../_contants/agent-constants";


const { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
        UPDATE_REQUEST, UPDATE_SUCCESS, UPDATE_FAILURE,
        SHOW_AGENTS_REQUEST, SHOW_AGENTS_SUCCESS, SHOW_AGENTS_FAILURE,
        DELETE_LISTING_REQUEST, DELETE_LISTING_SUCCESS, DELETE_LISTING_FAILURE,
        REMOVE_LISTING_REQUEST, REMOVE_LISTING_SUCCESS, REMOVE_LISTING_FAILURE,
        FETCH_SINGLE_AGENT_REQUEST, FETCH_SINGLE_AGENT_SUCCESS, FETCH_SINGLE_AGENT_FAILURE,
        FETCH_AGENT_WISHLIST_REQUEST, FETCH_AGENT_WISHLIST_SUCCESS, FETCH_AGENT_WISHLIST_FAILURE,
        FETCH_PIONEER_AGENTS_REQUEST,FETCH_PIONEER_AGENTS_SUCCESS, FETCH_PIONEER_AGENTS_FAILURE
} = AgentConstants;


export function AgentSignupReducer (state = {}, action) {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return { ...state, loading: true }
        case SIGNUP_SUCCESS:
            return { ...state, agent_success: action.payload, loading: false }
        case SIGNUP_FAILURE:
            return { ...state, agent_error: action.payload.error, form_error: action.payload.formError, loading: false }
        default:
            return state;
    }
}

export function UpdateAgentProfileReducer(state={}, action) {
    switch (action.type) {
        case UPDATE_REQUEST:
            return {...state, loading: true}
        case UPDATE_SUCCESS:
            return {...state, success: action.payload, loading: false}
        case UPDATE_FAILURE:
            return {...state, error: action.payload, loading: false}
        default:
            return state;
    }
}

export function ShowAvailableAgentsReducer(state={}, action){
    switch (action.type) {
        case SHOW_AGENTS_REQUEST:
            return {...state, loading: true}
        case SHOW_AGENTS_SUCCESS:
            return {...state, agents: action.payload.agents, loading: false}
        case SHOW_AGENTS_FAILURE:
            return {...state, error: action.payload, loading: false}
        default:
            return state;
    }
}
export function ShowPioneerAgentsReducer(state={}, action){
    switch (action.type) {
        case FETCH_PIONEER_AGENTS_REQUEST:
            return {...state, loading: true}
        case FETCH_PIONEER_AGENTS_SUCCESS:
            return {...state, agents: action.payload.pioneer_agents, loading: false}
        case FETCH_PIONEER_AGENTS_FAILURE:
            return {...state, error: action.payload, loading: false}
        default:
            return state;
    }
}

export function DeleteListingReducer(state={}, action){
    switch (action.type) {
        case DELETE_LISTING_REQUEST:
            return {...state, loading: true}
        case DELETE_LISTING_SUCCESS:
            return {state, loading: false, success: action.payload}
        case DELETE_LISTING_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export function RemoveListingReducer(state={}, action){
    switch (action.type) {
        case REMOVE_LISTING_REQUEST:
            return {...state, loading: true}
        case REMOVE_LISTING_SUCCESS:
            return {...state, loading: false, listing: action.payload}
        case REMOVE_LISTING_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export function FetchSingleAgentReducer(state = {}, action){
    switch (action.type) {
        case FETCH_SINGLE_AGENT_REQUEST:
            return {...state, loading: true}
        case FETCH_SINGLE_AGENT_SUCCESS:
            return {...state, loading: false, agent: action.payload}
        case FETCH_SINGLE_AGENT_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export function FetchAgentWishlistsReducer(state = {}, action){
    switch (action.type) {
        case FETCH_AGENT_WISHLIST_REQUEST:
            return {...state, loading: true}
        case FETCH_AGENT_WISHLIST_SUCCESS:
            return {...state, loading: false, wishlists: action.payload}
        case FETCH_AGENT_WISHLIST_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}