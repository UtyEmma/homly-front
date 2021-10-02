
export const __agent_updateProfile = {
    rules: {    
        firstname : 'required|string',
        lastname : 'required|string',
        email : 'required|email',
        phone_number : 'numeric',
        whatsapp_no : 'numeric',
        title : 'required|string',
        bio : 'string',
        state : 'string',
        city : 'string',
        facebook : 'url',
        instagram : 'url',
        twitter : 'url',
        website : 'url',
    },

    messages: {

    },

    attributes: {
        firstname: "First Name",
        lastname: "Last Name",
        email: "Email Address",
        phone_number: "Phone Number",
        whatsapp_no: "WhatsApp Number",
        title: "Title",
        bio: "Bio",
        state: "State",
        city: "City",
        facebook: "Facebook Username",
        instagram: "Instagram Handle",
        twitter: "Twitter Handle",
        website: "Website URL" 
    }
} 



export const __agent_updateUsername = {
    rules: {
        username: 'required|string|between:3,12',
    },

    attributes: {
        username: 'Username'
    }
}