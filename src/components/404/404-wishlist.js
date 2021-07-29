import React from 'react'

export default function WishlistNotFound() {
    return (
        <>
          <div className="col-12">
                <div className="row">
                    <div className="col-12">
                        <div className="card text-center py-5">
                            <div className="card-body px-md-15 py-10">
                                <h3 className="card-title">Sorry! We cannot find any available agent at the moment</h3>
                                <p className="card-text fs-20">Want to become an agent?.</p>
                                <a href="/agent-signup" className="btn btn-primary">Register as an Agent</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}
