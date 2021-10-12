import axios from "axios";

export const LocationService = {
    searchGoogleLocation
}

const apiKey = 'AIzaSyBBYmJujloM3zNdxMpokW1G_Qo5Qo_05_A'

async function searchGoogleLocation(query){
    // const formatted_query = query.split(' ').join('+')
    const mapUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}k&key=AIzaSyBBYmJujloM3zNdxMpokW1G_Qo5Qo_05_A&language=en&region=ng`

    return await axios.get(mapUrl);
}