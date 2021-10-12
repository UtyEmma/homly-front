import toast from "react-hot-toast";

export const MapFormErrors = (errors) =>  {
    let object = {}
    if (errors) {
        for (const [key, value] of Object.entries(errors)) {
            object = {...object, [key]: {message: value[0]}}
        }
    }
    return object;
}

export const ToastFormErrors = (errors) => {
    for (const error in errors) {
        toast.error(errors[error].message)
    }
}