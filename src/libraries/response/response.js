import { toast } from "react-toastify"
import Error from "./http-error"

const Response = {
    success : (data) => { 
        toast.success(`Success: ${data.message}`)
    },
    error: (data)=>{ Error(data) }
}

export default Response;