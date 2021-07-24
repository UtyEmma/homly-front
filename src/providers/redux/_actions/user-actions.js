import Response from 'libraries/response/response';
import { userService } from '../../services';
import { userConstants } from '../_contants/user-constants';

const { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, 
        LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE 
        } = userConstants;

export const signup = (data) => (dispatch) => {
    console.log("Signing Up...")
    dispatch({ type: SIGNUP_REQUEST });

    userService.signup(data)
            .then(response => {
                dispatch({
                    type: SIGNUP_SUCCESS,
                    payload: response
                })
            })
            .catch(error => {
                Response.error(error.response)
                dispatch({
                    type: SIGNUP_FAILURE,
                    payload: error.response.data.message
                })
            })  
            
}

export const login = (data) => (dispatch) => {
    console.log("Logging In...")
    dispatch({ type: LOGIN_REQUEST });

    userService.login(data)
            .then(response => {
                let res = response.data;
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                localStorage.setItem('isAuthenticated', true);
                localStorage.setItem('type', 'tenant');

                return dispatch({
                    type: LOGIN_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                Response.error(error.response)
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: error.response.data.message
                })
            })
}

export const TenantLogout = () => {
    userService.logout()
            .then((res) => {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                localStorage.removeItem('isAuthenticated');
                localStorage.removeItem('type');
                return window.location.href = '/login?msg=Logout Successful'
            })
            .catch((error) => {
                return Response.error(error.response)
            })
}