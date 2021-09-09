import Response from 'libraries/response/response';
import { AgentService } from 'providers/services';
import { AgentConstants } from '../_contants/agent-constants';

const {
    SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, 
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
    UPDATE_REQUEST, UPDATE_SUCCESS, UPDATE_FAILURE,
    SHOW_AGENTS_REQUEST, SHOW_AGENTS_SUCCESS, SHOW_AGENTS_FAILURE,
    DELETE_LISTING_REQUEST, DELETE_LISTING_SUCCESS, DELETE_LISTING_FAILURE,
    REMOVE_LISTING_REQUEST, REMOVE_LISTING_SUCCESS, REMOVE_LISTING_FAILURE,
    FETCH_SINGLE_AGENT_REQUEST, FETCH_SINGLE_AGENT_SUCCESS, FETCH_SINGLE_AGENT_FAILURE,
    FETCH_AGENT_WISHLIST_REQUEST, FETCH_AGENT_WISHLIST_SUCCESS, FETCH_AGENT_WISHLIST_FAILURE,
    AGENT_LOGOUT 
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
                const errors = Response.error(error.response)
                dispatch({
                    type: SIGNUP_FAILURE,
                    payload: {error: error, formError: errors},
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
                let errors = Response.error(error.response)
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: {errors: error.response, formError: errors}
                })
            })
}

export const UpdateAgentProfile = (data) => (dispatch) => {
    console.log('Updating Data...')
    dispatch({ type: UPDATE_REQUEST })

    AgentService.update(data)
                .then((response) => {
                    let res = response.data;
                    Response.success(res)
                    localStorage.removeItem('user');
                    localStorage.setItem('user', JSON.stringify(res.data.agent));
                    dispatch({
                        type: UPDATE_SUCCESS,
                        payload: res
                    })
                })
                .catch((error) => {
                    let errors = Response.error(error.response)
                    dispatch({
                        type: UPDATE_FAILURE,
                        payload: {error: error.response, formError: errors}
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

export const AgentLogout = () => (dispatch) => {
    console.log('Logging out...')

    AgentService.logout()
                .then((response) => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    localStorage.removeItem('isAuthenticated');
                    localStorage.removeItem('type');
                    return window.location.href = '/agent-login'
                })
                .catch((error) => {
                    console.log(error.response)
                })
}


export const DeleteListing = (id) => (dispatch) => {
    console.log('Deleting Listing...')
    dispatch({type: DELETE_LISTING_REQUEST});

    AgentService.deleteListing(id)
                .then(response => {
                    Response.success(response.data.data)
                    return window.location.href = '/my-listings'
                })
                .catch(error => {
                    Response.error(error.response)
                    return dispatch({
                        type: DELETE_LISTING_FAILURE,
                        payload: error.response
                    })
                })
}

export const RemoveListing = (id) => (dispatch) => {
    console.log('Removing Listing...')

    dispatch({type: REMOVE_LISTING_REQUEST})

    AgentService.removeListing(id)
                .then(response => {
                    Response.success(response.data.data)
                    return dispatch({
                        type: REMOVE_LISTING_SUCCESS,
                        payload: response.data.data
                    })
                })
                .catch(error => {
                    Response.error(error.response)
                    return dispatch({
                        type: REMOVE_LISTING_FAILURE,
                        payload: error.response
                    })
                })
}

export const FetchAgentDetails = (id) => (dispatch) => {
    console.log("Fetching Details...")

    dispatch({type: FETCH_SINGLE_AGENT_REQUEST})

    AgentService.fetchSingleAgent(id)
                .then((response) => {
                    return dispatch({
                        type: FETCH_SINGLE_AGENT_SUCCESS,
                        payload: response.data.data
                    })
                })
                .catch((error) => {
                    return dispatch({
                        type: FETCH_SINGLE_AGENT_FAILURE,
                        payload: error.response
                    })
                })
}

export const FetchAgentWishlists = (id) => (dispatch) => {
    console.log("Fetching Wishlists...")

    dispatch({type: FETCH_AGENT_WISHLIST_REQUEST})

    AgentService.fetchAgentsWishlists(id)
                .then((response) => {
                    return dispatch({
                        type: FETCH_AGENT_WISHLIST_SUCCESS,
                        payload: response.data.data
                    })
                })
                .catch((error) => {
                    return dispatch({
                        type: FETCH_AGENT_WISHLIST_FAILURE,
                        payload: error.response
                    })
                })
}



