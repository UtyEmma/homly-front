import ToastConstants from "../_contants/toast-contants";

const {ALERT_SUCCESS, ALERT_ERROR, ALERT_WARNING} = ToastConstants;

export const Success = (message) = (dispatch) => {
        dispatch({
            type: ALERT_SUCCESS,
            payload: message 
        })
}

export const Error = (message) = (dispatch) => {
    dispatch({
        type: ALERT_ERROR,
        payload: message 
    })
}