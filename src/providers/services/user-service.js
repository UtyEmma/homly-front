import { Request } from "./api/http";

export const userService = {
    signup, login, getTenant, updateTenantData, tenantResendEmail , logout
}

const options = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
}

const authHeaders = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer ${localStorage.getItem('token')}`
}

const tenant_data = JSON.parse(localStorage.getItem('user'));

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
            headers: authHeaders,    
        }
    }
    return await Request.get('tenant/auth_user', request)
}

async function logout(){
    const config = {
        headers: authHeaders
    }

    return await Request.get('tenant/logout', config)
}

async function updateTenantData(data) {
    const request = {
        config: {
            headers: {...options, 'Authorization' : `Bearer ${localStorage.getItem('token')}`},
        },
        payload: data
    }
    return await Request.post('tenant/update', request)
}


async function tenantResendEmail(data) {
    const request = {
        config: {
            headers: {...options, 'Authorization' : `Bearer ${localStorage.getItem('token')}`},
        },
        payload: data
    }
    return await Request.post(`tenant/resend/${tenant_data.unique_id}`, request)
}