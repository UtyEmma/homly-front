import jwtDecode from "jwt-decode";
import Response from "libraries/response/response";
import { AdminService } from "providers/services/admin-service";
import { _ADMIN } from "../_contants/admin-constants";

const {
    VERIFY_ADMIN_REQUEST, VERIFY_ADMIN_SUCCESS, VERIFY_ADMIN_FAILURE,
    DELETE_ITEM_REQUEST, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAILURE,
    SUSPEND_ITEM_REQUEST, SUSPEND_ITEM_SUCCESS, SUSPEND_ITEM_FAILURE,
    VERIFY_AGENT_REQUEST, VERIFY_AGENT_SUCCESS, VERIFY_AGENT_FAILURE
} = _ADMIN

export const SetAdminMode = (mode) => (dispatch) => {
    localStorage.setItem('adminMode', mode)
    console.log(mode)
    
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
                        const res = response.data
                        Response.success(res)
                        localStorage.clear();
                        localStorage.setItem('auth', res.data.admin)
                        localStorage.setItem('type', 'admin')
                        localStorage.setItem('adminMode', true)
                    })
                    .catch((error) => {
                        Response.error(error.response)
                    })
}

export const DeleteItem = (type, id, redirect) => (dispatch) => {
    console.log("Deleting Item...")
    dispatch({type: DELETE_ITEM_REQUEST})

    AdminService.deleteItem(id, type)
                    .then((response) => {
                        const res = response.data
                        Response.success(res)
                        window.location.href = redirect
                    })
                    .catch((error) => {
                        Response.error(error.response)
                    })
}


export const SuspendItem = (type, id) => (dispatch) => {
    console.log(`Suspending ${type}...`)

    dispatch({type: SUSPEND_ITEM_REQUEST})

    AdminService.suspendItem(id, type)
                    .then((response) => {
                        Response.success(response.data)
                        dispatch({
                            type: SUSPEND_ITEM_SUCCESS,
                            payload: response.data.data
                        })
                    })
                    .catch((error) => {
                        Response.error(error.response)
                        dispatch({
                            type: SUSPEND_ITEM_FAILURE,
                            payload: error.response
                        })
                    })
}

export const VerifyAgent = (id) => (dispatch) => {
    console.log(`Verifying Agent...`)

    dispatch({type: VERIFY_AGENT_REQUEST})

    AdminService.verifyAgent(id)
                    .then((response) => {
                        Response.success(response.data)
                        dispatch({
                            type: VERIFY_AGENT_SUCCESS,
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