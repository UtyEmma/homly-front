import React, { useEffect } from 'react'
import { Nav, Tab } from 'react-bootstrap'
import ListingGrid from 'views/tenants/listings/components/listing-grid'

export default function AgentsListings({listings, setIsLoading, status}) {

    useEffect(() => {
        setIsLoading(false)
    })

    return (
        <div id="properties">
            <h2 className="fs-22 text-heading lh-15 mb-6">My Properties</h2>

            <div className="mb-10">
                <Tab.Container id="left-tabs-example bg-transparent" defaultActiveKey="first">
                    <Nav variant="pills" className="nav nav-tabs text-uppercase d-md-inline-flex agent-details-tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="first" className="nav-link shadow-none fs-13">Available</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Rented</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <div className="row">
                                {
                                    listings.active && listings.active.length > 0

                                    ?

                                    listings.active.map((listing, index) => (
                                        <ListingGrid listing={listing} key={index} status={status}/>
                                    ))

                                    :
                                    
                                    <div className="card border-0 p-0 p-md-4 mb-0">
                                        <div className="card-body d-flex justify-content-center flex-column">
                                            <div className="col-md-6 offset-md-3 mb-2">
                                                <img src="/images/svg/wishlist-item.svg" className="img-fluid" alt="property review" />
                                            </div>
                                            <h3 className="fs-md-18px fs-26 text-center">No available properties</h3>
                                        </div>
                                    </div>
                                }
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            
                            <div className="row">
                                {
                                    listings.rented && listings.rented.length > 0

                                    ?

                                    listings.rented.map((listing, index) => (
                                        <ListingGrid listing={listing} key={index} status={status} />
                                    ))

                                    :
                                    
                                    <div className="card border-0 p-0 p-md-4 mb-0">
                                        <div className="card-body d-flex justify-content-center flex-column">
                                            <div className="col-md-6 offset-md-3 mb-5">
                                                <img src="/images/svg/wishlist-item.svg" className="img-fluid" alt="property review" />
                                            </div>
                                            <h3 className="fs-md-18px fs-26 text-center">No rented property yet!</h3>
                                        </div>
                                    </div>
                                }
                            </div>
                            
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div>  
    )
}
