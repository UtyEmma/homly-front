import * as yup from "yup";

export const __createwishlist = {
    rules: {
        desc: 'required|string',
        category: 'required|string',
        no_bedrooms: 'required|numeric',
        no_bathrooms: 'required|numeric',
        state: 'required|string',
        city: 'required|string',
        area: 'required|string',
        budget: 'required|numeric',
        amenities: 'required|string',
        additional: 'string'
    },

    messages: {
        // "required.firstname" : "Your Firstname is Required",
        // "string;firstname"
    },

    attributes: {
        desc: 'Description',
        category: "Property Type",
        no_bedrooms: 'No of Bedrooms',
        no_bathrooms: 'No of Bathrooms',
        state: 'State',
        city: 'City',
        area: 'Area',
        budget: "Budget",
        amenities: "Facilities",
        additional: 'Additional Information'
    }
}