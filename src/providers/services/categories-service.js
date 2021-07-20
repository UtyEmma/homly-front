import { Request } from "./api/http";

export const CategoryService = { FetchAll }

const options = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
}

const auth_config = {
    config: {
        headers: {
            ...options, 
            'Authorization' : `Bearer ${localStorage.getItem('token')}` 
        }
    }
}

async function FetchAll(){
    return Request.post('fetch-categories', auth_config)
} 