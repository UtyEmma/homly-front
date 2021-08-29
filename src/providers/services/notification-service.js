const { Request } = require("./api/http")

const config = {
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        }

export const NotificationService = {
    fetchNotification : async (type) => {
        return await Request.get(`${type}/notifications`, config)
    }
}