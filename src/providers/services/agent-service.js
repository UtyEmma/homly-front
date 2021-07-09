import { Request } from "./api/http";

export const AgentService = {
    signup, login, update 
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
        config: { 
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json', 
                'Authorization' : `Bearer ${sessionStorage.getItem('token')}` 
            }
        },
        payload: data
    }
    console.log(request)
    return await Request.post('agent/update', request)
}