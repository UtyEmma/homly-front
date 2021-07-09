import { AgentService } from '../../services';
import { AgentConstants } from '../_contants/agent-constants';

const {

    SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, 
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
    UPDATE_REQUEST, UPDATE_SUCCESS, UPDATE_FAILURE 

} = AgentConstants;

export const AgentSignup = (data) => (dispatch) => {
    console.log("signing_up")
    dispatch({
        type: SIGNUP_REQUEST
    });

    AgentService.signup(data)
            .then(response => {
                dispatch({
                    type: SIGNUP_SUCCESS,
                    payload: response
                })
            })
            .catch(error => {
                dispatch({
                    type: SIGNUP_FAILURE,
                    payload: error.response
                })
            })  
            
}

export const AgentLogin = (data) => (dispatch) => {
    console.log("logging_in")

    dispatch({
        type: LOGIN_REQUEST
    });

    AgentService.login(data)
            .then(response => {
                let res = response.data;
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                localStorage.setItem('isAuthenticated', true);
                localStorage.setItem('type', 'agent');
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {
                        user: response.data.user,
                        token: response.data.token
                    }
                })
            })
            .catch(error => {
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: error.response
                })
            })
}

export const GetCurrentAgent = () => () => {
    let user = sessionStorage.getItem('user');   
}

export const UpdateAgentProfile = (data) => (dispatch) => {
    console.log('updating_data')

    dispatch({
        type: UPDATE_REQUEST
    })

    AgentService.update(data)
                .then((response) => {
                    dispatch({
                        type: UPDATE_SUCCESS,
                        payload: response.data
                    })
                })
                .catch((error) => {
                    dispatch({
                        type: UPDATE_FAILURE,
                        payload: error.response
                    })
                })


}