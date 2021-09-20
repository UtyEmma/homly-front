import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

export default function ServerError({user, setIsLoading}) {

    useEffect(() =>{
        setIsLoading(false)
    })
    
    return (
        <div className="bg-white" style={{height: '100vh'}}>
            <Helmet>
                <title>Server Error</title>
                <meta name="description" content="Find Properties and agents around you." />
            </Helmet>

            <div className="row d-flex align-items-center justify-content-center" style={{height: '100%'}} >
                {/* <div className="col-12 text-center pb-0">
                    <a href="/">
                        <img src="images/logo.png" alt="HomeID" className="d-none d-lg-inline-block" />
                    </a>
                </div> */}

                <div className="card shadow-0 col-md-7 p-5 py-9 border-0 text-center">

                    <div className="col-md-4 offset-md-4 col-6 offset-3 mt-4">
                        <img src="images/svg/server_error.svg" width="150" alt='Server Error' className="img-fluid" />
                    </div>

                    <div className="col-12">
                        <h3 className="text-heading mt-5 mb-3">Error Status 500</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}
