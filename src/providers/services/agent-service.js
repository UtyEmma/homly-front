import { Request } from "./api/http";

export const AgentService = {
    signup, login 
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
