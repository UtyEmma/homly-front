import { Request } from "./api/http";

export const userService = {
    signup, login 
}

const options = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
}

const tenant_data = JSON.parse(sessionStorage.getItem('user'));

async function signup(data) {
    const request = {
        config: {
            headers : options
        },
        payload: data
    }
    return await Request.post('tenant/signup', request)
}


async function login(data) {
    const request = {
        headers : options,
        payload: data
    }
    return await Request.post('tenant/login', request)
}

async function getTenant(){
    const request = {
        config: {
            headers: {...options, 'Authorization' : `Bearer ${sessionStorage.getItem('token')}`},    
        }
    }
    return await Request.get('tenant/auth_user')
}

async function updateTenantData(data) {
    const request = {
        config: {
            headers: {...options, 'Authorization' : `Bearer ${sessionStorage.getItem('token')}`},
        },
        payload: data
    }
    return await Request.post('tenant/update', request)
}


async function tenantResendEmail(data) {
    const request = {
        config: {
            headers: {...options, 'Authorization' : `Bearer ${sessionStorage.getItem('token')}`},
        },
        payload: data
    }
    return await Request.post(`tenant/resend/${tenant_data.unique_id}`, request)
}