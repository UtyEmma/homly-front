import { Request } from "./api/http"

const config = (token) => {
    return {
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    }
}

export const AdminService = {
    verifyAdmin: async (id) => {
        return await Request.get(`admin/verify/${id}`, config())
    },
    deleteItem: async (token, id, type) => {
        return await Request.get(`admin/${type}/delete/${id}`, config(token))
    },
    suspendItem: async (token, id, type) => {
        return await Request.get(`admin/${type}/suspend/${id}`, config(token))
    },
    verifyAgent : async (token, id) => {
        return await Request.get(`admin/agent/verify/${id}`, config(token))
    }
}