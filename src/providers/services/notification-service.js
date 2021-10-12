const { Request } = require("./api/http")

const config = (token) =>  {
    return {
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    }
}

export const NotificationService = {
    fetchNotification : async (token, type) => {
        return await Request.get(`${type}/notifications`, config(token))
    },
    
    markAsRead : async (token, type) => {
        return await Request.get(`${type}/notifications/markasread`, config(token))
    },
}