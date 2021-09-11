import React, { useEffect, useState } from 'react'
import ModalOne from 'views/layouts/components/modals/modal-one'
import Searchbar from 'views/layouts/components/search/searchbar'
import Footer from 'components/shared/footer'
import NavBar from 'components/shared/nav-bar'

import AddWishlistBtn from './components/add-wishlist-btn'
import WishlistItem from './components/wishlist-item'
import WishlistForm from './components/wishlist-form'
import './css/wishlist.css'
import { FetchWishlist } from 'providers/redux/_actions/wishlist-actions'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

const Wishlist = ({isLoggedIn, user, setIsLoading, status}) => {

    const dispatch = useDispatch();
    const fetchWishlist = useSelector((state) => state.wishlists)
    
    const {loading, wishlists} = fetchWishlist

    const loadWishlists = () => {
        dispatch(FetchWishlist())
    }

    useEffect(() => {
        !wishlists && loadWishlists()
    }, [wishlists])

    useEffect(() => {
        setIsLoading(loading)
    }, [loading])

    return (
        <div>
            <Helmet>
                <title>My Wishlists - Bayof Real Estate - Find Properties and agents around you</title>
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
                                We found 
                                <span className="text-primary"> {wishlists && wishlists.wishlists ? wishlists.wishlists.length : 0} </span> 
                                item{wishlists && wishlists.wishlists.length !== 1 && 's'} on your wishlist
                            </h2>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="pb-11">
                    <div className="container container-xxl">
                        <div className="row">   
                            <AddWishlistBtn />
    
                            {
                                wishlists && wishlists.wishlists.length > 0
                                
                                &&

                                wishlists.wishlists.map((wishlist, index) => (
                                    <WishlistItem item={wishlist} key={index} />
                                ))
                            }       
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <ModalOne id="modal-one" height="100%">
                <div className="row">
                    <div className="col-md-6 d-md-block d-none p-0 rounded-lg-top-left bg-overlay" style={wishListStyle}></div>
                    <div className="col-md-6 pt-5">
                        <WishlistForm setIsLoading={setIsLoading} />
                    </div>
                </div>
            </ModalOne>
        </div>
    )
}

const wishListStyle = {
    backgroundImage: `url( 'images/bg-slider-05.jpg')`,
    marginLeft: '-1px'
};

export default Wishlist;
