import Response from 'libraries/response/response';
import { userService } from '../../services';
import { persistor, store } from '../store';
import { _TENANT } from '../_contants/user-constants';
import { UnsetUser } from './auth-action';

const { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, 
        UPDATE_REQUEST, UPDATE_SUCCESS, UPDATE_FAILURE } = _TENANT;

export const signup = (data) => (dispatch) => {
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

export const UpdateTenantProfile = (data) => (dispatch) => {
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

export const TenantLogout = (token) => (dispatch) => {
    userService.logout(token)
            .then((res) => {
                dispatch(UnsetUser())
                persistor.purge()
                return window.location.href = '/login?msg=Logout Successful'
            })
            .catch((error) => {
                return Response.error(error.response)
            })
}