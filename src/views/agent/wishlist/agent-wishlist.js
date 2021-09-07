import WishlistNotFound from 'components/404/404-wishlist'
import { FetchAgentWishlists } from 'providers/redux/_actions/agent-actions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../layouts/shared/header'
import Sidebar from '../layouts/shared/sidebar'

const AgentWishlist = ({agent, setIsLoading}) => {
    
    const dispatch = useDispatch()
    const fetch_wishlists = useSelector(state => state.agent_wishlist)
    const {loading, wishlists} = fetch_wishlists
    
    const FetchWishlist = () => {
        dispatch(FetchAgentWishlists())
    }

    useEffect(() => {
        !wishlists && FetchWishlist()
        wishlists && setIsLoading(false)
    }, [wishlists]);

    useEffect(() => {
        setIsLoading(loading)
    }, [loading])

    return (
        <div className="wrapper dashboard-wrapper">
            <div className="d-flex flex-wrap flex-xl-nowrap">
                <Sidebar agent={agent}/>

                <div className="page-content">
                    <Header agent={agent}/>
                    <main id="content" className="bg-gray-01">

                        <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10">
                            <div className="d-flex flex-wrap flex-md-nowrap mb-6">
                                <div className="mr-0 mr-md-auto">
                                    <h2 className="mb-0 text-heading fs-22 lh-15">Wishlists<span className="badge badge-white badge-pill text-primary fs-18 font-weight-bold ml-2">{wishlists && wishlists.length}</span>
                                </h2>
                                <p>Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                                </div>
                                <form className="form">
                                <div className="input-group input-group-lg bg-white border">
                                    <div className="input-group-prepend">
                                    <button className="btn pr-0 shadow-none" type="button"><i className="far fa-search" /></button>
                                    </div>
                                    <input type="text" className="form-control bg-transparent border-0 shadow-none text-body" placeholder="Search listing" name="search" />
                                </div>
                                </form>
                            </div>


                            <div className="container-fluid px-0">
                                <div className="row">

                                    {
                                        wishlists && wishlists.length > 0

                                        ?

                                        wishlists.map((wishlist, index) => {
                                            return (
                                                <div className="col-md-4 col-xxl-3 mb-6" key={index}>
                                                    <div className="card shadow-hover-1">
                                                        <div className="card-body pt-3">
                                                            <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html" className="text-dark hover-primary">{wishlist.category}</a>
                                                        </h2>
                                                            <p className="card-text font-weight-500 text-gray-light mb-2">{wishlist.state}, {wishlist.city}</p>
                                                            <ul className="list-inline d-flex mb-0 flex-wrap">
                                                                <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2 " data-toggle="tooltip" title="3 Br">
                                                                <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                                                    <use xlinkHref="#icon-bedroom" />
                                                                </svg>
                                                                {wishlist.no_bedrooms} Br
                                                                </li>
                                                                <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2" data-toggle="tooltip" title="3 Ba">
                                                                <svg className="icon icon-shower fs-18 text-primary mr-1">
                                                                    <use xlinkHref="#icon-shower" />
                                                                </svg>
                                                                {wishlist.no_bathrooms} Ba
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                                                        <div className="mr-auto">
                                                            <span className="text-heading lh-15 font-weight-bold fs-17">&#8358; {wishlist.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                                            <span className="text-gray-light">/year</span>
                                                        </div>
                                                        <ul className="list-inline mb-0">
                                                            <li className="list-inline-item">
                                                            <button  title="View" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-secondary bg-accent border-accent"><i className="fas fa-eye" /></button>
                                                            </li>
                                                            <li className="list-inline-item">
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        })

                                        :

                                        <WishlistNotFound />
                                    }

                                    </div>
                                </div>
                            </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default AgentWishlist
