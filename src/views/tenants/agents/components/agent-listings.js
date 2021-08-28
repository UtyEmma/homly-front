import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import ListingGrid from 'views/tenants/listings/components/listing-grid'

export default function AgentsListings({listings}) {
    return (
        <div id="properties">
            <a name="properties"></a>
            <h2 className="fs-22 text-heading lh-15 mb-6">My Properties</h2>

            <div className="mb-10">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Nav variant="pills" className="nav nav-tabs text-uppercase d-none d-md-inline-flex agent-details-tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="first" className="nav-link shadow-none fs-13">Available</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Rented</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            {
                                listings.not_rented.map((listing, index) => (
                                    <ListingGrid listing={listing} key={index} />
                                ))
                            }
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            {
                                listings.rented.map((listing, index) => (
                                    <ListingGrid listing={listing} key={index} />
                                ))
                            }
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div>  
    )
}
