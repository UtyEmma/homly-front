import React from 'react'

export default function ListingNotFound() {
    return (
        <>
            <div className="col-12">
                <div className="row">
                    
                    <div className="col-12">
                        <div className="card text-center py-5">
                            <div className="card-body px-md-15 py-5">
                                <img src="images/svg/homes.svg" className="img-fluid mb-5"/>
                                <h3 className="card-title fs-20 fs-md-24">Sorry! We cannot find any available property at the moment</h3>
                                <p className="card-text">Please check back later or register as an agent to list a property.</p>
                                <a href="/agent-signup" className="btn btn-lg btn-primary">Register as an Agent</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
