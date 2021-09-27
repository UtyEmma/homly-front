import { SetAsRented } from 'providers/redux/_actions/listing/listing-actions'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const ListingRentedComponent = ({listing}) => {

    const dispatch = useDispatch()
    const {token} = useSelector(state => state.user_data)

    const markAsRented = () => {
        dispatch(SetAsRented(token, listing.unique_id))    
    }

    return (
        
        listing.status === 'pending'  || listing.status === 'suspended'

        ?

        <p className="fs-13 ">
            <hr/>

            This Property is <span className="text-warning text-capitalize">{listing.status}</span>. 
            
            <br/>  
            
            Please contact our <Link to="/support">Support Center</Link> if you have any questions
            
            <hr/>
        </p>


        :
    
        
        !listing.rented && listing.status !== 'rented'

        ?

        <>
            <button type="button" onClick={markAsRented} className="btn btn-outline-success btn-lg btn-block border-success rounded border bg-hover-success border-hover-0 hover-white">Mark As Rented <i className="ml-1 fa fa-sign"></i></button>

            <hr/>
        </>

        :

        <>
            <button type="button" onClick={markAsRented} className="btn btn-outline-secondary border-secondary btn-lg btn-block rounded border bg-hover-secondary border-hover-0 hover-white">Mark As Available <i className="ml-1 fal fa-home-alt"></i></button>

            <hr/>
        </>
    )
}
