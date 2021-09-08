import Response from "libraries/response/response";
import { AuthService } from "providers/services/auth-service";
import _AUTH from "../_contants/auth-constants";

const { SOCIAL_AUTH_REQUEST, SOCIAL_AUTH_SUCCESS, SOCIAL_AUTH_FAILURE } = _AUTH;

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