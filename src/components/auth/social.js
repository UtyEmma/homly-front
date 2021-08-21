import { SocialAuth } from "providers/redux/_actions/auth-action";
import { useDispatch } from "react-redux";
import GoogleOneTapLogin from 'react-google-one-tap-login'

export const GoogleOneTapAuth = () => {

    const dispatch = useDispatch()

    const handleResponse = (response) => {
        console.log(response)
        const data = {
            payload: {
                driver: 'google',
                data: response,
                type: 'tenant'
            }
        }
        dispatch(SocialAuth(data));
    }

    return (
        <GoogleOneTapLogin onError={(error) => console.log(error)} onSuccess={(res) => handleResponse(res)} googleAccountConfigs={{ client_id: '210812762241-09vip45373gh2ia5ic4d86k78nlg4quj.apps.googleusercontent.com'}} ></GoogleOneTapLogin>
    )
}