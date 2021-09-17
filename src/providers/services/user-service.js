import { Request } from "./api/http";

export const userService = {
    signup, getTenant, updateTenantData, tenantResendEmail , logout
}


const options = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
}

const authHeaders = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json',
}

async function signup(data) {
    const request = {
        config: {
            headers : options
        },
        payload: data
    }
    return await Request.post('tenant/signup', request)
}

async function getTenant(){
    const request = {
        config: {
            headers: authHeaders,    
        }
    }
    return await Request.get('tenant/auth_user', request)
}

async function logout(token){
    const config = {
        headers: {
            ...authHeaders,
            'Authorization' : `Bearer ${token}`
        }
    }
    return await Request.get('tenant/logout', config)
}

async function updateTenantData(data) {
    const request = {
        config: {
            headers: authHeaders
        },
        payload: data
    }
    return await Request.post('tenant/update', request)
}


async function tenantResendEmail(data) {
    const request = {
        config: {
            headers: authHeaders,
        },
        payload: data
    }
    return await Request.post(`tenant/resend/${data.unique_id}`, request)
}