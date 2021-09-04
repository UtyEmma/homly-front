import axios from "axios"

const baseUrl = process.env.REACT_APP_API_URL

export const Request = {
    post : async (url, data) => {
        return await axios.post(`${baseUrl}/${url}`, data.payload, data.config)
    },

    get : async (url, config = {}) => {
        return await axios.get(`${baseUrl}/${url}`, config)
    }
}