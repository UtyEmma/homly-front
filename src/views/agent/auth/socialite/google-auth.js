import React from 'react'
import GoogleLogin from 'react-google-login'

export default function GoogleAuth() {
    const responseGoogle = (response) => {
        console.log(response)
    }
    return (
        <>
            <GoogleLogin
                className="btn btn-lg btn-block text-center text-heading border px-0 bg-hover-accent"
                clientId="210812762241-09vip45373gh2ia5ic4d86k78nlg4quj.apps.googleusercontent.com"
                buttonText="Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </>
    )
}
