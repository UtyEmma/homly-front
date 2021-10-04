import { authHeaders } from "./api/headers";
import { Request } from "./api/http";


const auth_config = {
    config: {
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json', 
            'Authorization' : `Bearer` 
        }
    }
}

const authHeader = (token = "") => {
    return {
        headers: {
            ...authHeaders(token)
        }
    }
}

const options = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
}

export const AgentService = {
    signup : async (data) => {
        const request = {
            config: { headers: options },
            payload: data
        }
        return await Request.post('agent/signup', request)
    },

    login : async (data) => {
        const request = {
            headers : options,
            payload: data
        }
        return await Request.post('agent/login', request)
    },

    update : async (token, data) => {
        const request = {
            config : {
                ...authHeader(token)
            },
            payload: data
        }
        return await Request.post('agent/update', request)
    },

    show : async () => {
        return await Request.get('agent/all', options)
    },

    logout : async (token) => {
        return await Request.get('agent/logout', authHeader(token))
    },

    deleteListing : async (token, id) => {
        return await Request.get(`agent/listing/delete/${id}`, authHeader(token));
    },

    removeListing : async (token, id) => {
       return await Request.get(`agent/listing/remove/${id}`, authHeader(token));
    },

    fetchSingleAgent : async (token, id, status) => {
        return await Request.get(`agent/${id}?role=${status}`, authHeader(token))
    },

    fetchAgentsWishlists : async (token) => {
        return await Request.get('agent/wishlists', authHeader(token));
    }
}