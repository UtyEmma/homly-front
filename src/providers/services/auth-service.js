import { Request } from "./api/http"

export const AuthService = {
    socialAuth: async (data) => {
        return Request.post('social/auth', data);
    }
}