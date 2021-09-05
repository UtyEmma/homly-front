import React from 'react'

export default function WishlistNotFound() {
    return (
        <>
          <div className="col-10 offset-1">
                <div className="row">
                    <div className="card border-0 text-center py-3">
                        <div className="card-body px-md-15 py-6">
                            <img src="images/svg/house-search.svg" alt="Wishlist Not Found" className="img-fluid mb-5"/>
                            <h3 className="card-title text-heading">There are no Wishlist Items matching your Profile!!! Please check back later.</h3>
                            {/* <p className="card-text fs-20">Want to become an agent?.</p> */}
                            {/* <a href="/agent-signup" className="btn btn-primary">Register as an Agent</a> */}
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}
