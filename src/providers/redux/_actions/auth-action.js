import Response from "libraries/response/response";
import { AuthService } from "providers/services/auth-service";
import _AUTH from "../_contants/auth-constants";

const { 
    SOCIAL_AUTH_REQUEST, SOCIAL_AUTH_SUCCESS, SOCIAL_AUTH_FAILURE,
    PASSWORD_RECOVERY_REQUEST, PASSWORD_RECOVERY_SUCCESS, PASSWORD_RECOVERY_FAILURE,
    PASSWORD_RESET_REQUEST, PASSWORD_RESET_SUCCESS, PASSWORD_RESET_FAILURE 
} = _AUTH;

export const SocialAuth = (data) => (dispatch) => {
    console.log('Sending Social Auth Request...')

    dispatch({type: SOCIAL_AUTH_REQUEST})

    AuthService.socialAuth(data)
            .then((response) => {
                let res = response.data;
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                localStorage.setItem('isAuthenticated', true);
                localStorage.setItem('type', res.data.type);
                window.location.href = '/'
            })
            .catch((error) => {
                Response.error(error.response)
                console.log(error.response)
            })
}


export const RecoverPassword = (data) => (dispatch) => {
    console.log('Recover Password Request...')

    dispatch({type: PASSWORD_RECOVERY_REQUEST})

    AuthService.recoverpassword(data)
            .then((response) => {
                Response.success(response.data)
                dispatch({
                    type: PASSWORD_RECOVERY_SUCCESS,
                    payload: response.data.data
                })
            })
            .catch((error) => {
                Response.error(error.response)
                dispatch({
                    type: PASSWORD_RECOVERY_FAILURE,
                    payload: error.response
                })
            })
}

export const PasswordReset = (data) => (dispatch) => {
    console.log('Reset Password Request...')

    dispatch({type: PASSWORD_RESET_REQUEST})

    AuthService.resetpassword(data)
            .then((response) => {
                Response.success(response.data)
                dispatch({
                    type: PASSWORD_RESET_SUCCESS,
                    payload: response.data.data
                })
            })
            .catch((error) => {
                Response.error(error.response)
                dispatch({
                    type: PASSWORD_RESET_FAILURE,
                    payload: error.response
                })
            })
}