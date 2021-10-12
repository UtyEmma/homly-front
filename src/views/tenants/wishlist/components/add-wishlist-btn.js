import React from 'react'
import '../css/wishlist.css'

export default function AddWishlistBtn() {
    
    return (
        <div className="col-xxl-3 col-lg-4 col-md-6 px-2 mb-2" style={{minHeight: '100%'}}>
            <div className="card h-100">
                <div className="card-body text-center border-0 py-2">
                    <img className="img-fluid" alt="add wishlist" style={{maxWidth: '70%'}} src="/images/svg/find-home.svg"  />
                    <h1 className="fs-24 text-center mt-2 text-bold" style={{lineHeight: '150%'}}>Let's make your housing dreams come true!!!</h1>
                    <button data-toggle="modal" data-target="#modal-one" className="btn btn-lg bg-primary text-white">
                        Create New Wishlist
                    </button>
                </div>
            </div>
        </div>
    )
}