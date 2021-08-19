import React, { Component } from 'react'
import NavBar from 'components/shared/nav-bar';
import Footer from '../components/shared/footer';

const About = ({isLoggedIn, user}) => {
    return (
        <div>
            <NavBar isloggedIn={isLoggedIn} user={user}/>

            <Footer />
        </div>
    )
}

export default About;