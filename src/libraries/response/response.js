import { ListingToast } from "components/toasts/listing-toast"
import { toast } from "react-toastify"
import Error from "./http-error"

const Response = {
    success : (data) => { 
        toast.dark(data.message, {
            style: {borderLeft: '6px solid green', background: 'white', color: 'black'}
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