import React, { Component, useEffect } from 'react'
import NavBar from 'components/shared/nav-bar';
import Footer from '../components/shared/footer';
import { Helmet } from 'react-helmet';

const About = ({isLoggedIn, user, setIsLoading}) => {
    
    useEffect(() => {
        setIsLoading(false)
    })

    return (
        <div>
            <Helmet>
                <title>About us - Bayof Real Estate - Find Properties and agents around you</title>
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
            <NavBar isloggedIn={isLoggedIn} user={user}/>

            <Footer />
        </div>
    )
}

export default About;