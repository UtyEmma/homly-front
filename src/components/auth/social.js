import GoogleOneTapLogin from 'react-google-one-tap-login'
import { useEffect, useState } from "react";
import { SelectUserTypeModal } from './user-type-modal';
import { useSelector } from 'react-redux';

export const GoogleOneTapAuth = ({setIsLoading}) => {
    const [show, setShow] = useState(false)
    const [data, setData] = useState({})

    const {user} = useSelector((state) => state.user_data)

    const handleSuccess = (response) => {
        setData(response)
        setShow(true)
    }

    return (
        <>
            {
                !user

                &&

                <GoogleOneTapLogin onError={(error) => console.log(error)} onSuccess={(res) => handleSuccess(res)} googleAccountConfigs={{ client_id: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}} ></GoogleOneTapLogin>
                
            }

            <SelectUserTypeModal setIsLoading={setIsLoading} show={show} setShow={setShow} auth_data={data}/>
        </>
    )
}

