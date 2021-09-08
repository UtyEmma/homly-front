import React, { useEffect } from 'react'
import AgentSignUpForm from './components/signup-form';
import Footer from 'components/shared/footer';
import NavBar from 'components/shared/nav-bar';
import { Helmet } from 'react-helmet';

export default function AgentSignup ({setIsLoading}) {
    
    useEffect(() => {
        setIsLoading(false)   
    })

    return (
        <div>
            <Helmet>
                <title>Agent Dashboar - Signup</title>
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
            <NavBar />

            <main id="content">
                <section className="py-7">
                    <div className="container">
                        <div className="row justify-content-center">
                            <AgentSignUpForm />         
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )

}
