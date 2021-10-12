import { Request } from "./api/http";

export const CategoryService = { FetchAll }

const options = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
}

const auth_config = {
    config: {
        headers: {
            ...options 
        }
    }
}

async function FetchAll(){
    return Request.get('details/categories', auth_config)
} 