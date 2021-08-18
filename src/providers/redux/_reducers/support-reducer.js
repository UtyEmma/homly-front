import { _SUPPORT } from "../_contants/support-contants";

const { 
    CREATE_NEW_TICKET_REQUEST, CREATE_NEW_TICKET_SUCCESS, CREATE_NEW_TICKET_FAILURE,
    FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS, FETCH_TICKETS_FAILURE,
    DELETE_TICKET_REQUEST, DELETE_TICKET_SUCCESS, DELETE_TICKET_FAILURE,
    SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILURE,
    FETCH_MESSAGES_REQUEST, FETCH_MESSAGES_SUCCESS, FETCH_MESSAGES_FAILURE } = _SUPPORT;

export const NewTicketReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case CREATE_NEW_TICKET_REQUEST:
            return { ...state, loading: true }
        case CREATE_NEW_TICKET_SUCCESS:
            return {...state, loading: false, tickets: payload.tickets, chats: payload.chats }
        case CREATE_NEW_TICKET_FAILURE:
            return {...state, loading: false, error: payload}
        default:
            return state
    }
}

export const FetchTicketsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case FETCH_TICKETS_REQUEST:
            return { ...state, loading: true }
        case FETCH_TICKETS_SUCCESS:
            return {...state, loading: false, tickets: payload}
        case FETCH_TICKETS_FAILURE:
            return {...state, loading: false, error: payload}
        default:
            return state
    }
}

export const DeleteTicketReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case DELETE_TICKET_REQUEST:
            return { ...state, loading: true }
        case DELETE_TICKET_SUCCESS:
            return {...state, loading: false, tickets: payload.tickets}
        case DELETE_TICKET_FAILURE:
            return {...state, loading: false, error: payload}
        default:
            return state
    }
}

export const SendMessageReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case SEND_MESSAGE_REQUEST:
            return { ...state, loading: true }
        case SEND_MESSAGE_SUCCESS:
            return {...state, loading: false, ticket: payload}
        case SEND_MESSAGE_FAILURE:
            return {...state, loading: false, error: payload}
        default:
            return state
    }
}

export const FetchMessagesReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case FETCH_MESSAGES_REQUEST:
            return { ...state, loading: true }
        case FETCH_MESSAGES_SUCCESS:
            return {...state, loading: false, ticket: payload}
        case FETCH_MESSAGES_FAILURE:
            return {...state, loading: false, error: payload}
        default:
            return state
    }
}
