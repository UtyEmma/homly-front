import Geocode from 'react-geocode'

export const SetLatLong = (address, setLat = "", setLong = "", setZoom = "") => {
    Geocode.setApiKey( "AIzaSyBBYmJujloM3zNdxMpokW1G_Qo5Qo_05_A" )
    Geocode.setRegion("ng");
    Geocode.setLocationType("ROOFTOP");

    Geocode.fromAddress(address)
            .then((response) => {
                const results = response.results
                results.forEach((result) => {
                    setLat(result.geometry.location.lat)
                    setLong(result.geometry.location.lng)
                })
                setZoom(15)
            },
            (error) => {
                console.log(error);
            });        
}