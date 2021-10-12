export const __createlisting = {
    rules: {
        title: "required|string",
        type: "required|string", 
        description: "required|string", 
        tenure: "required|string", 
        rent: "required|numeric", 
        extra_fees: "numeric", 
        video_links: "required|url", 
        state: "required|string",
        city: "required|string",
        address: "required|string", 
        latitude: "required|numeric",
        longitude: "required|numeric",
        no_bedrooms: "required|numeric", 
        no_bathrooms: "required|numeric", 
        extra_info: "required|string"
    },

    messages : {

    },

    attributes : {
        title: "Title",
        type: "Type", 
        description: "Description", 
        tenure: "Rent Tenure", 
        rent: "Rent Amount", 
        extra_fees: "Extra Fees", 
        video_links: "Video Url", 
        state: "State",
        city: "City",
        address: "Property Address", 
        landmark: "Landmark", 
        latitude: "Latitude",
        longitude: "Longitude",
        no_bedrooms: "Number of Bedrooms", 
        no_bathrooms: "Number of Bathrooms", 
        extra_info: "Extra Info"
    }
}

export const __updatelisting = {
    
}