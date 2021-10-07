import WishlistNotFound from 'components/404/404-wishlist'
import { FetchAgentWishlists } from 'providers/redux/_actions/agent-actions'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../layouts/shared/header'
import Sidebar from '../layouts/shared/sidebar'
import { Helmet } from 'react-helmet'
import { AgentWishlistItem } from './agent-wishlist-item'
import { AgentWishlistModal } from './agent-wishlist-modal'

const AgentWishlist = ({agent, setIsLoading}) => {
    
    const dispatch = useDispatch()
    const fetch_wishlists = useSelector(state => state.agent_wishlist)
    const {loading, wishlists} = fetch_wishlists

    const user_data = useSelector(state => (state.user_data))
    const {token} = user_data

    const href = window.location.href

    const [show, setShow] = useState(false);
    const [details, setDetails] = useState()
    
    const FetchWishlist = useCallback(() => {
        dispatch(FetchAgentWishlists(token))
    }, [dispatch, token])

    useEffect(() => {
        FetchWishlist()
    }, [href]);

    useEffect(() => {
        setIsLoading(loading)
    }, [loading, setIsLoading])

    return (
        <div className="wrapper dashboard-wrapper">
            <Helmet>
                <title>Wishlists</title>
            </Helmet>

            <div className="d-flex flex-wrap flex-xl-nowrap">
                <Sidebar agent={agent}/>

                <div className="page-content">
                    <Header agent={agent}/>
                    <main id="content" className="bg-gray-01 h-100">

                        <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10">
                            <div className="d-flex flex-wrap flex-md-nowrap mb-6">
                                <div className="mr-0 mr-md-auto">
                                    <h2 className="mb-0 text-heading fs-22 lh-15">Wishlists<span className="badge badge-white badge-pill text-primary fs-18 font-weight-bold ml-2">{wishlists && wishlists.length}</span>
                                </h2>
                                <p>Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                                </div>
                            </div>


                            <div className="container-fluid px-0">
                                <div className="row">

                                    {
                                        wishlists && wishlists.length > 0

                                        ?

                                        wishlists.map((wishlist, index) => {
                                            return (
                                                <AgentWishlistItem wishlist={wishlist.wishlists} user={wishlist.user} setShow={setShow} setDetails={setDetails} key={wishlist.wishlists.unique_id} />
                                            )
                                        })

                                        :

                                        <WishlistNotFound />
                                    }

                                    </div>
                                </div>
                            </div>
                    </main>

                    <AgentWishlistModal show={show} setShow={setShow} details={details} />
                </div>
            </div>
        </div>
    )
}

export default AgentWishlist
