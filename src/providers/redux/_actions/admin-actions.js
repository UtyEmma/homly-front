import Response from "libraries/response/response";
import { AdminService } from "providers/services/admin-service";
import toast from "react-hot-toast";
import { history } from "../store";
import { _ADMIN } from "../_contants/admin-constants";

const {
    VERIFY_ADMIN_REQUEST, VERIFY_ADMIN_SUCCESS, VERIFY_ADMIN_FAILURE,
    DELETE_ITEM_REQUEST, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAILURE,
    SUSPEND_ITEM_REQUEST, SUSPEND_ITEM_SUCCESS, SUSPEND_ITEM_FAILURE,
    VERIFY_AGENT_REQUEST, VERIFY_AGENT_SUCCESS, VERIFY_AGENT_FAILURE
} = _ADMIN


export const ClearAdminMode = () => (dispatch) => {
    dispatch({type: 'ADMIN_MODE_ON', payload: {} })
    dispatch({
        type: 'SET_USER_DATA',
        payload: {}
    })
    history.push('/')
    toast.success("Admin Mode Exited")
}

export const SetAdminMode = (mode) => (dispatch) => {    
    if(mode){
        dispatch({type: 'ADMIN_MODE_ON', payload: true })
    }else{
        dispatch({type: 'ADMIN_MODE_OFF', payload: false })
    }
} 

export const VerifyAdmin = (id) => (dispatch) => {
    console.log("Verifying Admin...")
    dispatch({type: VERIFY_ADMIN_REQUEST})

    AdminService.verifyAdmin(id)
                    .then((response) => {
                        const res = response.data.data

                        Response.success(response.data)
                        let token = res.token
                        let type = res.type
                        
                        dispatch({
                            type: 'SET_USER_DATA',
                            payload: {token: token, type: type}
                        })

                        dispatch({
                            type: 'ADMIN_MODE_ON',
                            payload: true
                        })
                    })
                    .catch((error) => {
                        Response.error(error.response)
                    })
}

export const DeleteItem = (token, type, id, redirect) => (dispatch) => {
    console.log("Deleting Item...")
    dispatch({type: DELETE_ITEM_REQUEST})

    AdminService.deleteItem(token, id, type)
                    .then((response) => {
                        const res = response.data
                        Response.success(res)
                        history.push(redirect)
                    })
                    .catch((error) => {
                        Response.error(error.response)
                    })
}


export const SuspendItem = (token, type, id) => (dispatch) => {
    console.log(`Suspending ${type}...`)

    dispatch({type: SUSPEND_ITEM_REQUEST})

    AdminService.suspendItem(token, id, type)
                    .then((response) => {
                        Response.success(response.data)
                        dispatch({
                            type: SUSPEND_ITEM_SUCCESS,
                            payload: response.data.data
                        })

                        if(type === 'agent'){
                            dispatch({
                                type: 'FETCH_SINGLE_AGENT_SUCCESS',
                                payload: response.data.data 
                            })
                        }else if(type === 'listing'){
                            dispatch({
                                type: 'FETCH_LISTING_DETAILS_SUCCESS',
                                payload: response.data
                            })
                        }
                    })
                    .catch((error) => {
                        Response.error(error.response)
                        dispatch({
                            type: SUSPEND_ITEM_FAILURE,
                            payload: error.response
                        })
                    })
}

export const VerifyAgent = (token, id) => (dispatch) => {
    console.log(`Verifying Agent...`)

    dispatch({type: VERIFY_AGENT_REQUEST})

    AdminService.verifyAgent(token, id)
                    .then((response) => {
                        Response.success(response.data)
                        dispatch({
                            type: VERIFY_AGENT_SUCCESS,
                            payload: response.data.data
                        })

                        dispatch({
                            type: 'FETCH_SINGLE_AGENT_SUCCESS',
                            payload: response.data.data 
                        })
                    })
                    .catch((error) => {
                        Response.error(error.response)
                        dispatch({
                            type: VERIFY_AGENT_FAILURE,
                            payload: error.response
                        })
                    })
}