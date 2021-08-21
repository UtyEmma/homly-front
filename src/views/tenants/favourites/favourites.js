import { FetchFavourites } from 'providers/redux/_actions/favourites-actions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import ListingGrid from '../listings/components/listing-grid'
import Preloader from 'components/preloader/preloader'
import Searchbar from 'views/layouts/components/search/searchbar'
import NavBar from 'components/shared/nav-bar'
import Footer from 'components/shared/footer'

export const Favourites = ({user, isLoggedIn}) => {

    const dispatch = useDispatch()
    const favourites = useSelector(state => state.favourites)
    const {loading, listings} = favourites

    const GetFavourites = () => {
        dispatch(FetchFavourites())
    }

    useEffect(() => {
        !listings && GetFavourites()
    }, [listings])

    return (
        <>
            <div>
                <Preloader loading={loading}/>
                <ToastContainer />

                <NavBar isloggedIn={isLoggedIn} user={user}/>

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
                                    listings && listings.length > 0
                                    
                                    &&

                                    listings.map((listing, index) => (
                                        <ListingGrid listing={listing} key={index} />
                                    ))
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