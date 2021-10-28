import Response from 'libraries/response/response';
import { AgentService } from 'providers/services';
// import { dispatch } from 'react-hot-toast/dist/core/store';
import { history, persistor, store } from '../store';
import { AgentConstants } from '../_contants/agent-constants';
import { UnsetUser } from './auth-action';

const {
    SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, 
    UPDATE_REQUEST, UPDATE_SUCCESS, UPDATE_FAILURE,
    SHOW_AGENTS_REQUEST, SHOW_AGENTS_SUCCESS, SHOW_AGENTS_FAILURE,
    DELETE_LISTING_REQUEST, DELETE_LISTING_SUCCESS, DELETE_LISTING_FAILURE,
    REMOVE_LISTING_REQUEST, REMOVE_LISTING_SUCCESS, REMOVE_LISTING_FAILURE,
    FETCH_SINGLE_AGENT_REQUEST, FETCH_SINGLE_AGENT_SUCCESS, FETCH_SINGLE_AGENT_FAILURE,
    FETCH_AGENT_WISHLIST_REQUEST, FETCH_AGENT_WISHLIST_SUCCESS, FETCH_AGENT_WISHLIST_FAILURE,
    FETCH_PIONEER_AGENTS_REQUEST,FETCH_PIONEER_AGENTS_SUCCESS, FETCH_PIONEER_AGENTS_FAILURE
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

export const UpdateAgentProfile = (token, data) => (dispatch) => {
    console.log('Updating Data...')
    dispatch({ type: UPDATE_REQUEST })

    AgentService.update(token, data)
                .then((response) => {
                    let res = response.data;

                    Response.success(res)
                    let agent = res.data.user

                    dispatch({
                        type: 'UPDATE_USER_DATA',
                        payload: agent
                    })

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

export const showHomePagePioneerAgents = () => (dispatch) => {

    console.log('Fetching pioneer Agents...')

    dispatch({ type: FETCH_PIONEER_AGENTS_REQUEST })

    AgentService.fetchHomePagePioneerAgent()
            .then((response) => {
                // console.log(response.data.data)
                dispatch({
                    type: FETCH_PIONEER_AGENTS_SUCCESS,
                    payload: response.data.data
                })
            })
            .catch((error) => {
                Response.error(error.response)
                dispatch({
                    type: FETCH_PIONEER_AGENTS_FAILURE,
                    payload: error.response
                })
            })
}

export const AgentLogout = (token) => (dispatch) => {
    console.log('Logging out...')
    AgentService.logout(token)
                .then((response) => {
                    store.dispatch(UnsetUser())
                    persistor.purge()
                    return history.push('/login?msg=Logout Successful')
                })
                .catch((error) => {
                    console.log(error.response)
                })
}


export const DeleteListing = (token, id) => (dispatch) => {
    dispatch({type: DELETE_LISTING_REQUEST});

    AgentService.deleteListing(token, id)
                .then(response => {
                    Response.success(response.data)
                    const agent = response.data.data.agent
                    dispatch({
                        type: DELETE_LISTING_SUCCESS,
                        payload: true
                    })

                    dispatch({
                        type: 'UPDATE_USER_DATA',
                        payload: agent
                    })
                    
                    history.push('/my-listings')
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

export const FetchAgentDetails = (token, id, status) => (dispatch) => {
    dispatch({type: FETCH_SINGLE_AGENT_REQUEST})

    AgentService.fetchSingleAgent(token, id, status)
                .then((response) => {
                    return dispatch({
                        type: FETCH_SINGLE_AGENT_SUCCESS,
                        payload: response.data.data
                    })
                })
                .catch((error) => {
                    history.push('/agents')
                    return dispatch({
                        type: FETCH_SINGLE_AGENT_FAILURE,
                        payload: error.response
                    })
                })
}

export const FetchAgentWishlists = (token) => (dispatch) => {
    console.log("Fetching Wishlists...")

    dispatch({type: FETCH_AGENT_WISHLIST_REQUEST})

    AgentService.fetchAgentsWishlists(token)
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



