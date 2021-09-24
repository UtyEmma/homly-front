import {Request} from './api/http'

export const DetailService = {
    fetchDetails, fetchFeatures, fetchAmenities
}

const options = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
}

async function fetchDetails(){
    return Request.get('details', options)
}

async function fetchFeatures(){
    return Request.get('details/features', options)
}

async function fetchAmenities(){
    return Request.get('details/amenities', options)
}
