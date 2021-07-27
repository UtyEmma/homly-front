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
        config : { headers : options },
        payload : data
    }

    return await Request.post('tenant/wishlist/create', request);
}

async function fetchTenantWishlist(){
    const config = { headers : options }
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