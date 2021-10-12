import { Request } from "./api/http"

const config = (token) => {
    return {
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    }
}

export const FavouriteService = {
    fetchFavourites : async (token) => {
        return await Request.get('tenant/favourites', config(token))
    },

    addFavourites : async (token, id) => {
        return await Request.get(`tenant/favourites/add/${id}`, config(token))
    },

    removeFavourites : async (token, id) => {
        return await Request.get(`tenant/favourites/remove/${id}`, config(token))
    }
}