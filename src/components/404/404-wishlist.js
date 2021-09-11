import React from 'react'

export default function WishlistNotFound() {
    return (
        <>
          <div className="col-12">
                <div className="row">
                    <div className="mx-3 card border-0 text-center py-3">
                        <div className="card-body px-md-15 py-6">
                            <div className="px-md-10">
                            <img src="images/svg/house-search.svg" alt="Wishlist Not Found" className="img-fluid mb-5"/>
                            </div>
                            <h3 className="text-lead">There are no Wishlist's at this time!!! Please check back later.</h3>
                            {/* <p className="card-text fs-20">Want to become an agent?.</p> */}
                            {/* <a href="/agent-signup" className="btn btn-primary">Register as an Agent</a> */}
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}
