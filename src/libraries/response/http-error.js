import { MapFormErrors } from "libraries/validation/handlers/error-handlers";
import { toast } from "react-toastify";

const styles = { 
    background: 'white',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '24px',
    borderLeft: '6px solid red'
}

const classname = 'text-dark'


export default function Error(err) {
    if(!err){
        return toast.dark("Server Error: The Server is Down", {
            className: classname,
            style: styles
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
    return toast.dark(data.message, {
        className: classname,
        style: styles
    })
}

function handleFormError(err){
    toast.dark(err.message, {
        className: classname,
        style: styles
    })
    return MapFormErrors(err.errors);
}

function handleUnauthorizedError(){
    return toast.dark("Unauthorized Error", {
        className: classname,
        style: styles
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