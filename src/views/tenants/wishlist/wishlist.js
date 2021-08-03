import React, { useEffect } from 'react'
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
import WishlistPlaceholder from './components/wishlist-placeholder'
import Preloader from 'components/preloader/preloader'

const Wishlist = ({isLoggedIn, user}) => {

    const dispatch = useDispatch();
    const fetchWishlist = useSelector((state) => state.wishlists)
    const {loading, wishlists} = fetchWishlist

    const loadWishlists = () => {
        dispatch(FetchWishlist())
    }

    useEffect(() => {
        !wishlists && loadWishlists()
    }, [wishlists])

    return (
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
                                We found 
                                <span className="text-primary"> {wishlists && wishlists.wishlists ? wishlists.wishlists.length : 0} </span> 
                                items in your wishlist
                            </h2>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="pb-11">
                    <div className="container container-xxl">
                        <div className="row"> 
                            {
                                wishlists && wishlists.wishlists.length > 0
                                
                                ?

                                wishlists.wishlists.map((wishlist, index) => (
                                    <WishlistItem item={wishlist} key={index} />
                                ))

                                :
                                
                                <WishlistPlaceholder/>
                            }       
                            <AddWishlistBtn />
                        </div>
                    </div>
                </section>
                <div id="compare" className="compare">
                    <button className="btn shadow btn-open bg-white bg-hover-accent text-secondary rounded-right-0 d-flex justify-content-center align-items-center w-30px h-140 p-0">
                    </button>
                    <div className="list-group list-group-no-border bg-dark py-3">
                    <a href="" className="list-group-item bg-transparent text-white fs-22 text-center py-0">
                        <i className="far fa-bars" />
                    </a>
                    <div className="list-group-item card bg-transparent">
                        <div className="position-relative hover-change-image bg-hover-overlay">
                        <img src="images/compare-01.jpg" className="card-img" alt="properties" />
                        <div className="card-img-overlay">
                            <a href="" className="text-white hover-image fs-16 lh-1 pos-fixed-top-right position-absolute m-2"><i className="fal fa-minus-circle" /></a>
                        </div>
                        </div>
                    </div>
                    <div className="list-group-item card bg-transparent">
                        <div className="position-relative hover-change-image bg-hover-overlay">
                        <img src="images/compare-02.jpg" className="card-img" alt="properties" />
                        <div className="card-img-overlay">
                            <a href="" className="text-white hover-image fs-16 lh-1 pos-fixed-top-right position-absolute m-2"><i className="fal fa-minus-circle" /></a>
                        </div>
                        </div>
                    </div>
                    <div className="list-group-item card card bg-transparent">
                        <div className="position-relative hover-change-image bg-hover-overlay ">
                        <img src="images/compare-03.jpg" className="card-img" alt="properties" />
                        <div className="card-img-overlay">
                            <a href="" className="text-white hover-image fs-16 lh-1 pos-fixed-top-right position-absolute m-2"><i className="fal fa-minus-circle" /></a>
                        </div>
                        </div>
                    </div>
                    <div className="list-group-item bg-transparent">
                        <a href="compare-details.html" className="btn btn-lg btn-primary w-100 px-0 d-flex justify-content-center">
                        Compare
                        </a>
                    </div>
                    </div>
                </div>
                </main>

            <Footer />

            <ModalOne id="modal-one">
                <div className="row">
                    <div className="col-md-3 p-0 rounded-lg-top-left bg-overlay" style={wishListStyle}></div>
                    <div className="col-md-9 pt-5">
                        <WishlistForm />
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
