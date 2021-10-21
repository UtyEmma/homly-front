import { AddListingToFavourites } from 'providers/redux/_actions/favourites-actions'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const FavouriteListingButton = ({listing}) => {
    const dispatch = useDispatch()

    const item = useSelector((state) => state.add_favourites)
    const {favourite} = item

    const user_data = useSelector(state => (state.user_data))
    const {token} = user_data

    const [isFavourite, setIsFavourite] = useState()

    const addToFavourites = (e) => {
        e.preventDefault(); 
        setIsFavourite(!isFavourite)
        dispatch(AddListingToFavourites(token, listing.unique_id))
    }

    useEffect(() => {
        setIsFavourite(listing.isFavourite)
    }, [listing])

    useEffect(() => {
        favourite && setIsFavourite(favourite)
    }, [favourite])

    return (
        <button style={{cursor: 'pointer'}} onClick={addToFavourites} className={`btn text-white fs-20 hover-primary p-0`}>
            <i className={`${isFavourite ? "fas text-primary" : 'far'} fa-heart`} />
        </button>
    )
}

export const GalleryFavouriteListingButton = ({listing}) => {
    const dispatch = useDispatch()

    const item = useSelector((state) => state.add_favourites)
    const {favourite} = item

    const user_data = useSelector(state => (state.user_data))
    const {token} = user_data

    const [isFavourite, setIsFavourite] = useState()

    const addToFavourites = (e) => {
        e.preventDefault(); 
        setIsFavourite(!isFavourite)
        dispatch(AddListingToFavourites(token, listing.unique_id))
    }

    useEffect(() => {
        setIsFavourite(listing.isFavourite)
    }, [listing])

    useEffect(() => {
        favourite && setIsFavourite(favourite)
    }, [favourite])

    return (
        <button style={{cursor: 'pointer', background: 'white'}} onClick={addToFavourites} className={`btn btn-white p-0 d-flex align-items-center justify-content-center w-40px h-40 text-heading hover-white rounded-circle border-0 shadow-none fs-20`}>
            <i className={`text-primary ${isFavourite ? "fas" : 'far'} fa-heart`} />
        </button>
    )
}
