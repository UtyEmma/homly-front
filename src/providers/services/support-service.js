import { Request } from "./api/http";

const options = {
    config : {
        headers :   {  
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('token')}` 
        }
    }
}



export const SupportService =  {
    createTicket : async (data) => {
        const params = {
            ...options,
            payload: data
        }
        return await Request.post('agent/support/create', params)
    },

    fetchTickets : async () => {
        return await Request.get('agent/support/', options.config);
    },

    deleteTicket : async (id) => {
        return await Request.get(`agent/support/delete/${id}`, options.config);
    },

    sendMessage : async (data) => {
        const params = { 
            ...options,
            payload: data
        }
        return await Request.post('agent/chats/send', params);
    },

    fetchMessages : async (id) => {
        return await Request.get(`agent/chats/${id}`, options.config);
    } 
}