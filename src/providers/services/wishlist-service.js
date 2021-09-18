import { Request } from "./api/http";


export const WishlistService = {
    create,  fetchTenantWishlist, fetchWishlistForAgent, fetchSingleWishlist
}


const options = (token) => {
    return {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
    }
}

async function create(token, data){
    const request = {
        config : { headers : options(token) },
        payload : data
    }

    return await Request.post('tenant/wishlist/create', request);
}

async function fetchTenantWishlist(token){
    const config = { headers : options(token) }
    return await Request.get('tenant/wishlist/get-wishlist', config);
}

async function fetchSingleWishlist($id){
    const config = { headers : options }
    return await Request.get(`tenant/wishlist/${$id}`, config);
}

async function fetchWishlistForAgent(){
    const config = { headers : options }
    return await Request.get('wishlist/agent', config);
}