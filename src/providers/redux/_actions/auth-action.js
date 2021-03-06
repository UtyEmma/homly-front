import Response from "libraries/response/response";
import { AuthService } from "providers/services/auth-service";
import { history } from "../store";
import _AUTH from "../_contants/auth-constants";

const { 
    SOCIAL_AUTH_REQUEST, SOCIAL_AUTH_SUCCESS, SOCIAL_AUTH_FAILURE,
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, 
    UPDATE_REQUEST, UPDATE_SUCCESS, UPDATE_FAILURE,
    PASSWORD_RECOVERY_REQUEST, PASSWORD_RECOVERY_SUCCESS, PASSWORD_RECOVERY_FAILURE,
    PASSWORD_RESET_REQUEST, PASSWORD_RESET_SUCCESS, PASSWORD_RESET_FAILURE 
} = _AUTH;


export const user = (data) => (dispatch) => {
    dispatch({
        type: 'SET_USER',
        payload: data
    })
}

export const UnsetUser = () => (dispatch) => {
    dispatch({
        type: 'UNSET_USER_DATA',
     })
}

export const UpdateUser = (data) => (dispatch) => {
    dispatch({
        type: 'UPDATE_USER_DATA',
        payload: data
    })
}

export const FetchDataFromStorage = (key) => (dispatch) => {
    AuthService.getDataFromStorage(key)
                .then((res) => {
                    dispatch({
                        type: "FETCH_DATA_FROM_STORAGE",
                        payload: res
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
}


export const Login = (data, type) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    AuthService.login(data, type)
            .then(response => {
                let res = response.data.data;

                dispatch({
                    type: 'SET_USER_DATA',
                    payload: {user: res.user, token: res.token, type: type}
                })

                history.push(type === 'tenant' ? '/' : '/dashboard')
                
                return dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {user: res.user, token: res.token, type: type, verified_email: res.user.isVerified}
                })   
            })
            .catch(error => {
                const errors = Response.error(error.response)
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: {error: error.response, formError: errors}
                })
            })
}

export const SocialAuth = (data) => (dispatch) => {
    dispatch({type: SOCIAL_AUTH_REQUEST})
    AuthService.socialAuth(data)
            .then((response) => {
                let res = response.data.data;
                let token = res.token
                let user = res.user
                let type = res.type

                dispatch({
                    type: SOCIAL_AUTH_SUCCESS
                })

                dispatch({
                    type: 'SET_USER_DATA',
                    payload: {user: user, token: token, type: type}
                })

                if(type === 'agent'){
                    history.push('/dashboard')
                }else if(type === 'tenant'){
                    history.push('/')
                }

            })
            .catch((error) => {
                Response.error(error.response)
                dispatch({
                    type: SOCIAL_AUTH_FAILURE
                })
            })
}

export const UpdateProfile = (token, data, type) => (dispatch) => {
    dispatch({type: UPDATE_REQUEST })

    AuthService.update(token, data, type)
                .then((response) => {
                    let res = response.data;
                    let agent = res.data.user

                    Response.success(res)

                    dispatch({
                        type: 'UPDATE_USER_DATA',
                        payload: agent
                    })

                    dispatch({
                        type: UPDATE_SUCCESS,
                        payload: res
                    })

                    history.push(type === 'tenant' ? '/' : '/dashboard')

                })
                .catch((error) => {
                    let errors = Response.error(error.response)
                    dispatch({
                        type: UPDATE_FAILURE,
                        payload: {error: error.response, formError: errors}
                    })
                })
}


export const RecoverPassword = (data) => (dispatch) => {
    dispatch({type: PASSWORD_RECOVERY_REQUEST})

    AuthService.recoverpassword(data)
            .then((response) => {
                Response.success(response.data)
                dispatch({
                    type: PASSWORD_RECOVERY_SUCCESS,
                    payload: response.data.data
                })

                history.push('/reset-password')
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



export const GetLoggedInUser = (token, type) => (dispatch) => {
    dispatch({type: 'GET_USER_REQUEST'})

    AuthService.getLoggedInUser(token, type)
            .then((response) => {
                let user = response.data.data.user;
                
                if(user.isVerified){
                    dispatch({
                        type: 'GET_USER_SUCCESS',
                        payload: {user: {...user, type: type}}
                    })

                    dispatch({
                        type: 'GET_USER_VERIFY_EMAIL',
                        payload: {}
                    })
                }else{
                    dispatch({
                        type: 'GET_USER_VERIFY_EMAIL',
                        payload: {user: {...user, type: type}}
                    })
                }

                return dispatch({
                    type: 'UPDATE_USER_DATA',
                    payload: user
                }) 

            })
            .catch((error) => {
                Response.error(error.response)
                dispatch({
                    type: 'GET_USER_FAILURE',
                    payload: error.response
                })
            })
}

export const ResendVerificationEmail = (token, type, id) => (dispatch) => {

    dispatch({type: 'RESEND_EMAIL_REQUEST'})

    AuthService.resendVerificationEmail(token, type, id)
            .then((response) => {
                Response.success(response.data)
                dispatch({
                    type: 'RESEND_EMAIL_SUCCESS',
                    payload: response.data.data
                })
            })
            .catch((error) => {
                Response.error(error.response)
                dispatch({
                    type: 'RESEND_EMAIL_FAILURE',
                    payload: error.response
                })
            })
}


export const VerifyEmailAddress = (code) => (dispatch) => {

    dispatch({type: 'VERIFY_EMAIL_REQUEST'})

    AuthService.verifyEmail(code)
            .then((response) => {
                Response.success(response.data)
                dispatch({
                    type: 'VERIFY_EMAIL_SUCCESS',
                    payload: response.data.data
                })

                if(localStorage.getItem('persist:root')){
                    dispatch({
                        type: 'UPDATE_USER_DATA',
                        payload: response.data.data.user
                    })
                }
            })
            .catch((error) => {
                Response.error(error.response)
                dispatch({
                    type: 'VERIFY_EMAIL_FAILURE',
                    payload: error.response
                })
            })
}