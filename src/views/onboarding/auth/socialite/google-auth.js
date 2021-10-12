import { SocialAuth } from 'providers/redux/_actions/auth-action'
import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux'

export default function GoogleAuth({setShow, setAction}) {

    const dispatch = useDispatch()
    
    const responseGoogle = (response) => {
        const data = {  
            ...response, 
            driver: 'google', 
        }
        setShow(true)
        setAction({type: 'social', data: data})
    }

    return (
        <>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
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
