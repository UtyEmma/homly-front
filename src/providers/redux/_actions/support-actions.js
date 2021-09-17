import Response from "libraries/response/response";
import { SupportService } from "providers/services/support-service";
import { _SUPPORT } from "providers/redux/_contants/support-contants";

const { 
    CREATE_NEW_TICKET_REQUEST, CREATE_NEW_TICKET_SUCCESS, CREATE_NEW_TICKET_FAILURE,
    FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS, FETCH_TICKETS_FAILURE,
    DELETE_TICKET_REQUEST, DELETE_TICKET_SUCCESS, DELETE_TICKET_FAILURE,
    SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILURE,
    FETCH_MESSAGES_REQUEST, FETCH_MESSAGES_SUCCESS, FETCH_MESSAGES_FAILURE } = _SUPPORT;

export const CreateNewTicket = (token, data) => (dispatch) => {
    console.log("Creating Ticket...")

    dispatch({type: CREATE_NEW_TICKET_REQUEST})

    SupportService.createTicket(token, data)
                .then((response) => {
                    Response.success(response.data)
                    dispatch({
                        type : CREATE_NEW_TICKET_SUCCESS,
                        payload : response.data.data 
                    })
                })
                .catch((error) => {
                    Response.error(error.response)
                    dispatch({
                        type : CREATE_NEW_TICKET_FAILURE,
                        payload : error.response 
                    })
                })
}

export const FetchTickets = (token) => (dispatch) => {
    console.log("Fetching Ticket...")

    dispatch({type: FETCH_TICKETS_REQUEST})

    SupportService.fetchTickets(token)
                .then((response) => {
                    dispatch({
                        type : FETCH_TICKETS_SUCCESS,
                        payload : response.data.data 
                    })
                })
                .catch((error) => {
                    Response.error(error.response)
                    dispatch({
                        type : FETCH_TICKETS_FAILURE,
                        payload : error.response 
                    })
                })
}


export const DeleteTicket = (token, id) => (dispatch) => {
    console.log("Deleting Ticket...")

    dispatch({type: DELETE_TICKET_REQUEST})

    SupportService.deleteTicket(token, id)
                .then((response) => {
                    Response.success(response.data)
                    dispatch({
                        type : DELETE_TICKET_SUCCESS,
                        payload : response.data.data 
                    })
                })
                .catch((error) => {
                    Response.error(error.response)
                    dispatch({
                        type : DELETE_TICKET_FAILURE,
                        payload : error.response 
                    })
                })
}

export const SendMessage = (token, data) => (dispatch) => {
    console.log("Sending Message...")

    dispatch({type: SEND_MESSAGE_REQUEST})

    SupportService.sendMessage(token, data)
                .then((response) => {
                    Response.success(response.data)
                    dispatch({
                        type : SEND_MESSAGE_SUCCESS,
                        payload : response.data.data 
                    })
                })
                .catch((error) => {
                    Response.error(error.response)
                    dispatch({
                        type : SEND_MESSAGE_FAILURE,
                        payload : error.response 
                    })
                })
}

export const FetchMessages = (token, ticket_id) => (dispatch) => {
    console.log("Fetching Messages...")

    dispatch({type: FETCH_MESSAGES_REQUEST})

    SupportService.fetchMessages(token, ticket_id)
                .then((response) => {
                    dispatch({
                        type : FETCH_MESSAGES_SUCCESS,
                        payload : response.data.data 
                    })
                })
                .catch((error) => {
                    Response.error(error.response)
                    dispatch({
                        type : FETCH_MESSAGES_FAILURE,
                        payload : error.response 
                    })
                })
}





