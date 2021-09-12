import { useQuery } from 'libraries/http/query'
import { VerifyEmailAddress } from 'providers/redux/_actions/auth-action'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

export const EmailVerified = ({setIsLoading}) => {

    const {type, code, user} = useParams()

    const [url, setUrl] = useState()

    const dispatch = useDispatch()

    const verify_email = useSelector(state => state.verify_email)
    const {loading, success, error} = verify_email

    const verifyEmail = () => {
        if (type === 'tenant') {
            setUrl('/')
        }else{
            setUrl('/dashboard')
        }

        dispatch(VerifyEmailAddress(type, code, user))
    }

    useEffect(() => {
        verifyEmail()
    })

    useEffect(() => {
        setIsLoading(loading)
    }, [loading])

    return (
        <>
            <div className="bg-white" style={{height: '100vh'}}>
                <Helmet>
                    <title>Email Verification</title>
                </Helmet>

                <div className="row d-flex align-items-center justify-content-center" style={{height: '100%'}} >
                    <div className="card shadow-0 col-md-7 p-5 py-9 border-0 text-center">

                        <div className="col-md-4 offset-md-4 col-6 offset-3 mt-4">
                            <img src="images/svg/verify-email.svg" width="150" className="img-fluid" />
                        </div>

                        <div className="col-12">
                            <h3 className="text-heading mt-5 mb-3 font-weight-bold">
                                {
                                    success

                                    ?

                                    'Your Email has been verified Successfully'

                                    :

                                    "Email Verification Failed! Please Check your detail and Try again!"
                                }
                            </h3>

                            {
                                success

                                &&

                                <div className="col-10 offset-1">
                                    <Link to={url} className="btn btn-block btn-lg btn-primary mr-2" >Proceed</Link>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </div>   
        </>
    )
}
