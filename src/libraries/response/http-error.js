import { toast } from "react-toastify";

export default function HttpError(err) {
    switch (err.status) {
        case 500:
            return handleServerError(err.data)
        case 422:
            return handleFormError(err.data)
        case 401: 
            return handleUnauthorizedError(err.data)
        default:
            break;
    } 
}

function handleServerError(err){
    return toast.error(`Server Error: ${err.message}`)
}

function handleFormError(err){
    return toast.error(err.message)
}

function handleUnauthorizedError(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('type');
    return window.location.href = '/login?msg=Session Expired! Please login.'
}