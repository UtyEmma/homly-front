import { MapFormErrors } from "libraries/validation/handlers/error-handlers";
import { history, persistor, store } from "providers/redux/store";
import { UnsetUser } from "providers/redux/_actions/auth-action";
import toast from "react-hot-toast";


export const errorToast = (message) => {
    return toast.error(message)
}


export default function Error(err) {
    if(!err){ return errorToast("There was a problem connecting to the server") }
    switch (err.status) {
        case 500: return handleServerError(err.data)
        case 422: return handleFormError(err.data)
        case 401: return handleUnauthorizedError(err.data)
        case 403: return handleEmailVerificationError()
        case 400: return badRequestError(err.data)
        default : return handleServerError(err.data);
    } 
}

function badRequestError(err){
    return errorToast(err.message)
}

function handleServerError(data){
    // history.push('/500')
    return errorToast(data.message)
}

function handleFormError(err){
    errorToast(err.message)
    return MapFormErrors(err.errors);
}

function handleUnauthorizedError(){
    store.dispatch(UnsetUser())
    persistor.purge()
    history.push('/login?err=Your Session has Expired! Please Login')
}

function handleEmailVerificationError(){
    return window.location.href = '/verify'
}