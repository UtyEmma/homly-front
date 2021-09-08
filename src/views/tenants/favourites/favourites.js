import { FetchFavourites } from 'providers/redux/_actions/favourites-actions'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from 'components/preloader/preloader'
import Searchbar from 'views/layouts/components/search/searchbar'
import NavBar from 'components/shared/nav-bar'
import Footer from 'components/shared/footer'
import FavouriteItem from './components/favourite-item'
import FavouritesNotFound from 'components/404/404-favourites'

export const Favourites = ({user, isLoggedIn, setIsLoading, status}) => {

    const dispatch = useDispatch()
    const favourites = useSelector(state => state.favourites)
    let {loading, listings} = favourites

    const [allFavourites, setFavourites] = useState()

    const GetFavourites = () => {
        dispatch(FetchFavourites())
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