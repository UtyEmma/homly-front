import { Request } from "./api/http";


export const WishlistService = {
    create,  fetchTenantWishlist, fetchWishlistForAgent, fetchSingleWishlist
}


const options = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer ${localStorage.getItem('token')}`
}

async function create(data){
    const request = {
        config : {
            headers : options
        },
        payload : data
    }

    return await Request.post('tenant/wishlist/create', request);
}

async function fetchTenantWishlist(){
    const request = {
        config : { headers : options }
    }

    return await Request.get('wishlist/fetch', request);
}

async function fetchSingleWishlist($id){
    const request = {
        config : { headers : options }
    }

    return await Request.get(`wishlist/${$id}`, request);
}

async function fetchWishlistForAgent(){
    const request = {
        config : { headers : options }
    }
    return await Request.get('wishlist/agent', request);
}