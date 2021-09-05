import { SocialAuth } from 'providers/redux/_actions/auth-action'
import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux'

export default function GoogleAuth({user}) {

    const dispatch = useDispatch()
    
    const responseGoogle = (response) => {
        const data = {
            payload: {
              driver: 'google',
              data: response,
              type: user
            }
        }
        dispatch(SocialAuth(data));
    }

    return (
        <>
            <GoogleLogin
                clientId="210812762241-09vip45373gh2ia5ic4d86k78nlg4quj.apps.googleusercontent.com"
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn btn-lg btn-block text-heading border px-0 bg-hover-accent">
                        <img src="images/google.png" alt="Google" className="mr-2" />
                        Google
                    </button>
                )}
                buttonText="Google"
                onSuccess={responseGoogle}
                onFailure={(error) => {console.log(error)}}
                cookiePolicy={'single_host_origin'}
            />
        </>
    )
}
