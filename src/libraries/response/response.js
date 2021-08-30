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
    error: (data)=>{ console.log(data); Error(data) },
    toast: (data, type) => {
        switch (type) {
            case 'CREATE_LISTING':
                return toast(<ListingToast listing={data.data.listing}/>)
                break;
        
            default:
                return null;
        }
    }
}

export default Response;