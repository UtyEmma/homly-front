import React, { Component } from 'react'
import NavBar from './layouts/nav-bar';
import Footer from './layouts/footer';

const About = ({isLoggedIn, user}) => {
    return (
        <div>
            <NavBar isloggedIn={isLoggedIn} user={user}/>

            <Footer />
        </div>
    )
}

export default About;