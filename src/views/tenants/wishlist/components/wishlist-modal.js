import { DeleteWishlist } from 'providers/redux/_actions/wishlist-actions';
import React, { useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

export const WishlistModal = ({show, setShow, details, token}) => {
    const handleClose = () => setShow(false);

    const {success} = useSelector(state => state.delete_wishlist)
    const dispatch = useDispatch()

    const deleteWishlist = () => {
        dispatch(DeleteWishlist(details.id, token))
    }

    useEffect(() => {
        success && setShow(false)
    }, [setShow, success])

    return (
        <>
         <Modal show={show} centered onHide={handleClose}>
             <Modal.Header className="border-0 pb-0" closeButton></Modal.Header>
            <Modal.Body className="pt-0">
                {
                    details

                    &&

                    <div className="card border-0 p-0">
                    <div className="card-header bg-transparent border-bottom-0 px-4 pt-4 pb-0">
                        <div className="d-flex justify-content-between">
                            <h2 className="fs-20 text-bold mb-2 d-flex justify-content-around" style={{textOverflow: 'ellipsis'}}>
                                {details.desc}
                            </h2>
                        </div>
                        <p className="font-weight-600 text-gray-light mb-3">
                            <i className="fa fa-map-marker-alt mr-1"></i>
                            {details.area}, {details.city}, {details.state}
                        </p>
                        
                        <div className="d-flex justify-content-between align-items-center ">
                            <span className="text-uppercase fs-14 font-weight-600">
                                <i className="fa fa-house mr-1"></i>
                                {details.category}
                            </span>
                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-1">&#8358; {details.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<span className="text-gray-light font-weight-500 fs-14"> / year</span></p>
                        </div>

                        <div className="pt-4">
                            <p>{details.additional.split(" ").splice(0,12).join(" ")+"..."}</p>
                        </div>
                    </div>
                    <div className="card-footer border-0 bg-transparent pt-3 pb-4 pb-3 d-flex justify-content-between">
                        <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                            <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                                <svg className="icon icon-bedroom fs-18 text-primary mr-1"><use xlinkHref="#icon-bedroom" /></svg>3 Br
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                                <svg className="icon icon-shower fs-18 text-primary mr-1"><use xlinkHref="#icon-shower" /></svg>3 Ba
                            </li>
                        </ul>


                    </div>
                </div>

                }
            </Modal.Body>
            <Modal.Footer className="px-5 border-0 d-flex justify-content-between">
                <button className="btn btn-sm btn-outline-danger ml-2" onClick={deleteWishlist}>Remove from Wishlists</button>
                <button className="btn btn-sm" onClick={handleClose}>Close</button> 
            </Modal.Footer>
        </Modal>   
        </>
    )
}
