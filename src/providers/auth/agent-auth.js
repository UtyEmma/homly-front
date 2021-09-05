export const auth = {
    status : () => {
        return localStorage.getItem('isAuthenticated');
    },
    user : () => {
        return JSON.parse(localStorage.getItem('user'));
    },
    type : () => {
        return localStorage.getItem('type');
    }
}