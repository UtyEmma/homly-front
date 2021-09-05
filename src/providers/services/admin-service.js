import { Request } from "./api/http"

 const token = localStorage.getItem('auth') ? localStorage.getItem('auth') : null 
const config = {
    headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
    }
}

export const AdminService = {
    verifyAdmin: async (id) => {
        return await Request.get(`admin/verify/${id}`, config)
    },
    deleteItem: async (id, type) => {
        return await Request.get(`admin/${type}/delete/${id}`, config)
    },
    suspendItem: async (id, type) => {
        return await Request.get(`admin/${type}/suspend/${id}`, config)
    },
    verifyAgent : async (id) => {
        return await Request.get(`admin/agent/verify/${id}`, config)
    }
}