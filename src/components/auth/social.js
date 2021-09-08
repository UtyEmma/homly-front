import GoogleOneTapLogin from 'react-google-one-tap-login'
import { useEffect, useState } from "react";
import { SelectUserTypeModal } from './user-type-modal';

export const GoogleOneTapAuth = () => {
    const [show, setShow] = useState(false)
    const [data, setData] = useState({})

    const handleSuccess = (response) => {
        setData(response)
        setShow(true)
    }

    return (
        <>
            {
                !localStorage.getItem('isAuthenticated')

                &&

                <GoogleOneTapLogin onError={(error) => console.log(error)} onSuccess={(res) => handleSuccess(res)} googleAccountConfigs={{ client_id: '210812762241-09vip45373gh2ia5ic4d86k78nlg4quj.apps.googleusercontent.com'}} ></GoogleOneTapLogin>
                
            }

            <SelectUserTypeModal show={show} setShow={setShow} auth_data={data}/>
        </>
    )
}

