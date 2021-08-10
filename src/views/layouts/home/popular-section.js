import React, { useEffect } from 'react'
import { Nav, Row, Tab, TabContent, TabPane } from 'react-bootstrap'
import ListingTabItem from './components/listing-tab-item'
import { FetchPopularListings } from 'providers/redux/_actions/listing/listing-actions'
import { useDispatch, useSelector } from 'react-redux'

export default function PopularSection({setIsLoading}) {
    const dispatch = useDispatch()
    const popular_listings = useSelector((state) => state.popular_listings)
    const {loading, listings} = popular_listings

    const loadPopularListings = () => {
        dispatch(FetchPopularListings())
    }

    useEffect(() => {
        !listings && loadPopularListings()
        setIsLoading(loading)
    }, [listings])

    return (
        <section className="pt-lg-12 pt-11 pb-11">
            <div className="container container-xxl">

                <div className="row flex-lg-row flex-cloumn">
                    <div className="col-lg-5 col-xxl-6">
                        <h2 className="text-heading">Popular Properties</h2>
                        <span className="heading-divider" />
                        <p className="mb-7">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                    </div>

                    {
                        listings && listings.length > 0

                        &&

                        <Tab.Container id="controlled-tab-example" defaultActiveKey={listings[0].category.slug} >
                            <div className="col-lg-7 col-xxl-6 ">
                                <div className="row mt-lg-4 d-flex justify-content-lg-end mb-lg-0">
                                    <Nav variant="pills">
                                        {
                                            listings.map((listing, index) => {
                                                return (
                                                    <Nav.Item key={index}>
                                                        <Nav.Link className="pointer fs-13 ml-2 letter-spacing-087 text-secondary text-uppercase px-4 bg-gray-01 text-active-white bg-active-primary rounded-lg" eventKey={listing.category.slug}>
                                                            {listing.category.title}
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                )
                                            })
                                        }
                                    </Nav>
                                </div>
                            </div>

                            <TabContent className="col-12 p-0 shadow-none">
                                {
                                    listings.map((listing, index) => {
                                        return (
                                            <TabPane className="pl-lg-3 pr-3 pr-lg-0 mb-3" key={index} eventKey={listing.category.slug}>
                                                <Row>
                                                    {
                                                        listing.listings.map((listing, index) => {
                                                            return (
                                                                <ListingTabItem  listing={listing} key={index} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </TabPane>
                                        )
                                    })
                                }
                            </TabContent>
                                
                        </Tab.Container>

                    }
                </div>

                <div className="text-center">
                    <a href="/listings" className="btn btn-lg text-secondary btn-accent rounded-lg mt-6">See all properties<i className="far fa-long-arrow-right ml-1" /></a>
                </div>
            </div>
        </section>
    )
}
