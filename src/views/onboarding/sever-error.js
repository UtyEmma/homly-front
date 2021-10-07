import Footer from 'components/shared/footer'
import NavBar from 'components/shared/nav-bar'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Searchbar from 'views/layouts/components/search/searchbar'

export default function ServerError({user, isLoggedIn, setIsLoading}) {

    useEffect(() =>{
        setIsLoading(false)
    })
    
    return (
        <div className="bg-white d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
            <Helmet>
                <title>Server Error</title>
                <meta name="description" content="Find Properties and agents around you." />
            </Helmet>

            <main id="content">
                <div className="container shadow-0 p-5 border-0">
                    <div className="row">
                        <div className="col-md-6 p-10">
                            <img src="images/svg/server_error.svg" alt='Server Error' className="img-fluid" />
                        </div>

                        <div className="col-md-6 bg-light">
                            <h3 className="fs-40 font-weight-600 mt-5 mb-3 ">Server Error </h3>
                            <p className="fs-24">We will get it fixed in not time</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
