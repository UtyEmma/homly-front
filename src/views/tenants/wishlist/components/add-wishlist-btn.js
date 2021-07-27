import React from 'react'
import '../css/wishlist.css'

export default function AddWishlistBtn() {
    
    return (
        <button data-toggle="modal" data-target="#modal-one" className="btn col-xxl-3 px-2 col-lg-1 col-md-2 alert-primary bg-hover-primary text-white ml-2 mb-2">
            <i className="fa fa-plus fs-24"></i>
            {/* <p className="fs-16">Add</p> */}
        </button>
    )
}