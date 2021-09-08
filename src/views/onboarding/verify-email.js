import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

export default function VerifyEmail({user, setIsLoading}) {

    useEffect(() =>{
        setIsLoading(false)
    })

    const resendVerificationEmail = () => {
        
    }
    
    return (
        <div style={{height: '100vh'}}>
            <Helmet>
                <title>Bayof Real Estate - Find Properties and agents around you</title>
                <meta name="description" content="Find Properties and agents around you." />
            </Helmet>

            <div className="row d-flex align-items-center justify-content-center bg-light" style={{height: '100%'}} >
                {/* <div className="col-12 text-center pb-0">
                    <a href="/">
                        <img src="images/logo.png" alt="HomeID" className="d-none d-lg-inline-block" />
                    </a>
                </div> */}

                <div className="card col-md-7 p-5 py-9 border-0 text-center">

                    <div className="col-md-4 offset-md-4 col-6 offset-3 mt-4">
                        <img src="images/svg/verify-email.svg" width="150" className="img-fluid" />
                    </div>

                    <div className="col-12">
                        <h3 className="text-heading mt-5 mb-3 font-weight-bold">Please Verify your Email Address</h3>
                        <p>Hi, {user.firstname}! We have sent a verification link to <span className="font-weight-bold">{user.email}</span> with instructions</p>
                        <p>If the email doesn’t show up soon, check your spam folder.</p>

                        <div className="col-10 offset-1">
                            <a href="/dashboard" className="btn btn-block btn-lg btn-primary mr-2">I have Clicked the link</a>
                            <button className="btn btn-link mt-2" onClick={resendVerificationEmail}>Resend Verification Email</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
