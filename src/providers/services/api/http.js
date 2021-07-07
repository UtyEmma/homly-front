import axios from "axios"

const baseUrl = "http://localhost:8000/api/"

export const Request = {
    post : async (url, data) => {
        return await axios.post(`${baseUrl}${url}`, data.payload, data.config)
    },

    get : async (url, config) => {
        return await axios.get(`${baseUrl}${url}`, config)
    }  
}