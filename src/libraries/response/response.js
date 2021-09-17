import toast from "react-hot-toast"
import Error from "./http-error"

export const successToast = (message) => {
    return toast.success(message,
        {
            style: {
              background: '#333',
              color: '#fff',
            },
        }
    )
}

const Response = {
    success : (data) => { 
        successToast(data.message)
    },
    error: (data)=>{ return Error(data) },
}

export default Response;