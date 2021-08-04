import React from 'react'

export default function AgentListingsNotFound() {
    return (
        <>
          <div className="col-12">
                <div className="row">
                    <div className="col-12">
                        <div className="card text-center py-5">
                            <div className="card-body px-md-15 py-5 offset-md-1 col-md-10">
                                <img src="images/svg/house-search.svg" className="img-fluid mb-5"/>
                                <h3 className="card-title fs-20 fs-md-24">Seems you have not added any property yet!</h3>
                                <p className="card-text">Click the button below to add a new listing.</p>
                                <a href="/new-listing" className="btn btn-lg btn-primary">Add New Listing</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}
