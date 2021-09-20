import React, { useEffect} from 'react'

import SignUpForm from './components/signup-form';
import NavBar from 'components/shared/nav-bar';
import Footer from 'components/shared/footer';
import Preloader from 'components/preloader/preloader';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

export default function UserSignup ({setIsLoading}) {

    const userSignup = useSelector((state) => state.signup);
    const {loading} = userSignup;

    useEffect(() => {
        setIsLoading(false)
    })

    return (
        <div>
            <Helmet>
                <title>Tenant Signup - Bayof Real Estate - Find Properties and agents around you</title>
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@" />
                <meta name="twitter:creator" content="@" />
                <meta name="twitter:title" content="Bayof Real Estate" />
                <meta name="twitter:description" content="Find the best accomodation around you" />
                <meta name="twitter:image" content="/images/homeid-social-logo.png" />
                <meta property="og:url" content="home-01.html" />
                <meta property="og:title" content="Home 01" />
                <meta property="og:description" content="Find the best accomodation around you" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/homeid-social.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="description" content="Find Properties and agents around you." />
            </Helmet>

            <NavBar/>
            
            <Preloader loading={loading}/>
            <main id="content">
                <section className="py-7">
                    <div className="container">
                        <div className="row justify-content-center">
                            <SignUpForm />         
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )

}
