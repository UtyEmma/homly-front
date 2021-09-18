import { FetchFavourites } from 'providers/redux/_actions/favourites-actions'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Searchbar from 'views/layouts/components/search/searchbar'
import NavBar from 'components/shared/nav-bar'
import Footer from 'components/shared/footer'
import FavouriteItem from './components/favourite-item'
import FavouritesNotFound from 'components/404/404-favourites'
import { Helmet } from 'react-helmet'

export const Favourites = ({user, isLoggedIn, setIsLoading, status}) => {

    const dispatch = useDispatch()
    const favourites = useSelector(state => state.favourites)
    let {loading, listings} = favourites

    const user_data = useSelector(state => (state.user_data))
    const {token} = user_data
    
    const [allFavourites, setFavourites] = useState()

    const GetFavourites = () => {
        dispatch(FetchFavourites(token))
    }

    useEffect(() => {
        !listings && GetFavourites()
        listings && setFavourites(listings)
    }, [listings])

    useEffect(() => {
        setIsLoading(false)   
    })

    useEffect(() => {
        setIsLoading(loading)
    }, [loading])

    return (
        <>
            <div>
                <Helmet>
                    <title>Favourites - Bayof Real Estate - Find Properties and agents around you</title>
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

                <NavBar isloggedIn={isLoggedIn} user={user} status={status} />

                <main id="content">
                    <Searchbar />

                    <section className="pt-6 pb-7">
                        <div className="container container-xxl">
                        <div className="row align-items-sm-center">
                            <div className="col-md-6">
                                <h2 className="fs-15 text-dark mb-0">
                                    You have
                                    <span className="text-primary"> {listings ? listings.length : 0} </span> 
                                    item{listings && listings.length !== 1 && 's'} in your favourites 
                                </h2>
                            </div>
                        </div>
                        </div>
                    </section>
                    <section className="pb-11">
                        <div className="container container-xxl">
                            <div className="row">         
                                {
                                    allFavourites && allFavourites.length > 0
                                    
                                    ?

                                    allFavourites.map((favourite, index) => <FavouriteItem listing={favourite} fetchFavourites={GetFavourites} key={favourite.unique_id} />)

                                    :

                                    <FavouritesNotFound />
                                }       
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />

            </div>
        </>   
    )         
}