import { Request } from "./api/http"

const options = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json',
}

export const AuthService = {
    socialAuth: async (data) => {
        return Request.post('social/auth', data);
    },

    recoverpassword: async (data) => {
        const request = {
            config : {
                headers: options,
            },
            payload: data
        }
        return await Request.post('auth/recover-password', request)
    },

    resetpassword: async (data) => {
        const request = {
            config : {
                headers: options,
            },
            payload: data
        }
        return await Request.post('auth/reset-password', request)
    }
}