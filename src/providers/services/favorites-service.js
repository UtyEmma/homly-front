import { Request } from "./api/http"

const config = {
    headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
}

export const FavouriteService = {
    fetchFavourites : async () => {
        return await Request.get('tenant/favourites', config)
    },

    addFavourites : async (id) => {
        return await Request.get(`tenant/favourites/add/${id}`, config)
    },

    removeFavourites : async (id) => {
        return await Request.get(`tenant/favourites/remove/${id}`, config)
    }
}