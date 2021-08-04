import { Request } from "./api/http";

export const AgentService = {
    signup, login, update, show, logout, removeListing, deleteListing 
}

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

async function signup(data){
    const request = {
        config: {
            headers : options
        },
        payload: data
    }
    return await Request.post('agent/signup', request)
}


async function login(data){
    const request = {
        headers : options,
        payload: data
    }
    return await Request.post('agent/login', request)
}


async function update(data){
    const request = {
        ...auth_config,
        payload: data
    }
    return await Request.post('agent/update', request)
}

async function show() {
    return await Request.get('agent/all', auth_config)
}

async function logout(){
    return await Request.get('agent/logout', auth_config)
}

async function deleteListing(id){
    return await Request.get(`agent/listing/delete/${id}`, auth_config);
}

async function removeListing(id){
    return await Request.get(`agent/listing/remove/${id}`, auth_config.config);
}