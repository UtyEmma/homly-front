import React, { useEffect, useState } from 'react'
import ModalOne from 'views/layouts/components/modals/modal-one'
import Searchbar from 'views/layouts/components/search/searchbar'
import Footer from 'components/shared/footer'
import NavBar from 'components/shared/nav-bar'

import AddWishlistBtn from './components/add-wishlist-btn'
import WishlistItem from './components/wishlist-item'
import WishlistForm from './components/wishlist-form'
import './css/wishlist.css'

import { ToastContainer } from 'react-toastify'
import { FetchWishlist } from 'providers/redux/_actions/wishlist-actions'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from 'components/preloader/preloader'

const Wishlist = ({isLoggedIn, user}) => {

    const dispatch = useDispatch();
    const fetchWishlist = useSelector((state) => state.wishlists)
    
    const {loading, wishlists} = fetchWishlist

    const [isLoading, setIsLoading] = useState(true)

    const loadWishlists = () => {
        dispatch(FetchWishlist())
    }

    useEffect(() => {
        !wishlists && loadWishlists()
    }, [wishlists])

    useEffect(() => {
        setIsLoading(false)   
    })

    return (
        <div>
            <Preloader loading={isLoading}/>

            <NavBar isloggedIn={isLoggedIn} user={user}/>

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
