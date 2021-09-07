import React, { Component, useEffect } from 'react'
import NavBar from 'components/shared/nav-bar';
import Footer from '../components/shared/footer';

const About = ({isLoggedIn, user, setIsLoading}) => {
    
    useEffect(() => {
        setIsLoading(false)
    })

    return (
        <div>
            <NavBar isloggedIn={isLoggedIn} user={user}/>

            <Footer />
        </div>
    )
}

export default About;