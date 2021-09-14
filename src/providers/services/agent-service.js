import { Request } from "./api/http";


const auth_config = {
    config: {
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json', 
            'Authorization' : `Bearer ${localStorage.getItem('token')}` 
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

    update : async (data) => {
        const request = {
            ...auth_config,
            payload: data
        }
        return await Request.post('agent/update', request)
    },

    show : async () => {
        return await Request.get('agent/all', auth_config)
    },

    logout : async () => {
        return await Request.get('agent/logout', auth_config.config)
    },

    deleteListing : async (id) => {
        return await Request.get(`agent/listing/delete/${id}`, auth_config.config);
    },

    removeListing : async (id) => {
       return await Request.get(`agent/listing/remove/${id}`, auth_config.config);
    },

    fetchSingleAgent : async (id) => {
        return await Request.get(`agent/${id}`, auth_config.config)
    },

    fetchAgentsWishlists : async () => {
        return await Request.get('agent/wishlists', auth_config.config);
    }
}