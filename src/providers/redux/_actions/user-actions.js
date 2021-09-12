import Response from 'libraries/response/response';
import { userService } from '../../services';
import { _TENANT } from '../_contants/user-constants';

const { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, 
        LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_SUCCESS_VERIFY_EMAIL, LOGIN_FAILURE, 
        UPDATE_REQUEST, UPDATE_SUCCESS, UPDATE_FAILURE 
        } = _TENANT;

export const signup = (data) => (dispatch) => {
    console.log("Signing Up...")
    dispatch({ type: SIGNUP_REQUEST });

    userService.signup(data)
            .then(response => {
                dispatch({
                    type: SIGNUP_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                const errors = Response.error(error.response)
                dispatch({
                    type: SIGNUP_FAILURE,
                    payload: {error: error.response, formErrors: errors}
                })
            })  
            
}

export const login = (data) => (dispatch) => {
    console.log("Logging In...")
    dispatch({ type: LOGIN_REQUEST });

    userService.login(data)
            .then(response => {
                let res = response.data;
                localStorage.clear()
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                localStorage.setItem('isAuthenticated', true);
                localStorage.setItem('type', 'tenant');

                if (res.data.user.isVerified) {
                    return dispatch({
                        type: LOGIN_SUCCESS,
                        payload: response.data
                    })   
                }

                return dispatch({
                    type: LOGIN_SUCCESS_VERIFY_EMAIL,
                    payload: response.data
                })
            })
            .catch(error => {
                const errors = Response.error(error.response)
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: {error: error.response, formErrors: errors}
                })
            })
}

export const UpdateTenantProfile = (data) => (dispatch) => {
    console.log("Update Tenant Profile...")
    dispatch({
        type: UPDATE_REQUEST
    })

    userService.updateTenantData(data)
                .then((response) => {
                    Response.success(response.data)
                    localStorage.removeItem('user')
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    dispatch({
                        type: UPDATE_SUCCESS,
                        payload: response.data.data
                    })
                })
                .catch((error) => {
                    Response.error(error.response)
                })
}

export const TenantLogout = () => (dispatch) => {
    userService.logout()
            .then((res) => {
                localStorage.clear()
                return window.location.href = '/login?msg=Logout Successful'
            })
            .catch((error) => {
                return Response.error(error.response)
            })
}