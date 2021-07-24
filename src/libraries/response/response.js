import { toast } from "react-toastify"
import { Errors } from "./error-handler"

const Response = (data) => {
    data.type === 'success' && toast.success(data.message)
    data.type === 'error' && Errors(data)
}