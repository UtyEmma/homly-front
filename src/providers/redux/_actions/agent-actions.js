import Response from 'libraries/response/response';
import { AgentService } from 'providers/services';
import { AgentConstants } from '../_contants/agent-constants';

const {
    SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, 
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
    UPDATE_REQUEST, UPDATE_SUCCESS, UPDATE_FAILURE,
    SHOW_AGENTS_REQUEST, SHOW_AGENTS_SUCCESS, SHOW_AGENTS_FAILURE 
} = AgentConstants;


export const AgentSignup = (data) => (dispatch) => {
    console.log("Signing up...")
    dispatch({ type: SIGNUP_REQUEST });

    AgentService.signup(data)
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
                    payload: error.response
                })
            })  
}

export const AgentLogin = (data) => (dispatch) => {
    console.log("Logging in...")
    dispatch({ type: LOGIN_REQUEST });

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
                Response.error(error.response)
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: error.response
                })
            })
}

export const UpdateAgentProfile = (data) => (dispatch) => {
    console.log('Updating Data...')
    dispatch({ type: UPDATE_REQUEST })

    AgentService.update(data)
                .then((response) => {
                    let res = response.data;
                    localStorage.setItem('user', JSON.stringify(res.data.agent));
                    dispatch({
                        type: UPDATE_SUCCESS,
                        payload: res
                    })
                })
                .catch((error) => {
                    Response.error(error.response)
                    dispatch({
                        type: UPDATE_FAILURE,
                        payload: error.response
                    })
                })
}

export const ShowAllAgents = () => (dispatch) => {
    console.log('Fetching Agents...')

    dispatch({ type: SHOW_AGENTS_REQUEST })

    AgentService.show()
            .then((response) => {
                dispatch({
                    type: SHOW_AGENTS_SUCCESS,
                    payload: response.data.data
                })
            })
            .catch((error) => {
                Response.error(error.response)
                dispatch({
                    type: SHOW_AGENTS_FAILURE,
                    payload: error.response
                })
            })
}