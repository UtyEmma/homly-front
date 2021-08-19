import { Request } from "./api/http";

const options = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
}

export const SearchService = {
    searchListings : async (params) => {
        const object = {
            config: {
                headers: options
            },
            payload: params
        }

        return await Request.post('listings/search', object)
    }
} 