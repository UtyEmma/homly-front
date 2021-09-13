import { MapFormErrors } from "libraries/validation/handlers/error-handlers";
import toast from "react-hot-toast";

const styles = { 
    background: 'white',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '24px',
    borderLeft: '6px solid red'
}

const classname = 'text-dark'

const errorToast = (message) => {
    return toast.error(message,
        {
            style: {
              background: '#333',
              color: '#fff',
            },
        }
    )
}


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
        case 403:
            return handleEmailVerificationError()
        case 400:
            return badRequestError(err.data)
        default:
            return handleServerError(err.data);
    } 
}

function badRequestError(err){
    return errorToast(err.message)
}

function handleServerError(data){
    return errorToast(data.message)
}

function handleFormError(err){
    errorToast(err.message)
    return MapFormErrors(err.errors);
}

function handleUnauthorizedError(){
    return errorToast("Unauthorized Error")
    // localStorage.removeItem('token');
    // localStorage.removeItem('user');
    // localStorage.removeItem('isAuthenticated');
    // localStorage.removeItem('type');
    // return window.location.href = '/login?msg=Session Expired! Please login.'
}

function handleEmailVerificationError(){
    return window.location.href = '/verify'
}