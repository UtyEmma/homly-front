import Response from 'libraries/response/response';
import { userService } from '../../services';
import { history, persistor, store } from '../store';
import { _TENANT } from '../_contants/user-constants';
import { UnsetUser } from './auth-action';

const { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, 
        UPDATE_REQUEST, UPDATE_SUCCESS, UPDATE_FAILURE } = _TENANT;

export const Signup = (data, type) => (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });

    userService.signup(data, type)
            .then(response => {
                dispatch({
                    type: SIGNUP_SUCCESS,
                    payload: response.data
                })
                history.push('/login?msg=Sign up Successful! Please Login')
            })
            .catch(error => {
                const errors = Response.error(error.response)
                dispatch({
                    type: SIGNUP_FAILURE,
                    payload: {error: error.response, formErrors: errors}
                })
            })  
            
}

export const UpdateTenantProfile = (token, data) => (dispatch) => {
    dispatch({ type: UPDATE_REQUEST })

    userService.updateTenantData(token, data)
                .then((response) => {
                    const res = response.data.data
                    Response.success(response.data)

                    dispatch({
                        type: 'UPDATE_USER_DATA',
                        payload: res.user
                    })

                    dispatch({
                        type: UPDATE_SUCCESS,
                        payload: res
                    })
                })
                .catch((error) => {
                    const errors = Response.error(error.response)
                    dispatch({
                        type: UPDATE_FAILURE,
                        payload: {error: error.response, formErrors: errors}
                    })
                })
}

export const TenantLogout = (token) => (dispatch) => {
    userService.logout(token)
            .then((res) => {
                dispatch(UnsetUser())
                persistor.purge()
                return history.push('/login?msg=Logout Successful') 
            })
            .catch((error) => {
                return Response.error(error.response)
            })
}