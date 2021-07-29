import { toast } from "react-toastify";

export default function Error(err) {
    if(!err){
        return toast.error("Server Error: The Server is Down")
    }

    switch (err.status) {
        case 500:
            return handleServerError(err.data)
        case 422:
            return handleFormError(err.data)
        case 401: 
            return handleUnauthorizedError(err.data)
        default:
            return handleServerError(err.data);
    } 
}

function handleServerError(data){
    return toast.error(`Server Error: ${data.message}`)
}

function handleFormError(err){
    return toast.error(err.message)
}

function handleUnauthorizedError(){
    return toast.error("Unauthorized Error")
    // localStorage.removeItem('token');
    // localStorage.removeItem('user');
    // localStorage.removeItem('isAuthenticated');
    // localStorage.removeItem('type');
    // return window.location.href = '/login?msg=Session Expired! Please login.'
}