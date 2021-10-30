import React, { useEffect } from 'react';
import NavBar from 'components/shared/nav-bar';
import Footer from 'components/shared/footer';
import UserLoginForm from './components/login-form';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useQuery } from 'libraries/http/query';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

const UserLogin = ({isLoading, setIsLoading}) => {

    const {loading} = useSelector(state => state.login)
    const history = useHistory()

    let message = useQuery().get('msg')
    let error = useQuery().get('err')

    useEffect(() => {
        if (message) { 
            toast.success(message)
            history.push('/login')
        }
    }, [history, message])

    useEffect(() => {
        if (error) { 
            toast.error(error)
            history.push('/login')
        }
    }, [error, history])

    useEffect(() => {
        setIsLoading(loading)
    }, [loading, setIsLoading])

    return (
        <div>
            <Helmet>
                <title>Sign In - Bayof</title>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@" />
            <meta name="twitter:creator" content="@" />
            <meta name="twitter:title" content="Bayof - Take ownership of landed property, globally" />
            <meta name="twitter:description" content="We're using technology to take the housing and real estate industry into the modern age" />
            {/* <meta name="twitter:image" content="/images/homeid-social-logo.png" /> */}
            <meta property="og:url" content={process.env.REACT_APP_API_URL} />
            <meta property="og:title" content="Take ownership of landed property, globally" />
            <meta property="og:description" content="We're using technology to take the real estate industry into the future" />
            <meta property="og:type" content="website" />
            {/* <meta property="og:image" content="/images/homeid-social.png" /> */}
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name="description" content="We're using technology to take the real estate industry into the future" />
            </Helmet>

            <NavBar/>

            <main id="content">
                <section className="py-7">
                    <div className="container">
                        <div className="row justify-content-center">
                            <UserLoginForm isLoading={isLoading} />         
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}

export default UserLogin;
