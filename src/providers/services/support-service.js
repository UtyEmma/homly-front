import { Request } from "./api/http";

const options = (token) => {
    return {
        config : {
            headers :   {  
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}` 
            }
        }
    }
}

export const SupportService =  {
    createTicket : async (token, data) => {
        const params = {
            ...options(token),
            payload: data
        }
        return await Request.post('agent/support/create', params)
    },

    fetchTickets : async (token) => {
        return await Request.get('agent/support', options(token).config);
    },

    deleteTicket : async (token, id) => {
        return await Request.get(`agent/support/delete/${id}`, options(token).config);
    },

    sendMessage : async (token, data) => {
        console.log("options", options(token))
        const params = { 
            ...options(token),
            payload: data
        }
        return await Request.post('agent/chats/send', params);
    },

    fetchMessages : async (token, id) => {
        return await Request.get(`agent/chats/${id}`, options(token).config);
    } 
}