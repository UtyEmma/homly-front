import { toast } from "react-toastify";

export default function Error(err) {
    if(!err){
        return toast.dark("Server Error: The Server is Down", {
            style: {borderLeft: '6px solid red', background: 'white', color: 'black'}
        })
    }

    switch (err.status) {
        case 500:
            return handleServerError(err.data)
        case 422:
            return handleFormError(err.data)
        case 401: 
            return handleUnauthorizedError(err.data)
        case 403:
            return handleEmailVerificationError()
        default:
            return handleServerError(err.data);
    } 
}

function handleServerError(data){
    return toast.dark(`Server Error: ${data.message}`, {
        style: {borderLeft: '6px solid red', background: 'white', color: 'black'}
    })
}

function handleFormError(err){
    return toast.dark(err.message, {
        style: {borderLeft: '6px solid red', background: 'white', color: 'black'}
    })
}

function handleUnauthorizedError(){
    return toast.dark("Unauthorized Error", {
        style: {borderLeft: '6px solid red', background: 'white', color: 'black'}
    })
    // localStorage.removeItem('token');
    // localStorage.removeItem('user');
    // localStorage.removeItem('isAuthenticated');
    // localStorage.removeItem('type');
    // return window.location.href = '/login?msg=Session Expired! Please login.'
}

function handleEmailVerificationError(){
    return window.location.href = '/verify'
}