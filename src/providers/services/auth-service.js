import { Request } from "./api/http"

const options = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json',
}

const auth = (token) => {
    return {
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    }
}

export const AuthService = {
    getLoggedInUser: async (token, type) => {
        return Request.get(`${type}/user`, auth(token))
    },

    login: async (data, type) => {
        const request = {
            headers : options,
            payload: data
        }
        return await Request.post(`${type}/login`, request)
    },    

    resendVerificationEmail: async (token, type, id) => {
        return Request.get(`${type}/resend/${id}`, auth(token))
    },


    verifyEmail: async (code) => {
        return Request.get(`auth/email/verify/${code}`, auth)
    },

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