import { toast } from "react-toastify";

export const ERROR = (msg) => {
    return toast.error(msg)
}

export const SUCCESS = (msg) => {
    return toast.success(msg)
}