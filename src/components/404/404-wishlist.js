import React from 'react'

export default function WishlistNotFound() {
    return (
        <>
            <div className="col-12 p-5 py-15 px-md-10 bg-white">
                <div className="row">
                    <div className="col-md-6  d-flex justify-content-center">
                        <img src="/images/svg/neighboorhood.svg" alt="" />
                    </div>
                    <div className="col-md-6 rounded mt-3 mt-md-0 pl-5 bg-light py-7 text-center text-md-left d-flex justify-content-center flex-column">
                        <h3 className="font-weight-bold mb-0 fs-22 fs-md-26">There are no wishlists for you... currently</h3>

                        <p className="fs-16 mt-3 mb-0">Whenever someone creates a wishlist around your area, you will be the first to know</p>

                        <div className="">
                            <a href="/new-listing" className="btn btn-lg text-secondary btn-accent rounded-lg mt-6">
                                Add Property <i className="far fa-long-arrow-right ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
