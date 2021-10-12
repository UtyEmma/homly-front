import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

export const FacebookAuth = ({setShow, action, setAction}) => {

    const responseFacebook = (response) => {

        if (response.status !== 'unknown') {
            let name = response.name.split(' ')
            
            let data = {
                given_name : name[0],
                family_name : name[1],
                email : response.email,
                email_verified : true,
                picture: response.picture.data.url,
                driver: 'facebook',
            }
            
            setAction({type: 'social', data: data})
            setShow(true)
        }
    }

    return (
        <>
            <FacebookLogin 
                appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                render={renderProps => (
                    <button onClick={renderProps.onClick} className="btn btn-lg btn-block text-heading border px-0 bg-hover-accent">
                        <img src="images/facebook.png" alt="Facebook" className="mr-2" />
                        Facebook
                    </button> 
                )}
                fields="name,email,picture"
                callback={responseFacebook}
            />
        </>
    )
}
