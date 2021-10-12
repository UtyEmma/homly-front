import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import WishlistForm from './wishlist-form'

export const AddWishlistModal = ({modal, setModal, setIsLoading}) => {

    const handleClose = () => {
        setModal(false)
    }

    return (
        <Modal show={modal} centered onHide={handleClose}  size="xl" >
            <Modal.Body className="p-0">
                <div className="col-12 p-0">
                    <div className="row">
                        <div className="col-md-6 d-md-block d-none bg-light p-0 rounded-lg-top-left">
                            <div className="col-8 offset-2 h-100 position-relative" >
                                <img src="/images/svg/wishlist-item.svg" style={{position: 'absolute', bottom: '10%'}} alt="wishlist" />
                            </div>
                        </div>
                        <div className="col-md-6 pt-5 border-left">
                            <WishlistForm setIsLoading={setIsLoading} setToggle={setModal} />
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}
