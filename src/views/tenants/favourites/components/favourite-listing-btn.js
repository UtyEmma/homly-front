import { AddListingToFavourites } from 'providers/redux/_actions/favourites-actions'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const FavouriteListingButton = ({listing}) => {
    const dispatch = useDispatch()

    const item = useSelector((state) => state.add_favourites)
    const {favourite} = item

    const [isFavourite, setIsFavourite] = useState()

    const addToFavourites = (e) => {
        e.preventDefault(); 
        setIsFavourite(!isFavourite)
        dispatch(AddListingToFavourites(listing.unique_id))
    }

    useEffect(() => {
        setIsFavourite(listing.isFavourite)
    }, [listing.isFavourite])

    useEffect(() => {
        favourite && setIsFavourite(favourite.status)
    }, [favourite])

    return (
        <button style={{cursor: 'pointer'}} onClick={addToFavourites} className={`btn text-white fs-20 hover-primary p-0`}>
            <i className={`${isFavourite ? "fas text-primary" : 'far'} fa-heart`} />
        </button>
    )
}
