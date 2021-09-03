import { ListingToast } from "components/toasts/listing-toast"
import { toast } from "react-toastify"
import Error from "./http-error"

const styles = { 
    background: 'white',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '24px',
    borderLeft: '6px solid green'
}

const Response = {
    success : (data) => { 
        toast.dark(data.message, {
            className: 'text-dark',
            style: styles
        })
    },
    error: (data)=>{ return Error(data) },
}

export default Response;